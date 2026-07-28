import { create } from 'zustand'
import type { Product, Tag } from '../types'
import { fetchProductsApi, fetchTagsApi } from './api/catalogApi'

interface CatalogStore {
  products: Product[]
  tags: Tag[]
  loading: boolean
  error: string | null
  loadCatalog: () => Promise<void>
  resetCatalog: () => void
}

const initialState = {
  products: [] as Product[],
  tags: [] as Tag[],
  loading: false,
  error: null as string | null,
}

export const useCatalogStore = create<CatalogStore>((set, get) => ({
  ...initialState,
  loadCatalog: async () => {
    if (get().loading) return
    set({ loading: true, error: null })
    try {
      const [products, tags] = await Promise.all([
        fetchProductsApi(),
        fetchTagsApi(),
      ])
      set({ products, tags, loading: false })
    } catch {
      set({
        error: 'No se pudo cargar el catálogo.',
        loading: false,
      })
    }
  },
  resetCatalog: () => set(initialState),
}))
