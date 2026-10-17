import { render, screen } from '@testing-library/react'
import Nosotros from './Nosotros.jsx'

describe('Nosotros', () => {
  it('muestra la misión, la visión y los valores', () => {
    render(<Nosotros />)
    expect(screen.getByRole('heading', { level: 1, name: 'Sobre Zthorken' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Misión' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Visión' })).toBeTruthy()
    for (const valor of ['Calidad', 'Asesoría', 'Confianza']) {
      expect(screen.getByRole('heading', { name: valor })).toBeTruthy()
    }
  })
})
