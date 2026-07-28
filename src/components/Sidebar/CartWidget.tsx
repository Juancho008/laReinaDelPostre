import { formatPrice } from '../../utils/formatPrice'
import type { Product } from '../../types'

interface CartWidgetProps {
  isEmpty: boolean
  items: Array<{ productId: string; quantity: number; product: Product }>
}

export function CartWidget({ isEmpty, items }: CartWidgetProps) {
  return (
    <div className="widget">
      <h2 className="widget__title">Cart</h2>
      {isEmpty ? (
        <p className="widget__text">No products in the cart.</p>
      ) : (
        <ul className="cart-list">
          {items.map(({ product, quantity }) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>
                {quantity} × {formatPrice(product.onSale && product.salePrice != null ? product.salePrice : product.price)}
              </span>
            </li>
          ))}
        </ul>
      )}
      <span className="widget__heart" aria-hidden>
        ♥
      </span>
    </div>
  )
}
