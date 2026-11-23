import {
  Radar, ShieldCheck, Zap, Navigation, Layers, Car, Plane, Building2, Landmark, MapPin, Brain,
  ScanLine, Shuffle, ParkingCircle, CreditCard, RefreshCw, Search, Map, Smartphone, Music2, Camera,
  PlayCircle, Briefcase, Mail, Mic,
} from 'lucide-react'

const icons = {
  Radar, ShieldCheck, Zap, Navigation, Layers, Car, Plane, Building2, Landmark, MapPin, Brain,
  ScanLine, Shuffle, ParkingCircle, CreditCard, RefreshCw, Search, Map, Smartphone, Music2, Camera,
  PlayCircle, Briefcase, Mail, Mic,
}

export default function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Zap
  return <Cmp {...props} />
}
