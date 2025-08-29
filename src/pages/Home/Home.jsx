import React from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Carousel } from 'primereact/carousel'
import { Divider } from 'primereact/divider'
import { homeData } from '../../data'
import './Home.css'

const Home = () => {
  const { hero, statistics, features, learnSections, video, products, testimonials } = homeData

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
      {/* Hero Section */}
      <section className="hero-section relative">
        <div 
          className="hero-background absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.backgroundImage})`,
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="hero-content relative z-1 text-center text-white py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {hero.title}
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-blue-100">
              {hero.subtitle}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto line-height-3">
              {hero.description}
            </p>
            <Button 
              label={hero.ctaText} 
              icon="pi pi-arrow-right"
              className="p-button-warning p-button-lg"
              size="large"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section py-6 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-nogutter">
            {statistics.map((stat, index) => (
              <div key={index} className="col-12 md:col-3 text-center p-3">
                <div className="statistics-item p-4">
                  <i className={`pi ${stat.icon} text-4xl text-blue-600 mb-3`}></i>
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</h3>
                  <p className="text-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn Sections */}
      <section className="learn-sections py-8">
        <div className="max-w-6xl mx-auto px-4">
          {learnSections.map((section, index) => (
            <div key={index} className="mb-8">
              <div className={`grid grid-nogutter align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                <div className="col-12 md:col-6 p-4">
                  <Card className="h-full">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{section.title}</h3>
                    <p className="text-600 line-height-3 mb-4">{section.description}</p>
                    <Button 
                      label={section.buttonText} 
                      className="p-button-outlined"
                      icon="pi pi-arrow-right"
                    />
                  </Card>
                </div>
                <div className="col-12 md:col-6 p-4">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-auto border-round shadow-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              NƯỚC UỐNG TOPLIFE - THƯƠNG HIỆU NƯỚC UỐNG TINH KHIẾT ĐÓNG CHAI HÀNG ĐẦU TẠI ĐÀ NẴNG
            </h2>
          </div>
          <div className="grid grid-nogutter">
            {features.map((feature, index) => (
              <div key={index} className="col-12 md:col-6 lg:col-4 p-3">
                <Card className="h-full text-center feature-card">
                  <div className="flex flex-column align-items-center">
                    <div className="feature-icon-wrapper mb-3">
                      <i className={`pi ${feature.icon} text-4xl text-blue-600`}></i>
                    </div>
                    <h4 className="font-bold text-blue-900 mb-2">{feature.title}</h4>
                    <p className="text-600 text-sm line-height-3">{feature.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="video-wrapper relative">
            <img 
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-auto border-round shadow-3"
            />
            <div className="absolute top-50 left-50 transform -translate-x-50 -translate-y-50">
              <Button 
                icon="pi pi-play" 
                className="p-button-rounded p-button-lg"
                style={{ width: '4rem', height: '4rem' }}
                tooltip={video.title}
              />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-900 mt-4">{video.title}</h3>
        </div>
      </section>

      {/* Product Section */}
      <section className="products-section py-8 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="flex align-items-center justify-content-center mb-3">
              <div className="text-5xl font-bold text-blue-900 mr-3">{products.experienceYears}</div>
              <div className="text-left">
                <div className="text-lg font-bold text-blue-900">{products.experienceLabel}</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{products.title}</h2>
            <p className="text-600 line-height-3 max-w-3xl mx-auto">
              {products.description}
            </p>
          </div>
          
          <div className="grid grid-nogutter justify-content-center">
            {products.items.map((product) => (
              <div key={product.id} className="col-12 md:col-6 lg:col-4 p-3">
                <Card className="text-center product-card">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-12rem object-fit-cover mb-3"
                  />
                  <h4 className="font-bold text-blue-900 mb-3">{product.name}</h4>
                  <div className="flex gap-2 justify-content-center">
                    {product.buttons.map((btn, btnIndex) => (
                      <Button 
                        key={btnIndex}
                        label={btn.text} 
                        className={btn.type === 'outlined' ? 'p-button-outlined p-button-sm' : 'p-button-sm'}
                      />
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="flex align-items-center justify-content-center mb-3">
              <div className="text-5xl font-bold text-blue-900 mr-3">{testimonials.experienceYears}</div>
              <div className="text-left">
                <div className="text-lg font-bold text-blue-900">{testimonials.experienceLabel}</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{testimonials.title}</h2>
            <p className="text-600 mb-4">
              {testimonials.description}
            </p>
          </div>
          
          <Carousel 
            value={testimonials.items}
            itemTemplate={testimonialTemplate}
            numVisible={2}
            numScroll={1}
            responsiveOptions={[
              {
                breakpoint: '768px',
                numVisible: 1,
                numScroll: 1
              }
            ]}
            className="testimonials-carousel"
          />
        </div>
      </section>
    </div>
  )
}

export default Home
