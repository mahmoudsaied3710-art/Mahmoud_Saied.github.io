import Section from './Section.jsx'
import { timeline } from '../data.js'

const style = { Training: 'bg-sky/15 text-sky', 'Hands-on practice': 'bg-accent/20 text-blue-300' }

export default function Experience() {
  return (
    <Section id="experience" title="Experience and training" alt intro="Professional employment: none yet. As a fresh graduate, this section separates formal training from hands-on practice.">
      <ol className="relative ml-2 border-l border-white/15">
        {timeline.map((t) => (
          <li key={t.title} className="mb-8 ml-6 last:mb-0">
            <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full border-2 border-bg bg-accent" aria-hidden="true" />
            <span className={`rounded px-2 py-0.5 text-xs font-medium ${style[t.kind]}`}>{t.kind}</span>
            <h3 className="mt-2 font-display font-semibold">{t.title}</h3>
            <p className="text-sm text-muted">{t.org}</p>
            {t.note && <p className="mt-1 max-w-2xl text-sm text-muted">{t.note}</p>}
          </li>
        ))}
      </ol>
    </Section>
  )
}
