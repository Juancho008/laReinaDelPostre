import type { NavItem } from '../../types'
import { useNavMenu } from '../../hooks'

interface NavbarProps {
  leftItems: NavItem[]
  rightItems: NavItem[]
}

function NavLinks({ items, onNavigate }: { items: NavItem[]; onNavigate?: () => void }) {
  return (
    <ul className="nav-links">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={item.active ? 'nav-link nav-link--active' : 'nav-link'}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Navbar({ leftItems, rightItems }: NavbarProps) {
  const { isOpen, toggleMenu, closeMenu } = useNavMenu()
  const mobileItems = [...leftItems, ...rightItems]

  return (
    <header className="site-header" id="home">
      <div className="site-header__inner">
        <nav className="nav nav--left nav--desktop" aria-label="Principal izquierda">
          <NavLinks items={leftItems} />
        </nav>

        <div className="brand-slot" aria-hidden />

        <div className="site-header__cluster site-header__cluster--right nav--desktop">
          <nav className="nav nav--right" aria-label="Principal derecha">
            <NavLinks items={rightItems} />
          </nav>
          <div className="header-actions">
            <button type="button" className="icon-btn" aria-label="Buscar">
              <span aria-hidden>⌕</span>
            </button>
            <button type="button" className="icon-btn" aria-label="Carrito">
              <span aria-hidden>🛍</span>
            </button>
          </div>
        </div>

        <div className="site-header__toolbar nav--mobile">
          <button
            type="button"
            className="icon-btn icon-btn--menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="site-mobile-nav"
            onClick={toggleMenu}
          >
            <span aria-hidden>{isOpen ? '✕' : '☰'}</span>
          </button>
          <div className="header-actions">
            <button type="button" className="icon-btn" aria-label="Buscar">
              <span aria-hidden>⌕</span>
            </button>
            <button type="button" className="icon-btn" aria-label="Carrito">
              <span aria-hidden>🛍</span>
            </button>
          </div>
        </div>
      </div>

      <nav
        id="site-mobile-nav"
        className={isOpen ? 'site-header__mobile-nav is-open' : 'site-header__mobile-nav'}
        aria-label="Menú móvil"
        hidden={!isOpen}
      >
        <NavLinks items={mobileItems} onNavigate={closeMenu} />
      </nav>

      <a href="#home" className="brand" aria-label="Bellaria inicio">
        <span className="brand__crest" aria-hidden>
          <span className="brand__name">Bellaria</span>
          <span className="brand__tagline">Cakes &amp; Pastry</span>
        </span>
      </a>
      <div className="scallop scallop--header" aria-hidden />
    </header>
  )
}
