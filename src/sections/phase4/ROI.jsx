import { useMemo, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { RotateCcw, SlidersHorizontal } from 'lucide-react'
import { Section, Card, Reveal, Counter, ChartTooltip, fmtEUR, fmtNum } from '../../components/ui/primitives'
import { roi } from '../../data/project'

const defaults = { users: roi.b2cUsers, arpu: roi.b2cArpu, parkings: roi.b2bParkings, b2bArpu: roi.b2bArpu, costs: roi.costs, ads: roi.adSpend }

function Slider({ label, value, min, max, step, onChange, fmt }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">{label}</span>
        <span className="font-mono text-white">{fmt(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} className="mt-1.5 w-full accent-[#00D1FF]" />
    </div>
  )
}

export default function ROI() {
  const [p, setP] = useState(defaults)
  const set = (k) => (v) => setP((s) => ({ ...s, [k]: v }))
  const r = useMemo(() => {
    const b2c = p.users * p.arpu
    const b2b = p.parkings * p.b2bArpu
    const revenue = b2c + b2b
    const profit = revenue - p.costs
    return { b2c, b2b, revenue, profit, roi: (profit / p.costs) * 100, roas: revenue / p.ads }
  }, [p])
  const isDefault = Object.keys(defaults).every((k) => defaults[k] === p[k])

  return (
    <Section id="roi" eyebrow="4 · ROI et ROAS" title="Rentabilité de l'année 1" subtitle="Hypothèses du plan : 5 000 utilisateurs B2C à 24 €/an et 15 parkings partenaires à 6 000 €/an. Ajustez les curseurs pour simuler d'autres scénarios.">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: 'Revenus totaux', v: r.revenue, f: (x) => fmtEUR(x), c: 'text-white', sub: `${fmtEUR(r.b2c)} B2C + ${fmtEUR(r.b2b)} B2B` },
          { label: 'Résultat', v: r.profit, f: (x) => fmtEUR(x), c: r.profit >= 0 ? 'text-mint-glow' : 'text-rose-400', sub: `${fmtEUR(r.revenue)} − ${fmtEUR(p.costs)}` },
          { label: 'ROI', v: r.roi, f: (x) => `${fmtNum(x, 1)} %`, c: 'text-cyan-glow', sub: 'Résultat / coûts totaux' },
          { label: 'ROAS', v: r.roas, f: (x) => fmtNum(x, 2), c: 'text-indigo-glow', sub: `Revenus / ${fmtEUR(p.ads)} de dépenses pub.` },
        ].map((k, i) => (
          <Reveal key={k.label} delay={i * 0.06}>
            <Card className="h-full">
              <div className="text-xs font-medium uppercase tracking-wider text-slate-400">{k.label}</div>
              <div className={`mt-3 font-display text-2xl font-semibold sm:text-4xl ${k.c}`}>
                <Counter value={k.v} format={k.f} duration={0.8} />
              </div>
              <div className="mt-2 text-xs text-slate-500">{k.sub}</div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-white"><SlidersHorizontal className="h-4 w-4 text-cyan-glow" /> Simulateur ROI</div>
              <button disabled={isDefault} onClick={() => setP(defaults)} className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 transition hover:text-white disabled:opacity-40">
                <RotateCcw className="h-3 w-3" /> Scénario du plan
              </button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Slider label="Utilisateurs B2C" value={p.users} min={0} max={20000} step={250} onChange={set('users')} fmt={(v) => fmtNum(v)} />
              <Slider label="Revenu moyen B2C / an" value={p.arpu} min={0} max={60} step={1} onChange={set('arpu')} fmt={(v) => fmtEUR(v)} />
              <Slider label="Parkings partenaires" value={p.parkings} min={0} max={60} step={1} onChange={set('parkings')} fmt={(v) => fmtNum(v)} />
              <Slider label="Revenu moyen / parking / an" value={p.b2bArpu} min={1000} max={15000} step={500} onChange={set('b2bArpu')} fmt={(v) => fmtEUR(v)} />
              <Slider label="Coûts totaux" value={p.costs} min={50000} max={300000} step={1000} onChange={set('costs')} fmt={(v) => fmtEUR(v)} />
              <Slider label="Dépenses publicitaires" value={p.ads} min={10000} max={150000} step={1000} onChange={set('ads')} fmt={(v) => fmtEUR(v)} />
            </div>
            <p className="mt-5 text-sm text-slate-400">
              {r.roas >= 1 ? (
                <>Chaque euro investi en publicité génère environ <span className="font-semibold text-white">{fmtNum(r.roas, 1)} €</span> de revenus.</>
              ) : (
                <>Les dépenses publicitaires ne sont pas couvertes par les revenus générés.</>
              )}
            </p>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card hover={false} className="h-full">
            <div className="text-sm font-semibold text-white">Mix de revenus</div>
            <div className="relative h-60">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={[{ name: 'B2C', value: r.b2c }, { name: 'B2B', value: r.b2b }]} dataKey="value" innerRadius="60%" outerRadius="85%" stroke="none" paddingAngle={3}>
                    <Cell fill="#00D1FF" />
                    <Cell fill="#00FFA3" />
                  </Pie>
                  <Tooltip content={<ChartTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-xs text-slate-500">Total</div>
                  <div className="font-display text-xl font-semibold text-white">{fmtEUR(r.revenue)}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-sm">
              <div className="rounded-xl bg-cyan-glow/10 p-2.5"><div className="text-cyan-glow">B2C</div><div className="font-mono text-white">{r.revenue ? Math.round((r.b2c / r.revenue) * 100) : 0} %</div></div>
              <div className="rounded-xl bg-mint-glow/10 p-2.5"><div className="text-mint-glow">B2B</div><div className="font-mono text-white">{r.revenue ? Math.round((r.b2b / r.revenue) * 100) : 0} %</div></div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
