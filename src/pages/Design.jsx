/**
 * pages/Design.jsx
 * ─────────────────────────────────────────────────────────
 * Design world — alternate version of the site.
 * Same layout language, coral/pink palette and
 * design-focused content.
 *
 * ✏️ Replace PROJECTS with your actual design work.
 */

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'
import content from '../content'

// ✏️ EDIT: Update design.projects in src/content.js
const PROJECTS = content.design.projects

export default function Design() {
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
            World III — Design
          </p>
          <h1 className="text-section-title" style={{ color: tokens.primary }}>
            Systems &<br />aesthetics.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base opacity-50 mb-20 max-w-xl"
          style={{ color: tokens.primary }}
        >
          {/* ✏️ EDIT: Update design.statement in src/content.js */}
          {content.design.statement}
        </motion.p>

        {/* ── Projects ─────────────────────────── */}
        <div className="space-y-4">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="grid md:grid-cols-2 gap-px"
              style={{ backgroundColor: tokens.border }}
            >
              {/* Image / Placeholder */}
              <div
                className="aspect-video flex items-center justify-center"
                style={{ backgroundColor: tokens.surface }}
              >
                {project.src ? (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-label opacity-20" style={{ color: tokens.primary }}>
                    ✏️ Add image
                  </p>
                )}
              </div>

              {/* Info */}
              <div
                className="p-8 flex flex-col justify-between"
                style={{ backgroundColor: tokens.surface }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-label opacity-40"
                      style={{ color: tokens.accent }}
                    >
                      {project.category}
                    </span>
                    <span className="opacity-20" style={{ color: tokens.primary }}>·</span>
                    <span className="text-label opacity-30" style={{ color: tokens.primary }}>
                      {project.year}
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold text-2xl mb-3"
                    style={{ color: tokens.primary }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed opacity-50"
                    style={{ color: tokens.primary }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
