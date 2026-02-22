/**
 * Footer.jsx
 * ─────────────────────────────────────────────────────────
 * Minimal site footer.
 * Left: copyright. Right: social links.
 * Responds to the current world's color tokens.
 */

import { useTheme } from '../context/ThemeContext'

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jemiahsius' },
  { label: 'Twitter',  href: 'https://twitter.com/jemiahsius' },
  { label: 'GitHub',   href: 'https://github.com/jemiahsius' },
]

export default function Footer() {
  const { tokens } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t mt-32"
      style={{ borderColor: tokens.border }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p
          className="text-label opacity-40"
          style={{ color: tokens.primary }}
        >
          © {year} Jemiah Sius
        </p>

        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label opacity-30 hover:opacity-80 transition-opacity duration-200"
              style={{ color: tokens.primary }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
