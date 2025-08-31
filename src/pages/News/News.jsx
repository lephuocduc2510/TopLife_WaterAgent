import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Dropdown } from 'primereact/dropdown'
import { Paginator } from 'primereact/paginator'
import newsData from '../../data/newsData'
import './News.css'

const News = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [articles, setArticles] = useState(newsData.articles)
  const [filteredArticles, setFilteredArticles] = useState(newsData.articles)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [sortBy, setSortBy] = useState(searchParams.get('sortby') || 'newest')
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1)
  const [itemsPerPage] = useState(6)

  const sortOptions = [
    { label: 'Mới nhất', value: 'newest' },
    { label: 'Cũ nhất', value: 'oldest' },
    { label: 'Nhiều lượt xem', value: 'popular' },
    { label: 'A-Z', value: 'name-asc' },
    { label: 'Z-A', value: 'name-desc' }
  ]

  useEffect(() => {
    let filtered = [...newsData.articles]

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      const categoryName = newsData.categories.find(cat => cat.slug === selectedCategory)?.name
      if (categoryName) {
        filtered = filtered.filter(article => article.category === categoryName)
      }
    }

    // Sort articles
    switch (sortBy) {
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
        break
      case 'popular':
        filtered.sort((a, b) => b.views - a.views)
        break
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title))
        break
      default: // newest
        filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        break
    }

    setFilteredArticles(filtered)
  }, [selectedCategory, sortBy])

  useEffect(() => {
    // Update URL params
    const newSearchParams = new URLSearchParams()
    if (selectedCategory && selectedCategory !== 'all') {
      newSearchParams.set('category', selectedCategory)
    }
    if (sortBy && sortBy !== 'newest') {
      newSearchParams.set('sortby', sortBy)
    }
    if (currentPage > 1) {
      newSearchParams.set('page', currentPage.toString())
    }
    setSearchParams(newSearchParams)
  }, [selectedCategory, sortBy, currentPage, setSearchParams])

  const handleCategoryChange = (categorySlug) => {
    setSelectedCategory(categorySlug)
    setCurrentPage(1)
  }

  const handleSortChange = (e) => {
    setSortBy(e.value)
    setCurrentPage(1)
  }

  const handlePageChange = (event) => {
    setCurrentPage(event.page + 1)
  }

  const handleArticleClick = (slug) => {
    navigate(`/tin-tuc/${slug}`)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Pagination
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentArticles = filteredArticles.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage)

  return (
    <div className="news-page">
      {/* Hero Section */}
      <div className="news-hero">
        <div className="news-hero-content">
          <h1>TIN TỨC & KIẾN THỨC</h1>
          <p>Cập nhật những thông tin mới nhất về sức khỏe, sản phẩm và hoạt động của TopLife</p>
        </div>
        <div className="news-hero-overlay"></div>
      </div>

      {/* Breadcrumb */}
      <div className="news-breadcrumb">
        <div className="container">
          <nav className="custom-breadcrumb">
            <a href="/" className="breadcrumb-item">
              <i className="pi pi-home"></i>
              Trang chủ
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">Tin tức</span>
          </nav>
        </div>
      </div>

      {/* News Content */}
      <div className="news-content">
        <div className="container">
          <div className="news-layout">
            {/* Sidebar */}
            <div className="news-sidebar">
              <div className="sidebar-section">
                <h3>Danh mục</h3>
                <div className="category-list">
                  {newsData.categories.map((category) => (
                    <button
                      key={category.id}
                      className={`category-item ${selectedCategory === category.slug ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.slug)}
                    >
                      {category.name}
                      <span className="category-count">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Tags phổ biến</h3>
                <div className="tags-list">
                  {newsData.popularTags.map((tag, index) => (
                    <Badge key={index} value={tag} className="tag-badge" />
                  ))}
                </div>
              </div>

              <div className="sidebar-section">
                <h3>Tin nổi bật</h3>
                <div className="featured-articles">
                  {newsData.articles
                    .filter(article => article.views > 1000)
                    .slice(0, 3)
                    .map((article) => (
                      <div 
                        key={article.id} 
                        className="featured-item"
                        onClick={() => handleArticleClick(article.slug)}
                      >
                        <img src={article.image} alt={article.title} />
                        <div className="featured-content">
                          <h4>{article.title}</h4>
                          <div className="featured-meta">
                            <i className="pi pi-eye"></i>
                            {article.views} lượt xem
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="news-main">
              {/* Filter Bar */}
              <div className="news-filter">
                <div className="filter-left">
                  <span className="articles-count">
                    Hiển thị {currentArticles.length} trong tổng số {filteredArticles.length} bài viết
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

              {/* Articles Grid */}
              <div className="articles-grid">
                {currentArticles.map((article) => (
                  <Card key={article.id} className="article-card">
                    <div className="article-image-container">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="article-image"
                        onClick={() => handleArticleClick(article.slug)}
                      />
                      <Badge value={article.category} className="category-badge" />
                    </div>
                    
                    <div className="article-content">
                      <h3 
                        className="article-title"
                        onClick={() => handleArticleClick(article.slug)}
                      >
                        {article.title}
                      </h3>
                      
                      <p className="article-excerpt">
                        {article.excerpt}
                      </p>
                      
                      <div className="article-meta">
                        <div className="meta-left">
                          <div className="meta-item">
                            <i className="pi pi-user"></i>
                            {article.author}
                          </div>
                          <div className="meta-item">
                            <i className="pi pi-calendar"></i>
                            {formatDate(article.publishedAt)}
                          </div>
                        </div>
                        <div className="meta-right">
                          <div className="meta-item">
                            <i className="pi pi-clock"></i>
                            {article.readTime} phút đọc
                          </div>
                          <div className="meta-item">
                            <i className="pi pi-eye"></i>
                            {article.views}
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        label="Đọc thêm"
                        icon="pi pi-arrow-right"
                        className="read-more-btn"
                        onClick={() => handleArticleClick(article.slug)}
                        outlined
                      />
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="news-pagination">
                  <Paginator
                    first={(currentPage - 1) * itemsPerPage}
                    rows={itemsPerPage}
                    totalRecords={filteredArticles.length}
                    onPageChange={handlePageChange}
                    template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <h2>Ý kiến Khách hàng</h2>
            <div className="testimonial-card">
              <p>
                "Gia đình chúng tôi đã sử dụng Nước uống Toplife trong hơn 10 năm. 
                Chúng tôi rất hài lòng với chất lượng và dịch vụ của công ty qua thời gian dài 
                gần bó. Chúng tôi sẽ tiếp tục ủng hộ những bước tiến mới của công ty trong tương lai."
              </p>
              <div className="testimonial-author">
                <strong>Lê Thị Hoa</strong> - Nội trợ
              </div>
              <div className="testimonial-avatars">
                <img src="/api/placeholder/50/50" alt="Avatar 1" className="avatar" />
                <img src="/api/placeholder/50/50" alt="Avatar 2" className="avatar" />
                <img src="/api/placeholder/50/50" alt="Avatar 3" className="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
