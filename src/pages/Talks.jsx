/**
 * pages/Talks.jsx
 * ─────────────────────────────────────────────────────────
 * Keynotes and speaking engagements.
 * ✏️ Replace TALKS_DATA with your real talks.
 */

import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'

// ✏️ EDIT: Replace with your actual talks
const TALKS_DATA = [
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
]

export default function Talks() {
  const { tokens } = useTheme()

  // Group talks by year
  const byYear = TALKS_DATA.reduce((acc, talk) => {
    if (!acc[talk.year]) acc[talk.year] = []
    acc[talk.year].push(talk)
    return acc
  }, {})

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">

        {/* ── Header ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-label opacity-40 mb-4" style={{ color: tokens.accent }}>03 — Talks</p>
          <h1 className="text-section-title" style={{ color: tokens.primary }}>
            Keynotes &<br />speaking.
          </h1>
        </motion.div>

        {/* ── Talk list ───────────────────────── */}
        <div className="space-y-16">
          {Object.entries(byYear)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, talks], yi) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: yi * 0.1 }}
              >
                <p
                  className="text-label opacity-30 mb-6"
                  style={{ color: tokens.primary }}
                >
                  {year}
                </p>
                <div className="space-y-px" style={{ backgroundColor: tokens.border }}>
                  {talks.map((talk, i) => (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 group transition-colors duration-200"
                      style={{ backgroundColor: tokens.surface }}
                    >
                      <div>
                        <h3
                          className="font-display font-semibold text-xl mb-1"
                          style={{ color: tokens.primary }}
                        >
                          {talk.title}
                        </h3>
                        <p className="text-label opacity-40" style={{ color: tokens.primary }}>
                          {talk.event} · {talk.location}
                        </p>
                      </div>
                      {talk.link && (
                        <a
                          href={talk.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-label shrink-0 transition-opacity opacity-40 hover:opacity-100"
                          style={{ color: tokens.accent }}
                        >
                          Watch →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </PageTransition>
  )
}
