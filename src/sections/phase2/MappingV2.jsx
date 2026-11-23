import { Section, Card, Reveal } from '../../components/ui/primitives'
import QuadrantChart from '../../components/charts/QuadrantChart'
import { mappingV2 } from '../../data/project'

export default function MappingV2() {
  return (
    <Section id="mapping-v2" eyebrow="3 · Mapping concurrentiel V2" title="Intelligence prédictive × Automatisation" subtitle="Après le pivot, Smart Parking AI occupe seul le quadrant supérieur droit.">
      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Card hover={false}>
            <QuadrantChart data={mappingV2} xLabel="Intelligence prédictive →" yLabel="Automatisation du parcours →" />
          </Card>
        </Reveal>
        <div className="grid gap-3">
          {mappingV2.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.06}>
              <div className={`rounded-2xl border p-4 ${c.hero ? 'border-mint-glow/30 bg-mint-glow/[0.06]' : 'border-white/[0.06] bg-white/[0.02]'}`}>
                <div className={`font-semibold ${c.hero ? 'text-mint-glow' : 'text-white'}`}>{c.name}</div>
                <div className="mt-1 text-sm text-slate-400">{c.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
