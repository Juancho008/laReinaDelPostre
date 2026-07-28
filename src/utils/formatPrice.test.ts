import { describe, expect, it } from 'vitest'
import { formatPrice } from './formatPrice'

describe('formatPrice', () => {
  it('formatea montos con dos decimales', () => {
    expect(formatPrice(17)).toBe('$17.00')
    expect(formatPrice(9.5)).toBe('$9.50')
  })
})
