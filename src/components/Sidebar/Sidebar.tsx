import type { Tag } from '../../types'
import { CartWidget } from './CartWidget'
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
}: SidebarProps) {
  return (
    <aside className="shop-sidebar" aria-label="Filtros y carrito">
      <SearchWidget value={searchQuery} onChange={onSearchChange} onSubmit={onSearchSubmit} />
      <CartWidget isEmpty={cartEmpty} items={cartItems} />
      <TagCloud tags={tags} selectedTagId={selectedTagId} onToggleTag={onToggleTag} />
    </aside>
  )
}
