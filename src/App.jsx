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
import Dashboard from './pages/admin/Dashboard.jsx'
import AdminProductos from './pages/admin/Productos.jsx'
import ProductoForm from './pages/admin/ProductoForm.jsx'
import ProductoDetalle from './pages/admin/ProductoDetalle.jsx'
import AdminCategorias from './pages/admin/Categorias.jsx'
import CategoriaForm from './pages/admin/CategoriaForm.jsx'
import AdminUsuarios from './pages/admin/Usuarios.jsx'
import UsuarioForm from './pages/admin/UsuarioForm.jsx'
import UsuarioDetalle from './pages/admin/UsuarioDetalle.jsx'
import Ordenes from './pages/admin/Ordenes.jsx'
import Boleta from './pages/admin/Boleta.jsx'
import Reportes from './pages/admin/Reportes.jsx'
import Perfil from './pages/admin/Perfil.jsx'

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
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="productos" element={<AdminProductos />} />
        <Route path="productos/criticos" element={<AdminProductos soloCriticos />} />
        <Route path="productos/nuevo" element={<ProductoForm />} />
        <Route path="productos/:id" element={<ProductoDetalle />} />
        <Route path="productos/:id/editar" element={<ProductoForm />} />
        <Route path="categorias" element={<AdminCategorias />} />
        <Route path="categorias/nueva" element={<CategoriaForm />} />
        <Route path="categorias/:id/editar" element={<CategoriaForm />} />
        <Route path="usuarios" element={<AdminUsuarios />} />
        <Route path="usuarios/nuevo" element={<UsuarioForm />} />
        <Route path="usuarios/:id" element={<UsuarioDetalle />} />
        <Route path="usuarios/:id/editar" element={<UsuarioForm />} />
        <Route path="ordenes" element={<Ordenes />} />
        <Route path="ordenes/:id" element={<Boleta />} />
        <Route path="reportes" element={<Reportes />} />
        <Route path="perfil" element={<Perfil />} />
      </Route>
    </Routes>
  )
}

export default App
