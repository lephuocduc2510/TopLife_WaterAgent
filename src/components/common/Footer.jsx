import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
     

      {/* Main footer content */}
      <div className="footer-main-content">
        <div className="footer-content-container">
          <div className="footer-grid">
            {/* Company info */}
            <div className="footer-company-section">
              <div className="footer-logo">
                <h2 className="footer-brand-name">TopLife</h2>
                <p className="footer-brand-location">Đà Nẵng</p>
              </div>
              <p className="footer-company-description">
                Nước uống là nhu cầu tiêu dùng thiết yếu hằng ngày của mọi nhà. 
                Hãy để Nước uống TopLife mang đến cho bạn sản phẩm nước uống chất lượng, 
                đảm bảo và uy tín hàng đầu trên thị trường.
              </p>
              
              <div className="footer-contact-email">
                <span>Email: </span>
                <a href="mailto:kdtoplife@gmail.com" className="footer-email-link">
                  kdtoplife@gmail.com
                </a>
              </div>
              
              <Button 
                label="LIÊN HỆ" 
                className="footer-contact-btn"
                icon="pi pi-arrow-right"
              />
            </div>

            {/* Working hours */}
            <div className="footer-hours-section">
              <h4 className="footer-section-title">THỜI GIAN HOẠT ĐỘNG</h4>
              <div className="footer-hours-content">
                <div className="footer-hour-item">
                  <span className="footer-day">Thứ 2 - Thứ 6</span>
                  <span className="footer-time">Sáng 7h đến 11h30, Chiều 1h - 4h30</span>
                </div>
                <div className="footer-hour-item">
                  <span className="footer-day">Thứ 7</span>
                  <span className="footer-time">Sáng 7h đến 11h30, Chiều 1h - 4h30</span>
                </div>
                <div className="footer-hour-item footer-sunday">
                  <span className="footer-day">CHỦ NHẬT: NGHỈ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © Bản quyền thuộc về Toplife Đà Nẵng | Cung cấp bởi Sapo
            </p>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-link">
                <i className="pi pi-facebook"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="pi pi-twitter"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="pi pi-youtube"></i>
              </a>
              <a href="#" className="footer-social-link">
                <i className="pi pi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
