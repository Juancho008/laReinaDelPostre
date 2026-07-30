import { useCallback, useEffect, useState } from 'react'
import { HERO_CAROUSEL_INTERVAL_MS, HERO_SLIDES } from '../Mock'

export function useHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || HERO_SLIDES.length < 2) {
      return undefined
    }

    const timerId = window.setInterval(goToNext, HERO_CAROUSEL_INTERVAL_MS)
    return () => window.clearInterval(timerId)
  }, [goToNext])

  return {
    slides: HERO_SLIDES,
    activeIndex,
  }
}
