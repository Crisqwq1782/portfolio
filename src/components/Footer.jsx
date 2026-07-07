function Footer({ year }) {
  return (
    <footer className="footer py-5 text-center">
      <div className="container">
        <h4 className="brand-gradient fw-bold mb-3">Cristobal Fuenzalida</h4>
        <p className="text-secondary-light mb-4">Sigueme en mis redes sociales!</p>
        <div className="social-links mb-4 d-flex justify-content-center gap-3">
          <a href="https://github.com/Crisqwq1782" target="_blank" rel="noreferrer" className="social-btn" aria-label="Github">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/cristobal-fuenzalida-53377b334" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:Crisqwq1782@gmail.com" className="social-btn" aria-label="Email">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <hr className="border-secondary opacity-25 mx-auto" style={{ maxWidth: '300px' }} />
        <small className="text-secondary-light opacity-75">&copy; {year} Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer
