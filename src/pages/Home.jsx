import { Link } from 'react-router-dom'
import Carrusel from '../components/Carrusel.jsx'
import { getAll } from '../data/db.js'

// Fondo de un solo color (mismo color de texto para ocultar las medidas)
const fondo = (color) => `https://placehold.co/1200x380/${color}/${color}`

const slides = [
  { titulo: 'Nuevos lanzamientos', texto: 'Descubre lo último en computadores y notebooks.', imagen: fondo('0d3b66'), enlace: '/productos', boton: 'Ver productos' },
  { titulo: 'Ofertas de la semana', texto: 'Audio, periféricos y más con grandes descuentos.', imagen: fondo('1b4332'), enlace: '/ofertas', boton: 'Ver ofertas' },
  { titulo: 'Arma tu setup', texto: 'Monitores, teclados y componentes para tu equipo.', imagen: fondo('3c096c'), enlace: '/categorias', boton: 'Ver categorías' },
]

function Home() {
  const categorias = getAll('categorias')

  return (
    <main>
      <h1 className="visually-hidden">Zthorken Online</h1>

      <Carrusel slides={slides} />

      <section className="container py-5">
        <h2 className="text-center mb-4">Categorías</h2>
        <div className="row g-4">
          {categorias.map((c) => (
            <div className="col-6 col-md-4" key={c.id}>
              <Link to={`/categorias/${c.id}`} className="card h-100 text-decoration-none shadow-sm">
                <img src={c.imagen} className="card-img-top object-fit-cover" style={{ height: 160 }} alt="" />
                <div className="card-body text-center">
                  <h3 className="h6 mb-0">{c.nombre}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Home
