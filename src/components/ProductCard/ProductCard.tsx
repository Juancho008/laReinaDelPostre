import type { Product } from '../../types'
import { formatPrice } from '../../utils/formatPrice'

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
  const displayPrice = product.onSale && product.salePrice != null ? product.salePrice : product.price

  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card__image-wrap"
        onClick={() => onAddToCart(product.id)}
        aria-label={`Agregar ${product.name} al carrito`}
      >
        {product.onSale ? <span className="product-card__badge">Sale</span> : null}
        <img src={product.imageUrl} alt={product.name} className="product-card__image" loading="lazy" />
      </button>
      <h3 className="product-card__title">{product.name}</h3>
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
    </article>
  )
}
