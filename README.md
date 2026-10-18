# Yousif Alsofi — Personal Portfolio

A responsive, bilingual (Arabic/English) personal portfolio website for Yousif Alsofi. Built with plain HTML, CSS, and JavaScript—no build tools or package installation required.

## Features
- Arabic-first layout with RTL direction and an English LTR switch
- Responsive navigation and mobile menu
- About, skills, projects, and contact sections
- Dark visual theme with custom CSS illustrations
- Remembers the selected language in the browser

## Run locally
Open `index.html` in a modern browser. For a local server, run this in PowerShell:

```powershell
py -m http.server 8000
```

Then visit http://localhost:8000.

## Publish with GitHub Pages
1. Open the repository **Settings**.
2. Select **Pages** from the sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then click **Save**.
5. Wait for GitHub Pages to publish the site. The expected URL is https://ahmadali02213.github.io/yousif-portfolio/.

## Personalize before sharing
- Update project links in `index.html` to point to each project's actual repository.
- Add a professional email address or preferred contact method in the contact section.
- Confirm all project descriptions reflect the current state of each project.

## Project structure
- `index.html` — content and semantic structure
- `styles.css` — responsive design and visual styling
- `script.js` — language switcher and mobile navigation
