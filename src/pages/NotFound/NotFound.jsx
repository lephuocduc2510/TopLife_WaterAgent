import React from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoBack = () => {
    window.history.back()
  }

  const handleContactUs = () => {
    navigate('/lien-he')
  }

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          {/* 404 Visual */}
          <div className="not-found-visual">
            <div className="error-number">404</div>
            <div className="water-drop-animation">
              <div className="drop drop-1"></div>
              <div className="drop drop-2"></div>
              <div className="drop drop-3"></div>
            </div>
          </div>

          {/* Error Message */}
          <Card className="not-found-card">
            <div className="not-found-text">
              <h1>Trang không tìm thấy</h1>
              <p className="error-description">
                Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
              </p>
              <p className="suggestion-text">
                Có thể bạn muốn:
              </p>
              
              {/* Quick Links */}
              <div className="quick-links">
                <div className="link-item" onClick={() => navigate('/san-pham')}>
                  <i className="pi pi-shopping-bag"></i>
                  <span>Xem sản phẩm</span>
                </div>
                <div className="link-item" onClick={() => navigate('/gioi-thieu')}>
                  <i className="pi pi-info-circle"></i>
                  <span>Giới thiệu TopLife</span>
                </div>
                <div className="link-item" onClick={() => navigate('/tin-tuc')}>
                  <i className="pi pi-book"></i>
                  <span>Đọc tin tức</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="not-found-actions">
                <Button 
                  label="Về trang chủ"
                  icon="pi pi-home"
                  className="home-btn"
                  onClick={handleGoHome}
                />
                <Button 
                  label="Quay lại"
                  icon="pi pi-arrow-left"
                  className="back-btn"
                  outlined
                  onClick={handleGoBack}
                />
                <Button 
                  label="Liên hệ hỗ trợ"
                  icon="pi pi-phone"
                  className="contact-btn"
                  severity="help"
                  onClick={handleContactUs}
                />
              </div>
            </div>
          </Card>

          {/* Company Info */}
          <div className="company-info">
            <h3>Nước uống TopLife</h3>
            <p>Thương hiệu nước uống tinh khiết hàng đầu tại Đà Nẵng</p>
            <div className="contact-info">
              <span>Hotline: 0926.967.979</span>
              <span>Email: kdtoplife@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
