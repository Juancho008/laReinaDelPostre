import { useMemo } from 'react'
import { SHIPPING_COST_ARS } from '../Mock/data/pricing'
import { useCartStore, useCatalogStore } from '../Mock'
import type { Product } from '../types'
import { getProductUnitPrice } from '../utils/getProductUnitPrice'

export function useCart() {
  const items = useCartStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
  const decrementItem = useCartStore((state) => state.decrementItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const clearCart = useCartStore((state) => state.clearCart)
  const products = useCatalogStore((state) => state.products)

  const cartProducts = useMemo(() => {
    return items
      .map((item) => {
        const product = products.find((p) => p.id === item.productId)
        if (!product) return null
        return { ...item, product }
      })
      .filter((entry): entry is { productId: string; quantity: number; product: Product } =>
        entry !== null,
      )
  }, [items, products])

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const subtotalPrice = useMemo(() => {
    return cartProducts.reduce(
      (sum, entry) => sum + getProductUnitPrice(entry.product) * entry.quantity,
      0,
    )
  }, [cartProducts])

  const shippingCost = items.length === 0 ? 0 : SHIPPING_COST_ARS
  const totalPrice = subtotalPrice + shippingCost

  return {
    items,
    cartProducts,
    totalItems,
    subtotalPrice,
    shippingCost,
    totalPrice,
    addItem,
    decrementItem,
    removeItem,
    clearCart,
    isEmpty: items.length === 0,
  }
}
