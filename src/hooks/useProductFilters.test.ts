import { renderHook, act } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useProductFilters } from './useProductFilters'
import type { Product } from '../types'

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Yumi Macaroons',
    imageUrl: '',
    rating: 5,
    price: 17,
    tagIds: ['fruit'],
  },
  {
    id: '2',
    name: 'Premium Lollipop',
    imageUrl: '',
    rating: 4,
    price: 14,
    salePrice: 9,
    onSale: true,
    tagIds: ['toffee'],
  },
]

describe('useProductFilters', () => {
  it('filtra por texto de búsqueda', () => {
    const { result } = renderHook(() => useProductFilters(sampleProducts))

    act(() => {
      result.current.setSearch('lollipop')
    })

    expect(result.current.filteredProducts).toHaveLength(1)
    expect(result.current.filteredProducts[0]?.name).toBe('Premium Lollipop')
  })

  it('filtra por tag seleccionado', () => {
    const { result } = renderHook(() => useProductFilters(sampleProducts))

    act(() => {
      result.current.toggleTag('fruit')
    })

    expect(result.current.filteredProducts).toHaveLength(1)
    expect(result.current.filteredProducts[0]?.id).toBe('1')
  })
})
