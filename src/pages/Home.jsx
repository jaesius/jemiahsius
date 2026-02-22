/**
 * pages/Home.jsx
 * ─────────────────────────────────────────────────────────
 * Homepage with:
 * - Full-viewport hero with staggered animated headline
 * - Scrolling marquee of roles/interests
 * - Brief intro section
 * - World entry points (Photography / Design)
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

export default function Home() {
  const { tokens, setWorld } = useTheme();

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
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-28 grid md:grid-cols-2 gap-16 items-center">
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

      {/* ── World Entry Points ───────────────────── */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-32">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-label opacity-40 mb-12"
          style={{ color: tokens.primary }}
        >
          Explore other worlds
        </motion.p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              world: 'photography',
              to: '/photography',
              title: 'Photography',
              description:
                'Moments captured. Light and shadow as language.',
              accent: '#E8A020',
            },
            {
              world: 'design',
              to: '/design',
              title: 'Design',
              description:
                'Systems, aesthetics, and the spaces between.',
              accent: '#F05C78',
            },
          ].map(({ world, to, title, description, accent }) => (
            <motion.div
              key={world}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={to}
                onClick={() => setWorld(world)}
                className="block p-10 border group transition-all duration-500 hover:scale-[1.01]"
                style={{
                  borderColor: tokens.border,
                  backgroundColor: tokens.surface,
                }}
              >
                <p
                  className="text-label mb-4 transition-colors duration-300"
                  style={{ color: accent, opacity: 0.7 }}
                >
                  Enter world
                </p>
                <h3
                  className="font-display font-bold text-3xl mb-3"
                  style={{ color: tokens.primary }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-50"
                  style={{ color: tokens.primary }}
                >
                  {description}
                </p>
                <p
                  className="text-label mt-6 transition-opacity duration-300 opacity-0 group-hover:opacity-80"
                  style={{ color: accent }}
                >
                  Step inside →
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
