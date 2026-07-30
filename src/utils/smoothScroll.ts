const SCROLL_AFTER_MENU_MS = 160

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Desplaza suavemente a un ancla (#shop, #contacts, etc.) o al tope. */
export function scrollToHash(hash: string): void {
  const targetHash = hash.startsWith('#') ? hash : `#${hash}`

  if (targetHash === '#' || targetHash === '#home' || targetHash === '#top') {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
    return
  }

  const id = targetHash.slice(1)
  const element = document.getElementById(id)
  if (!element) return

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  })
}

/** Maneja clicks en enlaces internos con scroll suave. */
export function handleSmoothAnchorClick(
  event: { preventDefault: () => void; currentTarget: EventTarget & { getAttribute(name: string): string | null } },
  href: string | null | undefined,
  afterNavigate?: () => void,
): void {
  if (!href || !href.startsWith('#')) return

  event.preventDefault()
  afterNavigate?.()

  // Espera un instante si se cierra el menú móvil, para que el layout se asiente
  window.setTimeout(() => {
    scrollToHash(href)
    if (href !== '#' && href !== '#home') {
      window.history.pushState(null, '', href)
    } else {
      window.history.pushState(null, '', window.location.pathname)
    }
  }, afterNavigate ? SCROLL_AFTER_MENU_MS : 0)
}
