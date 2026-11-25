import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Entry-level, hands-on skills from coursework, training and lab practice.">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map(({ title, icon: Icon, items }) => (
          <article key={title} className="rounded-xl border border-white/10 bg-surface p-6">
            <h3 className="flex items-center gap-3 font-display text-lg font-semibold"><Icon className="text-sky" size={22} aria-hidden="true" />{title}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {items.map(([label, ItemIcon]) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-muted"><ItemIcon size={16} className="shrink-0 text-accent" aria-hidden="true" />{label}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
