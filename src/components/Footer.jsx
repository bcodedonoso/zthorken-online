import { Link } from 'react-router-dom'

const anio = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto py-4">
      <div className="container">
        <div className="row gy-3">
          <div className="col-md-4">
            <h5 className="fw-bold">Zthorken</h5>
            <p className="text-secondary mb-0">Computadores, notebooks, audio y todo lo que necesitas en tecnología.</p>
          </div>

          <div className="col-6 col-md-4">
            <h6>Tienda</h6>
            <ul className="list-unstyled mb-0">
              <li><Link className="link-light text-decoration-none" to="/productos">Productos</Link></li>
              <li><Link className="link-light text-decoration-none" to="/categorias">Categorías</Link></li>
              <li><Link className="link-light text-decoration-none" to="/ofertas">Ofertas</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6>Empresa</h6>
            <ul className="list-unstyled mb-0">
              <li><Link className="link-light text-decoration-none" to="/nosotros">Nosotros</Link></li>
              <li><Link className="link-light text-decoration-none" to="/blogs">Blog</Link></li>
              <li><Link className="link-light text-decoration-none" to="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-secondary small text-center mb-0">
          © {anio} Zthorken Online · contacto@zthorken.cl
        </p>
      </div>
    </footer>
  )
}

export default Footer
