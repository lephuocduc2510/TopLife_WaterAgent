import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Avatar } from 'primereact/avatar'
import { Divider } from 'primereact/divider'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from 'primereact/toast'
import { getArticleBySlug, getRelatedArticles } from '../../data/newsDetailData'
import newsData from '../../data/newsData'
import './NewsDetail.css'

const NewsDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [article, setArticle] = useState(null)
  const [relatedArticles, setRelatedArticles] = useState([])
  const [comments, setComments] = useState([])
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    content: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = React.useRef(null)

  useEffect(() => {
    // Find current article from newsDetailData
    const currentArticle = getArticleBySlug(slug)
    if (!currentArticle) {
      navigate('/tin-tuc')
      return
    }
    setArticle(currentArticle)

    // Get related articles
    const related = getRelatedArticles(slug, 3)
    setRelatedArticles(related)

    // Load comments (mock data)
    setComments([
      {
        id: 1,
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@email.com',
        content: 'Bài viết rất hay và bổ ích. Cảm ơn tác giả đã chia sẻ!',
        date: new Date().toISOString(),
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      },
      {
        id: 2,
        name: 'Trần Thị B',
        email: 'tranthib@email.com',
        content: 'Thông tin rất hữu ích, tôi đã áp dụng và thấy hiệu quả tốt.',
        date: new Date(Date.now() - 86400000).toISOString(),
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
      }
    ])

    // Scroll to top
    window.scrollTo(0, 0)
  }, [slug, navigate])

  const formatDate = (dateString) => {
    // Handle date format from fetched data (DD/MM/YYYY)
    if (dateString.includes('/')) {
      const [day, month, year] = dateString.split('/')
      const date = new Date(year, month - 1, day)
      return date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    // Fallback for ISO date format
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

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    
    if (!commentForm.name || !commentForm.email || !commentForm.content) {
      toast.current.show({
        severity: 'warn',
        summary: 'Thiếu thông tin',
        detail: 'Vui lòng điền đầy đủ thông tin',
        life: 3000
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      const newComment = {
        id: comments.length + 1,
        name: commentForm.name,
        email: commentForm.email,
        content: commentForm.content,
        date: new Date().toISOString(),
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(commentForm.name)}&background=667eea&color=fff`
      }

      setComments([newComment, ...comments])
      setCommentForm({ name: '', email: '', content: '' })

      toast.current.show({
        severity: 'success',
        summary: 'Thành công',
        detail: 'Bình luận của bạn đã được gửi!',
        life: 3000
      })
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Lỗi',
        detail: 'Có lỗi xảy ra, vui lòng thử lại',
        life: 3000
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field, value) => {
    setCommentForm(prev => ({
      ...prev,
      [field]: value
    }))
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
      <Toast ref={toast} />
      
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
                      <div className="publish-date">{formatDate(article.publishDate)}</div>
                    </div>
                  </div>
                  <div className="meta-right">
                    <div className="meta-item">
                      <i className="pi pi-eye"></i>
                      {article.comments} bình luận
                    </div>
                    <div className="meta-item">
                      <i className="pi pi-bookmark"></i>
                      {article.category}
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
                {article.tags && article.tags.length > 0 && (
                  <div className="article-tags">
                    <h4>Tags:</h4>
                    <div className="tags-list">
                      {article.tags.map((tag, index) => (
                        <Badge key={index} value={tag} className="tag-badge" />
                      ))}
                    </div>
                  </div>
                )}

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
                            <span>{formatDate(relatedArticle.publishDate)}</span>
                            <span>{relatedArticle.category}</span>
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

          {/* Comments Section - Full Width */}
          <div className="comments-section-container">
            <div className="comments-section">
              <Divider />
              
              <div className="comments-header">
                <h3>Bình luận ({comments.length})</h3>
              </div>

              {/* Comment Form */}
              <Card className="comment-form-card">
                <h4>Đăng bình luận</h4>
                <form onSubmit={handleCommentSubmit} className="comment-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Họ tên *</label>
                      <InputText
                        id="name"
                        value={commentForm.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Nhập họ tên của bạn"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <InputText
                        id="email"
                        type="email"
                        value={commentForm.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Địa chỉ email của bạn"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Nội dung bình luận *</label>
                    <InputTextarea
                      id="content"
                      value={commentForm.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                      placeholder="Chia sẻ suy nghĩ của bạn về bài viết..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    label={isSubmitting ? "Đang gửi..." : "Gửi bình luận"}
                    icon={isSubmitting ? "pi pi-spin pi-spinner" : "pi pi-send"}
                    className="submit-comment-btn"
                    loading={isSubmitting}
                  />
                </form>
              </Card>

              {/* Comments List */}
              <div className="comments-list">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <Card key={comment.id} className="comment-item">
                      <div className="comment-header">
                        <Avatar
                          image={comment.avatar}
                          size="large"
                          shape="circle"
                          className="comment-avatar"
                        />
                        <div className="comment-info">
                          <h5 className="comment-author">{comment.name}</h5>
                          <span className="comment-date">
                            {formatDate(comment.date)}
                          </span>
                        </div>
                      </div>
                      <div className="comment-content">
                        <p>{comment.content}</p>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="no-comments">
                    <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
                  </div>
                )}
              </div>
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
