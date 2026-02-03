import React from 'react';

const ContactPage = () => {
  const githubUrl = 'https://github.com/Theshy520-spec';

  return (
    <div className="page-container contact-page">
      <h2>Contacto & Enlaces</h2>

      <div className="contact-content">
        {/* Sección Enlaces */}
        <div className="contact-section links-section">
          <h3>Enlaces Profesionales</h3>
          <div className="contact-links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-icon">🔗</span>
              <div className="link-content">
                <strong>GitHub</strong>
                <p>Theshy520-spec</p>
              </div>
            </a>
            <a href={`mailto:q1314xfq@gmail.com`} className="contact-link">
              <span className="link-icon">✉️</span>
              <div className="link-content">
                <strong>Email</strong>
                <p>q1314xfq@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/ruiqian" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-icon">💼</span>
              <div className="link-content">
                <strong>LinkedIn</strong>
                <p>Rui Qian</p>
              </div>
            </a>

            <a href="tel:+34688158616" className="contact-link">
              <span className="link-icon">📱</span>
              <div className="link-content">
                <strong>Teléfono</strong>
                <p>+34 688158616</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Sección Información */}
      <div className="contact-info">
        <h3>Información para Reclutadores</h3>
        <p>
          Esta es mi tarjeta de presentación digital. Aquí encontrarás todo lo que necesitas conocer sobre mis competencias, proyectos y forma de contactarme. 
          Mi portafolio está diseñado para ser revisado en 2-3 minutos y destaca mis habilidades como desarrollador Frontend.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
