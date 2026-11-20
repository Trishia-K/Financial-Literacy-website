# Smart Pocket

A responsive financial-literacy website created as an independent academic project for students at Uganda Christian University. The design uses UCU-inspired indigo and pink; it is **not** an official university website.

## What's included

- Home page with 40 draft financial tips, one selected by calendar date
- Five readable guides with downloadable PDF copies and three-question quizzes
- About section with clickable questions
- Budget planner in UGX with suggested and custom categories, planned and actual amounts, and a printable PDF worksheet
- Get involved page with three clearly marked sample saving groups and Google Form placeholders
- Mobile navigation, keyboard-friendly dialogs, and responsive layouts
- No server, accounts, payments, or stored budget records

### 1. Make a GitHub repository

1. Sign in to https://github.com and choose **New repository** from the **+** menu.
2. Name it `smart-pocket` and choose **Public** (required for free GitHub Pages on many account types).
3. Leave **Add a README**, `.gitignore`, and **license** unchecked: this starter already contains a README and `.gitignore`.
4. Click **Create repository**. Keep the new empty repo page open.
5. Extract the ZIP somewhere convenient, for example `D:\Projects\smart-pocket`. Open **that folder**, not the ZIP, in VS Code.
6. In VS Code, open **Terminal > New Terminal** and run:

```powershell
git init
git branch -M main
git add .
git commit -m "Initial Smart Pocket website prototype"
git remote add origin https://github.com/YOUR-USERNAME/smart-pocket.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git asks you to sign in, complete the browser prompt.

### 2. Open the site locally

The simplest option is the **Live Server** extension in VS Code: install it, open `index.html`, and choose **Go Live**. Alternatively:

```powershell
python -m http.server 5500
```

Then open http://localhost:5500 in a browser. There is no `npm install` and no build step.

### 3. Add your photos

Copy your own images into `assets/images/` using these **exact** filenames:

| File | Suggested photo | Where it appears |
| --- | --- | --- |
| `hero-students.jpg` | Two students talking naturally at UCU, portrait composition, faces centred | Home-page hero |
| `about-campus.jpg` | A candid small-group study scene on campus, wide composition | About |
| `saving-group.jpg` | A small student discussion/saving meeting, portrait or square crop | Get involved |

The website automatically replaces the styled placeholders if these files exist. Use photos you own or have permission to use. Do not use the UCU logo unless authorised. Export compressed JPGs around 150–300 KB where possible.

### 4. Saving groups and Google Forms

Edit `js/groups.js` to update the sample listings. Currently these are **unverified example groups**, not claims about actual UCU clubs:

- Sabiti Saving Group — example for female residences
- NursingStudentsSACCO — example for nursing students
- LawLove Saving Group — example for law students

In `js/groups.js`, every group has a `formUrl: ''` line. After written permission from its authorised representative, replace the empty string with its **real** Google Forms URL. Example:

```javascript
formUrl: 'https://docs.google.com/forms/d/e/REPLACE_WITH_REAL_ID/viewform'
```

The page enables the sign-up link only when the URL begins with `https://docs.google.com/forms/`. Test every form yourself with the contact person. Until verified, cards show an unavailable sign-up label and an obvious example disclaimer. Get written consent for the group name, description, and link before publication. The group contact must own its form responses.

### 4a. Budget planner

The planner lives in `js/budget.js`. The suggested categories include emergency savings, goal savings, rent, data, transport, tuition, books, food, personal care, entertainment, tithe/giving, and loan repayment. All rows can be renamed or deleted; new categories can be added to any section. Both the **Budget** and **Actual** columns can be filled in. The printable PDF is generated entirely in the browser as a multi-section monthly worksheet with totals and a summary. It requires no external library or connection.

The budget is deliberately not saved. Reloading the page clears entries, so download the PDF first. Test printing the PDF with your actual numbers and add the results to your evidence folder.

### 5. Preview and publish on GitHub Pages

1. On GitHub open your repository, then **Settings > Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch **main**, folder **/(root)**, then **Save**.
4. The published address will normally be `https://YOUR-USERNAME.github.io/smart-pocket/`.
5. After a push, allow GitHub Pages to finish its deployment before checking the live site.

