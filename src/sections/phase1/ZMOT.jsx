import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, MessageCircleQuestion } from 'lucide-react'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import Icon from '../../components/ui/Icon'
import { zmotPersonas } from '../../data/project'

const funnel = ['Recherche Google', 'Comparaison des solutions', "Téléchargement de l'app", 'Adoption du stationnement']

export default function ZMOT() {
  const [active, setActive] = useState(0)
  const p = zmotPersonas[active]
  return (
    <Section
      id="zmot"
      eyebrow="ZMOT V1"
      title="Les moments de recherche en ligne de ta cible"
      subtitle="Le Zero Moment of Truth correspond au moment où le futur client effectue une recherche avant d'utiliser ou d'acheter un service."
    >
      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {zmotPersonas.map((x, i) => (
              <button
                key={x.name}
                onClick={() => setActive(i)}
                className={`flex min-w-[200px] items-center gap-3 rounded-2xl border p-4 text-left transition lg:min-w-0 ${
                  active === i ? 'border-cyan-glow/40 bg-cyan-glow/[0.07]' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/15'
                }`}
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${active === i ? 'bg-brand-gradient text-ink-900' : 'bg-white/5 text-slate-300'}`}>
                  <Icon name={x.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-slate-500">Persona {i + 1} · {x.type}</span>
                  <span className="block text-sm font-semibold text-white">{x.name}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Card hover={false} className="min-h-[360px]">
          <AnimatePresence mode="wait">
            <motion.div key={p.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{p.type === 'B2C' ? 'Recherches Google' : 'Besoins recherchés'}</div>
              <div className="grid gap-2 sm:grid-cols-2">
                {p.queries.map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-full border border-white/10 bg-ink-800/60 px-4 py-2.5 text-sm text-slate-200"
                  >
                    <Search className="h-4 w-4 shrink-0 text-cyan-glow" />
                    {q}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex gap-3 rounded-2xl border border-mint-glow/20 bg-mint-glow/[0.05] p-5">
                <MessageCircleQuestion className="h-5 w-5 shrink-0 text-mint-glow" />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-mint-glow/80">Question cachée</div>
                  <div className="mt-1 font-display text-lg text-white">« {p.question} »</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Card>
      </div>

      <Reveal>
        <div className="mt-6 grid gap-2 sm:grid-cols-4">
          {funnel.map((f, i) => (
            <div key={f} className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-glow/15 to-transparent" style={{ width: `${100 - i * 18}%` }} />
              <div className="relative text-xs text-slate-500">Étape {i + 1}</div>
              <div className="relative text-sm font-medium text-white">{f}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
