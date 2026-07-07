function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top glass-navbar">
      <div className="container">
        <a className="navbar-brand brand-gradient" href="#home">
          Cristobal Fuenzalida
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setMenuOpen(false)}>
                Sobre mí
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Habilidades" onClick={() => setMenuOpen(false)}>
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Proyectos" onClick={() => setMenuOpen(false)}>
                Proyectos
              </a>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a className="btn btn-sm btn-outline-light rounded-pill px-3 nav-contact-btn" href="#contacto" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
