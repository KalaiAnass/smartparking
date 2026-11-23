import SmartApp from './smart/SmartApp'
import ArchiveApp from './ArchiveApp'

// Le site affiche l'étude Projet SMART (version actuelle).
// L'ancien pitch « Smart Parking AI » reste consultable avec ?version=pitch-v1.
const isArchive = () => typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('version') === 'pitch-v1'

export default function App() {
  return isArchive() ? <ArchiveApp /> : <SmartApp />
}
