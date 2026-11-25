import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, AlertCircle } from 'lucide-react'
import Section from './Section.jsx'
import { CONTACT_EMAIL, GITHUB, LINKEDIN } from '../data.js'

const field = 'mt-2 w-full rounded-lg border border-white/15 bg-bg px-4 py-3 text-ink placeholder:text-muted/60 focus:border-sky focus:outline-none'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [notice, setNotice] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (!CONTACT_EMAIL || CONTACT_EMAIL.includes('example.com')) {
      setNotice('The portfolio owner needs to add a real contact email in src/data.js before this form can send messages.')
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${f.name}`)
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }
  const link = 'flex items-center gap-3 text-muted transition hover:text-sky'
  return (
    <Section id="contact" title="Let's connect" alt intro="Interested in an entry-level opportunity, technical collaboration or networking discussion? Feel free to get in touch.">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-white/10 bg-bg/50 p-6 sm:p-7">
          <label className="block text-sm font-medium">Name<input required className={field} value={f.name} onChange={set('name')} autoComplete="name" placeholder="Your name" /></label>
          <label className="block text-sm font-medium">Email<input required type="email" className={field} value={f.email} onChange={set('email')} autoComplete="email" placeholder="you@example.com" /></label>
          <label className="block text-sm font-medium">Message<textarea required rows={5} className={field} value={f.message} onChange={set('message')} placeholder="How can we connect?" /></label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"><Send size={16} aria-hidden="true" /> Send message</button>
          {notice && <p role="status" className="flex gap-2 text-xs leading-relaxed text-amber-500"><AlertCircle size={16} className="shrink-0" />{notice}</p>}
          <p className="text-xs text-muted">This static-site form opens your default email application; it does not send data to a server.</p>
        </form>
        <div className="flex flex-col justify-center gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-sky">Contact details</p>
            <h3 className="mt-2 font-display text-2xl font-bold">Mahmoud Saied</h3>
            <p className="mt-2 max-w-sm leading-relaxed text-muted">Network Engineer | IT Infrastructure<br />Giza, Egypt</p>
          </div>
          <ul className="space-y-5">
            <li><a className={link} href={CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : '#contact'}><Mail className="text-sky" size={20} aria-hidden="true" />{CONTACT_EMAIL || 'Email address to be added'}</a></li>
            <li><a className={link} href={LINKEDIN} target="_blank" rel="noopener noreferrer"><Linkedin className="text-sky" size={20} aria-hidden="true" />LinkedIn profile</a></li>
            <li><a className={link} href={GITHUB} target="_blank" rel="noopener noreferrer"><Github className="text-sky" size={20} aria-hidden="true" />GitHub profile</a></li>
            <li className={link}><MapPin className="text-sky" size={20} aria-hidden="true" />Giza, Egypt</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
