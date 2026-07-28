import { useCallback, useMemo, useState } from 'react'
import type { Product } from '../types'

function matchesSearch(product: Product, query: string): boolean {
  if (!query.trim()) return true
  const normalized = query.trim().toLowerCase()
  return product.name.toLowerCase().includes(normalized)
}

function matchesTag(product: Product, tagId: string | null): boolean {
  if (!tagId) return true
  return product.tagIds.includes(tagId)
}

export function useProductFilters(products: Product[]) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null)

  const setSearch = useCallback((value: string) => {
    setSearchQuery(value)
  }, [])

  const toggleTag = useCallback((tagId: string) => {
    setSelectedTagId((current) => (current === tagId ? null : tagId))
  }, [])

  const clearFilters = useCallback(() => {
    setSearchQuery('')
    setSelectedTagId(null)
  }, [])

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => matchesSearch(product, searchQuery) && matchesTag(product, selectedTagId),
    )
  }, [products, searchQuery, selectedTagId])

  return {
    searchQuery,
    selectedTagId,
    filteredProducts,
    setSearch,
    toggleTag,
    clearFilters,
  }
}
