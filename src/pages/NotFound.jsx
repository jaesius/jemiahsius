/**
 * pages/NotFound.jsx
 * ─────────────────────────────────────────────────────────
 * 404 page — shown for any unmatched route.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';
import { EASE_OUT_EXPO } from '../utils/motion';

export default function NotFound() {
  const { tokens } = useTheme();

  return (
    <PageTransition>
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">
        <motion.h1
          className="text-section-title font-bold tracking-tight"
          style={{ color: tokens.primary }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          Page not found
        </motion.h1>

        <motion.p
          className="text-label mt-4"
          style={{ color: tokens.secondary }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/"
            className="text-label font-medium underline underline-offset-4"
            style={{ color: tokens.accent }}
          >
            Back to home
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
