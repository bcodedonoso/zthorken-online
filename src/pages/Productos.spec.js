import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '../context/CartContext.jsx'
import { getAll } from '../data/db.js'
import Productos from './Productos.jsx'

const montar = () =>
  render(
    <MemoryRouter>
      <CartProvider>
        <Productos />
      </CartProvider>
    </MemoryRouter>
  )

describe('Productos', () => {
  it('renderiza todos los productos', () => {
    montar()
    expect(screen.getAllByText('Agregar al carrito').length).toBe(getAll('productos').length)
  })

  it('filtra por texto de búsqueda', () => {
    montar()
    fireEvent.change(screen.getByPlaceholderText('Buscar producto'), {
      target: { value: 'zzzzz' },
    })
    expect(screen.getByText('No se encontraron productos.')).toBeTruthy()
  })
})