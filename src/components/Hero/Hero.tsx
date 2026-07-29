const HERO_IMAGE = '/hero.webp'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="scallop scallop--hero-top" aria-hidden />
      <img
        className="hero__cover"
        src={HERO_IMAGE}
        alt=""
        aria-hidden
      />
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__flourish" aria-hidden>
            ✦
          </span>
          <h1 id="hero-title" className="hero__title">
            Just Treats
          </h1>
          <p className="hero__subtitle">
            Pasteles artesanales, macarons y dulces hechos con amor para endulzar cada momento
            especial.
          </p>
          <a className="hero__cta" href="#shop">
            Shop Now
          </a>
        </div>
      </div>
      <div className="scallop scallop--hero" aria-hidden />
    </section>
  )
}