All paths in the website are relative, so it works inside the `/smart-pocket/` subdirectory.

### 6. How to commit your actual progress daily

After making and testing a real change, run:

```powershell
git status
git add .
git commit -m "Add approved campus photos"
git push
```

Change the commit message to describe what **you actually changed**. GitHub records each commit's real time. Do not backdate commits or claim work happened on a different day. Take dated screenshots and keep a brief progress note in your project evidence folder.

Suggested remaining checkpoints for 18–30 November 2026:

| Date | Work to do | Example commit, if completed |
| --- | --- | --- |
| 18 Nov | Create repo; test the starter and record baseline | `Initial Smart Pocket website prototype` |
| 19 Nov | Review five guides; correct content with reviewer | `Refine guide content after review` |
| 20 Nov | Review 40 tips and quizzes; record reviewer decision | `Revise daily tips and quick checks` |
| 21 Nov | Add authorised photographs and refine hero layout | `Add campus photography and tune layout` |
| 22 Nov | Test and adjust mobile navigation and About interactions | `Improve mobile navigation and about section` |
| 23 Nov | Confirm saving groups and written consent | `Add first verified saving group listing` |
| 24 Nov | Test budget calculations and PDF export | `Fix budget planner edge cases` |
| 25 Nov | Deploy GitHub Pages and record live link | `Prepare public site for pilot` |
| 26 Nov | Test on phones and laptops with volunteer students | `Fix issues found during student pilot` |
| 27 Nov | Complete ten-person pilot and apply fixes | `Address final pilot feedback` |
| 28 Nov | Run accessibility/content checks; confirm form routing | `Improve accessibility and verified group links` |
| 29 Nov | Finalise handover and closure evidence | `Add final handover documentation` |
| 30 Nov | Submit assignment and archive final proof | `Archive final project evidence` |

Dates are a **suggested plan**, not evidence that the work already happened. If you are busy with final-year project testing, record the actual dates and note any schedule variation in your change or issue log. The approved scope remains the project baseline.

### 7. Before the lecturer signs off

- Get financial content reviewed by the business-department reviewer. The 40 tips in this starter are **drafts**, not independently reviewed facts.
- Get at least ten student testers and collect real feedback; keep the test results separate from the website.
- Verify that PDF guides download, that the planner downloads a valid PDF, and that each quiz marks all questions correctly.
- Ensure that every saving group has written permission, and test its actual form submission with its contact person.
- Keep the project charter, scope, WBS, budget, schedule, risk register, progress reports, issue/change logs, pilot evidence and closure pack for the project-management assignment.

## Key files

- `index.html`: page structure
- `css/style.css`: colours, typography and responsive design
- `js/content.js`: five guides, quizzes and forty daily tips
- `js/app.js`: interactions and browser-generated budget PDFs
- `assets/guides/*.pdf`: downloadable guide copies
- `docs/saving-groups.example.js`: template, not real groups

**Important:** If you change guide text in `js/content.js`, update the matching PDF too, so the web and downloaded versions agree.

### Daily commit routine for your project evidence

Only commit real work you completed and tested. From the VS Code terminal, use:

```powershell
git status
git add .
git commit -m "Add student saving group previews and budget worksheet"
git push
```

On another day, change the commit message to describe that day's actual work (for example, `Add student photographs and improve mobile layout`). A dated commit, a screenshot of the site and a short note of what you tested are useful evidence for your progress report. Git commits demonstrate source-control history, not proof of external approvals or tester feedback.


## Design refresh (18 November 2026)
The homepage is now light lavender and the old sp badge is replaced by an SVG image in `assets/images/smart-pocket-logo.svg`. To use a different logo, replace this image and keep the same filename.

The sample saving groups appear with **Join the group** buttons. Add the genuine Google Forms URL in `js/groups.js` for each group after permission is obtained. Buttons without URLs intentionally remain on the page rather than linking somewhere unrelated. The sample names and descriptions are placeholders and should not be represented as verified group affiliations.
