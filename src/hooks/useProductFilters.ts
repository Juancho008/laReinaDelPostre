import { useCallback, useEffect, useMemo, useState } from 'react'
import { PRODUCT_PRICE_ARS } from '../Mock/data/pricing'
import type { Product } from '../types'

export const PRICE_FILTER_MIN = 0

function getProductPrice(product: Product): number {
  return product.onSale && product.salePrice != null ? product.salePrice : product.price
}

function getPriceCeiling(products: Product[]): number {
  if (products.length === 0) return PRODUCT_PRICE_ARS
  return Math.max(...products.map(getProductPrice), PRODUCT_PRICE_ARS)
}

function matchesSearch(product: Product, query: string): boolean {
  if (!query.trim()) return true
  const normalized = query.trim().toLowerCase()
  return product.name.toLowerCase().includes(normalized)
}

function matchesTag(product: Product, tagId: string | null): boolean {
  if (!tagId) return true
  return product.tagIds.includes(tagId)
}

function matchesPrice(product: Product, minPrice: number, maxPrice: number): boolean {
  const price = getProductPrice(product)
  return price >= minPrice && price <= maxPrice
}

export function useProductFilters(products: Product[]) {
  const priceCeiling = useMemo(() => getPriceCeiling(products), [products])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTagId, setSelectedTagId] = useState<string | null>(null)
  const [priceMaxDraft, setPriceMaxDraft] = useState(priceCeiling)
  const [appliedPriceMax, setAppliedPriceMax] = useState(priceCeiling)

  useEffect(() => {
    setPriceMaxDraft(priceCeiling)
    setAppliedPriceMax(priceCeiling)
  }, [priceCeiling])

  const setSearch = useCallback((value: string) => {
    setSearchQuery(value)
  }, [])

  const toggleTag = useCallback((tagId: string) => {
    setSelectedTagId((current) => (current === tagId ? null : tagId))
  }, [])

  const setPriceMax = useCallback((value: number) => {
    setPriceMaxDraft(value)
  }, [])

  const applyPriceFilter = useCallback(() => {
    setAppliedPriceMax(priceMaxDraft)
  }, [priceMaxDraft])

  const clearFilters = useCallback(() => {
    setSearchQuery('')
    setSelectedTagId(null)
    setPriceMaxDraft(priceCeiling)
    setAppliedPriceMax(priceCeiling)
  }, [priceCeiling])

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        matchesSearch(product, searchQuery) &&
        matchesTag(product, selectedTagId) &&
        matchesPrice(product, PRICE_FILTER_MIN, appliedPriceMax),
    )
  }, [products, searchQuery, selectedTagId, appliedPriceMax])

  return {
    searchQuery,
    selectedTagId,
    priceMin: PRICE_FILTER_MIN,
    priceMax: priceMaxDraft,
    priceCeiling,
    filteredProducts,
    setSearch,
    toggleTag,
    setPriceMax,
    applyPriceFilter,
    clearFilters,
  }
}
