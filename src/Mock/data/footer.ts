export interface SocialLink {
  id: string
  label: string
  href: string
}

export const MOCK_SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/lareinadelospostres__/',
  },
]

export const FOOTER_BG_IMAGE = '/hero2.webp'

export const FOOTER_COPYRIGHT =
  'La Reina del Postre — Pasteles y repostería artesanal'
