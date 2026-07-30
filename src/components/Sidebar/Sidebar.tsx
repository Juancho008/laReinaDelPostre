import type { Tag } from '../../types'
import { CartWidget } from './CartWidget'
import { PriceFilterWidget } from './PriceFilterWidget'
import { SearchWidget } from './SearchWidget'
import { TagCloud } from './TagCloud'
import type { Product } from '../../types'

interface SidebarProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  onSearchSubmit: () => void
  tags: Tag[]
  selectedTagId: string | null
  onToggleTag: (tagId: string) => void
  cartItems: Array<{ productId: string; quantity: number; product: Product }>
  cartEmpty: boolean
  cartSubtotalPrice: number
  cartShippingCost: number
  cartTotalPrice: number
  onCartIncrement: (productId: string) => void
  onCartDecrement: (productId: string) => void
  onCartRemove: (productId: string) => void
  onCartClear: () => void
  priceMin: number
  priceMax: number
  priceCeiling: number
  onPriceMaxChange: (value: number) => void
  onPriceFilterApply: () => void
}

export function Sidebar({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  tags,
  selectedTagId,
  onToggleTag,
  cartItems,
  cartEmpty,
  cartSubtotalPrice,
  cartShippingCost,
  cartTotalPrice,
  onCartIncrement,
  onCartDecrement,
  onCartRemove,
  onCartClear,
  priceMin,
  priceMax,
  priceCeiling,
  onPriceMaxChange,
  onPriceFilterApply,
}: SidebarProps) {
  return (
    <aside className="shop-sidebar" aria-label="Filtros y carrito">
      <SearchWidget value={searchQuery} onChange={onSearchChange} onSubmit={onSearchSubmit} />
      <CartWidget
        isEmpty={cartEmpty}
        items={cartItems}
        subtotalPrice={cartSubtotalPrice}
        shippingCost={cartShippingCost}
        totalPrice={cartTotalPrice}
        onIncrement={onCartIncrement}
        onDecrement={onCartDecrement}
        onRemove={onCartRemove}
        onClear={onCartClear}
      />
      <PriceFilterWidget
        min={priceMin}
        max={priceMax}
        ceiling={priceCeiling}
        onMaxChange={onPriceMaxChange}
        onApply={onPriceFilterApply}
      />
      <TagCloud tags={tags} selectedTagId={selectedTagId} onToggleTag={onToggleTag} />
    </aside>
  )
}
