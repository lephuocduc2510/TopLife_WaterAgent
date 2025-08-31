import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Avatar } from 'primereact/avatar'
import { Divider } from 'primereact/divider'
import newsData from '../../data/newsData'
import './NewsDetail.css'

const NewsDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])

  useEffect(() => {
    // Find current article
    const currentArticle = newsData.articles.find(article => article.slug === slug)
    if (!currentArticle) {
      navigate('/tin-tuc')
      return
    }
    setArticle(currentArticle)

    // Find related articles (same category, exclude current)
    const related = newsData.articles
      .filter(a => a.category === currentArticle.category && a.id !== currentArticle.id)
      .slice(0, 3)
    setRelatedArticles(related)

    // Scroll to top
    window.scrollTo(0, 0)
  }, [slug, navigate])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleRelatedClick = (relatedSlug) => {
    navigate(`/tin-tuc/${relatedSlug}`)
  }

  const handleShare = (platform) => {
    const url = window.location.href
    const title = article.title
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(url)
        // Could add toast notification here
        break
    }
  }

  if (!article) {
    return (
      <div className="news-detail-loading">
        <div className="container">
          <p>Đang tải...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="news-detail-page">
      {/* Breadcrumb */}
      <div className="news-detail-breadcrumb">
        <div className="container">
          <nav className="custom-breadcrumb">
            <a href="/" className="breadcrumb-item">
              <i className="pi pi-home"></i>
              Trang chủ
            </a>
            <span className="breadcrumb-separator">/</span>
            <a href="/tin-tuc" className="breadcrumb-item">
              Tin tức
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <div className="news-detail-content">
        <div className="container">
          <div className="article-layout">
            {/* Main Article */}
            <div className="article-main">
              <div className="article-header">
                <Badge value={article.category} className="article-category-badge" />
                <h1 className="article-title">{article.title}</h1>
                
                <div className="article-meta">
                  <div className="meta-left">
                    <Avatar 
                      icon="pi pi-user" 
                      size="large" 
                      shape="circle" 
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <div className="author-name">{article.author}</div>
                      <div className="publish-date">{formatDate(article.publishedAt)}</div>
                    </div>
                  </div>
                  <div className="meta-right">
                    <div className="meta-item">
                      <i className="pi pi-clock"></i>
                      {article.readTime} phút đọc
                    </div>
                    <div className="meta-item">
                      <i className="pi pi-eye"></i>
                      {article.views} lượt xem
                    </div>
                  </div>
                </div>
              </div>

              <div className="article-image">
                <img src={article.image} alt={article.title} />
              </div>

              <div className="article-body">
                <div className="article-excerpt">
                  {article.excerpt}
                </div>
                
                <Divider />
                
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>

              <div className="article-footer">
                <div className="article-tags">
                  <h4>Tags:</h4>
                  <div className="tags-list">
                    {article.tags.map((tag, index) => (
                      <Badge key={index} value={tag} className="tag-badge" />
                    ))}
                  </div>
                </div>

                <div className="article-share">
                  <h4>Chia sẻ bài viết:</h4>
                  <div className="share-buttons">
                    <Button 
                      icon="pi pi-facebook" 
                      className="share-btn facebook"
                      onClick={() => handleShare('facebook')}
                      tooltip="Chia sẻ lên Facebook"
                    />
                    <Button 
                      icon="pi pi-twitter" 
                      className="share-btn twitter"
                      onClick={() => handleShare('twitter')}
                      tooltip="Chia sẻ lên Twitter"
                    />
                    <Button 
                      icon="pi pi-linkedin" 
                      className="share-btn linkedin"
                      onClick={() => handleShare('linkedin')}
                      tooltip="Chia sẻ lên LinkedIn"
                    />
                    <Button 
                      icon="pi pi-copy" 
                      className="share-btn copy"
                      onClick={() => handleShare('copy')}
                      tooltip="Sao chép link"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="article-sidebar">
              {/* Author Info */}
              <Card className="author-card">
                <div className="author-profile">
                  <Avatar 
                    icon="pi pi-user" 
                    size="xlarge" 
                    shape="circle" 
                    className="author-avatar-large"
                  />
                  <h3>{article.author}</h3>
                  <p>Tác giả tại TopLife với nhiều năm kinh nghiệm trong lĩnh vực nước uống và sức khỏe.</p>
                </div>
              </Card>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <Card className="related-card">
                  <h3>Bài viết liên quan</h3>
                  <div className="related-articles">
                    {relatedArticles.map((relatedArticle) => (
                      <div 
                        key={relatedArticle.id} 
                        className="related-item"
                        onClick={() => handleRelatedClick(relatedArticle.slug)}
                      >
                        <img src={relatedArticle.image} alt={relatedArticle.title} />
                        <div className="related-content">
                          <h4>{relatedArticle.title}</h4>
                          <div className="related-meta">
                            <span>{formatDate(relatedArticle.publishedAt)}</span>
                            <span>{relatedArticle.readTime} phút đọc</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Popular Tags */}
              <Card className="tags-card">
                <h3>Tags phổ biến</h3>
                <div className="popular-tags">
                  {newsData.popularTags.map((tag, index) => (
                    <Badge key={index} value={tag} className="popular-tag" />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* More Articles CTA */}
      <div className="more-articles-cta">
        <div className="container">
          <div className="cta-content">
            <h3>Khám phá thêm nhiều bài viết khác</h3>
            <p>Cập nhật những thông tin mới nhất về sức khỏe và sản phẩm TopLife</p>
            <Button 
              label="Xem tất cả tin tức"
              icon="pi pi-arrow-right"
              className="cta-btn"
              onClick={() => navigate('/tin-tuc')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
