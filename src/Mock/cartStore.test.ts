import { beforeEach, describe, expect, it } from 'vitest'
import { useCartStore } from './cartStore'
import { useCatalogStore } from './catalogStore'
import { MOCK_PRODUCTS } from './data/products'

describe('cartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [] })
    useCatalogStore.setState({
      products: MOCK_PRODUCTS,
      tags: [],
      loading: false,
      error: null,
    })
  })

  it('agrega y acumula cantidades del mismo producto', () => {
    const { addItem } = useCartStore.getState()

    addItem('yumi-macaroons')
    addItem('yumi-macaroons')

    expect(useCartStore.getState().items).toEqual([
      { productId: 'yumi-macaroons', quantity: 2 },
    ])
  })
})
