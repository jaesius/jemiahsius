/**
 * FeaturedTalk.jsx
 * ─────────────────────────────────────────────────────────
 * Spotlights one keynote talk with YouTube embed or placeholder.
 */

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import content from '../content';
import { EASE_OUT_EXPO } from '../utils/motion';

export default function FeaturedTalk() {
  const { tokens } = useTheme();
  const { youtubeId, title, event, year, description, watchUrl } = content.featuredTalk;
  const YOUTUBE_ID_RE = /^[a-zA-Z0-9_-]{11}$/;
  const eventLine = `${event} · ${year}`;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      >
        <p
          className="text-label mb-5 opacity-70"
          style={{ color: tokens.accent }}
        >
          Featured Talk
        </p>

        <h2
          className="font-display font-black uppercase tracking-tight leading-none mb-4 text-4xl md:text-6xl"
          style={{ color: tokens.primary }}
        >
          {title}
        </h2>

        <p
          className="text-label opacity-40 mb-6"
          style={{ color: tokens.primary }}
        >
          {eventLine}
        </p>

        <p
          className="text-base leading-relaxed opacity-60 mb-8 max-w-2xl mx-auto"
          style={{ color: tokens.primary }}
        >
          {description}
        </p>

        <div
          className="w-full overflow-hidden mb-8"
          style={{
            border: `1px solid ${tokens.border}`,
            borderRadius: '2px',
          }}
        >
          {youtubeId && YOUTUBE_ID_RE.test(youtubeId) ? (
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                style={{ border: 'none', display: 'block' }}
              />
            </div>
          ) : (
            <div
              className="aspect-video flex flex-col items-center justify-center gap-3"
              style={{ backgroundColor: tokens.surface }}
            >
              <p
                className="text-label opacity-25 text-center px-8 leading-relaxed"
                style={{ color: tokens.primary }}
              >
                Add a YouTube embed ID in src/content.js
              </p>
            </div>
          )}
        </div>

        {watchUrl && (
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-label border-b pb-0.5 transition-opacity hover:opacity-70"
            style={{
              color: tokens.accent,
              borderColor: tokens.accent,
            }}
          >
            Watch the talk →
          </a>
        )}
      </motion.div>
    </section>
  );
}
