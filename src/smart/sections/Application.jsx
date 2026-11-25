import { SearchX, ShieldCheck } from 'lucide-react'
import { fonctionnalites, nonTrouve, parcoursVoirie, parcoursExpress, notes, frictions, briques, besoins, categoriesParkings, S } from '../../data/dossier'
import { Section, Card, Reveal } from '../../components/ui/primitives'
import { Proof, SrcLink, TableWrap, Th, Td, SubTitle, Note } from '../ui'

export function Audit() {
  return (
    <Section
      id="audit"
      eyebrow="1.3 · Audit de l'application en France"
      title="Excellente pour payer, absente de la réservation et du partage"
      subtitle="L'app couvre très bien le paiement, en voirie comme dans certains parkings à barrière. Elle sait lire la plaque à l'entrée d'un parking et chercher autour d'une destination. Aucune page officielle consultée ne décrit de réservation."
    >
      <TableWrap minWidth={900}>
        <thead>
          <tr>
            <Th>Fonctionnalité</Th>
            <Th>Ce qu'elle fait</Th>
            <Th>En France</Th>
            <Th>Preuve</Th>
          </tr>
        </thead>
        <tbody>
          {fonctionnalites.map((f) => (
            <tr key={f.name} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{f.name}</Td>
              <Td>{f.what}</Td>
              <Td className={f.fr.startsWith('Oui') ? 'text-mint-glow' : 'text-amber-200'}>{f.fr}</Td>
              <Td>
                <span className="flex items-center gap-2">
                  <Proof code={f.proof} />
                  <SrcLink href={f.src} />
                </span>
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Card hover={false} className="border-rose-400/15">
          <div className="flex items-center gap-2 font-semibold text-white">
            <SearchX className="h-4 w-4 text-rose-300" /> Non trouvé sur les pages officielles françaises
          </div>
          <ul className="mt-4 space-y-2.5">
            {nonTrouve.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Absence à confirmer par un test de l'app (H). Le groupe possède pourtant Parkimeter, partenaire de Saemes pour la réservation prépayée, et Your Parking Space, site britannique de location de places.
          </p>
        </Card>
        <Card hover={false}>
          <div className="font-semibold text-white">Parcours actuel en voirie</div>
          <ol className="mt-4 space-y-2.5">
            {parcoursVoirie.map((t, i) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 text-[11px] font-semibold text-white">{i + 1}</span>
                {t}
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <SubTitle>Dans un parking équipé d'express pay : trois gestes</SubTitle>
      <div className="grid gap-3 md:grid-cols-3">
        {parcoursExpress.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-cyan-glow/20 bg-cyan-glow/[0.04] p-5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient font-display font-bold text-ink-900">{i + 1}</span>
              <div className="mt-3 font-semibold text-white">{s.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-2">
        <SrcLink href={S.epExpress}>EasyPark, express pay</SrcLink>
      </div>
    </Section>
  )
}

export function UX() {
  return (
    <Section
      id="ux"
      eyebrow="1.4 · Expérience utilisateur"
      title="Très bien notée ; les critiques portent sur les frais"
      subtitle="Les critiques visibles visent moins l'ergonomie que le montant des frais, le choix des offres et la bascule depuis Flowbird."
    >
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {notes.map((n) => (
          <Card key={n.label} className="p-4 sm:p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{n.label}</div>
            <div className="mt-2 font-display text-2xl font-semibold text-white">{n.value}</div>
            <div className="mt-1 text-xs leading-relaxed text-slate-400">{n.sub}</div>
            <div className="mt-2">
              <SrcLink href={n.src} />
            </div>
          </Card>
        ))}
      </div>

      <SubTitle>Points de friction relevés</SubTitle>
      <div className="grid gap-4 md:grid-cols-2">
        {frictions.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <Card className="h-full">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-white">{f.title}</span>
                <Proof code="V" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.text}</p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-slate-500">{f.note}</span>
                <SrcLink href={f.src} />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
      <Note code="R">Seuls quelques avis sont visibles sans compte : ce n'est pas un échantillon. À l'étape 4, analyser au moins 300 avis français récents par thème pour chiffrer chaque friction.</Note>
      <Note code="E">
        Les deux axes ajouteront de nouveaux prix à l'écran : réservation, supplément premium, commission. Chaque montant devra être affiché avant validation, frais compris. La réservation automatique engage le client sans qu'il appuie sur « payer » : le consentement doit être recueilli quand il saisit sa destination.
      </Note>
    </Section>
  )
}

export function Technique() {
  return (
    <Section
      id="technique"
      eyebrow="1.5 · Diagnostic technique"
      title="Trois briques prêtes, trois briques à construire"
      subtitle="L'app sait déjà identifier par la plaque, dialoguer avec les caméras de certains parkings et encaisser. Il lui manque la réservation, le comptage des places libres chez l'exploitant et le reversement aux propriétaires."
    >
      <TableWrap minWidth={720}>
        <thead>
          <tr>
            <Th>Brique existante</Th>
            <Th>Constat</Th>
            <Th>Source</Th>
          </tr>
        </thead>
        <tbody>
          {briques.map((b) => (
            <tr key={b.name} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{b.name}</Td>
              <Td>{b.fact}</Td>
              <Td>
                <SrcLink href={b.src} />
              </Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Ce que les deux axes exigeront</SubTitle>
      <TableWrap minWidth={820}>
        <thead>
          <tr>
            <Th>Besoin</Th>
            <Th>Existe déjà ?</Th>
            <Th>Contrainte principale (E)</Th>
          </tr>
        </thead>
        <tbody>
          {besoins.map((b) => (
            <tr key={b.need} className="transition hover:bg-white/[0.02]">
              <Td className="font-semibold text-white">{b.need}</Td>
              <Td className={b.exists.startsWith('Oui') ? 'text-mint-glow' : b.exists.startsWith('Non') ? 'text-rose-300' : 'text-amber-200'}>{b.exists}</Td>
              <Td>{b.constraint}</Td>
            </tr>
          ))}
        </tbody>
      </TableWrap>

      <SubTitle>Trois catégories de parkings partenaires</SubTitle>
      <div className="grid gap-4 md:grid-cols-3">
        {categoriesParkings.map((c, i) => (
          <Reveal key={c.cat} delay={i * 0.06}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-lg font-bold text-ink-900">{c.cat}</span>
                <Proof code={c.proof} />
              </div>
              <div className="mt-3 font-display text-lg font-semibold text-white">{c.name}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{c.text}</p>
              <p className="mt-3 text-xs text-slate-500">Exemple : {c.example}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-sm leading-relaxed text-slate-300">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-glow" />
        <div>
          <div className="font-semibold text-white">Contraintes RGPD</div>
          <p className="mt-1">
            La CNIL rappelle que les données collectées lors du paiement du stationnement, y compris par application, ne doivent servir qu'à appliquer les règles de tarification et ne doivent être conservées que le temps nécessaire (V). La plaque liée à une destination et à une heure d'arrivée est une donnée de déplacement sensible (E). Une analyse d'impact est à prévoir avant le pilote (R).
          </p>
          <div className="mt-2">
            <SrcLink href={S.cnil}>CNIL, 5 juin 2025</SrcLink>
          </div>
        </div>
      </div>
    </Section>
  )
}
