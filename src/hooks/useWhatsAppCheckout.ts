import { useCallback } from 'react'
import { MOCK_WHATSAPP_EMPTY_MESSAGE, MOCK_WHATSAPP_PHONE } from '../Mock/data/contact'
import { buildWhatsAppOrderMessage, buildWhatsAppUrl } from '../utils/buildWhatsAppOrderUrl'
import { useCart } from './useCart'

export function useWhatsAppCheckout() {
  const { cartProducts, isEmpty, subtotalPrice, shippingCost, totalPrice } = useCart()

  const openWhatsAppCheckout = useCallback(() => {
    const message = isEmpty
      ? MOCK_WHATSAPP_EMPTY_MESSAGE
      : buildWhatsAppOrderMessage(cartProducts, subtotalPrice, shippingCost, totalPrice)
    const url = buildWhatsAppUrl(MOCK_WHATSAPP_PHONE, message)
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [cartProducts, isEmpty, shippingCost, subtotalPrice, totalPrice])

  return { openWhatsAppCheckout }
}
