import { useCallback, useState } from 'react'

export function useNavMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen((open) => !open)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return { isOpen, toggleMenu, closeMenu }
}
