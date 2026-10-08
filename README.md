# LatexGuard | R26-IT-120 Research Portfolio Website

> **IoT-Enabled Rubber Quality Assessment and Streamlined Latex Collection System**  
> SLIIT IT4010 Research Project 2026 | CI (Computing Infrastructure) Research Group  
> Brand Slogan: *"Quality begins at the first drop."*

---

## 📌 Executive Overview

This repository contains the complete public research portfolio website for **R26-IT-120 (LatexGuard)**. The website presents the research project as **one integrated system and single story**: connecting field multi-sensor hardware probes, cloud-deployed Random Forest soft-sensing, role-based security & Isolation Forest anomaly detection, Deep Q-Network collection routing, and LSTM time-series quality forecasting.

---

## 🛠️ Technology Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (App Router) with static HTML export (`output: "export"`)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + CSS Custom Variable Tokens
- **Animations:** [Framer Motion](https://www.framer.com/motion/) with full `prefers-reduced-motion` compliance
- **Icons:** [Lucide React](https://lucide.dev/)
- **Testing:** [Vitest](https://vitest.dev/) + React Testing Library + JSDOM
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 How to Run Locally

1. **Prerequisites:** Node.js v20.9+ and npm 10+
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
4. **Run type-checking, linting & tests:**
   ```bash
   npm run typecheck   # Strict tsc check
   npm run lint        # ESLint check
   npm test -- --run   # Execute Vitest test suite once
   ```
5. **Build and test static export locally:**
   ```bash
   npm run build       # Generates static export in /out
   npm run serve:out   # Serves static /out build on local server
   ```

---

## ✏️ How to Edit Site Content

All research text, objectives, literature citations, team information, milestones, and download items are decoupled from UI components and live in typed data files under `src/data/`:

- `src/data/project.ts` — Core project domain statements, SDGs, and problem statements.
- `src/data/references.ts` — Academic citations [1] through [5] with external URLs.
- `src/data/literature.ts` — Component literature survey blocks.
- `src/data/gap.ts` — Research gap points and "Current Practice vs LatexGuard" comparison table.
- `src/data/objectives.ts` — Main verbatim objective, general objectives, and 2x2 component objectives.
- `src/data/methodology.ts` — The four development phases and methodology achievements.
- `src/data/architecture.ts` — Technical specifications for the 4 components, backend services, and frontend platforms.
- `src/data/technologies.ts` — Grouped tech stack items and filter categories.
- `src/data/milestones.ts` — Eight academic milestones, dates, status, and key deliverables.
- `src/data/downloads.ts` — Document and presentation cards (linking to `/public/docs/`).
- `src/data/team.ts` — Supervisory team and research members (small uniform cards).
- `src/data/results.ts` — Experimental validation metrics placeholders.

Editing any file in `src/data/` automatically updates all site pages.

---

## 🌐 Why Static Export (`output: "export"`) is Used

GitHub Pages serves static file assets only (HTML/CSS/JS). By using Next.js static export (`output: "export"`), Next.js pre-renders every route (`/`, `/scope/`, `/methodology/`, `/technologies/`, `/milestones/`, `/downloads/`, `/about/`, `/404.html`) into static HTML at build time.

### Sub-path Base Path Handling (`basePath`)
GitHub Pages hosts repository sites under `https://<username>.github.io/<repo-name>/`.
- Internal page navigation is handled automatically by `next/link`.
- Raw string assets (such as public PDFs in `/docs/` and favicons) are wrapped with `withBasePath()` from `@/lib/url`.

---

## 🚢 How to Deploy to GitHub Pages

1. **Create GitHub Repository:** Create a public repo named `r26-it-120-website` (or custom name) on GitHub.
2. **Push Code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of LatexGuard research portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-org>/<repo-name>.git
   git push -u origin main
   ```
3. **Configure Pages Source:**
   - Go to **Repository Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build, test, export, and publish the site.

---

## 📋 Comprehensive `TODO(confirm)` Report

Below is the complete list of placeholders that require confirmation or real assets prior to final presentation:

| File | Item to Confirm | Action Required |
|---|---|---|
| `src/config/siteConfig.ts` | Repository URL (`repoUrl`) | Update with final GitHub repo URL |
| `src/config/siteConfig.ts` | Video URL (`demoVideoUrl`) | Provide YouTube embed URL when live demonstration video is recorded |
| `src/config/siteConfig.ts` | Primary Email (`contactEmail`) | Confirm primary project contact email alias |
| `public/docs/` | `R26-IT-120_Topic_Assessment_Form.pdf` | Replace placeholder PDF with official signed Topic Assessment PDF |
| `src/data/downloads.ts` | Project Proposal PDF Path (`localPath`) | Add official Proposal PDF into `public/docs/` and update path |
| `src/data/downloads.ts` | Research Paper PDF Path (`localPath`) | Add camera-ready Research Paper PDF into `public/docs/` and update path |
| `src/data/downloads.ts` | Final Report PDF Path (`localPath`) | Add final thesis PDF into `public/docs/` and update path |
| `src/data/downloads.ts` | Google Drive Links (`driveUrl`) | Supply Google Drive shareable URLs for documents and presentation decks |
| `src/data/team.ts` | Member Emails (`email`) | Confirm official SLIIT student & supervisor email addresses |
| `src/data/team.ts` | Member Photos (`photoUrl`) | Optionally supply headshot image URLs for team cards |
| `src/data/milestones.ts` | Milestone Dates (`date`) | Update `null` dates once official presentation schedules are announced |
| `src/data/milestones.ts` | Proposal Status (`deliverables`) | Confirm submission status & archive links for proposal |
| `src/data/results.ts` | MAE Accuracy (`vfaAccuracyMae`) | Enter empirical MAE score once laboratory titration validation is finalized |
| `src/data/results.ts` | Adulteration Accuracy (`adulterationDetectionRate`) | Enter Isolation Forest detection rate percentage |
| `src/data/results.ts` | Route Distance Reduction (`routeDistanceReductionPct`) | Enter percentage fuel/distance savings from DRL trial logs |
| `src/data/results.ts` | Usability Score (`susUsabilityScore`) | Enter final System Usability Scale (SUS) survey score |
| `src/data/technologies.ts` | scikit-learn / ML Frameworks (`isConfirmed`) | Confirm exact Python package versions in production microservice |

---
