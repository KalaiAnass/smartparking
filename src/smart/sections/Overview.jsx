import { motion } from 'framer-motion'
import { ArrowRight, ParkingCircle, Share2, Route, CheckCircle2, CircleDashed, AlertTriangle, Gavel } from 'lucide-react'
import { axes, heroKpis, synthese, proofLegend, donneesTravail, hypothesesDepart, reservationFlow, etapes, asOf } from '../../data/smart'
import { fmtNum, Section, Card, Reveal } from '../../components/ui/primitives'
import { Proof, SrcLink } from '../ui'

const axisIcons = { ParkingCircle, Share2, Route }

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-pan opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-glow/20 blur-[120px]" />
      <div className="absolute right-[-10%] top-[-10%] h-[380px] w-[380px] rounded-full bg-cyan-glow/15 blur-[100px]" />
      <div className="absolute bottom-[-15%] left-[-5%] h-[360px] w-[360px] rounded-full bg-mint-glow/10 blur-[100px]" />
    </div>
  )
}

export function Hero() {
  return (
    <section id="accueil" data-section="accueil" className="relative -mx-4 overflow-hidden px-4 pb-10 pt-24 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 lg:pt-16">
      <Backdrop />
      <div className="relative z-10 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="chip mb-6 border-cyan-glow/30 text-cyan-glow">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-glow" /> Étude stratégique · étape 1 sur 12 livrée
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-7xl"
        >
          Projet <span className="text-gradient">SMART</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 font-display text-2xl font-medium text-slate-200 sm:text-3xl">
          Stratégie de développement et d'innovation d'EasyPark
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
          Faire évoluer l'offre et l'application EasyPark autour de trois axes : réserver, partager, se déplacer. L'analyse est menée du point de vue de la direction d'EasyPark, sur le marché français.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="mt-8 flex flex-wrap gap-3">
          <a href="#synthese" className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-ink-900 shadow-glow transition hover:brightness-110">
            Lire la synthèse <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#profil" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-glow/40 hover:bg-white/10">
            Voir le diagnostic
          </a>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:gap-4 md:grid-cols-3">
          {axes.map((a, i) => {
            const Ico = axisIcons[a.icon]
            return (
              <motion.div key={a.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 + i * 0.1 }} className="glass glass-hover p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Ico className="h-5 w-5 text-cyan-glow" />
                  </span>
                  <span className="font-display text-lg font-semibold text-white">{a.name}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{a.pitch}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">{a.scope}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {heroKpis.map((k, i) => (
            <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }} className="glass flex flex-col p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {k.text ?? `${k.prefix ?? ''}${fmtNum(k.value, k.decimals ?? 0)}${k.suffix ?? ''}`}
                </div>
                <Proof code="F" />
              </div>
              <div className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-400 sm:text-sm">{k.label}</div>
              <div className="mt-2">
                <SrcLink href={k.src} />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
          Projet académique : cette étude n'est pas une publication officielle d'EasyPark ou d'Arrive et n'utilise aucune donnée interne. Les chiffres viennent de sources publiques consultées le {asOf}.
        </p>
      </div>
    </section>
  )
}

export function Synthese() {
  return (
    <Section id="synthese" eyebrow="Synthèse pour la direction" title="Lancer SMART en assemblant ce que le groupe possède déjà" subtitle={synthese.lead}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {synthese.constats.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-glow">0{i + 1}</span>
                <Proof code={c.proof} />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.text}</p>
            </Card>
          </Reveal>
        ))}
        <Reveal delay={0.3}>
          <div className="h-full rounded-2xl border border-cyan-glow/25 bg-gradient-to-br from-cyan-glow/[0.08] via-indigo-glow/[0.06] to-mint-glow/[0.05] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Gavel className="h-4 w-4 text-cyan-glow" /> Décisions attendues avant l'étape 2
            </div>
            <ol className="mt-3 space-y-2.5">
              {synthese.decisions.map((d, i) => (
                <li key={d} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-[11px] font-semibold text-white">{i + 1}</span>
                  {d}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

export function Cadre() {
  return (
    <Section
      id="cadre"
      eyebrow="Cadre de l'étude"
      title="Une étude en 12 étapes, chaque chiffre avec sa preuve"
      subtitle="Point de vue de la direction d'EasyPark, marché français. L'étude repart de zéro, sans reprendre les conclusions des travaux précédents."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {proofLegend.map((p) => (
          <Card key={p.code} className="flex gap-4">
            <Proof code={p.code} className="h-7 min-w-7 text-xs" />
            <div>
              <div className="font-semibold text-white">{p.label}</div>
              <p className="mt-1 text-sm text-slate-400">{p.text}</p>
            </div>
          </Card>
        ))}
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Données de travail fournies</h3>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {donneesTravail.map((d) => (
          <Card key={d.label} className="p-4 sm:p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{d.label}</div>
            <div className="mt-2 font-display text-2xl font-semibold text-white">{d.value}</div>
            <div className="mt-1 text-xs leading-relaxed text-slate-400">{d.note}</div>
          </Card>
        ))}
      </div>
      <div className="mt-4 flex gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.05] p-4 text-sm leading-relaxed text-slate-300">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-200" />
        <p>
          Ces moyens sont très inférieurs à ceux d'un groupe présent dans des milliers de villes. L'équipe les traite comme les moyens alloués au projet SMART pour une phase pilote. Ce point est à confirmer : il conditionne les étapes 9 et 10.
        </p>
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Hypothèses de départ à valider</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {hypothesesDepart.map((h) => (
          <Card key={h.axe}>
            <div className="font-semibold text-white">{h.axe}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.text}</p>
            <div className="chip mt-3">{h.status}</div>
          </Card>
        ))}
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Smart Parking : comment la réservation fonctionne</h3>
      <div className="grid gap-3 md:grid-cols-3">
        {reservationFlow.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="relative h-full rounded-2xl border border-cyan-glow/20 bg-cyan-glow/[0.04] p-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient font-display font-bold text-ink-900">{s.n}</span>
              <div className="mt-3 font-semibold text-white">{s.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
              {i < reservationFlow.length - 1 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-cyan-glow/60 md:block" />}
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Plan de l'étude</h3>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {etapes.map((e) => {
          const done = e.status === 'Livrée'
          return (
            <div key={e.n} className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${done ? 'border-mint-glow/30 bg-mint-glow/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'}`}>
              <span className={`font-mono text-sm ${done ? 'text-mint-glow' : 'text-slate-500'}`}>{String(e.n).padStart(2, '0')}</span>
              <span className={`flex-1 text-sm ${done ? 'text-white' : 'text-slate-400'}`}>{e.label}</span>
              {done ? <CheckCircle2 className="h-4 w-4 text-mint-glow" aria-label="Livrée" /> : <CircleDashed className="h-4 w-4 text-slate-600" aria-label="À venir" />}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
