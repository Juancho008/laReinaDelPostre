export function formatPrice(amount: number): string {
  const formatted = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount)

  // Normaliza espacios no separables del Intl para tests y WhatsApp
  return formatted.replace(/\u00a0/g, ' ').replace(/\u202f/g, ' ')
}
