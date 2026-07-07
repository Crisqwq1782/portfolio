function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7 order-2 order-lg-1 animate-fade-up">
            <span className="hero-pill">Disponible para nuevos proyectos</span>
            <h1 className="display-4 fw-bold mb-4">
              <span className="brand-gradient">Cristobal Fuenzalida.</span> Desarrollador Full Stack.
            </h1>
            <p className="lead text-secondary-light mb-5">
              Transformo ideas complejas en soluciones web robustas, escalables y visualmente impactantes. Especializado en el ciclo completo de desarrollo, desde la base de datos hasta la interfaz de usuario.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#contacto" className="btn btn-primary-glow btn-lg rounded-pill px-5">
                <i className="fa-solid fa-paper-plane me-2"></i>Contáctame
              </a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center animate-fade-in">
            <div className="hero-image-container">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Coding setup" className="img-fluid rounded-4 shadow-lg hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
