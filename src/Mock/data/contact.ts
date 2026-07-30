export interface ContactPhone {
  display: string
  phone: string
}

/** Números en formato internacional sin + (Argentina: 549…) */
export const MOCK_CONTACT_PHONES: ContactPhone[] = [
  { display: '3541 358260', phone: '5493541358260' },
  { display: '341 2698772', phone: '5493412698772' },
]

/** Número principal para pedidos por WhatsApp */
export const MOCK_WHATSAPP_PHONE = MOCK_CONTACT_PHONES[0].phone

export const MOCK_WHATSAPP_EMPTY_MESSAGE =
  'Hola, quiero consultar por productos de La Reina del Postre.'
