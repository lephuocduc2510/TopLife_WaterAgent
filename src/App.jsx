import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// PrimeReact components
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

// Components
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import FloatingButtons from './components/common/FloatingButtons'

// Pages
import Home from './pages/Home/Home'
import About from './pages/About'
import Products from './pages/Products/Products'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import News from './pages/News/News'
import NewsDetail from './pages/NewsDetail/NewsDetail'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App min-h-screen flex flex-column">
        <Header />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/san-pham/:slug" element={<ProductDetail />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/tin-tuc/:slug" element={<NewsDetail />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/demo" element={
              <div className="flex flex-column align-items-center p-4">
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
            {/* Catch all unmatched routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating Buttons - Scroll to Top & Messenger */}
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App
