/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Display: Barlow Condensed — ultra-heavy, condensed, editorial (matches reference screenshot)
        display: ['Barlow Condensed', 'sans-serif'],
        // Body: DM Sans — clean, friendly, readable
        body: ['DM Sans', 'sans-serif'],
        // Mono: JetBrains Mono — for code/tech accents
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // ── DEFAULT WORLD ─────────────────────────────────
        // Background layers
        'default-bg':      '#0A0A0B',
        'default-surface': '#111114',
        'default-border':  '#1E1E24',
        // Text
        'default-primary':   '#F0EEF9',
        'default-secondary': '#7B7A8E',
        // Accent: electric indigo
        'default-accent':    '#6C63FF',
        'default-accent-dim':'#3D3780',

        // ── PHOTOGRAPHY WORLD ────────────────────────────
        'photo-bg':        '#080806',
        'photo-surface':   '#110F0A',
        'photo-border':    '#2A2418',
        'photo-primary':   '#F5EDD8',
        'photo-secondary': '#8A7E65',
        'photo-accent':    '#E8A020',
        'photo-accent-dim':'#6B4A0D',

        // ── DESIGN WORLD ─────────────────────────────────
        'design-bg':        '#0D080B',
        'design-surface':   '#160E13',
        'design-border':    '#2A1820',
        'design-primary':   '#FAF0F4',
        'design-secondary': '#8A6472',
        'design-accent':    '#F05C78',
        'design-accent-dim':'#6B1E2C',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'marquee':    'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
