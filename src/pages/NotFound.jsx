/**
 * pages/NotFound.jsx
 * ─────────────────────────────────────────────────────────
 * 404 page — shown for any unmatched route.
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  const { tokens } = useTheme();

  return (
    <PageTransition>
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">
        <motion.h1
          className="text-section-title font-bold tracking-tight"
          style={{ color: tokens.heading }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Page not found
        </motion.h1>

        <motion.p
          className="text-label mt-4"
          style={{ color: tokens.muted }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
