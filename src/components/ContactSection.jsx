function ContactSection({ formData, handleChange, handleSubmit, isSending, feedback, submitted }) {
  return (
    <section id="contacto" className="container py-5 mb-5 animate-fade-up">
      <div className="row g-5 align-items-start">
        <div className="col-lg-5">
          <div className="info-card p-4 rounded-4 h-100">
            <h2 className="fw-bold mb-4 brand-gradient">Contacto Directo</h2>
            <p className="lead mb-4 text-secondary-light">Estoy disponible en las siguientes plataformas.</p>
            <div className="mb-4">
              <p className="fs-5 mb-3">
                <i className="fa-brands fa-linkedin me-3 icon-box-sm"></i>
                <a href="https://www.linkedin.com/in/cristobal-fuenzalida-53377b334" target="_blank" rel="noreferrer" className="text-light text-decoration-none hover-primary">LinkedIn</a>
              </p>
              <p className="fs-5 mb-3">
                <i className="fa-brands fa-github me-3 icon-box-sm"></i>
                <a href="https://github.com/Crisqwq1782" target="_blank" rel="noreferrer" className="text-light text-decoration-none hover-primary">GitHub: Crisqwq1782</a>
              </p>
              <p className="fs-5 mb-3">
                <i className="fa-solid fa-envelope me-3 icon-box-sm"></i>
                <a href="mailto:Crisqwq1782@gmail.com" className="text-light text-decoration-none hover-primary">Crisqwq1782@gmail.com</a>
              </p>
              <p className="fs-5 mb-3">
                <i className="fa-solid fa-mobile-alt me-3 icon-box-sm"></i>
                <a href="tel:+56933269622" className="text-light text-decoration-none hover-primary">+56 933 269 622</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <form className="contact-form p-4 rounded-4" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="name" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
              <label htmlFor="name">Nombre Completo</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" name="email" placeholder="Correo Electrónico" value={formData.email} onChange={handleChange} required />
              <label htmlFor="email">Correo Electrónico</label>
            </div>
            <div className="form-floating mb-4">
              <textarea className="form-control" id="message" name="message" placeholder="Mensaje" rows="5" style={{ height: '150px' }} value={formData.message} onChange={handleChange} required />
              <label htmlFor="message">Detalla tu proyecto / Mensaje</label>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary-glow fw-bold btn-lg" disabled={isSending}>
                <i className="fa-solid fa-paper-plane me-2"></i>
                {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
            {feedback && (
              <div className={`mt-3 ${submitted ? 'success-box' : 'error-box'}`}>
                {feedback}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
