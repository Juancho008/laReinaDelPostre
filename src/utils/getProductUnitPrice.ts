import type { Product } from '../types'

export function getProductUnitPrice(product: Product): number {
  return product.onSale && product.salePrice != null ? product.salePrice : product.price
}
