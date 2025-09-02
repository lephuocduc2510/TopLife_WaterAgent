import React, { useState, useEffect } from 'react'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const menuItems = [
    {
      label: 'TRANG CHỦ',
      url: '/'
    },
    {
      label: 'GIỚI THIỆU',
      url: '/gioi-thieu'
    },
    {
      label: 'SẢN PHẨM',
      url: '/san-pham'
    },
    {
      label: 'TIN TỨC',
      url: '/tin-tuc'
    },
    {
      label: 'LIÊN HỆ',
      url: '/lien-he'
    }
  ]

  const handleMenuClick = (url) => {
    navigate(url)
    setSidebarVisible(false)
  }

  const start = (
    <div className="flex align-items-center">
      <img 
        src="https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/logo.png?1717065557897" 
        alt="TopLife Logo" 
        className="header-logo"
        onClick={() => navigate('/')}
      />
    </div>
  )
  
  const end = (
    <div className="flex align-items-center gap-3">
      {isMobile && (
        <div className="mobile-menu-wrapper">
          <button
            className="custom-mobile-menu-btn"
            onClick={() => setSidebarVisible(true)}
            type="button"
            style={{
              display: 'flex',
              width: '40px',
              height: '40px',
              border: '1px solid #1976d2',
              background: 'transparent',
              backgroundColor: 'transparent',
              borderRadius: '50%',
              cursor: 'pointer',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0',
              margin: '0',
              outline: 'none',
              position: 'relative',
              zIndex: 10,
              fontSize: '16px',
              fontWeight: 'normal',
              boxSizing: 'border-box'
            }}
          >
            <svg 
              width="18" 
              height="12" 
              viewBox="0 0 18 12" 
              fill="none"
              className="hamburger-svg"
              style={{ pointerEvents: 'none' }}
            >
              <path d="M0 1h18M0 6h18M0 11h18" stroke="#1976d2" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-content-between align-items-center py-2">
            <div className="flex align-items-center gap-2 text-sm text-white">
              <i className="pi pi-map-marker text-green-400"></i>
              <span>Thôn Đông Son, Xã Hòa Ninh, Huyện Hòa Vang, Thành Phố Đà Nẵng</span>
            </div>
            <div className="flex align-items-center gap-4 text-sm text-white">
              <div className="flex align-items-center gap-2">
                <i className="pi pi-envelope text-green-400"></i>
                <span>kdtoplife@gmail.com</span>
              </div>
              <div className="flex align-items-center gap-2">
                <i className="pi pi-phone text-green-400"></i>
                <span>0926 96 79 79</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="max-w-6xl mx-auto px-4">
          <Menubar 
            model={isMobile ? [] : menuItems} 
            start={start} 
            end={end} 
            className="header-menubar"
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar 
        visible={sidebarVisible} 
        onHide={() => setSidebarVisible(false)}
        className="mobile-sidebar"
        position="right"
      >
        <div className="mobile-menu">
          <div className="mobile-logo">
            <img 
              src="https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/logo.png?1717065557897" 
              alt="TopLife Logo" 
              className="sidebar-logo"
            />
          </div>
          <nav className="mobile-nav">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="mobile-nav-item"
                onClick={() => handleMenuClick(item.url)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mobile-contact">
            <div className="contact-item">
              <i className="pi pi-phone"></i>
              <span>0926 96 79 79</span>
            </div>
            <div className="contact-item">
              <i className="pi pi-envelope"></i>
              <span>kdtoplife@gmail.com</span>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default Header
