import { Link, useParams } from 'react-router-dom'
import { getAll, getById } from '../data/db.js'
import ProductCard from '../components/ProductCard.jsx'

export default function CategoriaDetalle() {
  const { id } = useParams()
  const categoria = getById('categorias', id)

  if (!categoria) {
    return (
      <div className="container my-5 text-center">
        <h1>Categoría no encontrada</h1>
        <Link to="/categorias" className="btn btn-primary mt-3">Ver categorías</Link>
      </div>
    )
  }

  const productos = getAll('productos').filter((p) => p.categoriaId === categoria.id)

  return (
    <div className="container my-4">
      <Link to="/categorias" className="btn btn-link ps-0 mb-3">← Volver a categorías</Link>
      <h1 className="mb-4">{categoria.nombre}</h1>
      {productos.length === 0 ? (
        <p className="text-muted">No hay productos en esta categoría.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {productos.map((p) => (
            <div className="col" key={p.id}>
              <ProductCard producto={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}