// These are sample descriptions. Replace them with group-approved information before launch.
const savingGroups = [
  {
    name: 'Sabiti Saving Group',
    audience: 'Female residences',
    description: 'For students in female residences who want to set saving targets, put money aside regularly and work towards shared goals.',
    formUrl: ''
  },
  {
    name: 'NursingStudentsSACCO',
    audience: 'Nursing students',
    description: 'For nursing students saving towards course materials, clinical placement costs and unexpected expenses.',
    formUrl: ''
  },
  {
    name: 'LawLove Saving Group',
    audience: 'Law students',
    description: 'For law students who want to save together for books, academic expenses and other goals.',
    formUrl: ''
  }
];

const groupsList = document.querySelector('#groups-list');
savingGroups.forEach((group, index) => {
  const card = document.createElement('article');
  card.className = 'saving-group-card';
  const heading = document.createElement('div');
  heading.className = 'saving-group-heading';
  const number = document.createElement('span');
  number.className = 'saving-group-number';
  number.textContent = String(index + 1).padStart(2, '0');
  const label = document.createElement('span');
  label.className = 'saving-group-audience';
  label.textContent = group.audience;
  heading.append(number, label);
  const title = document.createElement('h4');
  title.textContent = group.name;
  const description = document.createElement('p');
  description.textContent = group.description;
  card.append(heading, title, description);

  // Add the group's Google Form to formUrl above when it is ready.
  const link = document.createElement('a');
  link.className = 'group-action';
  link.textContent = 'Join the group ↗';
  if (/^https:\/\/docs\.google\.com\/forms\//.test(group.formUrl)) {
    link.href = group.formUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#involved';
    link.setAttribute('aria-label', `Join ${group.name}: form link not added yet`);
    link.addEventListener('click', event => event.preventDefault());
  }
  card.append(link);
  groupsList.append(card);
});
