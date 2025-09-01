// Product data for TopLife water bottles
export const productData = [
  {
    id: 1,
    name: 'Nước Uống Tinh Khiết TopLife 1L',
    slug: 'nuoc-uong-tinh-khiet-toplife-1l',
    image: 'https://bizweb.dktcdn.net/100/515/900/products/2.png?v=1715054075793',
    description: 'Chai 1 lít tiện lợi cho gia đình nhỏ và sử dụng cá nhân hàng ngày. Sản phẩm được sản xuất từ nguồn nước thiên nhiên, qua quy trình lọc hiện đại, đảm bảo an toàn và chất lượng cao cho sức khỏe người sử dụng.',
    features: [
      'Dung tích 1L chuẩn',
      'Phù hợp cá nhân',
      'Tiện mang theo',
      'Chất lượng cao',
      'Nắp vặn chắc chắn'
    ],
    category: 'Chai nhỏ',
    capacity: '1L',
    usage: 'Cá nhân, gia đình nhỏ',
    material: 'Nhựa PET an toàn',
    origin: 'Việt Nam',
    shelfLife: '12 tháng',
    detailDescription: 'Nước uống tinh khiết TopLife 1L là lựa chọn hoàn hảo cho cuộc sống hiện đại. Với dung tích vừa phải, tiện lợi mang theo, sản phẩm phù hợp cho học sinh, sinh viên, nhân viên văn phòng và các hoạt động ngoài trời. Quy cách đóng gói nhỏ gọn giúp bạn dễ dàng bảo quản và sử dụng.',
    specifications: {
      capacity: '1000ml',
      weight: '1.05kg',
      height: '28cm',
      diameter: '8.5cm',
      material: 'PET (Polyethylene Terephthalate)',
      capType: 'Nắp vặn chống tràn',
      packaging: 'Thùng 12 chai'
    }
  },
  {
    id: 2,
    name: 'Nước Uống Tinh Khiết TopLife 5L',
    slug: 'nuoc-uong-tinh-khiet-toplife-5l',
    image: 'https://bizweb.dktcdn.net/100/515/900/products/2.png?v=1715054075793',
    description: 'Chai 5 lít phù hợp cho gia đình trung bình, tiết kiệm và tiện lợi. Với thiết kế có tay cầm ergonomic, dễ dàng cầm nắm và rót nước.',
    features: [
      'Dung tích 5L lớn',
      'Tiết kiệm chi phí',
      'Phù hợp gia đình',
      'Đảm bảo chất lượng',
      'Có tay cầm tiện lợi'
    ],
    category: 'Chai vừa',
    capacity: '5L',
    usage: 'Gia đình 3-5 người',
    material: 'Nhựa PET an toàn',
    origin: 'Việt Nam',
    shelfLife: '12 tháng',
    detailDescription: 'TopLife 5L được thiết kế đặc biệt cho gia đình từ 3-5 người. Dung tích lớn giúp tiết kiệm chi phí và giảm tần suất mua hàng. Tay cầm được thiết kế ergonomic giúp dễ dàng di chuyển và rót nước. Chất lượng nước luôn được đảm bảo với quy trình sản xuất khép kín.',
    specifications: {
      capacity: '5000ml',
      weight: '5.2kg',
      height: '42cm',
      diameter: '15cm',
      material: 'PET (Polyethylene Terephthalate)',
      capType: 'Nắp vặn có tay cầm',
      packaging: 'Thùng 4 chai'
    }
  },
  {
    id: 3,
    name: 'Nước Uống Tinh Khiết TopLife 15L',
    slug: 'nuoc-uong-tinh-khiet-toplife-15l',
    image: 'https://bizweb.dktcdn.net/100/515/900/products/2.png?v=1715054075793',
    description: 'Chai 15 lít cho gia đình đông người và văn phòng, tiết kiệm tối đa. Có van xả tiện lợi, phù hợp cho cây nước uống.',
    features: [
      'Dung tích 15L siêu lớn',
      'Tiết kiệm tối đa',
      'Phù hợp văn phòng',
      'Giao hàng tận nơi',
      'Có van xả tiện lợi'
    ],
    category: 'Chai lớn',
    capacity: '15L',
    usage: 'Gia đình đông người, văn phòng',
    material: 'Nhựa PET an toàn',
    origin: 'Việt Nam',
    shelfLife: '12 tháng',
    detailDescription: 'TopLife 15L là giải pháp hoàn hảo cho văn phòng, gia đình đông người và các cơ sở kinh doanh. Với dung tích siêu lớn, tiết kiệm tối đa chi phí và công sức. Van xả được thiết kế đặc biệt, tương thích với hầu hết các loại cây nước uống trên thị trường.',
    specifications: {
      capacity: '15000ml',
      weight: '15.5kg',
      height: '58cm',
      diameter: '22cm',
      material: 'PET (Polyethylene Terephthalate)',
      capType: 'Nắp vặn có van xả',
      packaging: 'Đơn chai hoặc thùng 2 chai'
    }
  }
]

// Product categories
export const productCategories = [
  { id: 1, name: 'Chai nhỏ', description: 'Dành cho cá nhân và gia đình nhỏ' },
  { id: 2, name: 'Chai vừa', description: 'Phù hợp cho gia đình trung bình' },
  { id: 3, name: 'Chai lớn', description: 'Cho gia đình đông người và văn phòng' }
]

// Product specifications
export const productSpecs = {
  waterSource: 'Nguồn nước thiên nhiên',
  treatment: 'Xử lý bằng công nghệ RO hiện đại',
  quality: 'Đạt chuẩn QCVN 01:2018/BYT',
  packaging: 'Chai nhựa PET an toàn thực phẩm',
  storage: 'Bảo quản nơi khô ráo, thoáng mát',
  certification: 'Chứng nhận ISO 22000:2018'
}

// Customer testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Lê Thị Hoa',
    position: 'Nội trợ',
    avatar: 'https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/index_testimonials_image_1.png?1717065557897',
    content: 'Gia đình chúng tôi đã sử dụng Nước uống Toplife trong hơn 10 năm. Chúng tôi rất hài lòng với chất lượng và dịch vụ của công ty qua thời gian dài gắn bó. Chúng tôi sẽ tiếp tục ủng hộ những bước tiến mới của công ty trong tương lai.'
  },
  {
    id: 2,
    name: 'Huỳnh Thị Yến',
    position: 'Đại lý đối tác',
    avatar: 'https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/index_testimonials_image_2.png?1717065557897',
    content: 'Trong suốt thời gian làm đại lý hợp tác với Nước uống Toplife, tôi nhận được rất nhiều lợi ích và ưu đãi từ cả nhà cung cấp và khách hàng. Sản phẩm nước uống của họ chất lượng, đảm bảo, uy tín, nên rất yên tâm để buôn bán cho người tiêu dùng'
  },
  {
    id: 3,
    name: 'Nguyễn Minh Tuấn',
    position: 'Học sinh',
    avatar: 'https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/index_testimonials_image_2.png?1717065557897',
    content: 'Mình đã sử dụng nước TopLife được 2 năm rồi. Nước rất trong, ngọt và an toàn cho sức khỏe. Gia đình mình rất hài lòng với chất lượng sản phẩm. Sẽ tiếp tục ủng hộ TopLife!'
  }
]

export default productData
