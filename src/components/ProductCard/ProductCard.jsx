import React from 'react'
import { Button } from 'primereact/button'
import { Badge } from 'primereact/badge'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
      </div>
      
      <div className="product-info">
        <div className="product-category">
          <Badge value={product.category} className="product-category-badge" />
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-features">
          {product.features.map((feature, index) => (
            <div key={index} className="product-feature">
              <i className="pi pi-check-circle"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="product-actions">
          <Button 
            label="Xem chi tiết" 
            icon="pi pi-eye"
            className="p-button-primary product-detail-btn"
            size="small"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
