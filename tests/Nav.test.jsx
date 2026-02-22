/**
 * tests/Nav.test.jsx
 * Tests for the Nav component — routing, world switching, mobile menu.
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../src/context/ThemeContext'
import Nav from '../src/components/Nav'

// Helper: render Nav with required providers
function renderNav(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <ThemeProvider>
        <Nav />
      </ThemeProvider>
    </MemoryRouter>
  )
}

describe('Nav', () => {
  it('renders the site wordmark', () => {
    renderNav()
    expect(screen.getByText('Jemiah Sius')).toBeInTheDocument()
  })

  it('renders all main navigation links', () => {
    renderNav()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Talks')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders world-switching links', () => {
    renderNav()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('renders mobile hamburger button', () => {
    renderNav()
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('opens mobile menu on hamburger click', () => {
    renderNav()
    const hamburger = screen.getByLabelText('Open menu')
    fireEvent.click(hamburger)
    // After click, aria-label changes to 'Close menu'
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })
})
