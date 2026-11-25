# Mahmoud Saied — Professional Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, Lucide icons and Framer Motion. Configured for GitHub Pages.

**Live URL (after deployment):** https://mahmoudsaied3710-art.github.io/Mahmoud.Saied.github.io/

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Personalize before publishing

| Item | File / location | Required action |
|---|---|---|
| Contact email | `src/data.js` → `CONTACT_EMAIL` | Replace the empty string with your real email address. |
| CV | `public/Mahmoud-Saied-CV.pdf` | Add your final PDF using this exact filename. |
| Certificates | `src/data.js` → `certifications` | Add verified certificate URLs (`link`) and optional image paths (`image`). Put images inside `public/`. |
| Project screenshots | `src/components/Project.jsx` | Replace the project visual placeholder with real project images when available. |
| Project repository | `src/data.js` → `project.repo` | Add the actual public repository URL if you create one. |

Do not publish certificate IDs, links, results or experience details unless they are accurate and verifiable. The portfolio currently describes CCNA as training, not as an earned Cisco CCNA certification.

## GitHub Pages deployment

The Vite base path is configured for a repository named **`Mahmoud.Saied.github.io`**. If the repository name changes, update `base` in `vite.config.js`.

1. Create a **public** repository named `Mahmoud.Saied.github.io` under `mahmoudsaied3710-art` (or use the existing repository with that exact name).
2. Upload the contents of this project to the repository root. Do not upload `node_modules` or the ZIP file.
3. Ensure the default branch is `main`.
4. Open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
5. Open the **Actions** tab. The included workflow installs dependencies, builds the site and deploys `dist/` whenever changes are pushed to `main`.
6. Wait for the deployment workflow to finish successfully, then open the live URL above.

### Git command alternative

From the project directory:

```bash
git init
git add .
git commit -m "Publish personal portfolio"
git branch -M main
git remote add origin https://github.com/mahmoudsaied3710-art/Mahmoud.Saied.github.io.git
git push -u origin main
```

## Features

- Responsive single-page portfolio with About, Skills, Certifications, Projects, Experience & Training, Education and Contact sections.
- Dark / light theme toggle with preference persistence in the browser.
- Mobile navigation, scroll progress indicator and back-to-top control.
- Featured CR-NOMA graduation project with a conceptual system-flow diagram.
- Contact form using `mailto` (GitHub Pages does not provide a server-side form backend).
- SEO metadata, Open Graph tags, favicon and GitHub Actions deployment workflow.

## Project structure

```text
src/
  components/       Reusable page sections and UI components
  data.js           Portfolio content and personal links
  App.jsx           Theme, scroll progress and page composition
  index.css         Theme variables, global styles and motion preferences
public/             Static assets (CV, certificate images, project images)
.github/workflows/  GitHub Pages deployment workflow
```
