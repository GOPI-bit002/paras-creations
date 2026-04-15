# Shree Naina Enterprises — Website

A modern, premium, responsive React website for **Shree Naina Enterprises**, a retailer of high-quality mattresses and pillows (authorized seller of **Spenta Mattress**).

Built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## Quick Start

```bash
npm install
npm run dev      # start local dev server on http://localhost:5173
npm run build    # production build -> /dist
npm run preview  # preview the production build
npm run lint     # ESLint
npm run format   # Prettier write
```

## VS Code Setup

Open the project folder in VS Code — you'll be prompted to install the
**recommended extensions** listed in `.vscode/extensions.json`:

| Extension                             | Purpose                                   |
| ------------------------------------- | ----------------------------------------- |
| `dbaeumer.vscode-eslint`              | Inline lint diagnostics                   |
| `esbenp.prettier-vscode`              | Format on save                            |
| `bradlc.vscode-tailwindcss`           | Tailwind class autocomplete & preview     |
| `dsznajder.es7-react-js-snippets`     | `rafce` / `useState` React snippets       |
| `formulahendry.auto-rename-tag`       | Rename paired JSX tags                    |
| `christian-kohler.path-intellisense`  | File-path autocomplete                    |
| `naumovs.color-highlight`             | Color swatches in the gutter              |
| `streetsidesoftware.code-spell-checker` | Spell-check for code & comments         |
| `eamodio.gitlens`                     | Git blame & history inline                |

Everything else is pre-wired:

- `.vscode/settings.json` — format-on-save with Prettier, Tailwind IntelliSense, Emmet for JSX, trim trailing whitespace, `@/` path autocomplete.
- `.vscode/launch.json` — F5 launches Chrome/Edge against `http://localhost:5173` with source maps.
- `.vscode/tasks.json` — `Ctrl/Cmd+Shift+B` runs `npm run dev` as the default build task.
- `.prettierrc.json` + `.prettierignore` — code style.
- `.eslintrc.cjs` — React + hooks lint rules.
- `jsconfig.json` — path alias `@/ → src/` for IntelliSense (matched by `vite.config.js`).

### Using the `@/` alias

```js
// Instead of:
import Navbar from "../components/Navbar.jsx";
// You can write:
import Navbar from "@/components/Navbar.jsx";
```

### Typical VS Code workflow

1. `Cmd/Ctrl+Shift+P` → `Tasks: Run Build Task` (or just `npm run dev`).
2. `F5` launches a debuggable Chrome/Edge window pointed at the dev server.
3. Save any file — Prettier formats, ESLint auto-fixes.


## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it in [vercel.com](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
4. Click Deploy — `vercel.json` handles SPA routing.

---

## Project Structure

```
/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   ├── spenta-logo.svg     # Watermark logo (used on every product image)
    │   ├── favicon.svg
    │   ├── m1.svg .. m6.svg    # Mattress/pillow product images
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Products.jsx
        ├── ProductCard.jsx
        ├── About.jsx
        ├── WhyChooseUs.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## Replacing Placeholder Mattress Images with Real Photos

The product images in `/src/assets/m1.svg` … `m6.svg` are high-quality SVG
illustrations shipped as placeholders. To swap in real product photos:

1. Drop your real images into `src/assets/` (e.g. `m1.jpg`, `m2.jpg` …).
2. Open `src/components/Products.jsx` and update the imports:

   ```js
   import m1 from "../assets/m1.jpg";
   import m2 from "../assets/m2.jpg";
   // …
   ```

3. That's it — the Spenta watermark, shadows, rounded corners, hover zoom,
   and scroll animation will all work identically with real photos.

The Hero section uses `m4.svg` by default (see `src/components/Hero.jsx`) and
the About section uses `m3.svg` — swap those imports the same way.

---

## Design System

- **Palette** (see `tailwind.config.js`):
  - `cream` `#FAF7F2` · `beige` `#EFE7DA` · `sand` `#E4D9C6`
  - `softblue` `#CFDDE8` · `midblue` `#6E8AA6`
  - `ink` `#22303C` · `muted` `#6B7280`
- **Fonts**: Playfair Display (display) + Inter (sans).
- **Animations**: Framer Motion — entrance, hover, floating cards, scroll-in.

---

## Contact Form

The contact form in `src/components/Contact.jsx` is set up with a no-backend
fallback — submitting opens the user's default mail app with all form fields
pre-filled, addressed to `eshrinaina@gmail.com`. Hook it up to a real
endpoint (Formspree, Resend, your API, etc.) as needed.
