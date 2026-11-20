const moneyText = amount => `UGX ${Math.round(amount || 0).toLocaleString('en-UG')}`;
const groupNames = ['Savings', 'Housing', 'Bills', 'School', 'Expenses', 'Giving', 'Debt'];
const suggestions = [
  ['Savings', 'Emergency savings', 20000],
  ['Savings', 'Goal savings', 10000],
  ['Housing', 'Hostel or rent', 0],
  ['Bills', 'Data and airtime', 20000],
  ['Bills', 'Transport', 40000],
  ['School', 'Tuition', 0],
  ['School', 'Books and printing', 25000],
  ['Expenses', 'Food and groceries', 105000],
  ['Expenses', 'Personal care', 20000],
  ['Expenses', 'Entertainment', 10000],
  ['Giving', 'Tithe or giving', 15000],
  ['Debt', 'Loan repayment', 0]
];

let entries = suggestions.map(([section, name, planned]) => ({ section, name, planned, actual: 0 }));
const rows = document.querySelector('#budget-rows');
const income = document.querySelector('#income');
const actualIncome = document.querySelector('#income-actual');
const month = document.querySelector('#budget-month');
const categoryName = document.querySelector('#category-name');
const newSection = document.querySelector('#category-section');
const amount = value => Math.max(0, Number.isFinite(Number(value)) ? Number(value) : 0);
month.value = new Date().toISOString().slice(0, 7);

function totalsFor(items) {
  return items.reduce((sum, item) => ({
    planned: sum.planned + amount(item.planned),
    actual: sum.actual + amount(item.actual)
  }), { planned: 0, actual: 0 });
}

function refreshSummary() {
  const totals = totalsFor(entries);
  const balance = amount(income.value) - totals.planned;
  document.querySelector('#planned-total').textContent = moneyText(totals.planned);
  document.querySelector('#remaining-total').textContent = moneyText(balance);
  document.querySelector('#budget-fill').style.width = `${amount(income.value) ? Math.min(100, totals.planned / amount(income.value) * 100) : 0}%`;
  const message = document.querySelector('#budget-message');
  message.classList.toggle('warning', balance < 0);
  message.textContent = balance < 0
    ? `Your planned spending exceeds your income by ${moneyText(-balance)}.`
    : balance > 0 ? `You have ${moneyText(balance)} left to assign, save or keep available.`
      : 'Your planned income is fully assigned.';
}

function drawEntries() {
  rows.replaceChildren();
  groupNames.forEach(section => {
    const sectionEntries = entries.filter(item => item.section === section);
    if (!sectionEntries.length) return;
    const heading = document.createElement('div');
    heading.className = 'budget-group-heading';
    heading.textContent = section;
    rows.append(heading);
    sectionEntries.forEach(item => {
      const row = document.createElement('div');
      row.className = 'budget-entry-row';
      const name = document.createElement('input');
      name.type = 'text';
      name.value = item.name;
      name.maxLength = 35;
      name.setAttribute('aria-label', `${section} category name`);
      name.addEventListener('input', () => { item.name = name.value; });
      const planned = document.createElement('input');
      planned.type = 'number';
      planned.min = '0';
      planned.step = '1000';
      planned.value = String(item.planned);
      planned.setAttribute('aria-label', `Budgeted amount for ${item.name}`);
      planned.addEventListener('input', () => { item.planned = amount(planned.value); refreshSummary(); });
      const actual = document.createElement('input');
      actual.type = 'number';
      actual.min = '0';
      actual.step = '1000';
      actual.placeholder = '0';
      actual.value = item.actual ? String(item.actual) : '';
      actual.setAttribute('aria-label', `Actual amount for ${item.name}`);
      actual.addEventListener('input', () => { item.actual = amount(actual.value); });
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'remove-category';
      remove.textContent = '×';
      remove.setAttribute('aria-label', `Remove ${item.name}`);
      remove.addEventListener('click', () => { entries = entries.filter(other => other !== item); drawEntries(); });
      row.append(name, planned, actual, remove);
      rows.append(row);
    });
  });
  refreshSummary();
}

document.querySelector('#add-category').addEventListener('click', () => {
  const name = categoryName.value.trim();
  if (!name) { categoryName.focus(); return; }
  entries.push({ section: newSection.value, name, planned: 0, actual: 0 });
  categoryName.value = '';
  drawEntries();
});
categoryName.addEventListener('keydown', event => {
  if (event.key === 'Enter') { event.preventDefault(); document.querySelector('#add-category').click(); }
});
document.querySelector('#reset-categories').addEventListener('click', () => {
  if (window.confirm('Restore the suggested categories? This will clear your current entries.')) {
    entries = suggestions.map(([section, name, planned]) => ({ section, name, planned, actual: 0 }));
    drawEntries();
  }
});
income.addEventListener('input', refreshSummary);
drawEntries();

// The PDF uses only standard fonts, so there is no extra library to install.
function pdfText(value) {
  return String(value).normalize('NFKD').replace(/[^\x20-\x7E]/g, '?')
    .replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}
