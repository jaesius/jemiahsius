/**
 * tests/Home.test.jsx
 * Smoke tests for the Home page.
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../src/context/ThemeContext'
import Home from '../src/pages/Home'

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
    expect(screen.getByText(/Building/i)).toBeInTheDocument()
    expect(screen.getByText(/technology/i)).toBeInTheDocument()
  })

  it('renders world entry point links', () => {
    renderHome()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('renders the About teaser link', () => {
    renderHome()
    expect(screen.getByText(/More about me/i)).toBeInTheDocument()
  })
})
