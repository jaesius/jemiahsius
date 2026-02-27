/**
 * pages/About.jsx
 * ─────────────────────────────────────────────────────────
 * About page — bio, background, interests.
 * Replace placeholder text with your own content.
 */

import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'
import content from '../content'

export default function About() {
  const { tokens } = useTheme()

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">

        {/* ── Page header ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-label opacity-40 mb-4" style={{ color: tokens.accent }}>01 — About</p>
          <h1 className="text-section-title" style={{ color: tokens.primary }}>
            A little about<br />who I am.
          </h1>
        </motion.div>

        {/* ── Bio content ──────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            {/* ✏️ EDIT: Update bio paragraphs in src/content.js */}
            {content.about.bio.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed opacity-70" style={{ color: tokens.primary }}>
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* ── Quick facts ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-px"
            style={{ backgroundColor: tokens.border }}
          >
            {/* ✏️ EDIT: Update quickFacts in src/content.js */}
            {content.about.quickFacts.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 p-5"
                style={{ backgroundColor: tokens.surface }}
              >
                <span
                  className="text-label opacity-40 sm:w-36 shrink-0"
                  style={{ color: tokens.primary }}
                >
                  {label}
                </span>
                <span
                  className="text-sm opacity-80"
                  style={{ color: tokens.primary }}
                >
                  {value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
