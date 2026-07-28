import type { Product, Tag } from '../../types'
import { MOCK_PRODUCTS } from '../data/products'
import { MOCK_TAGS } from '../data/tags'

const CATALOG_DELAY_MS = 80

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

/** Capa de datos simulada; reemplazar por fetch real manteniendo la misma firma. */
export async function fetchProductsApi(): Promise<Product[]> {
  await delay(CATALOG_DELAY_MS)
  return MOCK_PRODUCTS.map((product) => ({ ...product }))
}

export async function fetchTagsApi(): Promise<Tag[]> {
  await delay(CATALOG_DELAY_MS)
  return MOCK_TAGS.map((tag) => ({ ...tag }))
}
