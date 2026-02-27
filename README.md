# jemiah-sius

Personal site for Jemiah Sius — VP Developer Relations, Technical Marketing, and Demo Engineering at New Relic. Photography. DJing.

Built with React, Vite, Tailwind CSS, and Framer Motion. Deployed on Vercel.

---

```bash
npm install && npm run dev
```

---

## Forking this project

This repo is set up as a portfolio template. Personal content is kept out of version control via `src/content.js` (gitignored). To use it as your own:

1. **Clone the repo**
   ```bash
   git clone https://github.com/jaesius/jemiahsius.git my-portfolio
   cd my-portfolio
   ```

2. **Create your content file**
   ```bash
   cp src/content.example.js src/content.js
   ```

3. **Fill in your details**
   Open `src/content.js` and replace every value with your own — name, bio, talks, social links, photos, etc. Every field has an inline comment explaining what it controls.

4. **Install and run**
   ```bash
   npm install && npm run dev
   ```

### What lives in `content.js`

| Key | Controls |
|---|---|
| `name`, `role`, `tagline` | Hero section and site loader |
| `social` | Footer links and Contact page |
| `currently` | "Currently" status strip on the homepage |
| `featuredTalk` | Featured Talk section on the homepage |
| `about` | Bio paragraphs and quick facts |
| `talks` | Talks/speaking page |
| `resume` | Experience, skills, and PDF download |
| `photography` | Statement and photo grid |
| `design` | Statement and design projects |
| `heroImages` | Portrait photo per world (default / photography / design) |
| `meta` | SEO title, description, og:image |
