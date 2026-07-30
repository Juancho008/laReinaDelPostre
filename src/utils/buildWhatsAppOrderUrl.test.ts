import { describe, expect, it } from 'vitest'
import { buildWhatsAppOrderMessage, buildWhatsAppUrl } from './buildWhatsAppOrderUrl'
import { formatPrice } from './formatPrice'
import type { Product } from '../types'

const product: Product = {
  id: 'test',
  name: 'Chocotorta',
  price: 4000,
  imageUrl: '/x.webp',
  rating: 5,
  tagIds: [],
  descriptionLines: ['🍫 Test'],
}

describe('buildWhatsAppOrderUrl', () => {
  it('arma el mensaje con líneas, envío y total', () => {
    const message = buildWhatsAppOrderMessage([{ product, quantity: 2 }], 8000, 2000, 10000)
    expect(message).toContain('Chocotorta x2')
    expect(message).toContain(`Subtotal: ${formatPrice(8000)}`)
    expect(message).toContain(`Envío: ${formatPrice(2000)}`)
    expect(message).toContain(`Total: ${formatPrice(10000)}`)
  })

  it('genera URL wa.me con texto codificado', () => {
    const url = buildWhatsAppUrl('54911 1234-5678', 'Hola')
    expect(url).toBe('https://wa.me/5491112345678?text=Hola')
  })
})
