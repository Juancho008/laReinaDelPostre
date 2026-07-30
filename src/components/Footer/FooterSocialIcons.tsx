import type { ReactNode } from 'react'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function scallopedDiskPath(cx: number, cy: number, r: number, lobes: number, depth: number) {
  const steps = lobes * 8
  let d = ''
  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * Math.PI * 2 - Math.PI / 2
    const wave = Math.sin(t * lobes) * depth
    const radius = r + wave
    const x = cx + Math.cos(t) * radius
    const y = cy + Math.sin(t) * radius
    d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`
  }
  return `${d} Z`
}

function ScallopedBadge({ children }: { children: ReactNode }) {
  return (
    <span className="footer-social__badge">
      <svg className="footer-social__scallop" viewBox="0 0 44 44" aria-hidden>
        <path fill="#ffffff" d={scallopedDiskPath(22, 22, 18.5, 14, 2.2)} />
      </svg>
      <span className="footer-social__icon">{children}</span>
    </span>
  )
}

interface FooterSocialIconsProps {
  links: Array<{ id: string; label: string; href: string }>
}

export function FooterSocialIcons({ links }: FooterSocialIconsProps) {
  return (
    <ul className="footer-social">
      {links.map((link) => (
        <li key={link.id}>
          <a
            className="footer-social__link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            <ScallopedBadge>
              {link.id === 'instagram' ? <InstagramIcon /> : null}
            </ScallopedBadge>
          </a>
        </li>
      ))}
    </ul>
  )
}
