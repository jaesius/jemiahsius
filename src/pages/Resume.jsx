/**
 * pages/Resume.jsx
 * ─────────────────────────────────────────────────────────
 * Resume / CV page.
 * ✏️ Replace EXPERIENCE and SKILLS with your own data.
 * Includes a "Download PDF" button — link your actual PDF.
 */

import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'
import content from '../content'

// ✏️ EDIT: Update experience and skills in src/content.js
const EXPERIENCE = content.resume.experience
const SKILLS     = content.resume.skills

export default function Resume() {
  const { tokens } = useTheme()

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">

        {/* ── Header ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20"
        >
          <div>
            <p className="text-label opacity-40 mb-4" style={{ color: tokens.accent }}>04 — Resume</p>
            <h1 className="text-section-title" style={{ color: tokens.primary }}>
              Experience &<br />background.
            </h1>
          </div>
          {/* ✏️ EDIT: Set resume.pdfPath in src/content.js */}
          <a
            href={content.resume.pdfPath}
            download
            className="text-label px-6 py-3 border transition-all duration-200 hover:opacity-70 self-start sm:self-auto"
            style={{
              color: tokens.accent,
              borderColor: tokens.accent,
            }}
          >
            Download PDF
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16">
          {/* ── Experience ───────────────────── */}
          <div className="md:col-span-2 space-y-16">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                className="border-t pt-8"
                style={{ borderColor: tokens.border }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="font-display font-bold text-xl"
                      style={{ color: tokens.primary }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-label opacity-60 mt-1"
                      style={{ color: tokens.accent }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="text-label opacity-30 shrink-0"
                    style={{ color: tokens.primary }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed opacity-60"
                  style={{ color: tokens.primary }}
                >
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ── Skills ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p
              className="text-label opacity-40 mb-8"
              style={{ color: tokens.primary }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-label px-3 py-1.5 border"
                  style={{
                    color: tokens.secondary,
                    borderColor: tokens.border,
                    backgroundColor: tokens.surface,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
