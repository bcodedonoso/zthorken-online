import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getAll } from '../data/db.js'

const enlaces = [
  { to: '/', texto: 'Home' },
  { to: '/productos', texto: 'Productos' },
  { to: '/ofertas', texto: 'Ofertas' },
  { to: '/nosotros', texto: 'Nosotros' },
  { to: '/blogs', texto: 'Blog' },
  { to: '/contacto', texto: 'Contacto' },
]

function Navbar({ totalCarrito = 0 }) {
  const [busqueda, setBusqueda] = useState('')
  const navigate = useNavigate()
  const categorias = getAll('categorias')

  function buscar(e) {
    e.preventDefault()
    const texto = busqueda.trim()
    navigate(texto ? `/productos?buscar=${encodeURIComponent(texto)}` : '/productos')
  }

  return (
    <header className="bg-light border-bottom sticky-top">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Zthorken</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse flex-column align-items-stretch" id="menuPrincipal">
            <div className="d-flex flex-column flex-xl-row align-items-xl-center gap-2 py-2">
              <form className="d-flex mx-xl-auto w-100" style={{ maxWidth: 480 }} role="search" onSubmit={buscar}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar productos"
                  aria-label="Buscar productos"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
              </form>

              <div className="d-flex gap-2">
                <Link className="btn btn-outline-primary text-nowrap" to="/login">Iniciar sesión</Link>
                <Link className="btn btn-primary text-nowrap" to="/registro">Crear cuenta</Link>
              </div>
            </div>

            <div className="d-flex flex-column flex-xl-row align-items-xl-center justify-content-center gap-xl-3 pb-2">
              <ul className="navbar-nav">
                {enlaces.slice(0, 2).map((e) => (
                  <li className="nav-item" key={e.to}>
                    <NavLink className="nav-link" to={e.to} end>{e.texto}</NavLink>
                  </li>
                ))}
  
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categorías
                  </a>
                  <ul className="dropdown-menu">
                    {categorias.map((c) => (
                      <li key={c.id}>
                        <Link className="dropdown-item" to={`/categorias/${c.id}`}>{c.nombre}</Link>
                      </li>
                    ))}
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/categorias">Ver todas</Link></li>
                  </ul>
                </li>
  
                {enlaces.slice(2).map((e) => (
                  <li className="nav-item" key={e.to}>
                    <NavLink className="nav-link" to={e.to}>{e.texto}</NavLink>
                  </li>
                ))}
              </ul>
  
              <Link className="btn btn-success text-nowrap align-self-start align-self-xl-center" to="/carrito">
                Carrito ${totalCarrito.toLocaleString('es-CL')}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
