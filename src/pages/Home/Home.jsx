import React from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Carousel } from 'primereact/carousel'
import { Divider } from 'primereact/divider'
import { homeData } from '../../data'
import './Home.css'

const Home = () => {
  const { hero, statistics, features, learnSections, video, products, testimonials } = homeData
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false)
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  // Auto slide change
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [hero.slides.length])

  const slideTemplate = (slide) => {
    return (
      <div className="hero-slide">
        <div 
          className="hero-background absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            filter: 'brightness(0.5)'
          }}
        ></div>
        <div className="hero-content relative z-1 text-center text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-fade-in">
              {slide.title}
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-blue-100 slide-fade-in">
              {slide.subtitle}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto line-height-3 slide-fade-in">
              {slide.description}
            </p>
            <Button 
              label={slide.ctaText} 
              icon="pi pi-arrow-right"
              className="p-button-warning p-button-lg slide-fade-in"
              size="large"
            />
          </div>
        </div>
      </div>
    )
  }

  const testimonialTemplate = (testimonial) => {
    return (
      <div className="testimonial-item p-4">
        <Card className="h-full">
          <div className="flex flex-column align-items-center text-center">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-6rem h-6rem border-circle mb-3"
            />
            <p className="text-600 mb-3 line-height-3">"{testimonial.content}"</p>
            <h5 className="mb-1 text-900">{testimonial.name}</h5>
            <span className="text-600 text-sm">{testimonial.role}</span>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="home-page">
      {/* Hero Banner Slider */}
      <section className="hero-section relative">
        <Carousel 
          value={hero.slides} 
          itemTemplate={slideTemplate}
          numVisible={1} 
          numScroll={1}
          showNavigators={true}
          showIndicators={true}
          circular={true}
          autoplayInterval={5000}
          className="hero-carousel"
          page={currentSlide}
          onPageChange={(e) => setCurrentSlide(e.page)}
        />
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="custom-grid">
            {statistics.map((stat, index) => (
              <div key={index} className="statistics-item">
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Video Combined Section */}
      <section className="features-video-section">
        <div className="max-w-6xl mx-auto px-2">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              NƯỚC UỐNG TOPLIFE - THƯƠNG HIỆU NƯỚC UỐNG TINH KHIẾT ĐÓNG CHAI HÀNG ĐẦU TẠI ĐÀ NẴNG
            </h2>
            <p className="text-600 line-height-3 max-w-4xl mx-auto mb-6">
              Công ty TNHH Nam Trung Hải được thành lập từ năm 2008, có 16 năm kinh nghiệm phục vụ nhu cầu cung cấp nước uống tinh khiết cho thị trường miền Trung, Đà Nẵng. Với mong muốn "luôn cố gắng thay đổi và phát triển mạnh mẽ vì mục đích phục vụ sức khoẻ cộng đồng".
            </p>
          </div>
          
          <div className="features-video-grid">
            {/* Features Side */}
            <div className="features-side">
              <div className="features-list">
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon-small">
                      <i className={`pi ${feature.icon}`}></i>
                    </div>
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Video Side */}
            <div className="video-side">
              <div className="video-wrapper-combined">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-auto"
                />
                <div className="video-play-button">
                  <Button 
                    icon="pi pi-play" 
                    className="p-button-rounded"
                    tooltip={video.title}
                  />
                </div>
              </div>
              <h3 className="video-title">{video.title}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Sections */}
      <section className="learn-sections">
        <div className="max-w-6xl mx-auto px-4">
          <div className="learn-items-grid">
            {learnSections.map((section, index) => (
              <div key={index} className="learn-item-compact">
                <div className="learn-icon-compact">
                  <i className={`pi ${section.icon || 'pi-star'}`}></i>
                </div>
                <div className="learn-content-compact">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <Button 
                    label={section.buttonText} 
                    className="p-button-outlined learn-button-compact"
                    icon="pi pi-arrow-right"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="products-section-new">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">SẢN PHẨM NỔI BẬT</h2>
            <p className="text-600 line-height-3 max-w-4xl mx-auto mb-6">
              Với đội ngũ Nước uống Toplife, việc phục vụ nước uống không chỉ dừng lại ở việc thoả mãn nhu cầu cung cấp nước của cơ thể mà còn mang lại nhiều lợi ích cho sức khoẻ, con người, cộng đồng, xã hội. Hãy chung tay cùng chúng tôi đóng góp những giá trị bền vững, trường tồn.
            </p>
          </div>
          
          <div className="product-showcase">
            <div className="product-single-item">
              <div className="product-image-wrapper">
                <img 
                  src="https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/index_product_image_1.png?1717065557897"
                  alt="Nước uống tinh khiết TopLife"
                  className="product-main-image"
                />
              </div>
              <h3 className="product-title">NƯỚC UỐNG TINH KHIẾT TOPLIFE</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section-new">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="testimonials-title">CẢM NHẬN CỦA KHÁCH HÀNG</h2>
            <p className="testimonials-subtitle">
              Năm 2019, Nước uống Toplife có hơn 1500 đối tác và 30.000 khách hàng trải rộng khu vực Đà nẵng.
            </p>
            <div className="testimonials-divider">
              <div className="testimonials-icon">
                <i className="pi pi-comments"></i>
              </div>
            </div>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.items.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card-new">
                <div className="testimonial-content-new">
                  <p className="testimonial-quote">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="author-info">
                      <h5 className="author-name">{testimonial.name}</h5>
                      <span className="author-role">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
