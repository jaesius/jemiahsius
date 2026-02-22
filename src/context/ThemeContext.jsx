/**
 * ThemeContext.jsx
 * ─────────────────────────────────────────────────────────
 * Manages the three "worlds" of the site:
 *   - 'default'     → VP / speaker / tech identity (lime)
 *   - 'photography' → Photography world (amber/warm)
 *   - 'design'      → Design world (coral/pink)
 *
 * Each world has 'dark' and 'light' token sets.
 * colorMode ('dark'|'light') is the second axis, persisted to localStorage.
 *
 * Usage:
 *   const { world, setWorld, colorMode, toggleColorMode, tokens } = useTheme()
 *
 * The world class and color-mode class are applied to <html> so CSS variables
 * and Tailwind world-* colors respond automatically.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

// ── World Definitions ────────────────────────────────────
export const WORLDS = {
  default: {
    id: 'default',
    label: 'Jemiah Sius',
    // ✏️ EDIT: Replace with your actual portrait photo path e.g. '/photos/portrait-default.jpg'
    heroImage: '/photos/heroImage.png',
    dark: {
      bg: '#0A0A0B',
      surface: '#111114',
      border: '#1E1E24',
      primary: '#F0EEF9',
      secondary: '#7B7A8E',
      accent: '#A3E635',
      accentDim: '#3D5414',
      accentHex: '163, 230, 53',
    },
    light: {
      bg: '#F8FAF3',
      surface: '#EDF7D6',
      border: '#C8E87A',
      primary: '#0A0A0B',
      secondary: '#3D5214',
      accent: '#4D7A00',
      accentDim: '#C8E87A',
      accentHex: '77, 122, 0',
    },
  },
  photography: {
    id: 'photography',
    label: 'Photography',
    // ✏️ EDIT: Replace with a photo that fits the photography world
    heroImage: '/photos/heroImage.png',
    dark: {
      // Deep warm black — like a darkroom
      bg: '#0D0800',
      surface: '#1A1000',
      border: '#3D2800',
      primary: '#FFF3DC',
      secondary: '#B8924A',
      // Bright amber-orange — bold and warm
      accent: '#FF9500',
      accentDim: '#7A4700',
      accentHex: '255, 149, 0',
    },
    light: {
      bg: '#FFF8F0',
      surface: '#FFF0DC',
      border: '#FFCC80',
      primary: '#1A0800',
      secondary: '#6B4A00',
      accent: '#B86000',
      accentDim: '#FFCC80',
      accentHex: '184, 96, 0',
    },
  },
  design: {
    id: 'design',
    label: 'Design',
    // ✏️ EDIT: Replace with a photo that fits the design world
    heroImage: '/photos/heroImage.png',
    dark: {
      // Deep purple-black — editorial fashion feel
      bg: '#0A000F',
      surface: '#160020',
      border: '#3D0055',
      primary: '#FFF0F8',
      secondary: '#C47AAE',
      // Hot magenta — loud and bold
      accent: '#FF2D78',
      accentDim: '#7A003A',
      accentHex: '255, 45, 120',
    },
    light: {
      bg: '#FFF5F8',
      surface: '#FFE8F2',
      border: '#FFAAD4',
      primary: '#1A000F',
      secondary: '#8A2050',
      accent: '#C01060',
      accentDim: '#FFAAD4',
      accentHex: '192, 16, 96',
    },
  },
};

// ── Context ──────────────────────────────────────────────
const ThemeContext = createContext(null);

// ── Provider ─────────────────────────────────────────────
export function ThemeProvider({ children }) {
  const [world, setWorldState] = useState('default');
  // Lazy-init from localStorage so the correct mode is known before first paint
  const [colorMode, setColorMode] = useState(
    () => localStorage.getItem('color-mode') || 'dark',
  );

  // Derive the flat token set for a given world + mode
  const resolveTokens = useCallback((worldId, mode) => {
    const worldDef = WORLDS[worldId];
    if (!worldDef) return null;
    return {
      ...worldDef[mode],
      heroImage: worldDef.heroImage,
    };
  }, []);

  // Apply world class, color-mode class, and all CSS variables to <html>
  const applyWorld = useCallback(
    (worldId, mode) => {
      const tokens = resolveTokens(worldId, mode);
      if (!tokens) return;

      const html = document.documentElement;

      // Swap world class
      Object.keys(WORLDS).forEach((id) =>
        html.classList.remove(`world-${id}`),
      );
      html.classList.add(`world-${worldId}`);

      // Swap color-mode class
      html.classList.remove('light-mode', 'dark-mode');
      html.classList.add(`${mode}-mode`);

      // Inject CSS variables so non-Tailwind CSS can also use them
      html.style.setProperty('--color-bg', tokens.bg);
      html.style.setProperty('--color-surface', tokens.surface);
      html.style.setProperty('--color-border', tokens.border);
      html.style.setProperty('--color-primary', tokens.primary);
      html.style.setProperty('--color-secondary', tokens.secondary);
      html.style.setProperty('--color-accent', tokens.accent);
      html.style.setProperty('--color-accent-dim', tokens.accentDim);
      html.style.setProperty('--color-accent-rgb', tokens.accentHex);
    },
    [resolveTokens],
  );

  // Public setter — components call this to switch worlds
  const setWorld = useCallback(
    (worldId) => {
      if (!WORLDS[worldId]) return;
      setWorldState(worldId);
      applyWorld(worldId, colorMode);
    },
    [applyWorld, colorMode],
  );

  // Toggle between dark and light, persist to localStorage
  const toggleColorMode = useCallback(() => {
    setColorMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('color-mode', next);
      // Use the current world from state closure — world is stable here
      setWorldState((currentWorld) => {
        applyWorld(currentWorld, next);
        return currentWorld;
      });
      return next;
    });
  }, [applyWorld]);

  // Apply on mount — uses the localStorage-hydrated colorMode
  useEffect(() => {
    applyWorld('default', colorMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    world,
    setWorld,
    colorMode,
    toggleColorMode,
    tokens: resolveTokens(world, colorMode),
    worlds: WORLDS,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
