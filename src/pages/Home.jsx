/**
 * pages/Home.jsx
 * ─────────────────────────────────────────────────────────
 * Homepage with:
 * - Full-viewport hero with staggered animated headline
 * - Scrolling marquee of roles/interests
 * - Brief intro section
 * - World entry points (Photography / Design) — immersive drag-to-explore strip
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import ColorModeSwitcher from '../components/ColorModeSwitcher';

// ── Animation variants ───────────────────────────────────
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Marquee content ──────────────────────────────────────
const MARQUEE_ITEMS = [
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
];

// ── World strip data ─────────────────────────────────────
// Edit the descriptions here to change the copy on each card.
const WORLD_CARDS = [
  {
    id: 'photography',
    to: '/photography',
    title: 'Photography',
    description: 'Moments captured. Light and shadow as language.',
  },
  {
    id: 'design',
    to: '/design',
    title: 'Design',
    description: 'Systems, aesthetics, and the spaces between.',
  },
];

export default function Home() {
  const { tokens, setWorld, worlds, colorMode } = useTheme();
  const navigate = useNavigate();

  // ── Background preview on card hover ────────────────────
  // Tracks which world card the user is hovering. When set, the
  // section background smoothly shifts toward that world's bg color.
  // null means: use the currently active world's bg (no shift).
  const [hoveredWorld, setHoveredWorld] = useState(null);
  // border sits between bg (invisible) and accentDim (too vibrant) —
  // it carries each world's hue without overpowering the page.
  const hoveredBg = hoveredWorld
    ? worlds[hoveredWorld][colorMode].border
    : tokens.bg;

  // Push the hover color to the whole page body, not just one section.
  // We write it as an inline style (highest specificity) so it beats the
  // CSS-variable rule in globals.css. Clearing the inline style on hover-end
  // lets the original CSS variable rule snap back in.
  useEffect(() => {
    document.body.style.transition = 'background-color 0.6s ease';
    document.body.style.backgroundColor = hoveredWorld ? hoveredBg : '';
    // On unmount (navigating away), remove the override so other pages aren't affected.
    return () => { document.body.style.backgroundColor = ''; };
  }, [hoveredWorld, hoveredBg]);

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Accent glow orb — sits behind the portrait */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '80vw',
            height: '80vw',
            top: '50%',
            right: '-5vw',
            transform: 'translateY(-50%)',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${tokens.accent}40 0%, ${tokens.accent}18 40%, transparent 70%)`,
          }}
        />

        {/* Portrait photo — right side, fills hero height */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 right-0 w-[55%] md:w-[50%]"
        >
          {tokens.heroImage ? (
            <img
              src={tokens.heroImage}
              alt="Jemiah Sius"
              className="w-full h-full object-cover object-top"
            />
          ) : (
            /* Placeholder shown until photo is added */
            <div
              className="w-full h-full flex items-end justify-center pb-16"
              style={{
                background: `linear-gradient(135deg, ${tokens.surface} 0%, ${tokens.accentDim || tokens.surface} 100%)`,
              }}
            >
              <p
                className="text-label opacity-20 text-center px-8"
                style={{ color: tokens.primary }}
              >
                ✏️ Add your portrait
                <br />
                Set heroImage in ThemeContext.jsx
              </p>
            </div>
          )}
          {/* Gradient fade from left so text is readable */}
          <div
            className="absolute inset-y-0 left-0 w-2/3"
            style={{
              background: `linear-gradient(90deg, ${tokens.bg} 0%, ${tokens.bg}88 50%, transparent 100%)`,
            }}
          />
          {/* Gradient fade from bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-48"
            style={{
              background: `linear-gradient(0deg, ${tokens.bg} 0%, transparent 100%)`,
            }}
          />
        </motion.div>

        {/* Hero text — left side, over the photo gradient */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 md:px-10 pb-16 pt-32 max-w-7xl mx-auto">

          {/* Color mode switcher — same max-w-7xl container as nav, so x-axis matches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute right-6 md:right-10 bottom-16"
          >
            <ColorModeSwitcher />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-label mb-6 opacity-60"
            style={{ color: tokens.accent }}
          >
            VP Developer Relations · New Relic
          </motion.p>

          {/* Staggered headline */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              'Building',
              'at the intersection',
              'of technology',
              'and culture.',
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  variants={item}
                  className="text-display block"
                  style={{ color: tokens.primary }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </motion.div>

          {/* Ghost text — large background word like Math Orbia */}

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-12 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: 'easeInOut',
              }}
              className="w-px h-10"
              style={{ backgroundColor: tokens.accent, opacity: 0.6 }}
            />
            <span
              className="text-label opacity-30"
              style={{ color: tokens.primary }}
            >
              Scroll
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee strip ────────────────────────── */}
      <div
        className="py-5 overflow-hidden border-y"
        style={{ borderColor: tokens.border }}
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, i) => (
            <span
              key={i}
              className="text-label mx-6 opacity-30"
              style={{
                color: text === '—' ? tokens.accent : tokens.primary,
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Intro / About Teaser ─────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-label mb-6 opacity-40"
            style={{ color: tokens.accent }}
          >
            About
          </p>
          <h2
            className="text-section-title mb-6"
            style={{ color: tokens.primary }}
          >
            VP by title.
            <br />
            Creative by nature.
          </h2>
          <p
            className="text-base leading-relaxed opacity-60 mb-8"
            style={{ color: tokens.primary }}
          >
            I lead Developer Relations, Technical Marketing, and Demo
            Engineering at New Relic. But I've always lived at the
            edge of two worlds — the technical and the creative.
            Photography, design, and music aren't hobbies, they're how
            I think.
          </p>
          <Link
            to="/about"
            className="text-label border-b pb-0.5 transition-opacity hover:opacity-70"
            style={{
              color: tokens.accent,
              borderColor: tokens.accent,
            }}
          >
            More about me →
          </Link>
        </motion.div>

        {/* Decorative stat block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-2 gap-px"
          style={{ backgroundColor: tokens.border }}
        >
          {[
            { value: 'VP', label: 'Level at New Relic' },
            { value: '∞', label: 'Ideas in progress' },
            { value: '3', label: 'Worlds on this site' },
            { value: '1', label: 'Record crate, never full' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="p-8"
              style={{ backgroundColor: tokens.surface }}
            >
              <p
                className="font-display font-bold text-4xl mb-2"
                style={{ color: tokens.accent }}
              >
                {value}
              </p>
              <p
                className="text-label opacity-40"
                style={{ color: tokens.primary }}
              >
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Currently Strip ──────────────────────────────── */}
      {/*
        A horizontal row of 4 live-feeling status items — personal and human.
        Thin vertical dividers separate them. On mobile they collapse to a 2×2 grid.
        Background uses tokens.surface so it reads as a distinct band.

        ✏️ EDIT: Update the four values below to reflect your current reality.
      */}

      {/* ✏️ EDIT: Update each item's value to reflect what's current for you */}
      {(() => {
        const STATUS_ITEMS = [
          { label: 'Spinning',      value: 'Afrobeats & Amapiano' },   // ✏️ EDIT: what you're DJing
          { label: 'Based in',      value: 'Miami, FL' },
          { label: 'Last talked at', value: '— Add conference name' }, // ✏️ EDIT: your last keynote
          { label: 'Shooting with', value: '— Add your camera' },      // ✏️ EDIT: your current camera
        ];

        return (
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border-y"
            style={{
              borderColor: tokens.border,
              backgroundColor: tokens.surface,
            }}
          >
            {/* 2×2 on mobile, 4-col row on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4">
              {STATUS_ITEMS.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="px-6 md:px-10 py-8 flex flex-col gap-2"
                  style={{
                    // Vertical divider between items (right border on all except the last in each row)
                    borderRight: i % 2 === 0 || i === 0
                      ? `1px solid ${tokens.border}`
                      : undefined,
                    // On desktop, apply border to all but the last item
                    ...(i < STATUS_ITEMS.length - 1
                      ? { borderRight: `1px solid ${tokens.border}` }
                      : {}),
                  }}
                >
                  {/* Category label — JetBrains Mono, dim */}
                  <p
                    className="text-label opacity-40"
                    style={{ color: tokens.primary }}
                  >
                    {label}
                  </p>
                  {/* Value — DM Sans, readable */}
                  <p
                    className="text-sm font-medium opacity-80 leading-snug"
                    style={{ color: tokens.primary }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        );
      })()}

      {/* ── Featured Talk ─────────────────────────────────── */}
      {/*
        Spotlights one keynote talk. Two-column on desktop, single column on mobile.
        Left: talk info + link. Right: YouTube embed or placeholder box.

        ✏️ EDIT the constants directly below to update this section.
      */}

      {(() => {
        // ✏️ EDIT: Paste your YouTube video ID here (the part after ?v= in the URL).
        // Example: 'dQw4w9WgXcQ' from https://www.youtube.com/watch?v=dQw4w9WgXcQ
        // Set to null (no quotes) to show the placeholder box instead.
        const YOUTUBE_ID = null;

        // ✏️ EDIT: Update these fields with your actual talk details.
        const TALK = {
          title: 'Your Talk Title Goes Here',             // ✏️ EDIT
          event: 'Conference Name · 2024',                // ✏️ EDIT
          description:
            'A short 1–2 sentence description of what this talk was about and why it mattered. Replace this with your own words.', // ✏️ EDIT
          watchUrl: '#',                                  // ✏️ EDIT: link to recording or talk page
        };

        return (
          <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <p
                className="text-label mb-5 opacity-70"
                style={{ color: tokens.accent }}
              >
                Featured Talk
              </p>

              {/* Talk title */}
              <h2
                className="font-display font-black uppercase tracking-tight leading-none mb-4 text-4xl md:text-6xl"
                style={{ color: tokens.primary }}
              >
                {TALK.title}
              </h2>

              {/* Event + year */}
              <p
                className="text-label opacity-40 mb-6"
                style={{ color: tokens.primary }}
              >
                {TALK.event}
              </p>

              {/* Description */}
              <p
                className="text-base leading-relaxed opacity-60 mb-8 max-w-2xl"
                style={{ color: tokens.primary }}
              >
                {TALK.description}
              </p>

              {/* Video embed or placeholder */}
              <div
                className="w-full overflow-hidden mb-8"
                style={{ border: `1px solid ${tokens.border}`, borderRadius: '2px' }}
              >
                {YOUTUBE_ID ? (
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                      title={TALK.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                      style={{ border: 'none', display: 'block' }}
                    />
                  </div>
                ) : (
                  <div
                    className="aspect-video flex flex-col items-center justify-center gap-3"
                    style={{ backgroundColor: tokens.surface }}
                  >
                    <p
                      className="text-label opacity-25 text-center px-8 leading-relaxed"
                      style={{ color: tokens.primary }}
                    >
                      ✏️ Add your YouTube embed ID
                      <br />
                      Set YOUTUBE_ID in Home.jsx
                    </p>
                  </div>
                )}
              </div>

              {/* Watch link */}
              <a
                href={TALK.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label border-b pb-0.5 transition-opacity hover:opacity-70"
                style={{ color: tokens.accent, borderColor: tokens.accent }}
              >
                Watch the talk →
              </a>
            </motion.div>
          </section>
        );
      })()}

      {/* ── World Explorer Strip ──────────────────────────── */}
      {/*
        Full-bleed immersive card strip. Hovering a card shifts the
        section background toward that world's color. On desktop, cards
        sit side by side at 50/50. On mobile, cards stack vertically.
      */}
      <section className="pb-16">
        {/* Section label */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-2 pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-label opacity-40"
            style={{ color: tokens.primary }}
          >
            Explore other worlds
          </motion.p>
        </div>

        {/* Two cards side by side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row">
          {WORLD_CARDS.map(({ id, to, title, description }) => {
            // Resolve this world's own tokens for the current color mode.
            // Cards always show their own world's palette, not the active world's.
            const worldDef = worlds[id];
            const cardTokens = { ...worldDef[colorMode], heroImage: worldDef.heroImage };

            return (
              /*
                The card is a Framer Motion element in "whileHover" variant mode.
                Setting whileHover="cardHovered" on the parent propagates the variant
                name down to all child motion elements that listen for it — enabling
                the photo zoom and the "Enter →" reveal to be driven by one hover.
              */
              <motion.div
                key={id}
                initial="cardResting"
                whileHover="cardHovered"
                onHoverStart={() => setHoveredWorld(id)}
                onHoverEnd={() => setHoveredWorld(null)}
                onClick={() => { setWorld(id); navigate(to); }}
                // Mobile: full width stacked. Desktop: exactly half the window each.
                className="relative w-full md:w-1/2 overflow-hidden"
                style={{
                  height: '520px',
                  cursor: 'pointer',
                }}
              >
                {/* ── Background: geometric pattern ── */}
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    cardResting: { scale: 1 },
                    cardHovered: {
                      scale: 1.06,
                      transition: { duration: 0.8, ease: 'easeOut' },
                    },
                  }}
                >
                  {/* Base fill */}
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: cardTokens.bg }}
                  />

                  {id === 'photography' ? (
                    /*
                      Photography — concentric rings offset to upper-right.
                      Evokes a camera lens / aperture / viewfinder.
                    */
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 600 520"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {[28, 66, 110, 160, 218, 283, 356, 437, 527].map((r, i) => (
                        <circle
                          key={r}
                          cx="390"
                          cy="175"
                          r={r}
                          fill="none"
                          stroke={cardTokens.accent}
                          strokeWidth="1"
                          opacity={Math.max(0.05, 0.24 - i * 0.022)}
                        />
                      ))}
                    </svg>
                  ) : (
                    /*
                      Design — diagonal crosshatch grid rotated 45°.
                      Evokes graph paper, grid systems, structured layouts.
                    */
                    <svg
                      className="absolute inset-0 w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="design-grid"
                          width="36"
                          height="36"
                          patternUnits="userSpaceOnUse"
                          patternTransform="rotate(45)"
                        >
                          <line x1="0" y1="0" x2="0" y2="36" stroke={cardTokens.accent} strokeWidth="0.75" opacity="0.22" />
                          <line x1="0" y1="0" x2="36" y2="0" stroke={cardTokens.accent} strokeWidth="0.75" opacity="0.22" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#design-grid)" />
                    </svg>
                  )}
                </motion.div>

                {/* ── Gradient scrim — ensures text is readable over the photo ── */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${cardTokens.bg}F0 0%, ${cardTokens.bg}70 45%, transparent 80%)`,
                  }}
                />

                {/* ── Accent tint — appears on hover ── */}
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    cardResting: { backgroundColor: 'rgba(0,0,0,0)' },
                    cardHovered: {
                      backgroundColor: `${cardTokens.accent}20`,
                      transition: { duration: 0.35 },
                    },
                  }}
                />

                {/* ── Text content ── */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none">

                  {/* Small "World" eyebrow label */}
                  <p
                    className="text-label mb-3 opacity-70"
                    style={{ color: cardTokens.accent }}
                  >
                    World
                  </p>

                  {/* World name — Barlow Condensed Black, large */}
                  <h3
                    className="font-display font-black uppercase tracking-tight leading-none mb-3"
                    style={{
                      color: cardTokens.primary,
                      fontSize: 'clamp(3rem, 6vw, 5rem)',
                    }}
                  >
                    {title}
                  </h3>

                  {/* One-line description */}
                  <p
                    className="text-sm leading-relaxed opacity-50 mb-6 max-w-xs"
                    style={{ color: cardTokens.primary }}
                  >
                    {description}
                  </p>

                  {/* "Enter →" — slides up and fades in on hover */}
                  <motion.p
                    className="text-label"
                    style={{ color: cardTokens.accent }}
                    variants={{
                      cardResting: { opacity: 0, y: 6 },
                      cardHovered: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.25, ease: 'easeOut' },
                      },
                    }}
                  >
                    Enter →
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

    </PageTransition>
  );
}
