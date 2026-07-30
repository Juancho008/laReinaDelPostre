import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { HERO_CAROUSEL_INTERVAL_MS } from '../Mock'
import { useHeroCarousel } from './useHeroCarousel'

describe('useHeroCarousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('avanza al siguiente slide en el intervalo configurado', () => {
    const { result } = renderHook(() => useHeroCarousel())

    expect(result.current.activeIndex).toBe(0)

    act(() => {
      vi.advanceTimersByTime(HERO_CAROUSEL_INTERVAL_MS)
    })

    expect(result.current.activeIndex).toBe(1)
  })
})
