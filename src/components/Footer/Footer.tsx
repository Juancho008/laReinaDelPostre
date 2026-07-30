import { useState, type FormEvent } from 'react'
import { FOOTER_BG_IMAGE, FOOTER_COPYRIGHT, MOCK_SOCIAL_LINKS } from '../../Mock/data/footer'
import { MOCK_CONTACT_PHONES, MOCK_WHATSAPP_EMPTY_MESSAGE } from '../../Mock/data/contact'
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppOrderUrl'
import { SiteLogo } from '../SiteLogo'
import { FooterBarScallopDivider, FooterIcingDivider } from './FooterDividers'
import { FooterOrnament } from './FooterOrnament'
import { FooterSocialIcons } from './FooterSocialIcons'

interface FooterProps {
  onScrollTop?: () => void
}

function FooterBrandCrest() {
  return (
    <div className="footer-brand">
      <SiteLogo className="footer-brand__logo" />
    </div>
  )
}

export function Footer({ onScrollTop }: FooterProps) {
  const [email, setEmail] = useState('')

  const handleNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <div className="site-footer-wrap">
      <FooterIcingDivider />
      <footer id="contacts" className="site-footer">
        <div
          className="site-footer__backdrop"
          style={{ backgroundImage: `url(${FOOTER_BG_IMAGE})` }}
        >
          <div className="site-footer__inner">
            <section className="site-footer__col" aria-labelledby="footer-contact-title">
              <h2 id="footer-contact-title" className="site-footer__heading">
                Contacto
              </h2>
              <FooterOrnament />
              <ul className="site-footer__phones">
                {MOCK_CONTACT_PHONES.map((entry) => (
                  <li key={entry.phone}>
                    <a
                      className="site-footer__phone"
                      href={buildWhatsAppUrl(entry.phone, MOCK_WHATSAPP_EMPTY_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp {entry.display}
                    </a>
                  </li>
                ))}
              </ul>
              <h3 className="site-footer__subheading">Síguenos</h3>
              <FooterSocialIcons links={MOCK_SOCIAL_LINKS} />
            </section>

            <section className="site-footer__col site-footer__col--brand" aria-label="Marca">
              <FooterBrandCrest />
            </section>

            <section className="site-footer__col" aria-labelledby="footer-news-title">
              <h2 id="footer-news-title" className="site-footer__heading">
                Recibe nuestras novedades
              </h2>
              <FooterOrnament />
              <form className="site-footer__newsletter" onSubmit={handleNewsletter}>
                <label className="visually-hidden" htmlFor="footer-email">
                  Correo electrónico
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  placeholder="Tu correo"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                />
                <button type="submit" className="site-footer__newsletter-btn" aria-label="Suscribirse">
                  →
                </button>
              </form>
            </section>
          </div>
          <FooterBarScallopDivider />
        </div>
        <div className="site-footer__bar">
          <p className="site-footer__copy">{FOOTER_COPYRIGHT}</p>
          {onScrollTop ? (
            <button
              type="button"
              className="site-footer__scroll-top"
              onClick={onScrollTop}
              aria-label="Volver arriba"
            >
              <svg className="site-footer__scroll-top-svg" viewBox="0 0 44 44" aria-hidden>
                <path
                  fill="#1a1210"
                  d="M22 2c1.8 0 2.6 1.4 3.6 2.5 1.1 1.2 2.6 1.4 3.9.9 1.2-.5 2.6.1 3.4 1.2.8 1.1.8 2.6.1 3.8-.7 1.1-.2 2.6.9 3.5 1.1 1 1.7 2.5 1.3 3.8-.4 1.3-1.5 2.2-2.8 2.4-1.2.5-1.6 1.9-1 3.1.6 1.1.4 2.6-.6 3.4-1 .8-2.5.8-3.6.1-1-.7-2.5-.4-3.3.6-.8 1-2.3 1.4-3.5.8-1.2-.6-2-1.8-1.8-3.2.2-1.3-.8-2.5-2.1-2.7-1.3-.2-2.3-1.4-2.5-2.7-.2-1.3.6-2.6 1.8-3 .1 0 .1-.1.1-.1 1.2-.4 1.8-1.8 1.3-3-.5-1.2.1-2.6 1.2-3.3 1.1-.7 2.6-.4 3.5.6.9 1 2.3 1.2 3.5.5C20.5 2.5 21.1 2 22 2z"
                />
                <circle cx="22" cy="22" r="13" fill="#e98aa3" />
                <path
                  d="M22 28V16M17.5 20.5 22 16l4.5 4.5"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : null}
        </div>
      </footer>
    </div>
  )
}
