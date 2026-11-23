import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { phases } from '../../data/project'

const extra = [
  { id: 'hero', label: 'Accueil' },
  { id: 'vision', label: 'Vision 2030' },
]

function useActiveSection() {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const line = window.innerHeight * 0.3
        let current = 'hero'
        document.querySelectorAll('[data-section]').forEach((el) => {
          if (el.getBoundingClientRect().top <= line) current = el.dataset.section
        })
        setActive(current)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return active
}

function NavContent({ active, onNavigate }) {
  const activePhase = phases.find((p) => p.id === active || p.sections.some((s) => s.id === active))
  const link = (id, label, level = 0) => {
    const isActive = active === id
    return (
      <a
        key={id}
        href={`#${id}`}
        onClick={onNavigate}
        className={`relative flex items-center rounded-lg py-1.5 text-sm transition ${level ? 'pl-7 pr-3' : 'px-3'} ${
          isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        {isActive && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-lg bg-white/[0.06] ring-1 ring-cyan-glow/30" />}
        {level === 1 && <span className={`absolute left-3.5 h-1.5 w-1.5 rounded-full ${isActive ? 'bg-cyan-glow' : 'bg-white/20'}`} />}
        <span className="relative">{label}</span>
      </a>
    )
  }
  return (
    <nav className="space-y-1">
      {link('hero', 'Accueil')}
      {phases.map((p) => (
        <div key={p.id} className="pt-3">
          <a href={`#${p.id}`} onClick={onNavigate} className="mb-1 flex items-center gap-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 hover:text-cyan-glow">
            <span className={`grid h-5 w-5 place-items-center rounded-md text-[10px] ${activePhase?.id === p.id ? 'bg-brand-gradient text-ink-900' : 'bg-white/5 text-slate-400'}`}>{p.num}</span>
            {p.short}
          </a>
          {p.sections.map((s) => link(s.id, s.label, 1))}
        </div>
      ))}
      <div className="pt-3">{link(extra[1].id, extra[1].label)}</div>
    </nav>
  )
}

export default function Sidebar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const all = [...extra, ...phases.flatMap((p) => [{ id: p.id }, ...p.sections])]
  const idx = Math.max(0, all.findIndex((s) => s.id === active))
  const progress = ((idx + 1) / all.length) * 100

  const Brand = (
    <a href="#hero" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-display text-lg font-bold text-ink-900 shadow-glow">P</span>
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-semibold text-white">Smart Parking AI</span>
        <span className="block text-[11px] text-slate-500">Investor pitch</span>
      </span>
    </a>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/[0.06] bg-ink-950/70 backdrop-blur-xl lg:flex">
        <div className="p-5">{Brand}</div>
        <div className="mx-5 h-0.5 overflow-hidden rounded-full bg-white/5">
          <motion.div className="h-full bg-brand-gradient" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <NavContent active={active} />
        </div>
        <div className="border-t border-white/[0.06] p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="h-3.5 w-3.5 text-mint-glow" /> Smart Allocation Engine™
          </div>
        </div>
      </aside>

      {/* Mobile */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-ink-950/80 px-4 py-3 backdrop-blur-xl lg:hidden">
        {Brand}
        <button onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10" aria-label="Ouvrir le menu">
          <Menu className="h-5 w-5" />
        </button>
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/5">
          <div className="h-full bg-brand-gradient transition-all" style={{ width: `${progress}%` }} />
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto border-r border-white/10 bg-ink-950 p-5 lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="mb-4 flex items-center justify-between">
                {Brand}
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10" aria-label="Fermer">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <NavContent active={active} onNavigate={() => setOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
