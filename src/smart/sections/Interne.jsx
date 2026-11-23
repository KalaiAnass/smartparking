import { motion } from 'framer-motion'
import { identite, marques, dates, offre, partsMarche, faitsMarche, vrio, faiblesses, S } from '../../data/smart'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { Proof, SrcLink, TableWrap, Th, Td, VrioDot } from '../ui'

const tones = {
  accent: 'bg-cyan-glow',
  indigo: 'bg-indigo-glow',
  mint: 'bg-mint-glow',
  muted: 'bg-slate-500',
}

function MarketShares() {
  return (
    <Card hover={false} className="h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Paiement mobile en voirie : PayByPhone domine</h3>
          <p className="mt-1 text-sm text-slate-400">Part des transactions 2023, fourchettes publiées. Marché de la fourniture d'applications aux villes, en France.</p>
        </div>
        <Proof code="F" />
      </div>
      <div className="mt-6 space-y-5">
        {partsMarche.map((p, i) => (
          <div key={p.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
              <span className={p.tone === 'accent' || p.tone === 'mint' ? 'font-semibold text-white' : 'text-slate-300'}>{p.name}</span>
              <span className="font-mono text-xs text-slate-300">
                {p.low === 0 ? `< ${p.high}` : `${p.low}–${p.high}`} %
              </span>
            </div>
            <div className="relative h-2.5 rounded-full bg-white/[0.06]">
              <motion.div
                className={`absolute inset-y-0 rounded-full ${tones[p.tone]}`}
                style={{ left: `${p.low}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.max(p.high - p.low, 1.5)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
              />
            </div>
            <div className="mt-1 text-[11px] text-slate-500">En valeur : {p.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between font-mono text-[10px] text-slate-600">
        <span>0 %</span>
        <span>50 %</span>
        <span>100 %</span>
      </div>
      <div className="mt-3">
        <SrcLink href={S.adlc}>Autorité de la concurrence, décision 24-DCC-247, points 42 à 44</SrcLink>
      </div>
    </Card>
  )
}

function Timeline() {
  return (
    <Card hover={false} className="h-full">
      <h3 className="font-display text-lg font-semibold text-white">Dates clés</h3>
      <ol className="relative mt-5 space-y-5 border-l border-white/10 pl-5">
        {dates.map((d, i) => (
          <Reveal key={d.date + d.text} delay={i * 0.05} y={12}>
            <li className="relative">
              <span className={`absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-ink-900 ${i === 0 ? 'bg-mint-glow' : 'bg-indigo-glow'}`} />
              <div className="font-mono text-xs text-cyan-glow">{d.date}</div>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-300">{d.text}</p>
              <SrcLink href={d.src} />
            </li>
          </Reveal>
        ))}
      </ol>
    </Card>
  )
}

export function Profil() {
  return (
    <Section
      id="profil"
      eyebrow="Diagnostic interne · 1"
      title="N° 2 de la voirie, dans un groupe qui possède déjà les briques de SMART"
      subtitle="En France, EasyPark est loin derrière PayByPhone. Depuis 2025, il appartient au même groupe que Flowbird, fabricant historique d'horodateurs, et que Parkimeter, un service de réservation de parkings."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {identite.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{c.label}</span>
                <Proof code="F" />
              </div>
              <div className="mt-2 font-display text-2xl font-semibold text-white">{c.value}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{c.text}</p>
              <div className="mt-2">
                <SrcLink href={c.src} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs text-slate-500">Marques du groupe Arrive :</span>
        {marques.map((m) => (
          <span key={m} className="chip">
            {m}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <MarketShares />
        </div>
        <div className="lg:col-span-2">
          <Timeline />
        </div>
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Ce qu'EasyPark vend en France</h3>
      <TableWrap minWidth={760}>
        <thead>
          <tr>
            <Th>Offre</Th>
            <Th>Ce qu'elle fait</Th>
            <Th>Client</Th>
            <Th>Comment elle rapporte</Th>
          </tr>
        </thead>
        <tbody>
          {offre.map((o) => (
            <tr key={o.name} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{o.name}</Td>
              <Td>{o.what}</Td>
              <Td>{o.client}</Td>
              <Td>{o.revenue}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        <SrcLink href={S.adlc}>Autorité de la concurrence</SrcLink>
        <SrcLink href={S.epPricing}>Tarifs EasyPark</SrcLink>
      </div>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Trois faits qui pèsent sur la stratégie</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {faitsMarche.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-white">{f.title}</span>
                <Proof code="F" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400">
        <Proof code="H" className="mr-2 align-middle" />
        Lecture pour SMART : le revenu actuel dépend d'un frais prélevé sur des stationnements en voirie que les villes peuvent remettre en concurrence tous les 1 à 6 ans. Diversifier les revenus est une nécessité, pas seulement une opportunité.
      </p>
    </Section>
  )
}

export function Ressources() {
  return (
    <Section
      id="ressources"
      eyebrow="Diagnostic interne · 2"
      title="L'enjeu n'est pas d'inventer, mais d'assembler"
      subtitle="Le groupe possède une brique pour chaque axe : Parkimeter pour la réservation, Your Parking Space pour le partage, Flowbird pour la billettique. Aucune n'est intégrée à l'app EasyPark en France (à vérifier dans l'app)."
    >
      <TableWrap minWidth={980}>
        <thead>
          <tr>
            <Th>Ressource</Th>
            <Th>Fait de référence</Th>
            <Th>V</Th>
            <Th>R</Th>
            <Th>I</Th>
            <Th>O</Th>
            <Th>Avantage</Th>
            <Th>Axe servi</Th>
          </tr>
        </thead>
        <tbody>
          {vrio.map((r) => (
            <tr key={r.res} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{r.res}</Td>
              <Td>
                <span className="text-slate-400">{r.fact}</span>
                <div className="mt-1">
                  <SrcLink href={r.src} />
                </div>
              </Td>
              <Td><VrioDot value={r.v} /></Td>
              <Td><VrioDot value={r.r} /></Td>
              <Td><VrioDot value={r.i} /></Td>
              <Td><VrioDot value={r.o} /></Td>
              <Td>
                <span className={r.avantage.startsWith('Durable') ? 'text-mint-glow' : r.avantage.startsWith('Potentiel') ? 'text-amber-200' : 'text-slate-300'}>{r.avantage}</span>
              </Td>
              <Td className="text-slate-400">{r.axes}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <p className="mt-2 text-xs text-slate-500">
        V = crée de la valeur · R = rare chez les concurrents français · I = difficile à imiter · O = l'organisation sait l'exploiter. Les jugements R, I et O sont ceux de l'équipe (H).
      </p>

      <h3 className="mb-4 mt-12 font-display text-xl font-semibold text-white">Faiblesses internes</h3>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {faiblesses.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <Card className="h-full border-rose-400/10">
              <div className="font-semibold text-white">{f.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-cyan-glow/20 bg-gradient-to-br from-cyan-glow/[0.08] via-indigo-glow/[0.06] to-mint-glow/[0.05] p-6 sm:p-8">
        <div className="absolute -left-1 top-0 h-full w-1 bg-brand-gradient" />
        <p className="font-display text-lg font-medium leading-snug text-white sm:text-xl">
          EasyPark peut lancer les trois axes sans partir de zéro, à condition que le groupe décide d'intégrer Parkimeter, Your Parking Space et la billettique Flowbird dans l'app EasyPark. Sinon, SMART reconstruirait en France ce que le groupe possède déjà ailleurs.
        </p>
      </div>
    </Section>
  )
}
