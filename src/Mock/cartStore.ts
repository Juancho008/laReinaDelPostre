import { create } from 'zustand'
import type { CartItem } from '../types'

interface CartStore {
  items: CartItem[]
  addItem: (productId: string) => void
  decrementItem: (productId: string) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (productId) =>
    set((state) => {
      const existing = state.items.find((item) => item.productId === productId)
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }
      return { items: [...state.items, { productId, quantity: 1 }] }
    }),
  decrementItem: (productId) =>
    set((state) => {
      const existing = state.items.find((item) => item.productId === productId)
      if (!existing) return state
      if (existing.quantity <= 1) {
        return { items: state.items.filter((item) => item.productId !== productId) }
      }
      return {
        items: state.items.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      }
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),
  clearCart: () => set({ items: [] }),
}))
