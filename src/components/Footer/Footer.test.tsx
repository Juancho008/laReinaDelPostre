import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('muestra columnas principales en español', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'WhatsApp 3541 358260' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'WhatsApp 341 2698772' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recibe nuestras novedades' })).toBeInTheDocument()
    expect(document.querySelector('.footer-brand__logo')).toHaveAttribute('src', '/logo.webp')
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute(
      'href',
      'https://www.instagram.com/lareinadelospostres__/',
    )
    expect(screen.getByText(/La reina de los postres/)).toBeInTheDocument()
  })
})
