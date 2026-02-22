/**
 * tests/Contact.test.jsx
 * Tests for the Contact page form UI.
 */

import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../src/context/ThemeContext'
import Contact from '../src/pages/Contact'

function renderContact() {
  return render(
    <MemoryRouter>
      <ThemeProvider>
        <Contact />
      </ThemeProvider>
    </MemoryRouter>
  )
}

describe('Contact page', () => {
  it('renders the contact form', () => {
    renderContact()
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Tell me what's on your mind...")).toBeInTheDocument()
  })

  it('has a submit button', () => {
    renderContact()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('allows user to type in form fields', () => {
    renderContact()
    const nameInput = screen.getByPlaceholderText('Your name')
    fireEvent.change(nameInput, { target: { value: 'Test User' } })
    expect(nameInput.value).toBe('Test User')
  })

  it('allows user to type a message', () => {
    renderContact()
    const textarea = screen.getByPlaceholderText("Tell me what's on your mind...")
    fireEvent.change(textarea, { target: { value: 'Hello Jemiah!' } })
    expect(textarea.value).toBe('Hello Jemiah!')
  })
})
