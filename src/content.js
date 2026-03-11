/**
 * content.js
 * ─────────────────────────────────────────────────────────
 * All personal content for the site lives here.
 * This file is gitignored — see content.example.js for the
 * template to copy when forking this project.
 *
 * ✏️ EDIT any value below to update the site content.
 */

const content = {
  // ── Personal ────────────────────────────────────────────
  name: {
    first: 'Jemiah',
    last: 'Sius',
    full: 'Jemiah Sius',
  },
  role: 'VP Market Strategy & Developer Relations · New Relic',
  location: 'Miami, FL',
  email: 'hello@jemiahsius.com',

  // Use \n to split into staggered display lines in the hero section
  tagline:
    'Building\nat the intersection\nof technology\nand culture.',

  // ── Social links ────────────────────────────────────────
  social: {
    linkedin: 'https://linkedin.com/in/jemiahsius',
    twitter: 'https://twitter.com/jemiahsius',
    github: 'https://github.com/jemiahsius',
  },

  // ── Currently strip (Homepage) ──────────────────────────
  // ✏️ EDIT: Update these to reflect what's current for you right now
  currently: [
    { label: 'Spinning', value: 'Hip Hop, R&B, & Amapiano' },
    { label: 'Based in', value: 'Miami, FL' },
    { label: 'Last talked at', value: 'Microsoft Ignite' },
    { label: 'Shooting with', value: 'Sony a7R IV' },
  ],

  // ── Featured Talk (Homepage) ────────────────────────────
  // ✏️ EDIT: Set youtubeId to the string after ?v= in the YouTube URL
  featuredTalk: {
    youtubeId: 'lGJSmqhQeyE', // ✏️ EDIT: e.g. 'dQw4w9WgXcQ'
    title: 'The Art of Shift-Left Software Development', // ✏️ EDIT
    event: 'RenderATL', // ✏️ EDIT
    year: '2023', // ✏️ EDIT
    description:
      'How platform teams adopt a proactive mindset in their development workflows and Key challenges faced during the software development lifecycle ', // ✏️ EDIT
    watchUrl: 'https://www.youtube.com/watch?v=lGJSmqhQeyE', // ✏️ EDIT: link to recording or talk page
  },

  // ── About page ──────────────────────────────────────────
  about: {
    // ✏️ EDIT: Replace each string with a real bio paragraph
    bio: [
      "I'm Jemiah Sius — Vice President of Market Strategy & Developer Relations, Technical Marketing, and Demo Engineering at New Relic. I spend my days connecting developers with the tools, ideas, and communities that help them build better software.",
      "But I've always believed that the best technical communicators are also artists. Photography taught me how to frame a story. DJing taught me how to read a room. Design taught me that the experience is the product.",
      'I give keynotes at major developer conferences, lead teams that build demos people actually want to watch, and constantly look for the intersection where technology becomes culture.',
    ],
    // ✏️ EDIT: Update quick facts
    quickFacts: [
      {
        label: 'Current Role',
        value: 'VP Market Strategy & Developer Relations · New Relic',
      },
      {
        label: 'Focus Areas',
        value: 'DevRel, Technical Marketing, Demo Eng',
      },
      { label: 'Based in', value: 'Miami, FL' },
      { label: 'Hobbies', value: 'Photography, DJing, Art & Design' },
      {
        label: 'On the decks',
        value: 'DJ LL Cruel Jae | @ll.cruel.jae',
      }, // ✏️ EDIT
    ],
  },

  // ── Talks page ──────────────────────────────────────────
  // ✏️ EDIT: Replace with your actual talks — add as many entries as needed
  talks: [
    {
      year: '2024',
      title: '— Add your talk title here',
      event: 'Conference Name',
      location: 'City, Country',
      link: null,
    },
    {
      year: '2024',
      title: '— Add your talk title here',
      event: 'Conference Name',
      location: 'City, Country',
      link: null,
    },
    {
      year: '2023',
      title: '— Add your talk title here',
      event: 'Conference Name',
      location: 'City, Country',
      link: null,
    },
    {
      year: '2023',
      title: '— Add your talk title here',
      event: 'Conference Name',
      location: 'City, Country',
      link: null,
    },
  ],

  // ── Resume page ─────────────────────────────────────────
  resume: {
    // ✏️ EDIT: Replace with your actual work history
    experience: [
      {
        role: 'Vice President, Developer Relations',
        company: 'New Relic',
        period: '20XX — Present',
        description:
          "Leading Developer Relations, Technical Marketing, and Demo Engineering. Building programs that connect the global developer community with New Relic's observability platform.",
      },
      {
        role: '— Add previous role',
        company: 'Company Name',
        period: '20XX — 20XX',
        description:
          'Brief description of your responsibilities and impact.',
      },
      {
        role: '— Add previous role',
        company: 'Company Name',
        period: '20XX — 20XX',
        description:
          'Brief description of your responsibilities and impact.',
      },
    ],
    // ✏️ EDIT: Replace with your actual skills
    skills: [
      'Developer Relations',
      'Technical Marketing',
      'Public Speaking',
      'Community Building',
      'Demo Engineering',
      'Observability',
      'JavaScript',
      'React',
      'Photography',
      'Art Direction',
    ],
    pdfPath: '/resume.pdf', // ✏️ EDIT: Add resume.pdf to /public/ and update path if needed
  },

  // ── Photography world ───────────────────────────────────
  photography: {
    // ✏️ EDIT: Your photography artist statement
    statement:
      "Photography is how I slow down. Each frame is a question I'm trying to answer — about light, stillness, and what a moment actually feels like.",
    // ✏️ EDIT: Add real photos — { src: '/photos/filename.jpg', caption: 'Caption text' }
    grid: [
      { src: null, caption: 'Add photo 01' },
      { src: null, caption: 'Add photo 02' },
      { src: null, caption: 'Add photo 03' },
      { src: null, caption: 'Add photo 04' },
      { src: null, caption: 'Add photo 05' },
      { src: null, caption: 'Add photo 06' },
    ],
  },

  // ── Design world ────────────────────────────────────────
  design: {
    // ✏️ EDIT: Your design artist statement
    statement:
      "Design is decision-making made visible. I'm drawn to the tension between constraint and freedom — the moment a system becomes expressive.",
    // ✏️ EDIT: Add real projects — set src to '/design/filename.jpg'
    projects: [
      {
        title: 'Add Project Title',
        category: 'Brand / Visual',
        year: '2024',
        description:
          'Brief description of this design project and what you were exploring.',
        src: null,
      },
      {
        title: 'Add Project Title',
        category: 'UI / Product',
        year: '2024',
        description:
          'Brief description of this design project and what you were exploring.',
        src: null,
      },
      {
        title: 'Add Project Title',
        category: 'Typography',
        year: '2023',
        description:
          'Brief description of this design project and what you were exploring.',
        src: null,
      },
    ],
  },

  // ── Hero images (per world) ─────────────────────────────
  // ✏️ EDIT: Add portrait photos to /public/photos/ and set paths here
  heroImages: {
    default: '/photos/heroImage.png',
    photography: '/photos/heroImage.png',
    design: '/photos/heroImage.png',
  },

  // ── World explorer card images ──────────────────────────
  // ✏️ EDIT: Optional — card backgrounds for the world explorer strip on the homepage.
  // If null, the geometric pattern is shown instead.
  worldCards: {
    photography: null,
    design: null,
  },

  // ── Marquee strip (Homepage) ────────────────────────────
  marqueeItems: [
    'Developer Relations',
    '—',
    'Technical Marketing',
    '—',
    'Demo Engineering',
    '—',
    'Photography',
    '—',
    'DJing',
    '—',
    'Art & Design',
    '—',
    'Keynote Speaker',
    '—',
  ],

  // ── About teaser (Homepage) ────────────────────────────
  aboutTeaser: {
    heading: 'VP by title.\nCreative by nature.',
    body: "I lead Developer Relations, Technical Marketing, and Demo Engineering at New Relic. But I've always lived at the edge of two worlds — the technical and the creative. Photography, design, and music aren't hobbies, they're how I think.",
  },

  // ── Stats block (Homepage) ─────────────────────────────
  stats: [
    { value: 'VP', label: 'Level at New Relic' },
    { value: '∞', label: 'Ideas in progress' },
    { value: '3', label: 'Worlds on this site' },
    { value: '1', label: 'Record crate, never full' },
  ],

  // ── SEO / Meta ──────────────────────────────────────────
  meta: {
    siteUrl: 'https://jemiahsius.com', // ✏️ EDIT
    title: 'Jemiah Sius',
    description:
      'VP Developer Relations at New Relic. Building at the intersection of technology and culture.',
    ogImage: '/og-image.jpg', // ✏️ EDIT: Add og-image.jpg to /public/
  },
};

export default content;
