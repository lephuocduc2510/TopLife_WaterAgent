import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import './Header.css'

const Header = () => {
  const menuItems = [
    {
      label: 'TRANG CHỦ',
      url: '/'
    },
    {
      label: 'GIỚI THIỆU',
      url: '/about'
    },
    {
      label: 'SẢN PHẨM',
      url: '/products'
    },
    {
      label: 'TIN TỨC',
      url: '/tin-tuc'
    },
    {
      label: 'LIÊN HỆ',
      url: '/contact'
    }
  ]

  const start = (
    <div className="flex align-items-center">
      <img 
        src="https://bizweb.dktcdn.net/100/515/900/themes/949247/assets/logo.png?1717065557897" 
        alt="TopLife Logo" 
        className="h-2rem"
      />
    </div>
  )
  
  const end = (
    <div className="flex align-items-center gap-3">
      <Button 
        icon="pi pi-search" 
        className="p-button-rounded p-button-text p-button-sm header-search-btn" 
        tooltip="Tìm kiếm"
      />
    </div>
  )

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-content-between align-items-center py-2">
            <div className="flex align-items-center gap-2 text-sm text-white">
              <i className="pi pi-map-marker text-green-400"></i>
              <span>Thôn Đông Son, Xã Hòa Ninh, Huyện Hòa Vang, Thành Phố Đà Nẵng</span>
            </div>
            <div className="flex align-items-center gap-4 text-sm text-white">
              <div className="flex align-items-center gap-2">
                <i className="pi pi-envelope text-green-400"></i>
                <span>kdtoplife@gmail.com</span>
              </div>
              <div className="flex align-items-center gap-2">
                <i className="pi pi-phone text-green-400"></i>
                <span>0926 96 79 79</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="max-w-6xl mx-auto px-4">
          <Menubar 
            model={menuItems} 
            start={start} 
            end={end} 
            className="header-menubar"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
