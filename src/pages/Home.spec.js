import { render, screen } from '@testing-library/react'
import Home from './Home.jsx'

describe('Home', () => {
  it('muestra el título de la tienda', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'Zthorken Online' })).toBeTruthy()
  })
})
