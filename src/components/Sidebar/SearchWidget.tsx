interface SearchWidgetProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export function SearchWidget({ value, onChange, onSubmit }: SearchWidgetProps) {
  return (
    <div className="widget">
      <form
        className="search-widget"
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
          placeholder="Search products..."
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <button type="submit" aria-label="Buscar">
          ⌕
        </button>
      </form>
      <span className="widget__heart" aria-hidden>
        ♥
      </span>
    </div>
  )
}
