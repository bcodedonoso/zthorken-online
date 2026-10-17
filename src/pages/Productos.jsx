import { useState } from 'react'
import { getAll } from '../data/db.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Productos() {
  const [busqueda, setBusqueda] = useState('')
  const [categoriaId, setCategoriaId] = useState('')

  const categorias = getAll('categorias')
  const productos = getAll('productos').filter((p) => {
    const coincideTexto = p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    const coincideCategoria = categoriaId === '' || p.categoriaId === Number(categoriaId)
    return coincideTexto && coincideCategoria
  })

  return (
    <div className="container my-4">
      <h1 className="mb-4">Productos</h1>

      <div className="row g-2 mb-4">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar producto"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categorias.map((c) => (
              <option key={c.id} value={c.id}>{c.nombre}</option>
            ))}
          </select>
        </div>
      </div>

      {productos.length === 0 ? (
        <p className="text-muted">No se encontraron productos.</p>
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