export interface Product {
  id: string
  name: string
  imageUrl: string
  rating: number
  price: number
  salePrice?: number
  onSale?: boolean
  tagIds: string[]
}

export interface Tag {
  id: string
  label: string
}

export interface CartItem {
  productId: string
  quantity: number
}

export interface NavItem {
  id: string
  label: string
  href: string
  active?: boolean
}

export interface CatalogState {
  products: Product[]
  tags: Tag[]
  loading: boolean
  error: string | null
}

export interface CartState {
  items: CartItem[]
}
