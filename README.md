# TopLife Water Agent 💧

> Website bán nước uống tinh khiết TopLife - Thương hiệu hàng đầu tại Đà Nẵng

## 🌟 Giới thiệu

TopLife Water Agent là website chính thức của **Công ty TNHH Nam Trung Hải**, chuyên cung cấp nước uống tinh khiết chất lượng cao tại khu vực Đà Nẵng và miền Trung. Với hơn 16 năm kinh nghiệm, chúng tôi đã phục vụ hơn 30.000 khách hàng và 1.500 đối tác.

## 🚀 Demo

- **Production**: [https://top-life-water-agent.vercel.app](https://top-life-water-agent.vercel.app)
- **Development**: `http://localhost:5173`

## ⚡ Công nghệ sử dụng

- **Frontend**: React 18 + Vite
- **UI Framework**: PrimeReact
- **Routing**: React Router DOM
- **Styling**: CSS3 + PrimeReact Themes
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Cài đặt

### Yêu cầu hệ thống
- Node.js >= 16.0.0
- npm >= 8.0.0

### Các bước cài đặt

1. **Clone repository**
   ```bash
   git clone https://github.com/lephuocduc2510/TopLife_WaterAgent.git
   cd TopLife_WaterAgent
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Cấu hình environment**
   ```bash
   cp .env.example .env
   # Chỉnh sửa file .env với thông tin thực của bạn
   ```

4. **Chạy development server**
   ```bash
   npm run dev
   ```

5. **Mở browser**
   ```
   http://localhost:5173
   ```

## 🎯 Tính năng chính

### 🏠 **Trang chủ**
- Hero slider với 3 banner chính
- Thống kê kinh doanh (khách hàng, đối tác, khu vực)
- Video giới thiệu công ty
- Sản phẩm nổi bật
- Testimonials từ khách hàng

### 🛍️ **Sản phẩm**
- Danh sách sản phẩm với filter/sort
- Chi tiết sản phẩm
- Đặt hàng qua WhatsApp
- Product cards responsive

### 📰 **Tin tức**
- Danh sách bài viết
- Chi tiết bài viết
- Breadcrumb navigation

### 📞 **Liên hệ**
- Form liên hệ
- Thông tin công ty
- Bản đồ địa chỉ

### 🌟 **Tính năng bổ sung**
- Responsive design (Mobile-first)
- Floating buttons (Chat, Scroll to top)
- 404 Not Found page
- SEO optimized

## 📱 Responsive Design

Website được thiết kế responsive hoàn toàn:

- **Desktop**: >= 1200px
- **Tablet**: 768px - 1199px  
- **Mobile**: <= 767px

## 🔧 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📂 Cấu trúc thư mục

```
src/
├── components/          # React components
│   ├── common/         # Header, Footer, FloatingButtons
│   └── ProductCard/    # Product card component
├── pages/              # Page components
│   ├── Home/          # Trang chủ
│   ├── About/         # Giới thiệu
│   ├── Products/      # Danh sách sản phẩm
│   ├── ProductDetail/ # Chi tiết sản phẩm
│   ├── News/          # Tin tức
│   ├── Contact/       # Liên hệ
│   └── NotFound/      # 404 page
├── data/              # Static data
├── utils/             # Utility functions
└── assets/            # Images, icons
```

## 🌐 Environment Variables

```env
# Production URL
VITE_APP_URL=https://top-life-water-agent.vercel.app

# Development URL  
VITE_DEV_URL=http://localhost:5173

# Contact Information
VITE_PHONE_NUMBER=0926967979
VITE_EMAIL=kdtoplife@gmail.com
VITE_WHATSAPP_NUMBER=84926967979

# Company Information
VITE_COMPANY_NAME=TopLife
VITE_COMPANY_LOCATION=Đà Nẵng
VITE_COMPANY_FULL_NAME=Công ty TNHH Nam Trung Hải
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Set environment variables**
3. **Deploy automatically**

### Manual Build

```bash
npm run build
# Upload dist/ folder to your hosting
```

## 📞 Liên hệ & Hỗ trợ

- **Website**: [https://top-life-water-agent.vercel.app](https://top-life-water-agent.vercel.app)
- **Email**: kdtoplife@gmail.com
- **Phone**: 0926.967.979
- **WhatsApp**: [Chat ngay](https://wa.me/84926967979)

## 👥 Đội ngũ phát triển

- **Developer**: [lephuocduc2510](https://github.com/lephuocduc2510)
- **Company**: Công ty TNHH Nam Trung Hải

## 📄 License

© 2024 TopLife Water Agent. All rights reserved.

---

### 🔄 Changelog

**v1.0.0** (2024-09-02)
- ✅ Initial release
- ✅ Responsive design
- ✅ Product catalog
- ✅ WhatsApp integration
- ✅ SEO optimization

---

**Made with ❤️ for TopLife Đà Nẵng**
