import { SITE_LOGO_URL } from '../../Mock/data/brand'

interface SiteLogoProps {
  className?: string
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <img
      src={SITE_LOGO_URL}
      alt=""
      className={className}
      width={200}
      height={200}
      decoding="async"
    />
  )
}
