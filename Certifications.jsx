import { Award, ExternalLink } from 'lucide-react'
import Section from './Section.jsx'
import { certifications } from '../data.js'

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications and courses" alt>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <li key={c.name} className="overflow-hidden rounded-xl border border-white/10 bg-bg transition-colors hover:border-accent/60">
            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-accent/10 to-transparent">
              {c.image ? <img src={`${import.meta.env.BASE_URL}${c.image}`} alt={`${c.name} certificate`} className="h-full w-full object-cover" loading="lazy" /> : <Award size={38} className="text-sky/70" aria-label="Certificate image placeholder" />}
            </div>
            <div className="p-5">
              <h3 className="font-display font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted">{c.provider}</p>
              {c.link
                ? <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm text-sky hover:underline">View certificate <ExternalLink size={14} aria-hidden="true" /></a>
                : <p className="mt-4 text-xs text-muted/70">Certificate link coming soon</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
