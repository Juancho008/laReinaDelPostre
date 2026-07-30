import type { NavItem } from '../../types'

export const MOCK_NAV_LEFT: NavItem[] = [
  { id: 'home', label: 'Inicio', href: '#home' },
]

export const MOCK_NAV_RIGHT: NavItem[] = [
  { id: 'shop', label: 'Comprar', href: '#shop', active: true },
  { id: 'contacts', label: 'Contacto', href: '#contacts' },
]
