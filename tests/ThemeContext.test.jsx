/**
 * tests/ThemeContext.test.jsx
 * Tests for the ThemeContext — world switching, token access.
 */

import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { ThemeProvider, useTheme, WORLDS } from '../src/context/ThemeContext'

// Test component that reads from ThemeContext
function ThemeReader() {
  const { world, tokens } = useTheme()
  return (
    <div>
      <span data-testid="world">{world}</span>
      <span data-testid="accent">{tokens.accent}</span>
    </div>
  )
}

// Test component that switches world
function WorldSwitcher() {
  const { setWorld } = useTheme()
  return (
    <button onClick={() => setWorld('photography')}>Switch to Photography</button>
  )
}

describe('ThemeContext', () => {
  it('provides default world on mount', () => {
    render(
      <ThemeProvider>
        <ThemeReader />
      </ThemeProvider>
    )
    expect(screen.getByTestId('world').textContent).toBe('default')
  })

  it('default world has the correct accent color', () => {
    render(
      <ThemeProvider>
        <ThemeReader />
      </ThemeProvider>
    )
    // WORLDS now has dark/light sub-objects; default colorMode is 'dark'
    expect(screen.getByTestId('accent').textContent).toBe(WORLDS.default.dark.accent)
  })

  it('switches world and updates tokens correctly', async () => {
    render(
      <ThemeProvider>
        <ThemeReader />
        <WorldSwitcher />
      </ThemeProvider>
    )

    await act(async () => {
      screen.getByText('Switch to Photography').click()
    })

    expect(screen.getByTestId('world').textContent).toBe('photography')
    expect(screen.getByTestId('accent').textContent).toBe(WORLDS.photography.dark.accent)
  })

  it('throws when useTheme is used outside provider', () => {
    // Suppress expected error output in test console
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<ThemeReader />)).toThrow()
    consoleSpy.mockRestore()
  })

  it('WORLDS contains all three world definitions', () => {
    expect(WORLDS).toHaveProperty('default')
    expect(WORLDS).toHaveProperty('photography')
    expect(WORLDS).toHaveProperty('design')
  })
})
