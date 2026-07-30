function SearchIcon() {
  return (
    <svg className="sidebar-search__icon" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="2" />
      <path
        d="M15 15L19.25 19.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

interface SearchWidgetProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export function SearchWidget({ value, onChange, onSubmit }: SearchWidgetProps) {
  return (
    <form
      className="sidebar-search"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}
    >
      <label className="visually-hidden" htmlFor="product-search">
        Buscar productos
      </label>
      <input
        id="product-search"
        type="search"
        placeholder="Buscar productos..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button type="submit" className="sidebar-search__submit" aria-label="Buscar">
        <SearchIcon />
      </button>
    </form>
  )
}
