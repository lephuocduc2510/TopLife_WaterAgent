import React from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import './About.css'

const About = () => {

  const coreValues = [
    {
      icon: 'pi-shield',
      title: 'Chất Lượng',
      description: 'Cam kết mang đến sản phẩm nước uống tinh khiết, đạt chuẩn chất lượng cao nhất'
    },
    {
      icon: 'pi-heart',
      title: 'Tận Tâm',
      description: 'Phục vụ khách hàng với tình yêu và sự tận tâm trong từng sản phẩm, dịch vụ'
    },
    {
      icon: 'pi-lightbulb',
      title: 'Đổi Mới',
      description: 'Không ngừng cải tiến công nghệ và quy trình để mang đến trải nghiệm tốt nhất'
    },
    {
      icon: 'pi-globe',
      title: 'Bền Vững',
      description: 'Cam kết bảo vệ môi trường và phát triển bền vững cùng cộng đồng'
    }
  ]

  const milestones = [
    { year: '2008', event: 'Thành lập Công ty TNHH Nam Trung Hải' },
    { year: '2010', event: 'Ra mắt thương hiệu Nước uống TopLife' },
    { year: '2015', event: 'Mở rộng mạng lưới phân phối toàn Đà Nẵng' },
    { year: '2020', event: 'Đạt 25,000 khách hàng thường xuyên' },
    { year: '2024', event: 'Kỷ niệm 16 năm phục vụ cộng đồng' }
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <img 
            src="https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/slider_1.jpg?1717065557897" 
            alt="TopLife Background"
            className="about-hero-image"
          />
          <div className="about-hero-overlay"></div>
        </div>
        <div className="about-hero-content">
          <div className="container">
            <h1 className="about-hero-title">VỀ TOPLIFE</h1>
            <p className="about-hero-subtitle">
              16 năm kinh nghiệm mang đến nguồn nước tinh khiết cho cộng đồng Đà Nẵng
            </p>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="about-company-info">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text-content">
              <h2 className="about-section-title">CÔNG TY TNHH NAM TRUNG HẢI</h2>
              <div className="about-highlight-text">
                "Luôn cố gắng thay đổi và phát triển mạnh mẽ vì mục đích phục vụ sức khỏe cộng đồng"
              </div>
              <p className="about-description">
                Được thành lập từ năm 2008, Công ty TNHH Nam Trung Hải đã có hơn 16 năm kinh nghiệm 
                trong lĩnh vực cung cấp nước uống tinh khiết. Với thương hiệu TopLife, chúng tôi tự hào 
                là một trong những nhà cung cấp nước uống uy tín hàng đầu tại Đà Nẵng và các tỉnh miền Trung.
              </p>
              <p className="about-description">
                Sứ mệnh của chúng tôi là mang đến cho mọi gia đình nguồn nước uống an toàn, chất lượng cao 
                với giá cả hợp lý. Chúng tôi cam kết không ngừng đầu tư vào công nghệ hiện đại và nâng cao 
                chất lượng dịch vụ để đáp ứng nhu cầu ngày càng cao của khách hàng.
              </p>
              <Button 
                label="LIÊN HỆ NGAY" 
                icon="pi pi-phone"
                className="about-contact-btn"
              />
            </div>
            <div className="about-image-content">
              <img 
                src="https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/introduce-image.jpg?1717065557897" 
                alt="TopLife Factory"
                className="about-company-image"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="about-values">
        <div className="container">
          <h2 className="about-section-title text-center">GIÁ TRỊ CỐT LÕI</h2>
          <div className="about-values-grid">
            {coreValues.map((value, index) => (
              <Card key={index} className="about-value-card">
                <div className="about-value-icon">
                  <i className={`pi ${value.icon}`}></i>
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-description">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

  =

      {/* Mission & Vision Section */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission-grid">
            <div className="about-mission-item">
              <h3 className="about-mission-title">
                <i className="pi pi-eye"></i>
                TẦM NHÌN
              </h3>
              <p className="about-mission-text">
                Trở thành thương hiệu nước uống tinh khiết hàng đầu khu vực miền Trung, 
                được khách hàng tin tưởng và lựa chọn.
              </p>
            </div>
            <div className="about-mission-item">
              <h3 className="about-mission-title">
                <i className="pi pi-flag"></i>
                SỨ MỆNH
              </h3>
              <p className="about-mission-text">
                Mang đến cho mọi gia đình nguồn nước uống an toàn, chất lượng cao, 
                góp phần bảo vệ sức khỏe cộng đồng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
