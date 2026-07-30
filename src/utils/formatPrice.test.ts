import { describe, expect, it } from 'vitest'
import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it('formatea montos en pesos argentinos sin decimales', () => {
    expect(formatPrice(4000)).toBe('$ 4.000')
    expect(formatPrice(2000)).toBe('$ 2.000')
  })
})
