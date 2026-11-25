import { GraduationCap } from 'lucide-react'
import Section from './Section.jsx'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex items-start gap-5 rounded-xl border border-white/10 bg-surface p-6 sm:p-8">
        <GraduationCap className="mt-1 shrink-0 text-sky" size={30} aria-hidden="true" />
        <div>
          <h3 className="font-display text-lg font-semibold">Bachelor's Degree in Communication and Electronics Engineering</h3>
          <p className="mt-1 text-muted">Institute of Aviation Engineering and Technology (IAET), Giza, Egypt</p>
          <p className="mt-1 text-sm text-muted">Graduation year: 2026</p>
        </div>
      </div>
    </Section>
  )
}
