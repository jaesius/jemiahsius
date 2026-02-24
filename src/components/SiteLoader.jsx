/**
 * SiteLoader.jsx
 * ─────────────────────────────────────────────────────────
 * Full-screen intro animation that plays once per browser session.
 *
 * Animation timeline (~1.5s total):
 *   0ms   → 400ms  Phase 1 — "JEMIAH" slams in, "SIUS" follows 80ms later
 *   400ms → 750ms  Phase 2 — Accent flood rises from the bottom behind the name;
 *                             text colors invert so both words stay readable
 *   900ms → 1450ms Phase 3 — Entire overlay slides up off-screen (curtain lift)
 *
 * Session logic:
 *   Reads sessionStorage on mount. If 'loader-shown' exists, returns null
 *   immediately — no animation, no DOM nodes. Sets the flag when Phase 3 ends.
 *
 * Colors are hardcoded to the default world dark tokens so the loader always
 * looks consistent regardless of the user's saved world or color-mode preference.
 * Never call useTheme() here.
 *
 * To adjust timing, edit the sleep() call values and transition durations below.
 */

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// ── Hardcoded default world dark tokens ──────────────────
// Mirrors WORLDS.default.dark in ThemeContext.jsx
const BG     = '#0A0A0B';  // page background
const FG     = '#F0EEF9';  // JEMIAH — light text on dark bg
const ACCENT = '#A3E635';  // SIUS + flood color — lime
const FG_INV = '#0A0A0B';  // both words invert to this once flood covers them

// ── Tiny async sleep helper ───────────────────────────────
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function SiteLoader() {
  // Evaluate sessionStorage synchronously so we never even mount the DOM nodes
  // if this session has already seen the loader.
  const [skip] = useState(() => !!sessionStorage.getItem('loader-shown'));
  const [done, setDone] = useState(false);

  // Independent animation controls for each layer so we can sequence precisely.
  const overlayControls = useAnimation(); // Phase 3 curtain
  const jemiahControls  = useAnimation(); // JEMIAH word
  const siusControls    = useAnimation(); // SIUS word
  const floodControls   = useAnimation(); // accent flood div

  useEffect(() => {
    if (skip) return;

    // Prevent body scroll while the overlay is on screen
    document.body.style.overflow = 'hidden';

    async function runSequence() {
      // ── Phase 1: Name slams in ─────────────────────────────
      // JEMIAH drops from y:40 → 0 with an expressive ease-out
      jemiahControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      });

      // SIUS follows 80ms later with the same motion
      await sleep(80);
      siusControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      });

      // ── Phase 2: Accent flood + text inversion ────────────
      // Wait until t≈400ms before starting the flood
      await sleep(320); // total elapsed: 80 + 320 = 400ms

      // Flood rises from bottom (scaleY: 0 → 1, origin: bottom)
      floodControls.start({
        scaleY: 1,
        transition: { duration: 0.35, ease: 'easeInOut' },
      });

      // SIUS is at the bottom of the stack so the flood covers it first —
      // switch it to dark immediately so it stays legible against the lime flood
      siusControls.start({
        color: FG_INV,
        transition: { duration: 0.08 },
      });

      // ~180ms later the flood has climbed to the upper half, covering JEMIAH
      await sleep(180); // total elapsed: ≈580ms
      jemiahControls.start({
        color: FG_INV,
        transition: { duration: 0.08 },
      });

      // ── Phase 3: Curtain lifts ─────────────────────────────
      // Wait until t≈900ms before lifting
      await sleep(320); // total elapsed: ≈900ms

      // Slide the entire overlay upward, revealing the site content underneath
      await overlayControls.start({
        y: '-100%',
        transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
      });

      // ── Cleanup ────────────────────────────────────────────
      sessionStorage.setItem('loader-shown', 'true');
      document.body.style.overflow = '';
      setDone(true);
    }

    runSequence();

    // Safety cleanup: always restore scroll if the component unmounts early
    return () => { document.body.style.overflow = ''; };
  }, [skip]); // eslint-disable-line react-hooks/exhaustive-deps

  // Already shown this session, or animation finished — nothing to render
  if (skip || done) return null;

  return (
    <motion.div
      animate={overlayControls}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: BG,
        overflow: 'hidden',
      }}
    >
      {/* ── Accent flood — rises from the bottom behind the name ── */}
      {/*
        scaleY starts at 0 and animates to 1 via floodControls.
        transformOrigin 'bottom' ensures it grows upward.
      */}
      <motion.div
        animate={floodControls}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: ACCENT,
          scaleY: 0,
          transformOrigin: 'bottom',
        }}
      />

      {/* ── Name — centered, stacked, above the flood (z-index: 1) ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {/* JEMIAH — drops in from below, all white, inverts to dark on flood */}
        <motion.div
          animate={jemiahControls}
          initial={{ opacity: 0, y: 40, color: FG }}
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
          }}
        >
          JEMIAH
        </motion.div>

        {/* SIUS — drops in 80ms after JEMIAH, also all white, inverts to dark on flood */}
        <motion.div
          animate={siusControls}
          initial={{ opacity: 0, y: 40, color: FG }}
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 900,
            textTransform: 'uppercase',
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
          }}
        >
          SIUS
        </motion.div>
      </div>
    </motion.div>
  );
}
