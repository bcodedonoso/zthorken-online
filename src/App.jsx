import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Registro from './pages/Registro.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogDetalle from './pages/BlogDetalle.jsx'
import AdminLayout from './components/AdminLayout.jsx'
import Productos from './pages/Productos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Carrito from './pages/Carrito.jsx'
import Categorias from './pages/Categorias.jsx'
import CategoriaDetalle from './pages/CategoriaDetalle.jsx'
import Ofertas from './pages/Ofertas.jsx'
import Checkout from './pages/Checkout.jsx'
import PagoCorrecto from './pages/PagoCorrecto.jsx'
import PagoError from './pages/PagoError.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetalle />} />
        
        {/* Persona 2: catálogo y compra */}
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/categorias/:id" element={<CategoriaDetalle />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pago-exitoso/:id" element={<PagoCorrecto />} />
        <Route path="/pago-error" element={<PagoError />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />} />
    </Routes>
  )
}

export default App