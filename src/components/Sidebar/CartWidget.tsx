import { useState } from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { getProductUnitPrice } from '../../utils/getProductUnitPrice'
import type { Product } from '../../types'
import { useWhatsAppCheckout } from '../../hooks'
import { WidgetFrame } from './WidgetFrame'

interface CartWidgetProps {
  isEmpty: boolean
  items: Array<{ productId: string; quantity: number; product: Product }>
  subtotalPrice: number
  shippingCost: number
  totalPrice: number
  onIncrement: (productId: string) => void
  onDecrement: (productId: string) => void
  onRemove: (productId: string) => void
  onClear: () => void
}

export function CartWidget({
  isEmpty,
  items,
  subtotalPrice,
  shippingCost,
  totalPrice,
  onIncrement,
  onDecrement,
  onRemove,
  onClear,
}: CartWidgetProps) {
  const { openWhatsAppCheckout } = useWhatsAppCheckout()
  const [includeShipping, setIncludeShipping] = useState(true)
  const effectiveShippingCost = includeShipping ? shippingCost : 0
  const effectiveTotalPrice = subtotalPrice + effectiveShippingCost

  return (
    <WidgetFrame id="cart-widget">
      <h2 className="sidebar-widget__title">Carrito</h2>
      {isEmpty ? (
        <p className="sidebar-widget__text">No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="cart-list">
            {items.map(({ product, quantity, productId }) => (
              <li key={product.id} className="cart-list__item">
                <div className="cart-list__info">
                  <span className="cart-list__name">{product.name}</span>
                  <span className="cart-list__line-price">
                    {formatPrice(getProductUnitPrice(product))}
                  </span>
                </div>
                <div className="cart-list__actions">
                  <div className="cart-qty" aria-label={`Cantidad de ${product.name}`}>
                    <button
                      type="button"
                      className="cart-qty__btn"
                      onClick={() => onDecrement(productId)}
                      aria-label={`Quitar uno de ${product.name}`}
                    >
                      −
                    </button>
                    <span className="cart-qty__value">{quantity}</span>
                    <button
                      type="button"
                      className="cart-qty__btn"
                      onClick={() => onIncrement(productId)}
                      aria-label={`Agregar uno de ${product.name}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="cart-list__remove"
                    onClick={() => onRemove(productId)}
                    aria-label={`Eliminar ${product.name} del carrito`}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <label className="cart-shipping-toggle">
            <input
              type="checkbox"
              checked={includeShipping}
              onChange={(event) => setIncludeShipping(event.target.checked)}
            />
            <span>Incluir envío</span>
          </label>
          <div className="cart-totals">
            <p className="cart-totals__row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotalPrice)}</strong>
            </p>
            <p className="cart-totals__row">
              <span>Envío</span>
              <strong>{includeShipping ? formatPrice(effectiveShippingCost) : 'Sin envío'}</strong>
            </p>
            <p className="cart-total">
              Total: <strong>{formatPrice(effectiveTotalPrice)}</strong>
            </p>
          </div>
          <button type="button" className="cart-clear" onClick={onClear}>
            Vaciar carrito
          </button>
          <button type="button" className="cart-checkout" onClick={() => openWhatsAppCheckout(includeShipping)}>
            Pedir por WhatsApp
          </button>
        </>
      )}
    </WidgetFrame>
  )
}
