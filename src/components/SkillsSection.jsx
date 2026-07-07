function SkillsSection({ skills }) {
  return (
    <section className="container py-5 mb-5 section-spacer">
      <div className="row mb-5 justify-content-center text-center animate-fade-up">
        <div className="col-lg-8">
          <h2 id="Habilidades" className="fw-bold mb-3">
            <i className="fa-solid fa-layer-group me-2 brand-gradient"></i>Mis Habilidades
          </h2>
          <p className="text-secondary-light fs-5">
            Creo firmemente en escribir código limpio, eficiente y mantenible, priorizando la experiencia del usuario y la seguridad.
          </p>
        </div>
      </div>

      <div className="row g-4">
        {skills.map((skill, index) => (
          <div className="col-md-4 animate-fade-up" style={{ animationDelay: `${0.1 * (index + 1)}s` }} key={skill.title}>
            <div className={`tech-card h-100 p-4 p-lg-5 text-center ${skill.featured ? 'tech-card-featured' : ''}`}>
              <div className="icon-box mb-4">
                <i className={skill.icon}></i>
              </div>
              <h4>{skill.title}</h4>
              <p className="text-secondary-light mb-0">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
