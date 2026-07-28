interface ScrollToTopProps {
  visible: boolean
  onClick: () => void
}

export function ScrollToTop({ visible, onClick }: ScrollToTopProps) {
  if (!visible) return null

  return (
    <button type="button" className="scroll-top" onClick={onClick} aria-label="Volver arriba">
      ↑
    </button>
  )
}
