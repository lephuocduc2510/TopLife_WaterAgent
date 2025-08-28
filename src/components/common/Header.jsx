import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'
import { Avatar } from 'primereact/avatar'

const Header = () => {
  const menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      url: '/'
    },
    {
      label: 'Water Management',
      icon: 'pi pi-fw pi-droplet',
      items: [
        {
          label: 'Quality Analysis',
          icon: 'pi pi-fw pi-chart-line'
        },
        {
          label: 'Usage Monitoring',
          icon: 'pi pi-fw pi-eye'
        },
        {
          label: 'Reports',
          icon: 'pi pi-fw pi-file'
        }
      ]
    },
    {
      label: 'Settings',
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: 'User Profile',
          icon: 'pi pi-fw pi-user'
        },
        {
          label: 'System Config',
          icon: 'pi pi-fw pi-sliders-h'
        }
      ]
    }
  ]

  const start = (
    <div className="flex align-items-center">
      <i className="pi pi-droplet text-blue-500 text-2xl mr-2"></i>
      <span className="font-bold text-xl text-blue-900">TopLife WaterAgent</span>
    </div>
  )
  
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText placeholder="Search..." type="text" className="w-8rem sm:w-auto" />
      <Avatar icon="pi pi-user" className="ml-2" shape="circle" />
    </div>
  )

  return (
    <Menubar model={menuItems} start={start} end={end} className="mb-4" />
  )
}

export default Header
