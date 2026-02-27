/**
 * pages/Photography.jsx
 * ─────────────────────────────────────────────────────────
 * Photography world — alternate version of the site.
 * Same layout language, but amber/warm palette and
 * photography-focused content.
 *
 * ✏️ Replace PHOTO_GRID placeholder items with your images.
 * Each item: { src: '/photos/filename.jpg', caption: '...' }
 */

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'
import content from '../content'

// ✏️ EDIT: Update photography.grid in src/content.js
const PHOTO_GRID = content.photography.grid

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const photoItem = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Photography() {
  const { tokens, setWorld } = useTheme()

  return (
    <PageTransition isWorld>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">

        {/* ── Header ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-label opacity-40 mb-4" style={{ color: tokens.accent }}>
            World II — Photography
          </p>
          <h1 className="text-section-title" style={{ color: tokens.primary }}>
            Light as<br />language.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base opacity-50 mb-20 max-w-xl"
          style={{ color: tokens.primary }}
        >
          {/* ✏️ EDIT: Update photography.statement in src/content.js */}
          {content.photography.statement}
        </motion.p>

        {/* ── Photo Grid ──────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PHOTO_GRID.map(({ src, caption }, i) => (
            <motion.div key={i} variants={photoItem} className="group">
              <div
                className="aspect-[4/5] overflow-hidden mb-2 relative"
                style={{ backgroundColor: tokens.surface }}
              >
                {src ? (
                  <img
                    src={src}
                    alt={caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  /* Placeholder box shown until real photos are added */
                  <div className="w-full h-full flex items-center justify-center">
                    <p
                      className="text-label opacity-20"
                      style={{ color: tokens.primary }}
                    >
                      ✏️ {caption}
                    </p>
                  </div>
                )}
              </div>
              {caption && (
                <p
                  className="text-label opacity-30"
                  style={{ color: tokens.primary }}
                >
                  {caption}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* ── Return to default world ──────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-12 border-t"
          style={{ borderColor: tokens.border }}
        >
          <p className="text-label opacity-30 mb-4" style={{ color: tokens.primary }}>
            Back to the main world
          </p>
          <Link
            to="/"
            onClick={() => setWorld('default')}
            className="text-label transition-opacity hover:opacity-70"
            style={{ color: tokens.accent }}
          >
            ← Return home
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  )
}
