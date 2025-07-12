# The Neu Portfolio

> A bold, neo‑brutalist personal portfolio built with React + Vite (port **5173**) and Tailwind CSS.

---

## 🚀 Quick start

```bash
# 1. Clone the repo
$ git clone <your‑fork‑url> neu‑portfolio && cd neu‑portfolio

# 2. Copy env template → .env
$ cp .env.sample .env

# 3. Install dependencies
$ npm install    # or: pnpm install / yarn

# 4. Run the dev server (http://localhost:5173)
$ npm start      # alias for: vite
```

> **Tip:** Any time you add or edit variables in `.env`, stop & restart the dev server so Vite picks them up.

---

## 📂 Project structure (TL;DR)

```
src/
├─ components/      # React components (Hero, Skills, Projects, …)
├─ styles/          # CSS files for individual components
├─ assets/          # Images & icons
└─ main.jsx         # Vite entry
```

---

## 🛠 Scripts

| Script            | Purpose                  |
| ----------------- | ------------------------ |
| `npm start`       | Launch dev server (Vite) |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |

---

## 🖌 Customization

- **Color palette:** edit `src/index.css` (custom CSS variables + neubrutalist tokens).
- **Sections / content:** tweak JSON files in `src/data` or directly update components in `src/components`.

---
