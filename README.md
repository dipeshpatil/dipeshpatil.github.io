# The Neu Portfolio

> A bold, neo‑brutalist personal portfolio built with React + Vite (port **5173**) and Tailwind CSS.

---

## 🚀 Quick start

# 1. Clone the repo

```bash
git clone https://github.com/dipeshpatil/dipeshpatil.github.io.git neu‑portfolio && cd neu‑portfolio
```

# 2. Copy env template → .env

```bash
cp .env.sample .env
```

# 3. Configure Environment Variables in `.env`

```bash
VITE_APP_GITHUB_USERNAME=<your-github-username>
VITE_APP_GITHUB_TOKEN=<your-personal-access-token>
VITE_APP_USE_GITHUB_DATA=<true|false>
```

# 4. Install dependencies

```bash
npm install    # or: pnpm install / yarn
```

# 5. Run the dev server (http://localhost:5173)

```bash
npm start      # alias for: vite
```

> **Tip:** Any time you add or edit variables in `.env`, stop & restart the dev server so Vite picks them up.

---

## 📂 Project structure (TL;DR)

```
src/
├─ components/ # React components (Hero, Skills, Projects, …)
├─ data/ # Json data for supporting the app
├─ styles/ # CSS files for individual components
├─ assets/ # Images & icons
└─ main.jsx # Vite entry
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

## 🚢 Deploying to GitHub Pages

1. **Add repository secrets**
   \*Navigate: **Repository → Settings → Secrets & variables → Actions → “New repository secret”\***
   Create three secrets:

   | Name                    | Example value           |
   | ----------------------- | ----------------------- |
   | `USERNAME`              | `your‑github‑username`  |
   | `EMAIL`                 | `your‑github‑email`     |
   | `PERSONAL_ACCESS_TOKEN` | _PAT with `repo` scope_ |

2. **Update `package.json` `homepage`**

   ```jsonc
   {
     "homepage": "https://<your‑github‑username>.github.io"
   }
   ```

```

Example: https://dipeshpatil.github.io. (This is mine!)

3. **Commit these changes to `main` branch**

4. **Trigger the deploy**
   After merging these changes to main branch, go to GitHub → Actions → MasterDeployCI workflow and click “Run workflow”.

GitHub Actions will build and push to the gh-pages branch, making the site live at the URL in homepage.

5. **Important Note**
   Changes are not deployed yet. Your build would be generated in a separate branch called `gh-pages` which needs to be configured so that your site uses the code from `gh-pages` and not `main` (`main` contains the source code, we need the build code)

6. **Configure gh-pages branch for site**
   \*Navigate: **Repository → Settings → Pages\***
    Build and Deployment

   - Select `Source`: Deploy from a branch
   - Branch `gh-pages`: Select from the dropdown below `Source`

   Save these changes, empty cach and reload and visit your URL `https://<your‑github‑username>.github.io`
```
