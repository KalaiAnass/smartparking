import { motion } from 'framer-motion'
import { identite, partsMarche, migrationFlowbird, segments, revenus, revelations, partenaires, S } from '../../data/dossier'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { Proof, SrcLink, TableWrap, Th, Td, SubTitle, Note } from '../ui'

const tones = { accent: 'bg-cyan-glow', indigo: 'bg-indigo-glow', mint: 'bg-mint-glow', muted: 'bg-slate-500' }

function MarketShares() {
  return (
    <Card hover={false} className="h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Paiement mobile en voirie : PayByPhone domine</h3>
          <p className="mt-1 text-sm text-slate-400">Part des transactions 2023, fourchettes publiées.</p>
        </div>
        <Proof code="V" />
      </div>
      <div className="mt-6 space-y-5">
        {partsMarche.map((p, i) => (
          <div key={p.name}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
              <span className={p.tone === 'accent' || p.tone === 'mint' ? 'font-semibold text-white' : 'text-slate-300'}>{p.name}</span>
              <span className="font-mono text-xs text-slate-300">{p.low === 0 ? `< ${p.high}` : `${p.low}–${p.high}`} %</span>
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
        <SrcLink href={S.adlc}>Autorité de la concurrence, points 42 à 44</SrcLink>
      </div>
    </Card>
  )
}

function Migration() {
  return (
    <Card hover={false} className="h-full">
      <h3 className="font-display text-lg font-semibold text-white">La bascule de Flowbird vers EasyPark</h3>
      <ol className="relative mt-5 space-y-5 border-l border-white/10 pl-5">
        {migrationFlowbird.map((d, i) => (
          <Reveal key={d.date} delay={i * 0.05} y={12}>
            <li className="relative">
              <span className={`absolute -left-[26px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-ink-900 ${i === migrationFlowbird.length - 1 ? 'bg-mint-glow' : 'bg-indigo-glow'}`} />
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

export function Entreprise() {
  return (
    <Section
      id="entreprise"
      eyebrow="1.1 · L'entreprise et son positionnement"
      title="N° 2 du paiement mobile en France, et une base qui change d'échelle"
      subtitle="EasyPark est la marque grand public d'Arrive, groupe suédois de mobilité urbaine. Depuis octobre 2025, l'app Flowbird, rachetée par le groupe, bascule ville par ville vers EasyPark."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {identite.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{c.label}</span>
                <Proof code="V" />
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
      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <MarketShares />
        </div>
        <div className="lg:col-span-2">
          <Migration />
        </div>
      </div>
      <Note code="E">
        Les parts de 2023 ne reflètent plus la situation de fin 2026 : une partie des utilisateurs Flowbird est désormais chez EasyPark, une autre chez PayByPhone. Aucune source publique ne donne la nouvelle répartition.
      </Note>
    </Section>
  )
}

export function Modele() {
  return (
    <Section
      id="modele"
      eyebrow="1.2 · Modèle économique"
      title="Un revenu tiré de l'automobiliste, que les villes contestent"
      subtitle="EasyPark fait payer l'usager dans 90 à 100 % de ses villes, alors que 80 à 90 % des opérateurs français ont choisi en 2024 de payer eux-mêmes la commission de l'app."
    >
      <TableWrap minWidth={680}>
        <thead>
          <tr>
            <Th>Segment</Th>
            <Th>Qui</Th>
            <Th>Ce qu'il achète</Th>
          </tr>
        </thead>
        <tbody>
          {segments.map((s) => (
            <tr key={s.who} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{s.who}</Td>
              <Td>{s.detail}</Td>
              <Td>{s.buys}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Sources de revenus en France</SubTitle>
      <TableWrap minWidth={680}>
        <thead>
          <tr>
            <Th>Source</Th>
            <Th>Tarif public</Th>
            <Th>Preuve</Th>
          </tr>
        </thead>
        <tbody>
          {revenus.map((r) => (
            <tr key={r.source} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{r.source}</Td>
              <Td>{r.tarif}</Td>
              <Td>
                <span className="flex items-center gap-2">
                  <Proof code="V" />
                  <SrcLink href={r.src} />
                </span>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Ce que cela révèle</SubTitle>
      <div className="grid gap-4 md:grid-cols-3">
        {revelations.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-white">{r.title}</span>
                <Proof code={r.proof} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.text}</p>
              <div className="mt-2">
                <SrcLink href={r.src} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <Note code="E">
        Le modèle actuel dépend d'un frais que les villes contestent ou neutralisent. Smart Parking (abonnement payé par le partenaire) et Smart Sharing (commission sur une transaction) ajouteraient deux revenus d'une autre nature, moins exposés aux décisions municipales.
      </Note>
    </Section>
  )
}

export function Partenaires() {
  return (
    <Section
      id="partenaires"
      eyebrow="1.6 · Écosystème de partenaires"
      title="Un écosystème tourné vers les villes, pas encore vers les centres commerciaux et les hôtels"
      subtitle="Les partenaires visés par Smart Parking n'apparaissent pas dans les références publiques françaises consultées : ce sera un nouveau métier commercial (H)."
    >
      <TableWrap minWidth={860}>
        <thead>
          <tr>
            <Th>Famille</Th>
            <Th>Exemples vérifiés</Th>
            <Th>Rôle aujourd'hui</Th>
            <Th>Source</Th>
          </tr>
        </thead>
        <tbody>
          {partenaires.map((p) => (
            <tr key={p.family} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{p.family}</Td>
              <Td>{p.examples}</Td>
              <Td>{p.role}</Td>
              <Td>
                <SrcLink href={p.src} />
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>
      <Note code="E">
        La ville est à la fois cliente et arbitre : elle peut ajouter une app concurrente, comme PayByPhone à Lyon au moment de la bascule de Flowbird. Avec des partenaires privés qui paient un abonnement, Smart Parking créerait une relation commerciale plus directe.
      </Note>
    </Section>
  )
}
