import Home from '../Componentes/Home'
import Shop from '../Componentes/products'
import Blog from '../Componentes/blog'
import About from '../Componentes/aboutUs'
import Contact from '../Componentes/contact'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
