import '@testing-library/jest-dom'

// Mock IntersectionObserver — not available in jsdom, required by Framer Motion whileInView
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = IntersectionObserver
