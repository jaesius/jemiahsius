/**
 * pages/Home.jsx
 * ─────────────────────────────────────────────────────────
 * Homepage with:
 * - Full-viewport hero with staggered animated headline
 * - Scrolling marquee of roles/interests
 * - Brief intro section
 * - Featured talk spotlight
 * - Currently status strip
 * - World entry points (Photography / Design)
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import ColorModeSwitcher from '../components/ColorModeSwitcher';
import FeaturedTalk from '../components/FeaturedTalk';
import CurrentlyStrip from '../components/CurrentlyStrip';
import WorldExplorer from '../components/WorldExplorer';
import content from '../content';
import { EASE_OUT_EXPO } from '../utils/motion';

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
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

export default function Home() {
  const { tokens } = useTheme();

  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Accent glow orb */}
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

        {/* Portrait photo */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
          className="absolute inset-y-0 right-0 w-[55%] md:w-[50%]"
        >
          {tokens.heroImage ? (
            <img
              src={tokens.heroImage}
              alt={content.name.full}
              className="w-full h-full object-cover object-top"
            />
          ) : (
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
                Add your portrait in src/content.js
              </p>
            </div>
          )}
          <div
            className="absolute inset-y-0 left-0 w-2/3"
            style={{
              background: `linear-gradient(90deg, ${tokens.bg} 0%, ${tokens.bg}88 50%, transparent 100%)`,
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-48"
            style={{
              background: `linear-gradient(0deg, ${tokens.bg} 0%, transparent 100%)`,
            }}
          />
        </motion.div>

        {/* Hero text */}
        <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 md:px-10 pb-16 pt-32 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute right-6 md:right-10 bottom-16"
          >
            <ColorModeSwitcher />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-label mb-6 opacity-60"
            style={{ color: tokens.accent }}
          >
            {content.role}
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {content.tagline.split('\n').map((line, i) => (
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
          {[...content.marqueeItems, ...content.marqueeItems].map((text, i) => (
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
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
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
            {content.aboutTeaser.heading.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className="text-base leading-relaxed opacity-60 mb-8"
            style={{ color: tokens.primary }}
          >
            {content.aboutTeaser.body}
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: EASE_OUT_EXPO,
          }}
          className="grid grid-cols-2 gap-px"
          style={{ backgroundColor: tokens.border }}
        >
          {content.stats.map(({ value, label }) => (
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

      {/* ── Featured Talk ────────────────────────── */}
      <FeaturedTalk />

      {/* ── Currently ────────────────────────────── */}
      <CurrentlyStrip />

      {/* ── World Explorer ───────────────────────── */}
      <WorldExplorer />
    </PageTransition>
  );
}
