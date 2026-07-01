# Srinidhi - Creative Engineering Portfolio

A premium, modern, creative engineering portfolio website designed to showcase projects, internships, and certifications with a focus on visual storytelling, spacing, and micro-interactions.

Inspired by design-forward startup aesthetics like Framer, Linear, Apple, and Awwwards.

## 🚀 Live Site
Check out the live website deployed on GitHub Pages:
👉 **[https://srinidhi9353.github.io/portfolio/](https://srinidhi9353.github.io/portfolio/)**

---

## 🛠️ Technology Stack
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (using native `@tailwindcss/vite` configuration)
- **Animations**: Framer Motion
- **Scroll Engine**: Lenis (for inertia smooth scrolling)
- **Icons**: Lucide React

---

## ✨ Features
1. **Cinematic Hero**: Left-aligned headline layout, clean metadata tags (Patent Published, MERN Developer, Open to Opportunities), social channels integration, and a responsive grayscale portrait layout with subtle interactive hover effects.
2. **Immersive Case-Studies**: Replaced typical card-heavy grid structures with large showcase slots displaying actual projects (ALGOVIZ, Complete The Word, Purchase Path Analyzer, Wispr Flow Clone, and TaskNova) inside dark mockup plates.
3. **Internships & Education**: Minimal editorial timeline detailing experiences at SuprMentr Technologies and CodSoft, alongside B.E. CSE academic milestones at East Point College of Engineering and Technology.
4. **Interactive Credentials Gallery**: Integrates 9 certifications and patent credentials. Clicking any credential card launches a blurred-backdrop lightbox popup modal showing the verified image. Includes ESC key keyboard closing accessibility.
5. **Contact Redirection**: Built a subject-enabled form that validates visitor input and dynamically pre-composes a Gmail compose URL in a new tab.

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** to preview the site locally with Hot Module Replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Compiles and outputs production-ready assets directly into the **`docs/`** directory.

---

## 🌐 Deploy to GitHub Pages
The project is configured to compile directly into the `/docs` directory to support GitHub Pages out of the box.

1. Commit and push the changes:
   ```bash
   git add .
   git commit -m "docs: Update portfolio documentation"
   git push origin master
   ```
2. Go to your repository settings on GitHub.
3. Select **Pages** on the left sidebar.
4. Set the **Source** to `Deploy from a branch`.
5. Under **Branch**, select `master` (or `main`) and change the folder from `/ (root)` to **`/docs`**.
6. Click **Save**.
