import { interests } from '../data.js'
import Section from './Section.jsx'
import { Target, GraduationCap, MapPin } from 'lucide-react'

export default function About() {
  return (
    <Section id="about" title="About me" intro="Communication and Electronics Engineering graduate focused on networking, infrastructure and telecommunications." alt>
      <div className="grid gap-10 md:grid-cols-[1.15fr_.85fr]">
        <div className="space-y-4 leading-relaxed text-muted">
          <p>I am a Communication and Electronics Engineer who graduated in 2026 from the Institute of Aviation Engineering and Technology (IAET) in Giza. I am building my career in Network Engineering and IT Infrastructure through technical coursework, lab practice and hands-on troubleshooting.</p>
          <p>My graduation project focused on a real-time Cognitive Radio NOMA prototype using NI USRP hardware and LabVIEW. It gave me practical exposure to wireless-system configuration, testing, teamwork and technical problem-solving.</p>
          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-bg/60 p-4"><GraduationCap className="shrink-0 text-sky" /><div><p className="text-xs text-muted">Education</p><p className="text-sm font-medium text-ink">B.Sc. Communication & Electronics</p></div></div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-bg/60 p-4"><MapPin className="shrink-0 text-sky" /><div><p className="text-xs text-muted">Based in</p><p className="text-sm font-medium text-ink">Giza, Egypt</p></div></div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-bg/60 p-6">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><Target className="text-sky" size={20} /> Career interests</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {interests.map((i) => <li key={i} className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-sm text-ink">{i}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}
