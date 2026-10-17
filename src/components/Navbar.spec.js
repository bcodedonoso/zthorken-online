import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import { getAll, resetDB } from '../data/db.js'

function UbicacionActual() {
  const { pathname, search } = useLocation()
  return <p data-testid="ubicacion">{pathname + search}</p>
}

function renderNavbar(props) {
  return render(
    <MemoryRouter>
      <Navbar {...props} />
      <Routes>
        <Route path="*" element={<UbicacionActual />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('Navbar', () => {
  beforeEach(() => resetDB())

  it('muestra los enlaces del menú', () => {
    renderNavbar()
    for (const texto of ['Home', 'Productos', 'Ofertas', 'Nosotros', 'Blog', 'Contacto']) {
      expect(screen.getByRole('link', { name: texto })).toBeTruthy()
    }
  })

  it('muestra todas las categorías en el menú', () => {
    renderNavbar()
    for (const c of getAll('categorias')) {
      expect(screen.getByRole('link', { name: c.nombre })).toBeTruthy()
    }
  })

  it('muestra el total del carrito recibido por props', () => {
    renderNavbar({ totalCarrito: 28775 })
    expect(screen.getByRole('link', { name: /Carrito \$28\.775/ })).toBeTruthy()
  })

  it('muestra $0 en el carrito si no recibe total', () => {
    renderNavbar()
    expect(screen.getByRole('link', { name: /Carrito \$0/ })).toBeTruthy()
  })

  it('al buscar navega a productos con el texto', () => {
    renderNavbar()
    const input = screen.getByRole('searchbox', { name: 'Buscar productos' })
    fireEvent.change(input, { target: { value: 'notebook asus' } })
    expect(input.value).toBe('notebook asus')
    fireEvent.click(screen.getByRole('button', { name: 'Buscar' }))
    expect(screen.getByTestId('ubicacion').textContent).toBe('/productos?buscar=notebook%20asus')
  })
})
