import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts'
import { Section, Card, Reveal, Counter, fmtEUR } from '../../components/ui/primitives'
import { budget, budgetTotal } from '../../data/project'

const COLORS = ['#5B7FFF', '#7C9BFF', '#00D1FF', '#38E1FF', '#00FFA3', '#7CFFCB', '#F5B946', '#FF8A5B']

function ActiveShape(props) {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props
  return (
    <g>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 8} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} innerRadius={outerRadius + 12} outerRadius={outerRadius + 15} startAngle={startAngle} endAngle={endAngle} fill={fill} />
    </g>
  )
}

export default function Budget() {
  const [active, setActive] = useState(0)
  const a = budget[active]
  const groups = budget.reduce((acc, b) => ({ ...acc, [b.group]: (acc[b.group] || 0) + b.value }), {})
  return (
    <Section id="budget" eyebrow="1 · Budgets" title="147 000 € sur 12 mois" subtitle="Scénario réaliste de startup en phase d'amorçage, avec un MVP déjà développé et un premier déploiement B2B.">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Card hover={false} className="h-full">
            <div className="relative h-80">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={budget}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="62%"
                    outerRadius="84%"
                    paddingAngle={2}
                    activeIndex={active}
                    activeShape={ActiveShape}
                    onMouseEnter={(_, i) => setActive(i)}
                    stroke="none"
                  >
                    {budget.map((b, i) => <Cell key={b.name} fill={COLORS[i]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-xs text-slate-500">{a.name}</div>
                  <div className="font-display text-3xl font-semibold text-white">{fmtEUR(a.value)}</div>
                  <div className="font-mono text-sm text-cyan-glow">{((a.value / budgetTotal) * 100).toFixed(1)} %</div>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {Object.entries(groups).map(([g, v]) => (
                <div key={g} className="rounded-xl bg-white/[0.03] p-3 text-center">
                  <div className="text-[11px] text-slate-500">{g}</div>
                  <div className="font-mono text-sm text-white">{Math.round((v / budgetTotal) * 100)} %</div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card hover={false} className="h-full">
            <div className="space-y-1">
              {budget.map((b, i) => (
                <button key={b.name} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)} className={`w-full rounded-xl px-3 py-2.5 text-left transition ${active === i ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2.5 text-slate-200"><span className="h-2.5 w-2.5 rounded-sm" style={{ background: COLORS[i] }} />{b.name}</span>
                    <span className="font-mono text-white">{fmtEUR(b.value)}</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${(b.value / 60000) * 100}%`, background: COLORS[i] }} />
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-white/10 px-3 pt-4">
              <span className="font-semibold text-white">Total</span>
              <span className="font-display text-2xl font-semibold text-gradient"><Counter value={budgetTotal} format={(v) => fmtEUR(v)} /></span>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
