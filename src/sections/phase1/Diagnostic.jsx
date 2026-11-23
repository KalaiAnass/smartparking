import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { User, Building2, Sparkles, Check } from 'lucide-react'
import { Section, Card, Reveal, Bullets } from '../../components/ui/primitives'
import { marketContext, b2cProblems, b2bProblems, opportunity } from '../../data/project'

// Heatmap illustrative d'une ville : chaque cellule = un îlot de stationnement.
// État « Aujourd'hui » : saturation en centre + places vacantes en périphérie.
// État « Smart Parking » : charge lissée grâce à l'allocation prédictive.
function CityHeatmap() {
  const [mode, setMode] = useState('today')
  const cols = 14
  const rows = 8
  const cells = useMemo(() => {
    const out = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dx = (c - cols / 2) / (cols / 2)
        const dy = (r - rows / 2) / (rows / 2)
        const d = Math.sqrt(dx * dx + dy * dy)
        const noise = (Math.sin(r * 12.9898 + c * 78.233) * 43758.5453) % 1
        const today = Math.max(0.05, Math.min(1, 1.05 - d * 0.85 + Math.abs(noise) * 0.25))
        const smart = Math.max(0.55, Math.min(0.88, 0.72 + (Math.abs(noise) - 0.5) * 0.2))
        out.push({ r, c, today, smart })
      }
    }
    return out
  }, [])
  const color = (v) => {
    if (v > 0.92) return 'rgba(255,77,109,0.85)'
    if (v > 0.75) return 'rgba(245,185,70,0.75)'
    if (v > 0.45) return 'rgba(0,255,163,0.55)'
    return 'rgba(91,127,255,0.25)'
  }
  const vals = cells.map((c) => c[mode])
  const saturated = vals.filter((v) => v > 0.92).length
  const vacant = vals.filter((v) => v <= 0.45).length
  const avg = Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 100)

  return (
    <Card hover={false} className="h-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">Heatmap d'occupation urbaine</div>
          <div className="text-xs text-slate-500">Illustration : centre saturé, places vacantes en périphérie</div>
        </div>
        <div className="inline-flex rounded-full border border-white/10 p-1 text-xs">
          {[
            ['today', "Aujourd'hui"],
            ['smart', 'Avec Smart Parking'],
          ].map(([k, l]) => (
            <button key={k} onClick={() => setMode(k)} className={`rounded-full px-3 py-1 transition ${mode === k ? 'bg-white/10 text-white' : 'text-slate-400'}`}>
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {cells.map((c, i) => (
          <motion.div key={i} className="aspect-square rounded-[3px]" animate={{ backgroundColor: color(c[mode]) }} transition={{ duration: 0.6, delay: (c.r + c.c) * 0.015 }} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-xl bg-white/[0.03] p-3">
          <div className="font-display text-xl font-semibold text-rose-400">{saturated}</div>
          <div className="text-[11px] text-slate-500">îlots saturés</div>
        </div>
        <div className="rounded-xl bg-white/[0.03] p-3">
          <div className="font-display text-xl font-semibold text-indigo-glow">{vacant}</div>
          <div className="text-[11px] text-slate-500">îlots sous-utilisés</div>
        </div>
        <div className="rounded-xl bg-white/[0.03] p-3">
          <div className="font-display text-xl font-semibold text-mint-glow">{avg} %</div>
          <div className="text-[11px] text-slate-500">charge moyenne</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-500">
        {[
          ['rgba(255,77,109,0.85)', 'Saturé'],
          ['rgba(245,185,70,0.75)', 'Tendu'],
          ['rgba(0,255,163,0.55)', 'Optimal'],
          ['rgba(91,127,255,0.25)', 'Vacant'],
        ].map(([c, l]) => (
          <span key={l} className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: c }} /> {l}
          </span>
        ))}
      </div>
    </Card>
  )
}

export default function Diagnostic() {
  return (
    <Section id="diagnostic" eyebrow="Diagnostic" title="Contexte et problème à résoudre" subtitle="Le stationnement représente l'un des principaux irritants de la mobilité urbaine.">
      <div className="grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <Card hover={false} className="h-full">
            <div className="mb-4 text-sm font-semibold text-white">Contexte marché</div>
            <Bullets items={marketContext} />
          </Card>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <CityHeatmap />
        </Reveal>
      </div>

      <Reveal>
        <div className="mb-4 mt-10 flex items-center gap-2 text-sm font-semibold text-white">
          <User className="h-4 w-4 text-cyan-glow" /> Problèmes côté utilisateur (B2C)
        </div>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {b2cProblems.map((p, i) => (
          <Reveal key={p.moment} delay={i * 0.08}>
            <Card className="h-full">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-cyan-glow/10 font-mono text-xs text-cyan-glow">{i + 1}</span>
                <span className="font-semibold text-white">{p.moment}</span>
              </div>
              <Bullets items={p.items} color="bg-rose-400" />
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <Building2 className="h-4 w-4 text-indigo-glow" /> Problèmes côté gestionnaire (B2B)
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {b2bProblems.map((t) => (
                <div key={t} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 text-sm text-slate-300">{t}</div>
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card hover={false} className="h-full border-mint-glow/20 bg-mint-glow/[0.03]">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-white">
              <Sparkles className="h-4 w-4 text-mint-glow" /> Opportunité
            </div>
            <p className="mb-4 text-sm text-slate-400">Aucune solution actuelle ne combine :</p>
            <div className="space-y-2">
              {opportunity.map((o, i) => (
                <motion.div
                  key={o}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3.5 py-2.5 text-sm text-white"
                >
                  <Check className="h-4 w-4 text-mint-glow" /> {o}
                </motion.div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
