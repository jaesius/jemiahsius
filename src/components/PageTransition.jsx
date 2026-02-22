/**
 * PageTransition.jsx
 * ─────────────────────────────────────────────────────────
 * Wraps each page with a smooth fade-up entrance animation.
 * Uses Framer Motion. World switches get a slightly more
 * dramatic transition via the 'world' variant.
 *
 * Usage:
 *   <PageTransition>
 *     <YourPageContent />
 *   </PageTransition>
 */

import { motion } from 'framer-motion'

const variants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0 },
  exit:     { opacity: 0, y: -10 },
}

const worldVariants = {
  initial:  { opacity: 0, scale: 0.98 },
  animate:  { opacity: 1, scale: 1 },
  exit:     { opacity: 0, scale: 1.01 },
}

export default function PageTransition({ children, isWorld = false }) {
  return (
    <motion.div
      variants={isWorld ? worldVariants : variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: isWorld ? 0.6 : 0.4,
        ease: [0.22, 1, 0.36, 1], // custom ease-out-quint
      }}
    >
      {children}
    </motion.div>
  )
}
