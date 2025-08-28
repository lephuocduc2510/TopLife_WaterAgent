import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PrimeReact components
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Menubar } from 'primereact/menubar'
import { InputText } from 'primereact/inputtext'

// Pages
import Home from './pages/Home'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const menuItems = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => {}
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      command: () => {}
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
      command: () => {}
    }
  ]

  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>
  const end = <InputText placeholder="Search" type="text" className="w-full sm:w-auto" />

  return (
    <Router>
      <div className="App">
        <Menubar model={menuItems} start={start} end={end} />
        
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={
              <div className="flex flex-column align-items-center">
                <Card title="Welcome to TopLife WaterAgent" className="w-full md:w-30rem mt-4">
                  <p className="m-0">
                    This is a React.js project built with Vite and PrimeReact.
                  </p>
                  <div className="flex flex-column gap-2 mt-4">
                    <p>Count: {count}</p>
                    <Button 
                      label="Click me" 
                      icon="pi pi-check" 
                      onClick={() => setCount((count) => count + 1)}
                      className="p-button-raised p-button-rounded"
                    />
                  </div>
                </Card>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
