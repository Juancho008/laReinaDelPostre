import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProductCard } from './ProductCard'
import type { Product } from '../../types'
import { formatPrice } from '../../utils/formatPrice'

const product: Product = {
  id: 'chocotorta',
  name: 'Chocotorta',
  imageUrl: '/desserts/postre-6.webp',
  rating: 5,
  price: 4000,
  salePrice: 3500,
  onSale: true,
  tagIds: ['chocolate'],
  descriptionLines: ['🍫 Galletitas', '🥄 Dulce de leche'],
}

describe('ProductCard', () => {
  it('muestra badge destacado cuando el producto es featured', () => {
    render(
      <ProductCard
        product={{ ...product, onSale: false, salePrice: undefined, featured: true }}
        onAddToCart={vi.fn()}
      />,
    )

    expect(screen.getByText('Destacado')).toBeInTheDocument()
  })

  it('muestra badge de oferta y precio tachado', () => {
    render(<ProductCard product={product} onAddToCart={vi.fn()} />)

    expect(screen.getByText('Oferta')).toBeInTheDocument()
    expect(screen.getByText(formatPrice(4000))).toHaveClass('product-card__price--old')
    expect(screen.getByText(formatPrice(3500))).toHaveClass('product-card__price--sale')
  })

  it('abre el modal al hacer clic en la imagen', async () => {
    const user = userEvent.setup()
    render(<ProductCard product={product} onAddToCart={vi.fn()} />)

    await user.click(screen.getByRole('button', { name: /ver detalle de chocotorta/i }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('🍫 Galletitas')).toBeInTheDocument()
  })

  it('dispara onAddToCart solo desde el botón de la tarjeta', async () => {
    const user = userEvent.setup()
    const onAddToCart = vi.fn()

    render(<ProductCard product={product} onAddToCart={onAddToCart} />)

    await user.click(screen.getByRole('button', { name: /^agregar al carrito$/i }))

    expect(onAddToCart).toHaveBeenCalledWith('chocotorta')
  })
})
