import React, { useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { createWhatsAppUrl } from '../../utils/config'
import './FloatingButtons.css'

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openMessenger = () => {
    // Open WhatsApp with configured message
    const message = 'Xin chào! Tôi muốn tư vấn về sản phẩm nước uống TopLife.'
    const whatsappUrl = createWhatsAppUrl(message)
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="floating-buttons-container">
      {/* Messenger Button */}
      <div className="floating-button messenger-button" onClick={openMessenger}>
        <i className="pi pi-comments"></i>
        <span className="floating-button-text">Chat</span>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="floating-button scroll-top-button" onClick={scrollToTop}>
          <i className="pi pi-chevron-up"></i>
        </div>
      )}
    </div>
  )
}

export default FloatingButtons
