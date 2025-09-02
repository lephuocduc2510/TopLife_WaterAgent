import React, { useState } from 'react'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const toast = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.current.show({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Vui lòng điền đầy đủ thông tin bắt buộc',
        life: 3000
      })
      return
    }

    // Success message
    toast.current.show({
      severity: 'success',
      summary: 'Thành công',
      detail: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.',
      life: 3000
    })

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-page">
      <Toast ref={toast} />
      
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="hero-content">
            <h1 className="hero-title">LIÊN HỆ & KIẾN THỨC</h1>
            <p className="hero-description">
              Cập nhật những thông tin mới nhất về sức khỏe, sản phẩm và hoạt động của TopLife
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="contact-breadcrumb">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="custom-breadcrumb">
            <a href="/" className="breadcrumb-item">
              <i className="pi pi-home"></i>
              Trang chủ
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Liên hệ</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-content">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid">
            {/* Contact Form */}
            <div className="col-12 lg:col-8">
              <Card className="contact-form-card">
                <div className="form-header">
                  <h3>GỬI LIÊN HỆ</h3>
                  <p>Điền thông tin của bạn và chúng tôi sẽ liên hệ lại sớm nhất</p>
                </div>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Họ và tên *</label>
                      <InputText
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và tên"
                        className="w-full"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <InputText
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Nhập địa chỉ email"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Số điện thoại</label>
                      <InputText
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Nhập số điện thoại"
                        className="w-full"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Chủ đề</label>
                      <InputText
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Chủ đề liên hệ"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Nội dung *</label>
                    <InputTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Nhập nội dung tin nhắn"
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    label="GỬI LIÊN HỆ"
                    icon="pi pi-send"
                    className="submit-btn"
                  />
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="col-12 lg:col-4">
              <div className="contact-info">
                {/* Address */}
                <Card className="info-card">
                  <div className="info-header">
                    <i className="pi pi-map-marker"></i>
                    <h4>Địa Chỉ</h4>
                  </div>
                  <p>Thôn Đông Sơn, Xã Hoà Ninh, Huyện Hoà Vang, Thành Phố Đà Nẵng</p>
                </Card>

                {/* Phone & Email */}
                <Card className="info-card">
                  <div className="info-header">
                    <i className="pi pi-phone"></i>
                    <h4>Điện Thoại & Email</h4>
                  </div>
                  <div className="contact-details">
                    <a href="tel:02363735575" className="contact-link">
                      <i className="pi pi-phone"></i>
                      0236 373 5575
                    </a>
                    <a href="tel:0926967979" className="contact-link">
                      <i className="pi pi-phone"></i>
                      0926 96 7979
                    </a>
                    <a href="mailto:kdtoplife@gmail.com" className="contact-link">
                      <i className="pi pi-envelope"></i>
                      kdtoplife@gmail.com
                    </a>
                  </div>
                </Card>

                {/* Working Hours */}
                <Card className="info-card">
                  <div className="info-header">
                    <i className="pi pi-clock"></i>
                    <h4>Thời Gian Hoạt Động</h4>
                  </div>
                  <div className="working-hours">
                    <div className="hour-item">
                      <span className="day">Thứ 2 - Thứ 6</span>
                      <span className="time">Sáng 7h - 11h30, Chiều 1h - 4h30</span>
                    </div>
                    <div className="hour-item">
                      <span className="day">Thứ 7</span>
                      <span className="time">Sáng 7h - 11h30, Chiều 1h - 4h30</span>
                    </div>
                    <div className="hour-item">
                      <span className="day">Chủ Nhật</span>
                      <span className="time">NGHỈ</span>
                    </div>
                  </div>
                </Card>

            
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="map-card">
            <h3>Bản Đồ Vị Trí</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8983825028653!2d108.1356449!3d16.0790577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a83%3A0x1df0cb4b86727e06!2zVGjDtG4gxJDDtG5nIFPGoW4sIEhvw6AgTmluaCwgSG_DoCBWYW5nLCBEYSBOYW5nLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1635123456789!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TopLife Location"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
