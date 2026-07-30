import { beforeEach, describe, expect, it } from 'vitest'
import { useCartStore } from './cartStore'
import { useCatalogStore } from './catalogStore'
import { MOCK_PRODUCTS } from './data/products'

const sampleId = 'chocotorta'

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

    addItem(sampleId)
    addItem(sampleId)

    expect(useCartStore.getState().items).toEqual([{ productId: sampleId, quantity: 2 }])
  })

  it('decrementa cantidad y elimina la línea al llegar a cero', () => {
    const { addItem, decrementItem } = useCartStore.getState()

    addItem(sampleId)
    addItem(sampleId)
    decrementItem(sampleId)
    expect(useCartStore.getState().items).toEqual([{ productId: sampleId, quantity: 1 }])

    decrementItem(sampleId)
    expect(useCartStore.getState().items).toEqual([])
  })
})
