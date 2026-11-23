import { motion } from 'framer-motion'
import { Section, Card, Reveal, Quote } from '../../components/ui/primitives'
import Icon from '../../components/ui/Icon'
import { uspV1, uspPillars } from '../../data/project'

function InnovationTriangle() {
  const pts = [
    { x: 200, y: 40, label: 'Réservation prédictive' },
    { x: 360, y: 310, label: 'Détection temps réel' },
    { x: 40, y: 310, label: 'Guidage à la place' },
  ]
  const path = `M${pts[0].x},${pts[0].y} L${pts[1].x},${pts[1].y} L${pts[2].x},${pts[2].y} Z`
  return (
    <svg viewBox="0 0 400 360" className="mx-auto w-full max-w-md" role="img" aria-label="Triangle d'innovation Smart Parking">
      <defs>
        <linearGradient id="tri" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#00D1FF" />
          <stop offset="50%" stopColor="#5B7FFF" />
          <stop offset="100%" stopColor="#00FFA3" />
        </linearGradient>
        <radialGradient id="core">
          <stop offset="0%" stopColor="#00FFA3" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#00D1FF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00D1FF" stopOpacity="0" />
        </radialGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>
      <path d={path} fill="url(#tri)" opacity="0.06" />
      <path d={path} fill="none" stroke="url(#tri)" strokeWidth="6" opacity="0.35" filter="url(#blur)" />
      <motion.path d={path} fill="none" stroke="url(#tri)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeInOut' }} />
      {pts.map((p) => (
        <line key={p.label} x1={p.x} y1={p.y} x2="200" y2="220" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 5" />
      ))}
      <circle cx="200" cy="220" r="70" fill="url(#core)">
        <animate attributeName="r" values="55;75;55" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="220" r="34" fill="#0B1020" stroke="#00FFA3" strokeWidth="1.5" />
      <text x="200" y="216" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Smart</text>
      <text x="200" y="231" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">Parking</text>
      {pts.map((p, i) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="9" fill="#0B1020" stroke="#00D1FF" strokeWidth="2" />
          <circle cx={p.x} cy={p.y} r="3.5" fill="#00D1FF">
            <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
          <text x={p.x} y={i === 0 ? p.y - 18 : p.y + 30} textAnchor={i === 1 ? 'end' : i === 2 ? 'start' : 'middle'} dx={i === 1 ? 30 : i === 2 ? -30 : 0} fill="#cbd5e1" fontSize="13" fontWeight="600">
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

export default function USP() {
  return (
    <Section id="usp" eyebrow="USP" title="Ta différence" subtitle="Déduite du diagnostic et du mapping concurrentiel.">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <InnovationTriangle />
        </Reveal>
        <Reveal delay={0.1}>
          <Quote>{uspV1}</Quote>
        </Reveal>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {uspPillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.07}>
            <Card className="h-full">
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-glow/20 to-indigo-glow/20 ring-1 ring-white/10">
                  <Icon name={p.icon} className="h-5 w-5 text-cyan-glow" />
                </span>
                <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
              </div>
              <div className="font-semibold text-white">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
