// Copy this file to content.js and replace with your real content.
// See README.md → "Forking this project" for full setup instructions.

const content = {

  // ── Personal ────────────────────────────────────────────
  name: {
    first: 'Your First Name',
    last:  'Your Last Name',
    full:  'Your Full Name',
  },
  role:     'Your Title · Your Company',
  location: 'Your City, Country',
  email:    'hello@yoursite.com',

  // Use \n to split into staggered display lines in the hero section
  tagline: 'Your tagline\ngoes here\nacross multiple\nlines.',

  // ── Social links ────────────────────────────────────────
  social: {
    linkedin: 'https://linkedin.com/in/yourhandle',
    twitter:  'https://twitter.com/yourhandle',
    github:   'https://github.com/yourhandle',
  },

  // ── Currently strip (Homepage) ──────────────────────────
  currently: [
    { label: 'Spinning',       value: 'Your current playlist or genre' },
    { label: 'Based in',       value: 'Your City, Country' },
    { label: 'Last talked at', value: 'Conference Name' },
    { label: 'Shooting with',  value: 'Your Camera Model' },
  ],

  // ── Featured Talk (Homepage) ────────────────────────────
  featuredTalk: {
    youtubeId:   null,                       // Paste the YouTube video ID (string after ?v=), or leave null
    title:       'Your Talk Title',
    event:       'Conference Name',
    year:        '2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    watchUrl:    '',                         // Link to recording or talk page
  },

  // ── About page ──────────────────────────────────────────
  about: {
    bio: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      'Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio, et tempus feugiat.',
    ],
    quickFacts: [
      { label: 'Current Role', value: 'Your Title · Your Company' },
      { label: 'Focus Areas',  value: 'Area 1, Area 2, Area 3' },
      { label: 'Based in',     value: 'Your City, Country' },
      { label: 'Hobbies',      value: 'Hobby 1, Hobby 2, Hobby 3' },
      { label: 'On the decks', value: 'Your DJ alias or genre' },
    ],
  },

  // ── Talks page ──────────────────────────────────────────
  talks: [
    {
      year:     '2024',
      title:    'Your Talk Title',
      event:    'Conference Name',
      location: 'City, Country',
      link:     null,
    },
    {
      year:     '2024',
      title:    'Your Talk Title',
      event:    'Conference Name',
      location: 'City, Country',
      link:     null,
    },
    {
      year:     '2023',
      title:    'Your Talk Title',
      event:    'Conference Name',
      location: 'City, Country',
      link:     null,
    },
    {
      year:     '2023',
      title:    'Your Talk Title',
      event:    'Conference Name',
      location: 'City, Country',
      link:     null,
    },
  ],

  // ── Resume page ─────────────────────────────────────────
  resume: {
    experience: [
      {
        role:        'Your Most Recent Role',
        company:     'Company Name',
        period:      '20XX — Present',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        role:        'Previous Role',
        company:     'Company Name',
        period:      '20XX — 20XX',
        description: 'Brief description of your responsibilities and impact.',
      },
      {
        role:        'Earlier Role',
        company:     'Company Name',
        period:      '20XX — 20XX',
        description: 'Brief description of your responsibilities and impact.',
      },
    ],
    skills: [
      'Skill One',
      'Skill Two',
      'Skill Three',
      'Skill Four',
      'Skill Five',
      'Skill Six',
      'Skill Seven',
      'Skill Eight',
      'Skill Nine',
      'Skill Ten',
    ],
    pdfPath: '/resume.pdf',  // Add your resume.pdf to /public/
  },

  // ── Photography world ───────────────────────────────────
  photography: {
    statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
    statement: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    projects: [
      {
        title:       'Project Title',
        category:    'Brand / Visual',
        year:        '2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src:         null,
      },
      {
        title:       'Project Title',
        category:    'UI / Product',
        year:        '2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src:         null,
      },
      {
        title:       'Project Title',
        category:    'Typography',
        year:        '2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        src:         null,
      },
    ],
  },

  // ── Hero images (per world) ─────────────────────────────
  // Add portrait photos to /public/photos/ and set paths here.
  // Set to null to show the placeholder box.
  heroImages: {
    default:     null,   // e.g. '/photos/portrait-default.jpg'
    photography: null,   // e.g. '/photos/portrait-photo.jpg'
    design:      null,   // e.g. '/photos/portrait-design.jpg'
  },

  // ── World explorer card images ──────────────────────────
  // Optional background images for the world explorer strip on the homepage.
  // If null, the geometric pattern is used instead.
  worldCards: {
    photography: null,   // e.g. '/photos/card-photography.jpg'
    design:      null,   // e.g. '/photos/card-design.jpg'
  },

  // ── SEO / Meta ──────────────────────────────────────────
  meta: {
    siteUrl:     'https://yoursite.com',
    title:       'Your Name',
    description: 'A short description of who you are and what you do.',
    ogImage:     '/og-image.jpg',   // Add og-image.jpg to /public/
  },

}

export default content
