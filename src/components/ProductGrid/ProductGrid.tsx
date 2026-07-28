import type { Product } from '../../types'
import { ProductCard } from '../ProductCard'

interface ProductGridProps {
  products: Product[]
  loading: boolean
  onAddToCart: (productId: string) => void
}

export function ProductGrid({ products, loading, onAddToCart }: ProductGridProps) {
  if (loading) {
    return <p className="shop-status">Cargando productos…</p>
  }

  if (products.length === 0) {
    return <p className="shop-status">No hay productos que coincidan con tu búsqueda.</p>
  }

  return (
    <div className="product-grid" id="shop">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  )
}
