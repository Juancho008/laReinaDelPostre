import type { Product } from '../../types'

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'yumi-macaroons',
    name: 'Yumi Macaroons',
    imageUrl:
      'https://images.unsplash.com/photo-1569860876681-504a30f3ff83?w=600&h=600&fit=crop',
    rating: 5,
    price: 17,
    tagIds: ['fruit', 'milk'],
  },
  {
    id: 'premium-lollipop',
    name: 'Premium Lollipop',
    imageUrl:
      'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=600&fit=crop',
    rating: 4,
    price: 14,
    salePrice: 9,
    onSale: true,
    tagIds: ['toffee', 'fruit'],
  },
  {
    id: 'french-macaroon',
    name: 'French Macaroon',
    imageUrl:
      'https://images.unsplash.com/photo-1612203985729-70721283a814?w=600&h=600&fit=crop',
    rating: 5,
    price: 13,
    tagIds: ['milk', 'coffee'],
  },
  {
    id: 'classic-macaroon',
    name: 'Classic Macaroon',
    imageUrl:
      'https://images.unsplash.com/photo-1558961363-fa8aaf64c3cd?w=600&h=600&fit=crop',
    rating: 5,
    price: 15,
    tagIds: ['chocolate', 'milk'],
  },
  {
    id: 'candy-lollipop',
    name: 'Candy Lollipop',
    imageUrl:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop',
    rating: 4,
    price: 15,
    tagIds: ['toffee', 'ice-cream'],
  },
  {
    id: 'happy-ninja',
    name: 'Happy Ninja',
    imageUrl:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop',
    rating: 5,
    price: 12,
    tagIds: ['chocolate', 'cupcake'],
  },
]
