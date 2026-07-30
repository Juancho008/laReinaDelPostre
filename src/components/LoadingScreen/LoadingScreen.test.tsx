import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LoadingScreen } from './LoadingScreen'

describe('LoadingScreen', () => {
  it('muestra marca y estado de carga', () => {
    render(<LoadingScreen exiting={false} progress={42} />)

    expect(screen.getByRole('status', { name: 'Cargando la tienda' })).toBeInTheDocument()
    expect(screen.getByText('La Reina del Postre')).toBeInTheDocument()
    expect(screen.getByText('42%')).toBeInTheDocument()
    expect(screen.getByText(/Horneando magia/)).toBeInTheDocument()
  })
})
