import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const Header = () => {
  const menuItems = [
    {
      label: 'Trang chủ',
      icon: 'pi pi-fw pi-home',
      url: '/'
    },
    {
      label: 'Sản phẩm',
      icon: 'pi pi-fw pi-droplet',
      items: [
        {
          label: 'Nước uống tinh khiết',
          icon: 'pi pi-fw pi-droplet'
        },
        {
          label: 'Nước đóng chai',
          icon: 'pi pi-fw pi-shopping-bag'
        }
      ]
    },
    {
      label: 'Quản lý chất lượng',
      icon: 'pi pi-fw pi-chart-line',
      items: [
        {
          label: 'Phân tích chất lượng',
          icon: 'pi pi-fw pi-chart-bar'
        },
        {
          label: 'Giám sát sử dụng',
          icon: 'pi pi-fw pi-eye'
        },
        {
          label: 'Báo cáo',
          icon: 'pi pi-fw pi-file-pdf'
        }
      ]
    },
    {
      label: 'Giới thiệu',
      icon: 'pi pi-fw pi-info-circle',
      url: '/about'
    },
    {
      label: 'Liên hệ',
      icon: 'pi pi-fw pi-phone',
      url: '/contact'
    }
  ]

  const start = (
    <div className="flex align-items-center">
      <i className="pi pi-droplet text-blue-600 text-3xl mr-3"></i>
      <div className="flex flex-column">
        <span className="font-bold text-xl text-blue-900">TopLife</span>
        <span className="text-xs text-blue-600">Water Agent</span>
      </div>
    </div>
  )
  
  const end = (
    <div className="flex align-items-center gap-3">
      <div className="hidden lg:flex align-items-center gap-2 text-sm">
        <i className="pi pi-phone text-blue-600"></i>
        <span className="text-gray-700">0926 96 79 79</span>
      </div>
      <InputText 
        placeholder="Tìm kiếm..." 
        type="text" 
        className="w-8rem sm:w-auto hidden md:block" 
      />
      <Button 
        icon="pi pi-user" 
        className="p-button-rounded p-button-outlined p-button-sm" 
        tooltip="Đăng nhập"
      />
    </div>
  )

  return (
    <div className="surface-0 border-bottom-1 surface-border bg-white shadow-2">
      <Menubar 
        model={menuItems} 
        start={start} 
        end={end} 
        className="border-none bg-white px-4 py-3"
      />
    </div>
  )
}

export default Header
