/**
 * pages/Contact.jsx
 * ─────────────────────────────────────────────────────────
 * Contact page with a styled form UI.
 *
 * ⚠️  FORM IS UI-ONLY — not yet wired to a backend.
 *     When ready, connect to Formspree, Resend, or your
 *     preferred form handler by updating handleSubmit().
 *
 * To connect to Formspree:
 * 1. Sign up at formspree.io
 * 2. Create a form and get your endpoint URL
 * 3. Replace the fetch URL in handleSubmit below
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'
import content from '../content'

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const { tokens } = useTheme()
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // ✏️ EDIT: Replace this with your form handler when ready
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // ── Formspree example (uncomment and add your URL) ──
    // try {
    //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //   if (res.ok) { setStatus('success'); setForm(INITIAL_FORM) }
    //   else setStatus('error')
    // } catch {
    //   setStatus('error')
    // }

    // Placeholder: simulate a delay then show success
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
    setForm(INITIAL_FORM)
  }

  // Input + textarea shared style helper
  const fieldStyle = {
    backgroundColor: tokens.surface,
    borderColor: tokens.border,
    color: tokens.primary,
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-32">

        {/* ── Header ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-label opacity-40 mb-4" style={{ color: tokens.accent }}>05 — Contact</p>
          <h1 className="text-section-title" style={{ color: tokens.primary }}>
            Let's connect.
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* ── Left: Form ─────────────────────── */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-label opacity-40" style={{ color: tokens.primary }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="px-4 py-3 border text-sm outline-none focus:border-current transition-colors duration-200"
                  style={fieldStyle}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-label opacity-40" style={{ color: tokens.primary }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="px-4 py-3 border text-sm outline-none focus:border-current transition-colors duration-200"
                  style={fieldStyle}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-label opacity-40" style={{ color: tokens.primary }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="px-4 py-3 border text-sm outline-none focus:border-current transition-colors duration-200"
                style={fieldStyle}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-label opacity-40" style={{ color: tokens.primary }}>
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me what's on your mind..."
                className="px-4 py-3 border text-sm outline-none focus:border-current transition-colors duration-200 resize-none"
                style={fieldStyle}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 text-label font-bold tracking-widest transition-all duration-300 disabled:opacity-50"
              style={{
                backgroundColor: tokens.accent,
                color: tokens.bg,
              }}
            >
              {status === 'submitting' && 'Sending...'}
              {status === 'success'    && 'Message sent ✓'}
              {status === 'error'      && 'Something went wrong — try again'}
              {status === 'idle'       && 'Send Message'}
            </motion.button>
          </motion.form>

          {/* ── Right: Info ─────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <p
                className="text-label opacity-40 mb-4"
                style={{ color: tokens.primary }}
              >
                Say hello
              </p>
              <p
                className="text-lg leading-relaxed opacity-60"
                style={{ color: tokens.primary }}
              >
                Whether it's a speaking opportunity, a collaboration, or just to
                connect — I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {/* ✏️ EDIT: Update email and social links in src/content.js */}
              {[
                { label: 'Email',    value: content.email,                                      href: `mailto:${content.email}` },
                { label: 'LinkedIn', value: content.social.linkedin.replace('https://', ''),    href: content.social.linkedin },
                { label: 'Twitter',  value: `@${content.social.twitter.split('/').pop()}`,      href: content.social.twitter },
              ].map(({ label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-4 border"
                  style={{ borderColor: tokens.border, backgroundColor: tokens.surface }}
                >
                  <span className="text-label opacity-30 w-16 shrink-0" style={{ color: tokens.primary }}>
                    {label}
                  </span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-opacity opacity-70 hover:opacity-100"
                    style={{ color: tokens.accent }}
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
