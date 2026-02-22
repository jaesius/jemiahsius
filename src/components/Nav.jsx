/**
 * Nav.jsx
 * ─────────────────────────────────────────────────────────
 * Layout: Stacked name wordmark (left) | Main links + World switcher (right)
 *
 * Wordmark: "Jemiah" over "Sius" — bold, stacked, two lines.
 * Right side: main nav links, divider, world-switcher links.
 * Scroll-aware backdrop blur. Animated mobile drawer.
 */

import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ColorModeSwitcher from './ColorModeSwitcher'

const MAIN_LINKS = [
  { to: '/',        label: 'Home',    end: true },
  { to: '/about',   label: 'About' },
  { to: '/talks',   label: 'Talks' },
  { to: '/resume',  label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

const WORLD_LINKS = [
  { to: '/photography', world: 'photography', label: 'Photography' },
  { to: '/design',      world: 'design',      label: 'Design' },
]

export default function Nav() {
  const { setWorld, tokens, colorMode } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [belowFold, setBelowFold] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setBelowFold(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  const handleWorldLink = (worldId, to) => {
    setWorld(worldId)
    navigate(to)
  }

  const handleWordmark = () => {
    setWorld('default')
    navigate('/')
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? `${tokens.bg}ee` : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${tokens.border}` : '1px solid transparent',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

          {/* ── Wordmark: single line ─────────────── */}
          <button
            onClick={handleWordmark}
            className="font-display font-black uppercase leading-none tracking-tight transition-opacity hover:opacity-60"
            style={{ color: tokens.primary, fontSize: '2rem', letterSpacing: '-0.01em' }}
            aria-label="Go to homepage"
          >
            Jemiah <span style={{ color: tokens.accent }}>Sius</span>
          </button>

          {/* ── Desktop links ───────────────────── */}
          <div className="hidden md:flex items-center gap-8">
            {MAIN_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `text-label transition-all duration-200 relative ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                  }`
                }
                style={{ color: tokens.primary }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ backgroundColor: tokens.accent }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Divider */}
            <span className="w-px h-4 opacity-20" style={{ backgroundColor: tokens.primary }} />

            {/* World-switching links */}
            {WORLD_LINKS.map(({ to, world: worldId, label }) => (
              <button
                key={to}
                onClick={() => handleWorldLink(worldId, to)}
                className={`text-label transition-all duration-200 relative ${
                  location.pathname === to ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                }`}
                style={{ color: tokens.accent }}
              >
                {label}
                {location.pathname === to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ backgroundColor: tokens.accent }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Color mode toggle — slides in when scrolled past the hero */}
            <AnimatePresence>
              {belowFold && (
                <motion.div
                  key="color-mode-switcher"
                  initial={{ opacity: 0, x: 12, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0,  scale: 1   }}
                  exit={{    opacity: 0, x: 12, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                >
                  <ColorModeSwitcher />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Mobile hamburger ────────────────── */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  mobileOpen
                    ? i === 0 ? { rotate: 45, y: 6 }
                    : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                className="block w-5 h-px"
                style={{ backgroundColor: tokens.primary }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* ── Mobile Drawer ───────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 px-6 py-8 flex flex-col gap-6"
            style={{ backgroundColor: tokens.surface, borderBottom: `1px solid ${tokens.border}` }}
          >
            {MAIN_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `font-display font-black uppercase text-2xl tracking-tight transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-40'
                  }`
                }
                style={{ color: tokens.primary }}
              >
                {label}
              </NavLink>
            ))}
            <div className="h-px opacity-10" style={{ backgroundColor: tokens.primary }} />
            {WORLD_LINKS.map(({ to, world: worldId, label }) => (
              <button
                key={to}
                onClick={() => handleWorldLink(worldId, to)}
                className="font-display font-black uppercase text-2xl tracking-tight text-left opacity-70"
                style={{ color: tokens.accent }}
              >
                {label}
              </button>
            ))}
            <div className="h-px opacity-10" style={{ backgroundColor: tokens.primary }} />
            <div className="flex items-center gap-3">
              <ColorModeSwitcher />
              <span className="text-label opacity-40" style={{ color: tokens.primary }}>
                {colorMode === 'dark' ? 'Dark mode' : 'Light mode'}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
