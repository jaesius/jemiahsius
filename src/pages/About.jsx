/**
 * pages/About.jsx
 * ─────────────────────────────────────────────────────────
 * About page — bio, background, interests.
 * Replace placeholder text with your own content.
 */

import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'

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
            <p className="text-lg leading-relaxed opacity-70" style={{ color: tokens.primary }}>
              {/* ✏️ EDIT: Replace with your real bio */}
              I'm Jemiah Sius — Vice President of Developer Relations, Technical Marketing,
              and Demo Engineering at New Relic. I spend my days connecting developers with
              the tools, ideas, and communities that help them build better software.
            </p>
            <p className="text-lg leading-relaxed opacity-70" style={{ color: tokens.primary }}>
              {/* ✏️ EDIT: Replace with your real bio */}
              But I've always believed that the best technical communicators are also artists.
              Photography taught me how to frame a story. DJing taught me how to read a room.
              Design taught me that the experience is the product.
            </p>
            <p className="text-lg leading-relaxed opacity-70" style={{ color: tokens.primary }}>
              {/* ✏️ EDIT: Replace with your real bio */}
              I give keynotes at major developer conferences, lead teams that build demos
              people actually want to watch, and constantly look for the intersection
              where technology becomes culture.
            </p>
          </motion.div>

          {/* ── Quick facts ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-px"
            style={{ backgroundColor: tokens.border }}
          >
            {[
              { label: 'Current Role',  value: 'VP Developer Relations · New Relic' },
              { label: 'Focus Areas',   value: 'DevRel, Technical Marketing, Demo Eng' },
              { label: 'Based in',      value: '— ✏️ Add your location' },
              { label: 'Hobbies',       value: 'Photography, DJing, Art & Design' },
              { label: 'On the decks',  value: '— ✏️ Add your DJ alias or genre' },
            ].map(({ label, value }) => (
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
