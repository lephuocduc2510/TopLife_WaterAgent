import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Divider } from 'primereact/divider'
import { TabView, TabPanel } from 'primereact/tabview'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from 'primereact/toast'
import { Rating } from 'primereact/rating'
import { productData, testimonials } from '../../data/productData'
import './ProductDetail.css'

const ProductDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerMessage, setCustomerMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const toast = React.useRef(null)

  useEffect(() => {
    const foundProduct = productData.find(p => p.slug === slug)
    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      navigate('/san-pham')
    }
  }, [slug, navigate])

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const handleOrderNow = () => {
    if (!customerName || !customerPhone) {
      toast.current.show({
        severity: 'warn',
        summary: 'Thông báo',
        detail: 'Vui lòng nhập đầy đủ họ tên và số điện thoại',
        life: 3000
      })
      return
    }

    const message = `🔥 ĐẶT HÀNG NƯỚC TOPLIFE 🔥
    
📦 Sản phẩm: ${product.name}
📊 Số lượng: ${quantity} chai
👤 Khách hàng: ${customerName}
📞 Điện thoại: ${customerPhone}
📧 Email: ${customerEmail || 'Không có'}
💬 Ghi chú: ${customerMessage || 'Không có'}

Vui lòng liên hệ lại để xác nhận đơn hàng. Cảm ơn quý khách!`

    const phoneNumber = '0926967979'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    // Show success message
    toast.current.show({
      severity: 'success',
      summary: 'Đặt hàng thành công',
      detail: 'Chúng tôi sẽ liên hệ lại với bạn sớm nhất!',
      life: 5000
    })
  }

  const handleContactForm = async () => {
    if (!customerName || !customerPhone || !customerMessage) {
      toast.current.show({
        severity: 'warn',
        summary: 'Thông báo',
        detail: 'Vui lòng điền đầy đủ thông tin liên hệ',
        life: 3000
      })
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      const message = `📞 LIÊN HỆ TƯ VẤN 📞
      
👤 Họ tên: ${customerName}
📞 Điện thoại: ${customerPhone}
📧 Email: ${customerEmail || 'Không có'}
💬 Nội dung: ${customerMessage}

Vui lòng liên hệ lại để tư vấn chi tiết. Cảm ơn!`

      const phoneNumber = '0926967979'
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')

      toast.current.show({
        severity: 'success',
        summary: 'Gửi liên hệ thành công',
        detail: 'Chúng tôi sẽ phản hồi trong thời gian sớm nhất!',
        life: 5000
      })

      // Reset form
      setCustomerName('')
      setCustomerPhone('')
      setCustomerEmail('')
      setCustomerMessage('')
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Có lỗi xảy ra, vui lòng thử lại!',
        life: 3000
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="product-detail-page">
      <Toast ref={toast} />
      
      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <div className="container">
          <nav className="custom-breadcrumb">
            <a href="/" className="breadcrumb-item">
              <i className="pi pi-home"></i>
              Trang chủ
            </a>
            <span className="breadcrumb-separator">/</span>
            <a href="/san-pham" className="breadcrumb-item">Sản phẩm</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail Content */}
      <div className="product-detail-content">
        <div className="container">
          <div className="product-detail-layout">
            {/* Product Images */}
            <div className="product-images">
              <div className="main-image">
                <img src={product.image} alt={product.name} />
                <Badge value="CHÍNH HÃNG" className="authentic-badge" />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <Rating value={5} readOnly stars={5} cancel={false} />
                <span className="rating-text">(Đánh giá 5/5 từ khách hàng)</span>
              </div>
              
              <div className="product-description">
                <p>{product.description}</p>
              </div>

              <div className="product-features">
                <h3>Đặc điểm nổi bật:</h3>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <i className="pi pi-check-circle"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-specs-quick">
                <div className="spec-item">
                  <strong>Dung tích:</strong> {product.capacity}
                </div>
                <div className="spec-item">
                  <strong>Phù hợp:</strong> {product.usage}
                </div>
                <div className="spec-item">
                  <strong>Chất liệu:</strong> {product.material}
                </div>
                <div className="spec-item">
                  <strong>Hạn sử dụng:</strong> {product.shelfLife}
                </div>
              </div>

              {/* Order Section */}
              <div className="order-section">
                <h3>ĐẶT NƯỚC NGAY</h3>
                <div className="quantity-selector">
                  <label>Số lượng:</label>
                  <div className="quantity-controls">
                    <Button 
                      icon="pi pi-minus" 
                      onClick={() => handleQuantityChange('decrease')}
                      className="quantity-btn"
                      disabled={quantity <= 1}
                    />
                    <span className="quantity-display">{quantity}</span>
                    <Button 
                      icon="pi pi-plus" 
                      onClick={() => handleQuantityChange('increase')}
                      className="quantity-btn"
                    />
                  </div>
                </div>

                <div className="customer-info">
                  <div className="form-row">
                    <InputText 
                      placeholder="Họ và tên *" 
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="customer-input"
                    />
                    <InputText 
                      placeholder="Số điện thoại *" 
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="customer-input"
                    />
                  </div>
                  <InputText 
                    placeholder="Email (không bắt buộc)" 
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="customer-input"
                  />
                  <InputTextarea 
                    placeholder="Ghi chú đơn hàng (không bắt buộc)" 
                    value={customerMessage}
                    onChange={(e) => setCustomerMessage(e.target.value)}
                    className="customer-textarea"
                    rows={3}
                  />
                </div>

                <Button 
                  label="ĐẶT HÀNG NGAY"
                  icon="pi pi-shopping-cart"
                  className="order-btn"
                  onClick={handleOrderNow}
                />

                <div className="contact-info">
                  <div className="hotline">
                    <i className="pi pi-phone"></i>
                    <span>HOTLINE: <strong>0926 96 79 79</strong></span>
                  </div>
                  <div className="working-hours">
                    <i className="pi pi-clock"></i>
                    <span>Thứ 2 - Thứ 7: 7h - 11h30, 13h - 16h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="product-tabs-section">
        <div className="container">
          <TabView className="product-tabs">
            <TabPanel header="Mô tả sản phẩm" leftIcon="pi pi-info-circle">
              <div className="tab-content">
                <h3>Giới thiệu chi tiết</h3>
                <p>{product.detailDescription}</p>
                
                <h4>Ưu điểm vượt trội:</h4>
                <ul>
                  <li>Nguồn nước thiên nhiên sạch từ các vùng núi cao</li>
                  <li>Công nghệ lọc RO hiện đại, loại bỏ 99.9% tạp chất</li>
                  <li>Quy trình sản xuất khép kín, đảm bảo vệ sinh</li>
                  <li>Chứng nhận chất lượng ISO 22000:2018</li>
                  <li>Đạt chuẩn QCVN 01:2018/BYT của Bộ Y tế</li>
                </ul>

                <h4>Thành phần dinh dưỡng:</h4>
                <div className="nutrition-table">
                  <table>
                    <tbody>
                      <tr>
                        <td>pH</td>
                        <td>6.5 - 8.5</td>
                      </tr>
                      <tr>
                        <td>TDS (tổng chất rắn hòa tan)</td>
                        <td>50 - 300 mg/L</td>
                      </tr>
                      <tr>
                        <td>Độ cứng tổng</td>
                        <td>≤ 300 mg/L CaCO3</td>
                      </tr>
                      <tr>
                        <td>Clorua</td>
                        <td>≤ 250 mg/L</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabPanel>

            <TabPanel header="Thông số kỹ thuật" leftIcon="pi pi-cog">
              <div className="tab-content">
                <h3>Thông số chi tiết</h3>
                <div className="specs-grid">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="spec-row">
                      <span className="spec-label">
                        {key === 'capacity' && 'Dung tích'}
                        {key === 'weight' && 'Trọng lượng'}
                        {key === 'height' && 'Chiều cao'}
                        {key === 'diameter' && 'Đường kính'}
                        {key === 'material' && 'Chất liệu'}
                        {key === 'capType' && 'Loại nắp'}
                        {key === 'packaging' && 'Quy cách đóng gói'}
                      </span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>

                <h4>Quy cách bảo quản:</h4>
                <ul>
                  <li>Bảo quản nơi khô ráo, thoáng mát</li>
                  <li>Tránh ánh nắng trực tiếp</li>
                  <li>Nhiệt độ bảo quản: 5°C - 25°C</li>
                  <li>Sau khi mở nắp, nên sử dụng trong vòng 3 ngày</li>
                  <li>Không để gần nguồn nhiệt hoặc hóa chất</li>
                </ul>
              </div>
            </TabPanel>

            <TabPanel header="Ý kiến khách hàng" leftIcon="pi pi-users">
              <div className="tab-content">
                <h3>Phản hồi từ khách hàng</h3>
                <div className="testimonials-list">
                  {testimonials.slice(0, 2).map((testimonial) => (
                    <Card key={testimonial.id} className="testimonial-card">
                      <div className="testimonial-header">
                        <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                        <div className="testimonial-info">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.position}</p>
                          <Rating value={5} readOnly stars={5} cancel={false} />
                        </div>
                      </div>
                      <p className="testimonial-content">"{testimonial.content}"</p>
                    </Card>
                  ))}
                </div>
              </div>
            </TabPanel>

            <TabPanel header="Liên hệ đặt nước" leftIcon="pi pi-phone">
              <div className="tab-content">
                <h3>LIÊN HỆ ĐẶT NƯỚC</h3>
                <div className="contact-form-section">
                  <div className="contact-form">
                    <div className="form-row">
                      <InputText 
                        placeholder="Họ tên *" 
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                      <InputText 
                        placeholder="Email" 
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                      />
                    </div>
                    <InputText 
                      placeholder="Điện thoại *" 
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                    />
                    <InputTextarea 
                      placeholder="Nội dung *" 
                      value={customerMessage}
                      onChange={(e) => setCustomerMessage(e.target.value)}
                      rows={4}
                    />
                    <Button 
                      label="GỬI TIN NHẮN"
                      icon="pi pi-send"
                      className="submit-btn"
                      onClick={handleContactForm}
                      loading={isLoading}
                    />
                  </div>

                  <div className="contact-info-detailed">
                    <h4>Thông tin liên hệ:</h4>
                    <div className="contact-item">
                      <i className="pi pi-map-marker"></i>
                      <span>Đà Nẵng, Việt Nam</span>
                    </div>
                    <div className="contact-item">
                      <i className="pi pi-phone"></i>
                      <span>0926 96 79 79</span>
                    </div>
                    <div className="contact-item">
                      <i className="pi pi-envelope"></i>
                      <span>kdtoplife@gmail.com</span>
                    </div>
                    
                    <h4>Thời gian hoạt động:</h4>
                    <div className="working-time">
                      <p><strong>Thứ 2 - Thứ 6:</strong> Sáng 7h đến 11h30, Chiều 1h - 4h30</p>
                      <p><strong>Thứ 7:</strong> Sáng 7h đến 11h30, Chiều 1h - 4h30</p>
                      <p><strong>Chủ nhật:</strong> NGHỈ</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products-section">
        <div className="container">
          <h3>Sản phẩm khác</h3>
          <div className="related-products-grid">
            {productData
              .filter(p => p.id !== product.id)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="related-product-card">
                  <img src={relatedProduct.image} alt={relatedProduct.name} />
                  <h4>{relatedProduct.name}</h4>
                  <p>{relatedProduct.capacity}</p>
                  <Button 
                    label="Xem chi tiết"
                    className="view-detail-btn"
                    onClick={() => navigate(`/san-pham/${relatedProduct.slug}`)}
                  />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