function pdfAmount(value) { return Math.round(amount(value)).toLocaleString('en-US'); }
function createBudgetPdf() {
  const objects = [];
  const add = source => { objects.push(source); return objects.length; };
  const pagesRef = add('');
  const regular = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
  const bold = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
  const pageIds = [];
  let commands = [];
  let y = 0;
  const escaped = text => pdfText(text);
  const ink = '0.13 0.14 0.22';
  function rectangle(x, top, w, h, color) {
    commands.push(`${color} rg ${x} ${842 - top - h} ${w} ${h} re f`);
  }
  function rule(x1, top, x2) { commands.push(`0.82 0.83 0.86 RG 0.45 w ${x1} ${842 - top} m ${x2} ${842 - top} l S`); }
  function label(text, x, top, size = 9, strong = false, color = ink) {
    commands.push(`${color} rg BT /F${strong ? '2' : '1'} ${size} Tf 1 0 0 1 ${x} ${842 - top - size} Tm (${escaped(text)}) Tj ET`);
  }
  function savePage() {
    const stream = commands.join('\n') + '\n';
    const streamId = add(`<< /Length ${stream.length} >>\nstream\n${stream}endstream`);
    const pageId = add(`<< /Type /Page /Parent ${pagesRef} 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 ${regular} 0 R /F2 ${bold} 0 R >> >> /Contents ${streamId} 0 R >>`);
    pageIds.push(pageId);
  }
  function newPage() {
    if (commands.length) savePage();
    commands = [];
    y = 38;
    label('SMART POCKET  /  STUDENT MONEY PLANNER', 43, y, 9, true, '0.73 0.06 0.31');
    y += 20;
    label('Monthly college budget', 43, y, 22, true);
    y += 39;
    label(`Month: ${month.value || 'Not specified'}    |    Currency: UGX`, 43, y, 9);
    y += 27;
  }
  function ensure(height) { if (y + height > 790) newPage(); }
  function tableHeader() {
    rectangle(43, y, 509, 25, '0.95 0.92 0.97');
    label('CATEGORY', 53, y + 6, 9, true);
    label('BUDGET (UGX)', 332, y + 6, 9, true);
    label('ACTUAL (UGX)', 446, y + 6, 9, true);
    y += 25;
    rule(43, y, 552);
  }
  function tableRow(name, planned, actual, strong = false) {
    ensure(25);
    label(name.slice(0, 44), 53, y + 5, 9, strong);
    label(pdfAmount(planned), 335, y + 5, 9, strong);
    label(pdfAmount(actual), 451, y + 5, 9, strong);
    y += 24;
    rule(43, y, 552);
    commands.push(`0.82 0.83 0.86 RG 0.45 w 43 ${842 - y} m 43 ${842 - y + 24} l S`);
    commands.push(`0.82 0.83 0.86 RG 0.45 w 321 ${842 - y} m 321 ${842 - y + 24} l S`);
    commands.push(`0.82 0.83 0.86 RG 0.45 w 439 ${842 - y} m 439 ${842 - y + 24} l S`);
    commands.push(`0.82 0.83 0.86 RG 0.45 w 552 ${842 - y} m 552 ${842 - y + 24} l S`);
  }
  newPage();
  tableHeader();
  tableRow('Income', income.value, actualIncome.value || 0, true);
  y += 9;
  for (const section of groupNames) {
    const items = entries.filter(item => item.section === section);
    if (!items.length) continue;
    ensure(67);
    rectangle(43, y, 509, 23, '0.92 0.95 0.95');
    label(section.toUpperCase(), 53, y + 5, 9, true);
    y += 23;
    items.forEach(item => tableRow(item.name || 'Unnamed category', item.planned, item.actual));
    const total = totalsFor(items);
    tableRow(`${section} total`, total.planned, total.actual, true);
    y += 13;
  }
  ensure(125);
  rectangle(43, y, 509, 23, '0.89 0.90 0.95');
  label('MONTHLY SUMMARY', 53, y + 5, 9, true);
  y += 23;
  const total = totalsFor(entries);
  tableRow('Income', income.value, actualIncome.value, true);
  tableRow('Allocated to categories', total.planned, total.actual, true);
  tableRow('Balance', amount(income.value) - total.planned, amount(actualIncome.value) - total.actual, true);
  y += 18;
  ensure(40);
  label('Personal budgeting worksheet. Figures were entered by the student.', 43, y, 8, false, '0.35 0.36 0.43');
  label('No budget information is sent to Smart Pocket.', 43, y + 13, 8, false, '0.35 0.36 0.43');
  savePage();
  objects[pagesRef - 1] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map(id => `${id} 0 R`).join(' ')}] >>`;
  const catalog = add(`<< /Type /Catalog /Pages ${pagesRef} 0 R >>`);
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, i) => {
    offsets.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xref = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(offset => { pdf += `${String(offset).padStart(10, '0')} 00000 n \n`; });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalog} 0 R >>\nstartxref\n${xref}\n%%EOF`;
  const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `smart-pocket-budget-${month.value || 'month'}.pdf`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
document.querySelector('#download-budget').addEventListener('click', createBudgetPdf);
