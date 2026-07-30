import { useEffect, useState } from 'react'
import { SITE_BRAND_NAME } from '../../Mock/data/brand'
import { SiteLogo } from '../SiteLogo'
import './LoadingScreen.css'

const LOADING_MESSAGES = [
  'Horneando magia…',
  'Decorando con amor…',
  'Espolvoreando azúcar…',
  'Preparando el postre perfecto…',
  'Coronando la dulzura…',
]

const FLOATERS = ['🍓', '🍫', '🍰', '👑', '✨', '🧁', '🍮', '☕']

const SPRINKLE_COLORS = ['#f08ca8', '#e8b44c', '#6dc5c4', '#e98aa3', '#fff5f8']

interface LoadingScreenProps {
  exiting: boolean
  progress: number
}

export function LoadingScreen({ exiting, progress }: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % LOADING_MESSAGES.length)
    }, 900)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div
      className={exiting ? 'loading-screen loading-screen--exit' : 'loading-screen'}
      role="status"
      aria-live="polite"
      aria-label="Cargando la tienda"
    >
      <div className="loading-screen__sky" aria-hidden>
        <span className="loading-screen__orb loading-screen__orb--one" />
        <span className="loading-screen__orb loading-screen__orb--two" />
        <span className="loading-screen__orb loading-screen__orb--three" />
      </div>

      <div className="loading-screen__sprinkles" aria-hidden>
        {Array.from({ length: 18 }, (_, index) => (
          <span
            key={index}
            className="loading-screen__sprinkle"
            style={{
              left: `${(index * 17 + 6) % 100}%`,
              animationDelay: `${index * 0.22}s`,
              animationDuration: `${2.8 + (index % 4) * 0.35}s`,
              backgroundColor: SPRINKLE_COLORS[index % SPRINKLE_COLORS.length],
            }}
          />
        ))}
      </div>

      <div className="loading-screen__floaters" aria-hidden>
        {FLOATERS.map((emoji, index) => (
          <span
            key={emoji}
            className="loading-screen__floater"
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="loading-screen__card">
        <div className="loading-screen__ring loading-screen__ring--outer" aria-hidden />
        <div className="loading-screen__ring loading-screen__ring--inner" aria-hidden />

        <div className="loading-screen__logo-wrap">
          <SiteLogo className="loading-screen__logo" />
          <span className="loading-screen__sparkle loading-screen__sparkle--one">✦</span>
          <span className="loading-screen__sparkle loading-screen__sparkle--two">✧</span>
          <span className="loading-screen__sparkle loading-screen__sparkle--three">✦</span>
        </div>

        <p className="loading-screen__brand">{SITE_BRAND_NAME}</p>
        <p key={messageIndex} className="loading-screen__message">
          {LOADING_MESSAGES[messageIndex]}
        </p>

        <div className="loading-screen__progress" aria-hidden>
          <div className="loading-screen__progress-track">
            <div
              className="loading-screen__progress-fill"
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
          <span className="loading-screen__progress-label">
            {Math.round(Math.min(100, progress))}%
          </span>
        </div>

        <div className="loading-screen__dots" aria-hidden>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="loading-screen__scallop" aria-hidden />
    </div>
  )
}
