export function SearchIcon() {
  return (
    <svg
      className="icon-btn__svg icon-btn__svg--search"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="10" cy="10" r="6.25" stroke="currentColor" strokeWidth="2" />
      <path
        d="M15 15L19.25 19.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CartIcon() {
  return (
    <svg
      className="icon-btn__svg icon-btn__svg--cart"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 8V6.75C8 4.679 9.679 3 11.75 3H12.25C14.321 3 16 4.679 16 6.75V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5.5 8H18.5L17.35 18.2C17.26 18.92 16.64 19.45 15.92 19.45H8.08C7.36 19.45 6.74 18.92 6.65 18.2L5.5 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="icon-btn__svg icon-btn__svg--menu" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg className="icon-btn__svg icon-btn__svg--menu" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
