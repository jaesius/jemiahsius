/**
 * WorldExplorer.jsx
 * ─────────────────────────────────────────────────────────
 * Full-bleed immersive card strip for Photography & Design worlds.
 * Hovering a card shifts the page background toward that world's color.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const WORLD_CARDS = [
  {
    id: 'photography',
    to: '/photography',
    title: 'Photography',
    description: 'Moments captured. Light and shadow as language.',
  },
  {
    id: 'design',
    to: '/design',
    title: 'Design',
    description: 'Systems, aesthetics, and the spaces between.',
  },
];

export default function WorldExplorer() {
  const { tokens, setWorld, worlds, colorMode } = useTheme();
  const navigate = useNavigate();

  const [hoveredWorld, setHoveredWorld] = useState(null);
  const hoveredBg = hoveredWorld
    ? worlds[hoveredWorld][colorMode].border
    : tokens.bg;

  useEffect(() => {
    document.body.style.transition = 'background-color 0.6s ease';
    document.body.style.backgroundColor = hoveredWorld ? hoveredBg : '';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [hoveredWorld, hoveredBg]);

  return (
    <section className="pb-16">
      <div className="flex flex-col md:flex-row">
        {WORLD_CARDS.map(({ id, to, title, description }) => {
          const worldDef = worlds[id];
          const cardTokens = {
            ...worldDef[colorMode],
            heroImage: worldDef.heroImage,
          };

          return (
            <motion.div
              key={id}
              initial="cardResting"
              whileHover="cardHovered"
              onHoverStart={() => setHoveredWorld(id)}
              onHoverEnd={() => setHoveredWorld(null)}
              onClick={() => {
                setWorld(id);
                navigate(to);
              }}
              className="relative w-full md:w-1/2 overflow-hidden"
              style={{
                height: '520px',
                cursor: 'pointer',
              }}
            >
              {/* Background: geometric pattern */}
              <motion.div
                className="absolute inset-0"
                variants={{
                  cardResting: { scale: 1 },
                  cardHovered: {
                    scale: 1.06,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor:
                      id === 'design'
                        ? cardTokens.surface
                        : cardTokens.bg,
                  }}
                />

                {id === 'photography' ? (
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 600 520"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {[28, 66, 110, 160, 218, 283, 356, 437, 527].map((r, i) => (
                      <circle
                        key={r}
                        cx="390"
                        cy="175"
                        r={r}
                        fill="none"
                        stroke={cardTokens.accent}
                        strokeWidth="1"
                        opacity={Math.max(0.05, 0.24 - i * 0.022)}
                      />
                    ))}
                  </svg>
                ) : (
                  <svg
                    className="absolute inset-0 w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="design-stripes"
                        width="22"
                        height="22"
                        patternUnits="userSpaceOnUse"
                        patternTransform="rotate(-45)"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="22"
                          stroke={cardTokens.accent}
                          strokeWidth="2"
                          opacity="0.32"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#design-stripes)"
                    />
                  </svg>
                )}
              </motion.div>

              {/* Gradient scrim */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, ${cardTokens.bg}F0 0%, ${cardTokens.bg}70 45%, transparent 80%)`,
                }}
              />

              {/* Accent tint on hover */}
              <motion.div
                className="absolute inset-0"
                variants={{
                  cardResting: { backgroundColor: 'rgba(0,0,0,0)' },
                  cardHovered: {
                    backgroundColor: `${cardTokens.accent}20`,
                    transition: { duration: 0.35 },
                  },
                }}
              />

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none">
                <p
                  className="text-label mb-3 opacity-70"
                  style={{ color: cardTokens.accent }}
                >
                  World
                </p>

                <h3
                  className="font-display font-black uppercase tracking-tight leading-none mb-3"
                  style={{
                    color: cardTokens.primary,
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                  }}
                >
                  {title}
                </h3>

                <p
                  className="text-sm leading-relaxed opacity-50 mb-6 max-w-xs"
                  style={{ color: cardTokens.primary }}
                >
                  {description}
                </p>

                <motion.p
                  className="text-label"
                  style={{ color: cardTokens.accent }}
                  variants={{
                    cardResting: { opacity: 0, y: 6 },
                    cardHovered: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.25,
                        ease: 'easeOut',
                      },
                    },
                  }}
                >
                  Enter →
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
