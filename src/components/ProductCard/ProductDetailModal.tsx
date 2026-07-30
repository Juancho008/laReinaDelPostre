import type { Product } from '../../types'
import { formatPrice } from '../../utils/formatPrice'
import { getProductUnitPrice } from '../../utils/getProductUnitPrice'

interface ProductDetailModalProps {
  product: Product
  onClose: () => void
  onAddToCart: (productId: string) => void
}

export function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const displayPrice = getProductUnitPrice(product)

  const handleAdd = () => {
    onAddToCart(product.id)
    onClose()
  }

  return (
    <div className="product-modal" role="presentation" onClick={onClose}>
      <div
        className="product-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="product-modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <div className="product-modal__media">
          <img src={product.imageUrl} alt="" className="product-modal__image" />
        </div>
        <div className="product-modal__body">
          <h2 id="product-modal-title" className="product-modal__title">
            {product.name}
          </h2>
          <ul className="product-modal__ingredients">
            {product.descriptionLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="product-modal__price">{formatPrice(displayPrice)}</p>
          <button type="button" className="product-modal__add" onClick={handleAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
