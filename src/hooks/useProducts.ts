import { useCallback, useEffect } from 'react'
import { useCatalogStore } from '../Mock'

export function useProducts() {
  const products = useCatalogStore((state) => state.products)
  const tags = useCatalogStore((state) => state.tags)
  const loading = useCatalogStore((state) => state.loading)
  const error = useCatalogStore((state) => state.error)
  const loadCatalog = useCatalogStore((state) => state.loadCatalog)

  const loadCatalogOnce = useCallback(() => {
    void loadCatalog()
  }, [loadCatalog])

  useEffect(() => {
    if (products.length === 0 && !loading && !error) {
      loadCatalogOnce()
    }
  }, [products.length, loading, error, loadCatalogOnce])

  return { products, tags, loading, error, reload: loadCatalogOnce }
}
