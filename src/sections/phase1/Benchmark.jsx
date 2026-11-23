import { Check, X } from 'lucide-react'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { benchmark, benchmarkFeatures, competitorAnalysis } from '../../data/project'

function Cell({ v }) {
  if (v === true)
    return (
      <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-mint-glow/15">
        <Check className="h-4 w-4 text-mint-glow" />
      </span>
    )
  if (v === 'partial') return <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-300">Partiel</span>
  return (
    <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-rose-500/10">
      <X className="h-4 w-4 text-rose-400/80" />
    </span>
  )
}

export default function Benchmark() {
  return (
    <Section id="benchmark" eyebrow="Benchmark" title="Observer les concurrents" subtitle="Huit acteurs comparés sur les cinq briques du parcours de stationnement.">
      <Reveal>
        <div className="glass overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] text-left text-xs uppercase tracking-wider text-slate-400">
                <th className="px-5 py-4 font-medium">Concurrent</th>
                {benchmarkFeatures.map((f) => (
                  <th key={f} className="px-3 py-4 text-center font-medium">{f}</th>
                ))}
                <th className="px-5 py-4 text-right font-medium">Score</th>
              </tr>
            </thead>
            <tbody>
              {benchmark.map((row) => {
                const score = row.values.reduce((s, v) => s + (v === true ? 1 : v === 'partial' ? 0.5 : 0), 0)
                return (
                  <tr
                    key={row.name}
                    className={`border-b border-white/[0.04] transition ${row.highlight ? 'bg-mint-glow/[0.07] shadow-[inset_3px_0_0_0_#00FFA3]' : 'hover:bg-white/[0.02]'}`}
                  >
                    <td className={`px-5 py-3.5 font-medium ${row.highlight ? 'text-mint-glow' : 'text-white'}`}>{row.name}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-3 py-3.5 text-center">
                        <Cell v={v} />
                      </td>
                    ))}
                    <td className="px-5 py-3.5">
                      <div className="ml-auto flex w-28 items-center gap-2">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                          <div className={`h-full rounded-full ${row.highlight ? 'bg-mint-glow' : 'bg-indigo-glow/70'}`} style={{ width: `${(score / 5) * 100}%` }} />
                        </div>
                        <span className="w-8 text-right font-mono text-xs text-slate-400">{score}/5</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {competitorAnalysis.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06}>
            <Card className="h-full">
              <div className="mb-4 font-display text-lg font-semibold text-white">{c.name}</div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-mint-glow/80">Forces</div>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {c.strengths.map((s) => (
                      <li key={s} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint-glow" />{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-rose-400/80">Faiblesses</div>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    {c.weaknesses.map((s) => (
                      <li key={s} className="flex gap-2"><X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-rose-400" />{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
