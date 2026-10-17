import { getAll } from '../data/db.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Ofertas() {
  const productos = getAll('productos').filter(
    (p) => p.precioOferta !== null && p.precioOferta !== undefined
  )

  return (
    <div className="container my-4">
      <h1 className="mb-4">Ofertas</h1>
      {productos.length === 0 ? (
        <p className="text-muted">No hay ofertas por ahora.</p>
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