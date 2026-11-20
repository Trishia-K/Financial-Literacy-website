const money = value => `UGX ${Math.round(value || 0).toLocaleString('en-UG')}`;
const guideGrid = document.querySelector('#guide-grid');
const dialog = document.querySelector('#guide-dialog');
const dialogBody = document.querySelector('#dialog-body');
const menu = document.querySelector('#menu-toggle');
const navLinks = document.querySelector('#nav-links');

menu.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

// The first tip is determined by the calendar date, so everyone sees the same tip that day.
const today = new Date();
const dayNumber = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000);
let shownTip = ((dayNumber % dailyTips.length) + dailyTips.length) % dailyTips.length;
const tipText = document.querySelector('#tip-text');
document.querySelector('#tip-date').textContent = today.toLocaleDateString('en-UG', { day: 'numeric', month: 'short', year: 'numeric' });
function showTip() { tipText.textContent = dailyTips[shownTip]; }
showTip();
document.querySelector('#next-tip').addEventListener('click', () => {
  shownTip = (shownTip + 1) % dailyTips.length;
  showTip();
});

// Guides are stored in content.js so they can also be used when preparing PDF copies.
guides.forEach(guide => {
  const card = document.createElement('article');
  card.className = 'guide-card';
  const top = document.createElement('div');
  top.className = 'guide-top';
  const number = document.createElement('span');
  number.className = 'guide-number';
  number.textContent = guide.number;
  const readTime = document.createElement('span');
  readTime.textContent = guide.readTime;
  top.append(number, readTime);
  const title = document.createElement('h3');
  title.textContent = guide.title;
  const summary = document.createElement('p');
  summary.textContent = guide.summary;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Open guide';
  button.setAttribute('aria-label', `Open ${guide.title} guide`);
  const arrow = document.createElement('span');
  arrow.textContent = '↗';
  arrow.setAttribute('aria-hidden', 'true');
  button.append(arrow);
  button.addEventListener('click', () => openGuide(guide));
  card.append(top, title, summary, button);
  guideGrid.append(card);
});

function makeElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function openGuide(guide) {
  document.querySelector('#dialog-title').textContent = guide.title;
  dialogBody.replaceChildren();
  dialogBody.append(makeElement('p', 'guide-intro', guide.intro));
  guide.sections.forEach(section => {
    dialogBody.append(makeElement('h3', '', section.heading));
    dialogBody.append(makeElement('p', '', section.text));
  });
  const takeaway = makeElement('div', 'guide-takeaway');
  takeaway.append(makeElement('strong', '', 'Try this'));
  takeaway.append(makeElement('p', '', guide.takeaway));
  dialogBody.append(takeaway);
  const pdfLink = makeElement('a', 'pdf-link', 'Download this guide (PDF) ↓');
  pdfLink.href = `assets/guides/${guide.id}.pdf`;
  pdfLink.download = `smart-pocket-${guide.id}.pdf`;
  dialogBody.append(pdfLink);

  const quiz = makeElement('section', 'quiz');
  quiz.append(makeElement('h3', '', 'Quick check'));
  const form = document.createElement('form');
  guide.questions.forEach((question, index) => {
    const group = document.createElement('fieldset');
    group.className = 'quiz-question';
    const legend = makeElement('legend', '', `${index + 1}. ${question.question}`);
    group.append(legend);
    question.choices.forEach((choice, choiceIndex) => {
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `question-${index}`;
      radio.value = String(choiceIndex);
      label.append(radio, document.createTextNode(choice));
      group.append(label);
    });
    group.append(makeElement('p', 'feedback'));
    form.append(group);
  });
  const checkButton = makeElement('button', 'button button-pink', 'Check my answers');
  checkButton.type = 'submit';
  form.append(checkButton);
  const result = makeElement('p', 'quiz-result');
  result.setAttribute('aria-live', 'polite');
  form.append(result);
  form.addEventListener('submit', event => {
    event.preventDefault();
    let correct = 0;
    const fieldsets = [...form.querySelectorAll('fieldset')];
    fieldsets.forEach((fieldset, index) => {
      const selected = fieldset.querySelector('input:checked');
      const explanation = fieldset.querySelector('.feedback');
      if (!selected) {
        explanation.textContent = 'Choose an answer to see feedback.';
        explanation.className = 'feedback incorrect';
        return;
      }
      const isCorrect = Number(selected.value) === guide.questions[index].answer;
      if (isCorrect) correct += 1;
      explanation.textContent = `${isCorrect ? 'Correct. ' : 'Not quite. '}${guide.questions[index].why}`;
      explanation.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    });
    result.textContent = `You got ${correct} out of ${guide.questions.length} correct.`;
  });
  quiz.append(form);
  dialogBody.append(quiz);
  dialog.showModal();
  dialogBody.scrollTop = 0;
  dialog.scrollTop = 0;
}
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

// Add a photo file with the matching name to replace each visual placeholder.
const pictures = [
  ['.hero-image', 'assets/images/hero-students.jpg'],
  ['.about-image', 'assets/images/about-campus.jpg'],
  ['.involved-image', 'assets/images/saving-group.jpg']
];
pictures.forEach(([selector, path]) => {
  const probe = new Image();
  probe.onload = () => {
    const block = document.querySelector(selector);
    block.style.backgroundImage = `linear-gradient(#0b21331c,#0b21331c),url("${path}")`;
    block.classList.add('has-photo');
  };
  probe.src = path;
});

// Group names and form URLs must be supplied only after the groups give consent.
// See docs/saving-groups.example.js for the format of verified listings.
