/**
 * WorldTransitionOverlay.jsx
 * ─────────────────────────────────────────────────────────
 * Full-screen flash overlay that fires whenever the world
 * changes. Creates a dramatic "stepping into another world"
 * moment — the screen floods with the new world's accent
 * color then quickly clears.
 *
 * Add <WorldTransitionOverlay /> inside App.jsx (inside ThemeProvider).
 */

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function WorldTransitionOverlay() {
  const { world, tokens } = useTheme()
  const [visible, setVisible] = useState(false)
  const [flashColor, setFlashColor] = useState(tokens.accent)
  const prevWorld = useRef(world)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Only fire on actual world changes, not on first mount
    if (prevWorld.current !== world) {
      prevWorld.current = world
      setFlashColor(tokens.accent)
      setVisible(true)

      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setVisible(false), 700)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [world, tokens.accent])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={world}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0.15, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', times: [0, 0.2, 0.5, 1] }}
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{ backgroundColor: flashColor }}
        />
      )}
    </AnimatePresence>
  )
}
