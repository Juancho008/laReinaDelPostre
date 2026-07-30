import { useEffect, useState } from 'react'
import type { Product } from '../../types'
import { formatPrice } from '../../utils/formatPrice'
import { ProductDetailModal } from './ProductDetailModal'

interface ProductCardProps {
  product: Product
  onAddToCart: (productId: string) => void
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < rating ? 'star star--filled' : 'star'}
          aria-hidden
        >
          ★
        </span>
      ))}
    </div>
  )
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [detailOpen, setDetailOpen] = useState(false)
  const displayPrice = product.onSale && product.salePrice != null ? product.salePrice : product.price

  useEffect(() => {
    if (!detailOpen) return undefined
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDetailOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [detailOpen])

  return (
    <>
      <article className="product-card">
        <button
          type="button"
          className="product-card__image-wrap"
          onClick={() => setDetailOpen(true)}
          aria-label={`Ver detalle de ${product.name}`}
        >
          {product.featured ? (
            <span className="product-card__featured" aria-label="Producto destacado">
              <span className="product-card__featured-star" aria-hidden>
                ★
              </span>
              Destacado
            </span>
          ) : null}
          {product.onSale ? <span className="product-card__badge">Oferta</span> : null}
          <img src={product.imageUrl} alt={product.name} className="product-card__image" loading="lazy" />
        </button>
        <button
          type="button"
          className="product-card__title-btn"
          onClick={() => setDetailOpen(true)}
        >
          <h3 className="product-card__title">{product.name}</h3>
        </button>
        <StarRating rating={product.rating} />
        <p className="product-card__price">
          {product.onSale && product.salePrice != null ? (
            <>
              <span className="product-card__price--old">{formatPrice(product.price)}</span>
              <span className="product-card__price--sale">{formatPrice(displayPrice)}</span>
            </>
          ) : (
            <span>{formatPrice(displayPrice)}</span>
          )}
        </p>
        <button
          type="button"
          className="product-card__add"
          onClick={() => onAddToCart(product.id)}
        >
          Agregar al carrito
        </button>
      </article>
      {detailOpen ? (
        <ProductDetailModal
          product={product}
          onClose={() => setDetailOpen(false)}
          onAddToCart={onAddToCart}
        />
      ) : null}
    </>
  )
}
