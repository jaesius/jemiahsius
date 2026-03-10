/**
 * CurrentlyStrip.jsx
 * ─────────────────────────────────────────────────────────
 * Horizontal row of live-feeling status items.
 * 2×2 on mobile, 4-col row on desktop.
 */

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import content from '../content';
import { EASE_OUT_EXPO } from '../utils/motion';

export default function CurrentlyStrip() {
  const { tokens } = useTheme();
  const items = content.currently;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      className="border-y"
      style={{
        borderColor: tokens.border,
        backgroundColor: tokens.surface,
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {items.map(({ label, value }, i) => (
          <div
            key={label}
            className="px-6 md:px-10 py-8 flex flex-col gap-2"
            style={{
              borderRight:
                i % 2 === 0 || i === 0
                  ? `1px solid ${tokens.border}`
                  : undefined,
              ...(i < items.length - 1
                ? { borderRight: `1px solid ${tokens.border}` }
                : {}),
            }}
          >
            <p
              className="text-label opacity-40"
              style={{ color: tokens.primary }}
            >
              {label}
            </p>
            <p
              className="text-sm font-medium opacity-80 leading-snug"
              style={{ color: tokens.primary }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
