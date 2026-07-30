import { useCallback } from 'react'

export function useScrollToCart() {
  const scrollToCart = useCallback(() => {
    const cart = document.getElementById('cart-widget')
    cart?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [])

  return { scrollToCart }
}
