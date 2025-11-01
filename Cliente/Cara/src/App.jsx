import Home from '../Componentes/Home'
import Shop from '../Componentes/products'
import Blog from '../Componentes/Blog'
import About from '../Componentes/aboutUs'
import Contact from '../Componentes/contact'
import Login from '../Componentes/login'
import Register from '../Componentes/register'
import PerfiLU from '../Componentes/perfilU'
import Carrito from '../Componentes/carrito'
import Pasarela from '../Componentes/Paid'

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
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/perfilU" element={<PerfiLU />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/payment" element={<Pasarela />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App