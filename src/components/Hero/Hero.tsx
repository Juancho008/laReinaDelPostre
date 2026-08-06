import { handleSmoothAnchorClick } from '../../utils/smoothScroll'
import { useHeroCarousel } from '../../hooks'

export function Hero() {
  const { slides, activeIndex } = useHeroCarousel()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="scallop scallop--hero-top" aria-hidden />
      <div className="hero__slides" aria-hidden>
        {slides.map((src, index) => (
          <img
            key={src}
            className={
              index === activeIndex ? 'hero__slide hero__slide--active' : 'hero__slide'
            }
            src={src}
            alt=""
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'low'}
          />
        ))}
      </div>
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__flourish" aria-hidden>
            ✦
          </span>
          <h1 id="hero-title" className="hero__title">
            Coronando tus momentos más dulces.
          </h1>
          <p className="hero__subtitle">
            Descubre la magia de nuestros productos y déjate llevar por un mundo de sabores
            irresistibles. Cada bocado es una experiencia única que te transportará a un lugar de
            felicidad y deleite.
          </p>
          <a
            className="hero__cta"
            href="#shop"
            onClick={(event) => handleSmoothAnchorClick(event, '#shop')}
          >
            Comprar ahora
          </a>
        </div>
      </div>
      <div className="scallop scallop--hero" aria-hidden />
    </section>
  )
}
