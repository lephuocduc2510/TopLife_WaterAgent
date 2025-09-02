import React from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Badge } from 'primereact/badge'
import { useNavigate } from 'react-router-dom'
import { createWhatsAppUrl } from '../../utils/config'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const handleViewDetail = () => {
    navigate(`/san-pham/${product.slug}`)
  }

  const handleQuickOrder = () => {
    const message = `Xin chào! Tôi muốn đặt ${product.name}. Vui lòng liên hệ lại để tư vấn.`
    const whatsappUrl = createWhatsAppUrl(message)
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Card className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
          onClick={handleViewDetail}
        />
        <Badge value={product.category} className="category-badge" />
      </div>
      
      <div className="product-info">
        <h3 className="product-name" onClick={handleViewDetail}>
          {product.name}
        </h3>
        {product.price && (
          <div className="product-price">
            {product.price.toLocaleString('vi-VN')}đ
          </div>
        )}
        <p className="product-description">
          {product.description}
        </p>
        
        <div className="product-features">
          <ul>
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index}>
                <i className="pi pi-check"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="product-actions">
        <Button 
          label="Xem chi tiết"
          icon="pi pi-eye"
          className="detail-btn"
          onClick={handleViewDetail}
          outlined
        />
        <Button 
          label="Đặt nước ngay"
          icon="pi pi-phone"
          className="order-btn"
          onClick={handleQuickOrder}
        />
      </div>
    </Card>
  )
}

export default ProductCard
