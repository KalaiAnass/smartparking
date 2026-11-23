import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import Icon from '../../components/ui/Icon'
import { channels } from '../../data/project'

const all = [
  ...channels.b2c.map((c) => ({ ...c, seg: 'B2C' })),
  ...channels.b2b.map((c) => ({ ...c, seg: 'B2B' })),
]

function Network({ sel, setSel }) {
  const W = 560
  const H = 460
  const cx = W / 2
  const cy = H / 2
  const nodes = all.map((c, i) => {
    // B2C sur l'arc gauche/haut, B2B sur l'arc droit/bas
    const isB2C = c.seg === 'B2C'
    const list = isB2C ? channels.b2c : channels.b2b
    const idx = isB2C ? i : i - channels.b2c.length
    const start = isB2C ? 100 : -55
    const span = isB2C ? 160 : 110
    const a = ((start + (span * idx) / Math.max(1, list.length - 1)) * Math.PI) / 180
    const r = isB2C ? 185 : 175
    return { ...c, i, x: cx + Math.cos(a) * r, y: cy - Math.sin(a) * r * 0.85 }
  })
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
      {nodes.map((n) => (
        <g key={`l-${n.name}`}>
          <line x1={cx} y1={cy} x2={n.x} y2={n.y} stroke={n.seg === 'B2C' ? '#00D1FF' : '#00FFA3'} strokeOpacity={sel === n.i ? 0.8 : 0.18} strokeWidth={sel === n.i ? 2 : 1} />
          <circle r="3" fill={n.seg === 'B2C' ? '#00D1FF' : '#00FFA3'}>
            <animateMotion dur={`${2 + (n.i % 3) * 0.6}s`} repeatCount="indefinite" path={`M${n.x},${n.y} L${cx},${cy}`} />
          </circle>
        </g>
      ))}
      <circle cx={cx} cy={cy} r="62" fill="rgba(0,209,255,0.08)">
        <animate attributeName="r" values="56;70;56" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r="48" fill="#0B1020" stroke="url(#ng)" strokeWidth="2" />
      <defs>
        <linearGradient id="ng"><stop offset="0%" stopColor="#00D1FF" /><stop offset="100%" stopColor="#00FFA3" /></linearGradient>
      </defs>
      <text x={cx} y={cy - 3} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Smart</text>
      <text x={cx} y={cy + 13} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">Parking AI</text>
      {nodes.map((n) => (
        <g key={n.name} onClick={() => setSel(n.i)} onMouseEnter={() => setSel(n.i)} style={{ cursor: 'pointer' }}>
          <circle cx={n.x} cy={n.y} r={sel === n.i ? 26 : 22} fill="#111831" stroke={n.seg === 'B2C' ? '#00D1FF' : '#00FFA3'} strokeOpacity={sel === n.i ? 1 : 0.4} strokeWidth="1.5" />
          <foreignObject x={n.x - 10} y={n.y - 10} width="20" height="20">
            <Icon name={n.icon} className={`h-5 w-5 ${n.seg === 'B2C' ? 'text-cyan-glow' : 'text-mint-glow'}`} />
          </foreignObject>
          <text x={n.x} y={n.y + 40} textAnchor="middle" fill={sel === n.i ? '#fff' : '#94a3b8'} fontSize="12" fontWeight="600">{n.name}</text>
        </g>
      ))}
    </svg>
  )
}

export default function Channels() {
  const [sel, setSel] = useState(0)
  const c = all[sel]
  return (
    <Section
      id="channels"
      eyebrow="1 · Canaux"
      title="Écosystème d'acquisition"
      subtitle="Objectif : transformer l'intérêt généré par le pitch V2 en utilisateurs, partenaires et clients B2B. Canaux choisis à partir du ZMOT V1, du Customer Journey V2 et des cibles B2C / B2B."
    >
      <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <Card hover={false} className="p-2 sm:p-4">
            <Network sel={sel} setSel={setSel} />
            <div className="flex justify-center gap-5 pb-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-glow" /> B2C — Automobilistes</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-mint-glow" /> B2B — Gestionnaires</span>
            </div>
          </Card>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div key={c.name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
            <Card hover={false}>
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.seg === 'B2C' ? 'bg-cyan-glow/15 text-cyan-glow' : 'bg-mint-glow/15 text-mint-glow'}`}><Icon name={c.icon} className="h-5 w-5" /></span>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{c.seg}</div>
                  <div className="font-display text-xl font-semibold text-white">{c.name}</div>
                </div>
              </div>
              <div className="mt-4 rounded-xl border-l-2 border-cyan-glow bg-white/[0.03] px-4 py-3 text-slate-200">« {c.moment} »</div>
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{c.seg === 'B2B' ? 'Cibles / exemples' : 'Contenus / mots-clés'}</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {c.detail.map((d) => <span key={d} className="chip">{d}</span>)}
              </div>
              <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Objectif</div>
              <div className="mt-2 space-y-1.5">
                {c.goals.map((g) => <div key={g} className="flex items-center gap-2 text-sm text-white"><Check className="h-4 w-4 text-mint-glow" />{g}</div>)}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
