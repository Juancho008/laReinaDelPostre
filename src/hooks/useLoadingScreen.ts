import { useEffect, useRef, useState } from 'react'
import { useCatalogStore } from '../Mock'

const MIN_LOADING_MS = 2400
const EXIT_MS = 700
const MAX_LOADING_MS = 5500

export function useLoadingScreen() {
  const loadCatalog = useCatalogStore((state) => state.loadCatalog)
  const hasProducts = useCatalogStore((state) => state.products.length > 0)
  const error = useCatalogStore((state) => state.error)

  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)
  const [progress, setProgress] = useState(0)
  const startTimeRef = useRef(Date.now())
  const finishedRef = useRef(false)

  useEffect(() => {
    void loadCatalog()
  }, [loadCatalog])

  useEffect(() => {
    if (!visible || exiting) return undefined

    const intervalId = window.setInterval(() => {
      const catalogReady = hasProducts || Boolean(error)
      const elapsed = Date.now() - startTimeRef.current
      const minMet = elapsed >= MIN_LOADING_MS

      setProgress((prev) => {
        if (catalogReady && minMet) {
          return Math.min(100, prev + 5)
        }

        const cap = catalogReady ? 92 : 86
        if (prev >= cap) return prev
        return prev + (cap - prev) * 0.1 + 0.35
      })
    }, 40)

    return () => window.clearInterval(intervalId)
  }, [visible, exiting, hasProducts, error])

  useEffect(() => {
    if (finishedRef.current || !visible) return undefined
    if (progress < 100) return undefined
    if (!hasProducts && !error) return undefined

    finishedRef.current = true
    setExiting(true)

    const timeoutId = window.setTimeout(() => {
      setVisible(false)
    }, EXIT_MS)

    return () => window.clearTimeout(timeoutId)
  }, [progress, hasProducts, error, visible])

  useEffect(() => {
    if (!visible || finishedRef.current) return undefined

    const timeoutId = window.setTimeout(() => {
      if (finishedRef.current) return
      finishedRef.current = true
      setExiting(true)
      window.setTimeout(() => setVisible(false), EXIT_MS)
    }, MAX_LOADING_MS)

    return () => window.clearTimeout(timeoutId)
  }, [visible])

  return { visible, exiting, progress }
}
