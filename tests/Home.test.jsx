/**
 * tests/Home.test.jsx
 * Smoke tests for the Home page.
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../src/context/ThemeContext'
import Home from '../src/pages/Home'
import content from '../src/content'

function renderHome() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </MemoryRouter>
  )
}

describe('Home page', () => {
  it('renders the hero tagline', () => {
    renderHome()
    const firstLine = content.tagline.split('\n')[0]
    expect(screen.getByText(new RegExp(firstLine, 'i'))).toBeInTheDocument()
  })

  it('renders world entry point links', () => {
    renderHome()
    // Multiple elements contain these strings (marquee + card headings), so use getAllByText
    const worldNames = content.marqueeItems.filter(t => t !== '—')
    const first = worldNames[0]
    const second = worldNames[1]
    expect(screen.getAllByText(first).length).toBeGreaterThan(0)
    expect(screen.getAllByText(second).length).toBeGreaterThan(0)
  })

  it('renders the About teaser link', () => {
    renderHome()
    expect(screen.getByText(/More about me/i)).toBeInTheDocument()
  })
})
