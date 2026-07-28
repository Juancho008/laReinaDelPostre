import { useMemo } from 'react'
import { useCartStore, useCatalogStore } from '../Mock'
import type { Product } from '../types'

export function useCart() {
  const items = useCartStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
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

  return {
    items,
    cartProducts,
    totalItems,
    addItem,
    removeItem,
    clearCart,
    isEmpty: items.length === 0,
  }
}
