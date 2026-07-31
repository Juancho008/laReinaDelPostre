import { formatPrice } from './formatPrice'
import { getProductUnitPrice } from './getProductUnitPrice'
import type { Product } from '../types'

export interface WhatsAppLineItem {
  product: Product
  quantity: number
}

export function buildWhatsAppOrderMessage(
  items: WhatsAppLineItem[],
  subtotalPrice: number,
  shippingCost: number,
  totalPrice: number,
  includeShipping = true,
): string {
  const lines = items.map(({ product, quantity }) => {
    const unit = getProductUnitPrice(product)
    return `• ${product.name} x${quantity} — ${formatPrice(unit * quantity)}`
  })

  return [
    'Hola, quiero hacer este pedido:',
    '',
    ...lines,
    '',
    `Subtotal: ${formatPrice(subtotalPrice)}`,
    ...(includeShipping ? [`Envío: ${formatPrice(shippingCost)}`] : []),
    `Total: ${formatPrice(totalPrice)}`,
    '',
    'Gracias.',
  ].join('\n')
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
