function ProjectsSection({ projects }) {
  return (
    <section id="Proyectos" className="container py-5 section-spacer">
      <div className="row mb-5 justify-content-center text-center animate-fade-up">
        <div className="col-lg-8">
          <h2 className="fw-bold mb-3">
            <i className="fa-solid fa-rocket brand-gradient me-3"></i>Portafolio de Proyectos
          </h2>
          <p className="text-secondary-light fs-5">Proyectos destacados en los que trabajé o aporté.</p>
        </div>
      </div>

      <div className="row g-4 justify-content-center">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 col-12 animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }} key={project.title}>
            <div className="card h-100 project-card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-secondary-light">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
