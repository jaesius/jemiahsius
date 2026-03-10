/**
 * App.jsx
 * ─────────────────────────────────────────────────────────
 * Root component. Sets up:
 * - React Router with AnimatePresence for page transitions
 * - ThemeProvider wrapping everything
 * - Persistent Nav + Footer layout
 */

import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'

import Nav from './components/Nav'
import Footer from './components/Footer'
import WorldTransitionOverlay from './components/WorldTransitionOverlay'
import SiteLoader from './components/SiteLoader'

const Home        = lazy(() => import('./pages/Home'))
const About       = lazy(() => import('./pages/About'))
const Talks       = lazy(() => import('./pages/Talks'))
const Resume      = lazy(() => import('./pages/Resume'))
const Contact     = lazy(() => import('./pages/Contact'))
const Photography = lazy(() => import('./pages/Photography'))
const Design      = lazy(() => import('./pages/Design'))
const NotFound    = lazy(() => import('./pages/NotFound'))

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen" />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<Home />} />
        <Route path="/about"       element={<About />} />
        <Route path="/talks"       element={<Talks />} />
        <Route path="/resume"      element={<Resume />} />
        <Route path="/contact"     element={<Contact />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/design"      element={<Design />} />
        <Route path="*"            element={<NotFound />} />
      </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <SiteLoader />
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
