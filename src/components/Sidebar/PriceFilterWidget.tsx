import { formatPrice } from '../../utils/formatPrice'
import { WidgetFrame } from './WidgetFrame'

interface PriceFilterWidgetProps {
  min: number
  max: number
  ceiling: number
  onMaxChange: (value: number) => void
  onApply: () => void
}

export function PriceFilterWidget({
  min,
  max,
  ceiling,
  onMaxChange,
  onApply,
}: PriceFilterWidgetProps) {
  return (
    <WidgetFrame>
      <h2 className="sidebar-widget__title">Filtro de precio</h2>
      <div className="price-filter">
        <div className="price-filter__track-wrap">
          <input
            type="range"
            className="price-filter__range"
            min={min}
            max={ceiling}
            value={max}
            onChange={(event) => onMaxChange(Number(event.target.value))}
            aria-label="Precio máximo"
          />
        </div>
        <div className="price-filter__footer">
          <span className="price-filter__label">
            Precio: {formatPrice(min)} – {formatPrice(max)}
          </span>
          <button type="button" className="price-filter__btn" onClick={onApply}>
            Filtrar
          </button>
        </div>
      </div>
    </WidgetFrame>
  )
}
