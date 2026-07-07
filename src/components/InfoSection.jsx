function InfoSection({ title, icon, children, iconClass }) {
  return (
    <section className="container py-5 mb-5 animate-fade-up">
      <div className="vision-box p-4 p-md-5 rounded-4 position-relative overflow-hidden">
        <div className="row align-items-center position-relative z-1">
          <div className="col-md-8">
            <h3 className="fw-bold mb-4">
              <i className={`${icon} me-2 brand-gradient`}></i>{title}
            </h3>
            {children}
          </div>
          <div className="col-md-4 text-center d-none d-md-block">
            <i className={`${iconClass}`} style={{ fontSize: '6rem', opacity: 0.2, color: 'var(--primary-color)' }}></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection
