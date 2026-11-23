import { Section, Card, Reveal } from '../../components/ui/primitives'
import QuadrantChart from '../../components/charts/QuadrantChart'
import { mappingV1, mappingV1Reading } from '../../data/project'

export default function MappingV1() {
  return (
    <Section id="mapping-v1" eyebrow="Mapping concurrentiel V1" title="Positionner les concurrents sur une carte" subtitle="Automatisation du parcours client × garantie de disponibilité réelle d'une place.">
      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Card hover={false}>
            <QuadrantChart data={mappingV1} xLabel="Niveau d'automatisation du parcours client →" yLabel="Garantie de disponibilité réelle →" />
          </Card>
        </Reveal>
        <Reveal delay={0.1}>
          <Card hover={false} className="h-full">
            <div className="mb-4 text-sm font-semibold text-white">Lecture</div>
            <div className="space-y-3">
              {mappingV1Reading.map((r, i) => (
                <div key={r} className={`rounded-xl border px-4 py-3 text-sm ${i === mappingV1Reading.length - 1 ? 'border-mint-glow/30 bg-mint-glow/[0.06] text-white' : 'border-white/[0.06] bg-white/[0.02] text-slate-300'}`}>
                  {r}
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl bg-white/[0.03] p-3">
                <div className="text-slate-500">Axe horizontal</div>
                <div className="mt-1 text-slate-200">Automatisation du parcours</div>
              </div>
              <div className="rounded-xl bg-white/[0.03] p-3">
                <div className="text-slate-500">Axe vertical</div>
                <div className="mt-1 text-slate-200">Garantie de disponibilité</div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
