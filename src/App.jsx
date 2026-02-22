/**
 * App.jsx
 * ─────────────────────────────────────────────────────────
 * Root component. Sets up:
 * - React Router with AnimatePresence for page transitions
 * - ThemeProvider wrapping everything
 * - Persistent Nav + Footer layout
 */

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'

import Nav from './components/Nav'
import Footer from './components/Footer'
import WorldTransitionOverlay from './components/WorldTransitionOverlay'

import Home        from './pages/Home'
import About       from './pages/About'
import Talks       from './pages/Talks'
import Resume      from './pages/Resume'
import Contact     from './pages/Contact'
import Photography from './pages/Photography'
import Design      from './pages/Design'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/talks"       element={<Talks />} />
        <Route path="/resume"      element={<Resume />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/design"      element={<Design />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <WorldTransitionOverlay />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
