# jemiah-sius

Personal website for Jemiah Sius — VP Developer Relations at New Relic.

Built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 🌍 The Three Worlds

This site has three color-themed "worlds":

| World | Route | Accent |
|---|---|---|
| Default (main) | `/` | Electric Indigo `#6C63FF` |
| Photography | `/photography` | Amber `#E8A020` |
| Design | `/design` | Coral `#F05C78` |

Click **Photography** or **Design** in the nav to step into an alternate world.

---

## ✏️ Adding Your Content

All placeholder content is marked with `✏️ EDIT:` comments in the source files.

Key files to update:

| File | What to add |
|---|---|
| `src/pages/About.jsx` | Your real bio, location, background |
| `src/pages/Talks.jsx` | Your actual keynotes and talks |
| `src/pages/Resume.jsx` | Your experience, skills, PDF link |
| `src/pages/Contact.jsx` | Your email, social links |
| `src/pages/Photography.jsx` | Your photos (`/public/photos/`) |
| `src/pages/Design.jsx` | Your design projects |
| `index.html` | New Relic browser agent snippet |

---

## 📊 New Relic Integration

1. Log in to [one.newrelic.com](https://one.newrelic.com)
2. Go to **Add Data → Browser**
3. Follow the setup wizard to generate your Browser Agent snippet
4. Paste the `<script>` tag into `index.html` where the comment block is

---

## 📬 Wiring Up the Contact Form

The form is currently UI-only. To connect it:

### Option A: Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form — get your form ID
3. In `src/pages/Contact.jsx`, uncomment the `handleSubmit` fetch block
4. Replace `YOUR_FORM_ID` with your actual ID

### Option B: Resend
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add a serverless function (Vercel API route) to proxy the request
4. Update `handleSubmit` to call your API route

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests with UI (browser-based)
npm run test:ui
```

Tests live in `/tests/`. Coverage report outputs to `/coverage/`.

---

## 🏗️ Build & Deploy

### Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your GitHub repo — Vercel auto-detects Vite
4. Click Deploy

The `vercel.json` handles SPA routing automatically.

### Manual build

```bash
npm run build
# Output is in /dist — deploy to any static host
```

---

## 🔄 CI/CD

GitHub Actions runs on every push to `main`:
- ESLint check
- Vitest tests with coverage
- Production build

See `.github/workflows/ci.yml`.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Nav.jsx              # Top navigation
│   ├── Footer.jsx           # Site footer
│   └── PageTransition.jsx   # Framer Motion page wrapper
├── context/
│   └── ThemeContext.jsx     # Three-world theme system
├── pages/
│   ├── Home.jsx             # Landing page + hero
│   ├── About.jsx            # Bio page
│   ├── Talks.jsx            # Speaking engagements
│   ├── Resume.jsx           # CV + experience
│   ├── Contact.jsx          # Contact form
│   ├── Photography.jsx      # Photography world
│   └── Design.jsx           # Design world
├── styles/
│   └── globals.css          # Tailwind base + custom utilities
├── App.jsx                  # Router + layout shell
└── main.jsx                 # Entry point
```
