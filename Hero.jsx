import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, MapPin, ArrowRight, BriefcaseBusiness } from 'lucide-react'
import Topology from './Topology.jsx'
import { GITHUB, LINKEDIN, CV_FILE } from '../data.js'

const btn = 'inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:min-h-[88vh] md:grid-cols-[1.15fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="flex flex-wrap items-center gap-2 text-sm text-sky"><MapPin size={16} aria-hidden="true" /> Giza, Egypt <span className="text-muted">·</span> <BriefcaseBusiness size={15} aria-hidden="true" /> Open to entry-level opportunities</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">Mahmoud Saied</h1>
          <p className="mt-3 font-display text-xl font-semibold text-accent sm:text-2xl">Network Engineer | IT Infrastructure</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Communication and Electronics Engineering graduate with CCNA training, hands-on networking practice, and a graduation project involving a real-time 5G/6G wireless prototype. Interested in starting my career in Network Engineering, NOC, IT Infrastructure, IT Support or Telecommunications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`${import.meta.env.BASE_URL}${CV_FILE}`} download className={`${btn} bg-accent text-white hover:bg-blue-500`}><Download size={18} aria-hidden="true" /> Download CV</a>
            <a href="#projects" className={`${btn} border border-white/15 hover:border-sky hover:text-sky`}><ArrowRight size={18} aria-hidden="true" /> View Projects</a>
            <a href="#contact" className={`${btn} border border-white/15 hover:border-sky hover:text-sky`}><Mail size={18} aria-hidden="true" /> Contact Me</a>
          </div>
          <div className="mt-8 flex gap-4 text-muted">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-ink"><Github /></a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-ink"><Linkedin /></a>
          </div>
        </motion.div>
        <div className="relative flex justify-center md:justify-end"><div className="absolute inset-8 rounded-full bg-sky/10 blur-3xl" aria-hidden="true" /><div className="relative float-slow"><Topology /></div></div>
      </div>
    </section>
  )
}
