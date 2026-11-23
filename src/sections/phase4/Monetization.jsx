import { useState } from 'react'
import { Check, Crown, Server, Code2, Percent, Landmark } from 'lucide-react'
import { Section, Card, Reveal, fmtEUR } from '../../components/ui/primitives'
import { monetization } from '../../data/project'

export default function Monetization() {
  const [tier, setTier] = useState(1)
  const [bookings, setBookings] = useState(1000)
  const m = monetization
  return (
    <Section id="monetization" eyebrow="2 · Monétisation" title="Un business model à trois moteurs" subtitle="B2C freemium, B2B SaaS & API, et intelligence de mobilité pour les villes.">
      {/* B2C */}
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">B2C · Freemium</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-white">Gratuit</span>
              <span className="font-display text-3xl font-bold text-white">0 €</span>
            </div>
            <ul className="mt-4 space-y-2">{m.b2cFree.map((f) => <li key={f} className="flex gap-2 text-sm text-slate-300"><Check className="h-4 w-4 text-slate-500" />{f}</li>)}</ul>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-cyan-glow/30 bg-gradient-to-br from-cyan-glow/10 via-indigo-glow/10 to-transparent p-6 shadow-glow">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-cyan-glow"><Crown className="h-3.5 w-3.5" /> B2C · Premium</div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-white">{m.b2cPremium.price.toLocaleString('fr-FR')} €</span>
              <span className="text-slate-400">/ mois</span>
            </div>
            <ul className="mt-4 space-y-2">{m.b2cPremium.features.map((f) => <li key={f} className="flex gap-2 text-sm text-white"><Check className="h-4 w-4 text-mint-glow" />{f}</li>)}</ul>
          </div>
        </Reveal>
      </div>

      {/* B2B */}
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="flex items-center gap-2 font-semibold text-white"><Server className="h-4 w-4 text-indigo-glow" /> SaaS Parking</div>
            <div className="mt-4 space-y-2">
              {m.saas.map((s, i) => (
                <button key={s.size} onClick={() => setTier(i)} className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${tier === i ? 'border-indigo-glow/50 bg-indigo-glow/10 text-white' : 'border-white/[0.06] text-slate-300 hover:border-white/15'}`}>
                  <span>{s.size}</span>
                  <span className="font-mono font-semibold">{s.price} € / mois</span>
                </button>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-white/[0.03] p-3 text-sm text-slate-400">
              Soit <span className="font-mono text-white">{fmtEUR(m.saas[tier].price * 12)}</span> / an par parking.
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card hover={false} className="h-full">
            <div className="flex items-center gap-2 font-semibold text-white"><Code2 className="h-4 w-4 text-cyan-glow" /> API IA Prédictive</div>
            <div className="mt-1 text-sm text-slate-500">Facturation</div>
            <ul className="mt-4 space-y-2">{m.api.map((f) => <li key={f} className="flex gap-2 text-sm text-slate-300"><Check className="h-4 w-4 text-cyan-glow" />{f}</li>)}</ul>
            <div className="mt-6 flex items-center gap-2 font-semibold text-white"><Landmark className="h-4 w-4 text-mint-glow" /> Smart City</div>
            <div className="mt-3 flex flex-wrap gap-1.5">{m.smartCity.map((s) => <span key={s} className="chip">{s}</span>)}</div>
          </Card>
        </Reveal>
        <Reveal delay={0.16}>
          <Card hover={false} className="h-full">
            <div className="flex items-center gap-2 font-semibold text-white"><Percent className="h-4 w-4 text-mint-glow" /> Commission sur réservation</div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-white/[0.03] p-3"><div className="font-display text-xl text-white">{m.commission.booking} €</div><div className="text-[11px] text-slate-500">réservation</div></div>
              <div className="rounded-xl bg-white/[0.03] p-3"><div className="font-display text-xl text-white">{m.commission.rate} %</div><div className="text-[11px] text-slate-500">commission</div></div>
              <div className="rounded-xl bg-mint-glow/10 p-3"><div className="font-display text-xl text-mint-glow">{m.commission.revenue} €</div><div className="text-[11px] text-slate-500">revenu</div></div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between text-sm"><span className="text-slate-400">Réservations / mois</span><span className="font-mono text-white">{bookings.toLocaleString('fr-FR')}</span></div>
              <input type="range" min={100} max={20000} step={100} value={bookings} onChange={(e) => setBookings(+e.target.value)} className="mt-2 w-full accent-[#00FFA3]" />
              <div className="mt-2 text-sm text-slate-400">Revenu commission : <span className="font-mono text-mint-glow">{fmtEUR(bookings * m.commission.revenue)}</span> / mois</div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
