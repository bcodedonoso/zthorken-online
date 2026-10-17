import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
