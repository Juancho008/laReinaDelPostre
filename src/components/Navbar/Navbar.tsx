import type { NavItem } from '../../types'
import { SITE_BRAND_NAME } from '../../Mock/data/brand'
import { useCart, useNavMenu, useWhatsAppCheckout } from '../../hooks'
import { SiteLogo } from '../SiteLogo'
import { CartIcon, MenuIcon, SearchIcon } from './NavIcons'

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

function HeaderActions({
  cartCount,
  onCartClick,
}: {
  cartCount: number
  onCartClick: () => void
}) {
  return (
    <>
      <button type="button" className="icon-btn icon-btn--utility" aria-label="Buscar">
        <SearchIcon />
      </button>
      <button
        type="button"
        className="icon-btn icon-btn--utility icon-btn--cart"
        aria-label={
          cartCount > 0
            ? `Finalizar pedido por WhatsApp, ${cartCount} productos`
            : 'Consultar pedido por WhatsApp'
        }
        onClick={onCartClick}
      >
        <CartIcon />
        {cartCount > 0 ? (
          <span className="cart-badge" aria-hidden>
            {cartCount > 99 ? '99+' : cartCount}
          </span>
        ) : null}
      </button>
    </>
  )
}

export function Navbar({ leftItems, rightItems }: NavbarProps) {
  const { isOpen, toggleMenu, closeMenu } = useNavMenu()
  const { totalItems } = useCart()
  const { openWhatsAppCheckout } = useWhatsAppCheckout()
  const mobileItems = [...leftItems, ...rightItems]

  return (
    <header className="site-header" id="home">
      <div className="site-header__inner">
        <div className="site-header__row nav--desktop">
          <nav className="nav nav--wing nav--wing-left" aria-label="Principal izquierda">
            <NavLinks items={leftItems} />
          </nav>

          <div className="brand-slot" aria-hidden />

          <div className="site-header__wing-right">
            <nav className="nav nav--wing nav--wing-right" aria-label="Principal derecha">
              <NavLinks items={rightItems} />
            </nav>
            <div className="header-actions site-header__utilities">
              <HeaderActions cartCount={totalItems} onCartClick={openWhatsAppCheckout} />
            </div>
          </div>
        </div>

        <div className="site-header__row site-header__toolbar nav--mobile">
          <button
            type="button"
            className="icon-btn icon-btn--utility icon-btn--menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="site-mobile-nav"
            onClick={toggleMenu}
          >
            <MenuIcon open={isOpen} />
          </button>
          <div className="header-actions">
            <HeaderActions cartCount={totalItems} onCartClick={openWhatsAppCheckout} />
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

      <a href="#home" className="brand" aria-label={`${SITE_BRAND_NAME} inicio`}>
        <SiteLogo className="brand__logo" />
      </a>
      <div className="scallop scallop--header" aria-hidden />
    </header>
  )
}
