import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext.jsx'
import { SesionContext } from '../context/sesion.js'
import Checkout from './Checkout.jsx'

const ITEM = { productoId: 5, nombre: 'Audífonos HyperX Cloud II', precio: 59990, imagen: '', cantidad: 1 }
const PEDRO = {
  id: 2, nombre: 'Pedro', apellidos: 'Pérez', correo: 'pedro@correo.cl', rol: 'cliente',
  calle: 'Los Crisantemos 123', departamento: 'Depto 603',
  region: 'Región Metropolitana de Santiago', comuna: 'Cerrillos',
}

const montar = (usuario = null) =>
  render(
    <MemoryRouter>
      <SesionContext.Provider value={{ usuario }}>
        <CartProvider>
          <Checkout />
        </CartProvider>
      </SesionContext.Provider>
    </MemoryRouter>
  )

describe('Checkout', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('zthorken_carrito', JSON.stringify([ITEM]))
  })

it('muestra errores si se paga con el formulario vacío', () => {
  montar()
  fireEvent.click(screen.getByText(/^Pagar/))
  expect(screen.getByText('Ingresa tu nombre')).toBeTruthy()
  expect(screen.getAllByText('Selecciona una región').length).toBe(2)
})

  it('autocompleta los datos si hay sesión', () => {
    montar(PEDRO)
    expect(screen.getByDisplayValue('Pedro')).toBeTruthy()
    expect(screen.getByDisplayValue('Los Crisantemos 123')).toBeTruthy()
    expect(screen.getByDisplayValue('Cerrillos')).toBeTruthy()
  })

  it('muestra mensaje si el carrito está vacío', () => {
    localStorage.setItem('zthorken_carrito', '[]')
    montar()
    expect(screen.getByText('No tienes productos en el carrito.')).toBeTruthy()
  })
})