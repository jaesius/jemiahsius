# jemiah-sius · Product Backlog

Tracked ideas and future work. Bring these back to Claude chat when ready to build.

---

## 🟥 High Priority

### TICKET-001 · World-aware homepage content
**What:** The homepage below the hero should change based on the active world.
- **Default world** — current layout (about teaser, stats, world entry cards)
- **Photography world** — photography-focused intro + preview grid of photos
- **Design world** — design-focused intro + preview of design projects
**Also:** Marquee text should change per world:
- Default: `Developer Relations — Technical Marketing — Demo Engineering — Photography — DJing — Art & Design — Keynote Speaker`
- Photography: `35mm — Natural Light — Street — Portrait — Long Exposure — Documentary — Color Grading`
- Design: `Typography — Brand Identity — UI Systems — Motion — Art Direction — Visual Language`
**Files to touch:** `src/pages/Home.jsx`
**Notes:** Use the `world` value from `useTheme()` to conditionally render sections.

---

## 🟨 Medium Priority

### TICKET-002 · Wire up contact form
**What:** Connect the contact form to a real form handler.
**Options:** Formspree (easiest, no backend) or Resend (email API).
**Instructions already in:** `src/pages/Contact.jsx` — just uncomment the handler.
**Files to touch:** `src/pages/Contact.jsx`

### TICKET-003 · Add real photography content
**What:** Replace placeholder grid in Photography world with actual photos.
- Add photos to `/public/photos/`
- Update `PHOTO_GRID` array in `src/pages/Photography.jsx`
- Add world-specific hero portrait (`heroImage` in `ThemeContext.jsx`)
**Files to touch:** `src/pages/Photography.jsx`, `src/context/ThemeContext.jsx`

### TICKET-004 · Add real design project content
**What:** Replace placeholder projects in Design world with actual work.
- Add project images to `/public/design/`
- Update `PROJECTS` array in `src/pages/Design.jsx`
- Add world-specific hero portrait (`heroImage` in `ThemeContext.jsx`)
**Files to touch:** `src/pages/Design.jsx`, `src/context/ThemeContext.jsx`

### TICKET-005 · Add real talks content
**What:** Replace placeholder talks with actual keynotes and speaking engagements.
**Files to touch:** `src/pages/Talks.jsx` — update the `TALKS_DATA` array.

### TICKET-006 · Add resume PDF
**What:** Upload actual resume PDF and link the download button.
- Add `resume.pdf` to `/public/`
- The download button in Resume.jsx already points to `/resume.pdf`
**Files to touch:** `src/pages/Resume.jsx` (already set up, just add the file)

---

## 🟦 Low Priority / Nice to Have

### TICKET-007 · New Relic Browser Agent
**What:** Add New Relic Browser monitoring.
**Instructions already in:** `index.html` — paste the snippet from one.newrelic.com.
**Files to touch:** `index.html`

### TICKET-008 · Add social links to footer
**What:** Update Footer with real LinkedIn, Twitter, GitHub URLs.
**Files to touch:** `src/components/Footer.jsx` — update the `SOCIALS` array.

### TICKET-009 · Open Graph / SEO meta tags
**What:** Add og:image, og:title, og:description for better link previews
when the site URL is shared in slide decks or on LinkedIn.
**Files to touch:** `index.html`

### TICKET-010 · Talks page — add video embeds
**What:** For talks that have recorded video, embed a player or thumbnail
instead of just a "Watch →" link.
**Files to touch:** `src/pages/Talks.jsx`

### TICKET-012 · Easter egg — cheat code mini game
**What:** Listen for a classic video game cheat code typed anywhere on the
page (e.g. Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A). When the sequence is
detected, trigger a short fun mini-game or animation overlay — think
retro pixel art, a quick Space Invaders wave, a side-scroller cameo, etc.
- Use a `useKonamiCode` (or similar) custom hook that tracks a key sequence
  via `keydown` listeners and fires a callback on match
- Overlay component: full-screen or corner pop-up, dismissible with Escape
- Tie the visual to the active world accent color for cohesion
- Keep it short (≤ 10 seconds) so it's a delight, not a distraction
**Files to touch:** new `src/hooks/useCheatCode.js`, new `src/components/EasterEgg.jsx`, `src/App.jsx`
**Notes:** Classic codes to consider — Konami Code (`↑↑↓↓←→←→BA`),
or classic Doom/GTA style keyboard combos.

---

## ✅ Completed

- [x] Project scaffold — React + Vite + Tailwind + Framer Motion
- [x] Three-world theme system (Default / Photography / Design)
- [x] Nav with stacked wordmark + world switcher
- [x] Hero with large portrait photo slot
- [x] World transition flash overlay
- [x] All 7 pages built (Home, About, Talks, Resume, Contact, Photography, Design)
- [x] Contact form UI
- [x] GitHub Actions CI (lint → test → build)
- [x] Vercel deployment config
- [x] Barlow Condensed display font
- [x] Bold, distinct world color palettes
