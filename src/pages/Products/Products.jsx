import React, { useState, useEffect } from 'react'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { homeData } from '../../data/homeData'
import './Products.css'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState(searchParams.get('sortby') || 'default')
  const [filteredProducts, setFilteredProducts] = useState(homeData.products.items)

  const sortOptions = [
    { label: 'Mặc định', value: 'default' },
    { label: 'Giá tăng dần', value: 'price-asc' },
    { label: 'Giá giảm dần', value: 'price-desc' },
    { label: 'Từ A-Z', value: 'name-asc' },
    { label: 'Từ Z-A', value: 'name-desc' },
    { label: 'Cũ đến mới', value: 'created-asc' },
    { label: 'Mới đến cũ', value: 'created-desc' }
  ]

  // Thêm giá cho sản phẩm để demo sorting
  const productsWithPrice = homeData.products.items.map(product => ({
    ...product,
    price: product.id === 1 ? 15000 : product.id === 2 ? 35000 : 65000, // Giá demo
    created: new Date(2024, 0, product.id) // Ngày tạo demo
  }))

  useEffect(() => {
    const currentSortBy = searchParams.get('sortby') || 'default'
    setSortBy(currentSortBy)
    
    let sorted = [...productsWithPrice]
    
    switch (currentSortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'created-asc':
        sorted.sort((a, b) => a.created - b.created)
        break
      case 'created-desc':
        sorted.sort((a, b) => b.created - a.created)
        break
      default:
        // Mặc định giữ nguyên thứ tự
        break
    }
    
    setFilteredProducts(sorted)
  }, [searchParams])

  const handleSortChange = (e) => {
    const newSortBy = e.value
    setSortBy(newSortBy)
    
    // Cập nhật URL params
    const newSearchParams = new URLSearchParams(searchParams)
    if (newSortBy === 'default') {
      newSearchParams.delete('sortby')
    } else {
      newSearchParams.set('sortby', newSortBy)
    }
    setSearchParams(newSearchParams)
  }

  const handleContactUs = () => {
    const message = `Xin chào! Tôi muốn tìm hiểu thêm về các sản phẩm nước uống Toplife. Vui lòng liên hệ lại để tư vấn.`
    const phoneNumber = '0926967979'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="products-page">
      {/* Hero Section */}
      <div className="products-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="products-hero-content">
          <h1>SẢN PHẨM & KIẾN THỨC</h1>
          <p>Cập nhật những thông tin mới nhất về sức khỏe, sản phẩm và hoạt động của TopLife</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="products-breadcrumb">
        <div className="container">
          <nav className="custom-breadcrumb">
            <a href="/" className="breadcrumb-item">
              <i className="pi pi-home"></i>
              Trang chủ
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Sản phẩm</span>
          </nav>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="container">
          <div className="products-header">
            <div className="products-experience">
              <span className="experience-number">{homeData.products.experienceYears}</span>
              <span className="experience-label">{homeData.products.experienceLabel}</span>
            </div>
            <h2 className="products-title">{homeData.products.title}</h2>
            <p className="products-description">{homeData.products.description}</p>
          </div>

          {/* Products Filter/Sort */}
          <div className="products-filter">
            <div className="filter-left">
              <span className="products-count">
                Hiển thị {filteredProducts.length} sản phẩm
              </span>
            </div>
            <div className="filter-right">
              <Dropdown
                value={sortBy}
                onChange={handleSortChange}
                options={sortOptions}
                placeholder="Sắp xếp theo"
                className="sort-dropdown"
              />
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="products-cta">
            <h3>Bạn cần tư vấn thêm về sản phẩm?</h3>
            <p>Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn 24/7</p>
            <Button 
              label="Liên hệ tư vấn"
              icon="pi pi-phone"
              className="contact-btn"
              onClick={handleContactUs}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Products