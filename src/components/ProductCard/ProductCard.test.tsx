import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ProductCard } from './ProductCard'
import type { Product } from '../../types'

const product: Product = {
  id: 'premium-lollipop',
  name: 'Premium Lollipop',
  imageUrl: 'https://example.com/lollipop.jpg',
  rating: 4,
  price: 14,
  salePrice: 9,
  onSale: true,
  tagIds: ['toffee'],
}

describe('ProductCard', () => {
  it('muestra badge de sale y precio tachado', () => {
    render(<ProductCard product={product} onAddToCart={vi.fn()} />)

    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('$14.00')).toHaveClass('product-card__price--old')
    expect(screen.getByText('$9.00')).toHaveClass('product-card__price--sale')
  })

  it('dispara onAddToCart al hacer clic en la imagen', async () => {
    const user = userEvent.setup()
    const onAddToCart = vi.fn()

    render(<ProductCard product={product} onAddToCart={onAddToCart} />)

    await user.click(
      screen.getByRole('button', { name: /agregar premium lollipop al carrito/i }),
    )

    expect(onAddToCart).toHaveBeenCalledWith('premium-lollipop')
  })
})
