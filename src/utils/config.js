// Environment configuration utility

// Get the current environment
export const isDevelopment = import.meta.env.DEV
export const isProduction = import.meta.env.PROD

// Base URLs
export const APP_URL = import.meta.env.VITE_APP_URL || 'https://top-life-water-agent.vercel.app'
export const DEV_URL = import.meta.env.VITE_DEV_URL || 'http://localhost:5173'

// Get current base URL
export const BASE_URL = isProduction ? APP_URL : DEV_URL

// Contact Information
export const PHONE_NUMBER = import.meta.env.VITE_PHONE_NUMBER || '0926967979'
export const EMAIL = import.meta.env.VITE_EMAIL || 'kdtoplife@gmail.com'
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '84926967979'

// Company Information
export const COMPANY_NAME = import.meta.env.VITE_COMPANY_NAME || 'TopLife'
export const COMPANY_LOCATION = import.meta.env.VITE_COMPANY_LOCATION || 'Đà Nẵng'
export const COMPANY_FULL_NAME = import.meta.env.VITE_COMPANY_FULL_NAME || 'Công ty TNHH Nam Trung Hải'

// Utility functions
export const createWhatsAppUrl = (message = 'Xin chào! Tôi muốn tư vấn về sản phẩm TopLife.') => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const createEmailUrl = (subject = 'Liên hệ tư vấn TopLife') => {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`
}

export const createPhoneUrl = () => {
  return `tel:${PHONE_NUMBER}`
}

// Navigation helper for deployment
export const createFullUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_URL}${cleanPath}`
}

// Check if running on Vercel
export const isVercel = typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')

// Log environment info (only in development)
if (isDevelopment) {
  console.log('🚀 TopLife Water Agent - Environment Info:')
  console.log('📍 Environment:', isDevelopment ? 'Development' : 'Production')
  console.log('🌐 Base URL:', BASE_URL)
  console.log('📞 Phone:', PHONE_NUMBER)
  console.log('📧 Email:', EMAIL)
  console.log('💬 WhatsApp:', WHATSAPP_NUMBER)
}
