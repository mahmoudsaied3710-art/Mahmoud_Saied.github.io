import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Github, Image as ImageIcon, RadioTower, Router, Server, Cpu, ArrowDownUp } from 'lucide-react'
import Section from './Section.jsx'
import { project } from '../data.js'

function Architecture() {
  const blocks = [
    { icon: RadioTower, title: 'Transmitter', sub: 'NOMA signal generation' },
    { icon: Router, title: 'USRP-2920', sub: 'RF transmission / reception' },
    { icon: Server, title: 'Receiver', sub: 'SIC and signal recovery' },
  ]
  return (
    <div className="rounded-xl border border-white/10 bg-bg/70 p-5 sm:p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-sky">High-level system flow</p>
      <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {blocks.map(({ icon: Icon, title, sub }, i) => <div key={title} className="contents">
          <div className="rounded-lg border border-white/10 bg-surface p-4 text-center">
            <Icon className="mx-auto text-sky" size={23} />
            <p className="mt-2 text-sm font-semibold">{title}</p>
            <p className="mt-1 text-xs text-muted">{sub}</p>
          </div>
          {i < blocks.length - 1 && <ArrowDownUp className="mx-auto rotate-90 text-accent sm:rotate-0" size={18} aria-hidden="true" />}
        </div>)}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted">Conceptual overview based on the project description; it is not a detailed hardware schematic.</p>
    </div>
  )
}

export default function Project() {
  const [open, setOpen] = useState(true)
  return (
    <Section id="projects" title="Featured project" intro="A final-year team project combining wireless communications theory, software-defined radio and real-time prototyping.">
      <article className="overflow-hidden rounded-2xl border border-accent/30 bg-surface shadow-glow">
        <div className="grid lg:grid-cols-[.85fr_1.15fr]">
          <div className="flex min-h-[260px] flex-col items-center justify-center border-b border-white/10 bg-bg/70 p-8 text-center lg:border-b-0 lg:border-r">
            <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl border border-sky/20 bg-sky/10"><Cpu size={30} className="text-sky" /></div>
            <p className="font-display text-lg font-semibold">CR-NOMA · 5G / 6G</p>
            <p className="mt-2 max-w-xs text-sm text-muted">USRP-based real-time wireless communication prototype</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted"><ImageIcon size={15} /> Project photos can be added here</div>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[.18em] text-sky">Graduation project</p>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug sm:text-2xl">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {project.tech.map((t) => <li key={t} className="rounded-md border border-sky/10 bg-accent/10 px-2.5 py-1 text-xs text-sky">{t}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="project-details" className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500">
                {open ? 'Hide project details' : 'Explore project details'}
                <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              {project.repo && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted hover:text-sky"><Github size={16} aria-hidden="true" /> Repository</a>}
            </div>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && <motion.div id="project-details" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
              <div>
                <h4 className="font-display text-lg font-semibold">System overview</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">The project explores a two-user Non-Orthogonal Multiple Access (NOMA) scenario within a Cognitive Radio concept. The prototype uses software-defined radio hardware with LabVIEW-based implementation and signal-processing concepts including power allocation and Successive Interference Cancellation.</p>
                <div className="mt-5"><Architecture /></div>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold">My technical contributions</h4>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                  {project.contributions.map((c) => <li key={c} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />{c}</li>)}
                </ul>
              </div>
            </div>
          </motion.div>}
        </AnimatePresence>
      </article>
    </Section>
  )
}
