import { motion } from 'framer-motion'
import { ArrowRight, ParkingCircle, Navigation, Share2, CheckCircle2, CircleDashed } from 'lucide-react'
import { offres, heroKpis, synthese, proofLegend, parties, consignes, reglesPrevisionnel, asOf } from '../../data/dossier'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { Proof, SrcLink, SubTitle, TableWrap, Th, Td } from '../ui'

const etatStyles = {
  fait: { cls: 'border-mint-glow/30 bg-mint-glow/10 text-mint-glow', label: 'Fait' },
  partiel: { cls: 'border-amber-300/30 bg-amber-300/10 text-amber-200', label: 'Partiel' },
  afaire: { cls: 'border-white/15 bg-white/5 text-slate-300', label: 'À faire' },
}

const icons = { ParkingCircle, Navigation, Share2 }

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
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint-glow" /> Dossier stratégique · étapes 1 et 2 sur 10 livrées
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-bold leading-[1] tracking-tight text-white sm:text-6xl"
        >
          EasyPark : <span className="text-gradient">Smart Parking</span> et <span className="text-gradient">Smart Sharing</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-5 font-display text-xl font-medium text-slate-200 sm:text-2xl">
          Faire évoluer l'offre et le modèle économique d'EasyPark, sans nouvelle app ni nouvelle marque
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
          Étape 1 : diagnostic d'EasyPark et audit de son application en France. Étape 2 : marché, benchmark concurrentiel et mappings V1 et V2.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55 }} className="mt-8 flex flex-wrap gap-3">
          <a href="#synthese" className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-ink-900 shadow-glow transition hover:brightness-110">
            Étape 1 : diagnostic <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#e2-synthese" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-cyan-glow/40 hover:bg-white/10">
            Étape 2 : benchmark
          </a>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:gap-4 md:grid-cols-3">
          {offres.map((o, i) => {
            const Ico = icons[o.icon]
            return (
              <motion.div key={o.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.65 + i * 0.1 }} className="glass glass-hover flex flex-col p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Ico className="h-5 w-5 text-cyan-glow" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold leading-tight text-white">{o.name}</span>
                    <span className="block text-xs text-slate-400">{o.level}</span>
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{o.text}</p>
                <p className="mt-3 text-xs text-cyan-glow/90">{o.model}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {heroKpis.map((k, i) => (
            <motion.div key={k.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 + i * 0.08 }} className="glass flex flex-col p-4 sm:p-5">
              <div className="flex items-start justify-between gap-2">
                <div className="font-display text-2xl font-semibold text-white sm:text-3xl">{k.value}</div>
                <Proof code="V" />
              </div>
              <div className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-400 sm:text-sm">{k.label}</div>
              <div className="mt-2">
                <SrcLink href={k.src} />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
          Projet académique : ce dossier n'est pas une publication officielle d'EasyPark ou d'Arrive et n'utilise aucune donnée interne. Les chiffres viennent de sources publiques consultées jusqu'au {asOf}.
        </p>
      </div>
    </section>
  )
}

export function Synthese() {
  return (
    <Section id="synthese" eyebrow="Synthèse de l'étape 1" title="La moitié du parcours Smart Parking existe déjà ; son cœur manque" subtitle={synthese.lead}>
      <div className="grid gap-4 md:grid-cols-2">
        {synthese.quadrants.map((q, i) => (
          <Reveal key={q.q} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-glow/90">{q.q}</span>
                <Proof code={q.proof} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{q.a}</p>
              {q.note && <p className="mt-1.5 text-xs text-slate-500">{q.note}</p>}
            </Card>
          </Reveal>
        ))}
      </div>
      <SubTitle>Cinq constats pour la suite</SubTitle>
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
      </div>
    </Section>
  )
}

export function Methode() {
  return (
    <Section
      id="methode"
      eyebrow="Méthode et consignes"
      title="Une mission en 10 étapes, alignée sur les consignes du cours"
      subtitle="Le dossier est écrit du point de vue des équipes d'EasyPark et repart de zéro. Une fonctionnalité n'est dite absente que si les pages officielles d'EasyPark France ont été consultées sans la trouver ; un test sur téléphone reste à faire."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <SubTitle>Plan de la mission</SubTitle>
      <div className="grid gap-2 sm:grid-cols-2">
        {parties.map((e) => {
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

      <SubTitle>Correspondance avec les consignes du cours</SubTitle>
      <p className="-mt-2 mb-4 max-w-3xl text-sm leading-relaxed text-slate-400">
        Soutenance de 20 à 30 minutes en quatre blocs de 5 minutes, puis 10 minutes de questions. Chaque livrable demandé a sa place dans le dossier.
      </p>
      <TableWrap minWidth={900}>
        <thead>
          <tr>
            <Th>Bloc de soutenance</Th>
            <Th>Livrables exigés</Th>
            <Th>Où dans le dossier</Th>
            <Th>État</Th>
          </tr>
        </thead>
        <tbody>
          {consignes.map((c) => (
            <tr key={c.livrables} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{c.bloc}</Td>
              <Td>{c.livrables}</Td>
              <Td className="text-slate-400">{c.ou}</Td>
              <Td>
                <span className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${etatStyles[c.etat].cls}`}>{etatStyles[c.etat].label}</span>
                {c.note && <div className="mt-1 text-xs text-slate-500">{c.note}</div>}
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Règles du prévisionnel (notes de séance)</SubTitle>
      <p className="-mt-2 mb-4 max-w-3xl text-sm leading-relaxed text-slate-400">Données par le professeur ; elles s'appliqueront au business plan de l'étape 8.</p>
      <div className="grid gap-3 md:grid-cols-2">
        {reglesPrevisionnel.map((r, i) => (
          <Card key={r.regle} className="flex gap-4">
            <span className="font-mono text-sm text-cyan-glow">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <div className="text-sm font-semibold leading-relaxed text-white">{r.regle}</div>
              <p className="mt-1 text-sm text-slate-400">{r.application}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
