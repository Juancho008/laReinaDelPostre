import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useNavMenu } from './useNavMenu'

describe('useNavMenu', () => {
  it('alterna el estado del menú móvil', () => {
    const { result } = renderHook(() => useNavMenu())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggleMenu()
    })
    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.closeMenu()
    })
    expect(result.current.isOpen).toBe(false)
  })
})
