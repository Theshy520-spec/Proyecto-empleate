import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>Sobre Mí</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            ¡Hola! Soy <strong>Rui Qian</strong>, un apasionado desarrollador de software con enfoque en la creación de aplicaciones web robustas y escalables. 
          </p>
          <p>
            Tengo experiencia trabajando tanto en el <strong>Frontend</strong> (Angular, React) como en el <strong>Backend</strong> (Java Spring Boot, Node.js). 
            Disfruto resolviendo problemas complejos y colaborando en equipos ágiles para llevar ideas innovadoras a la realidad.
          </p>
          <p>
            Me especializo en el desarrollo de arquitecturas limpias, integración de APIs RESTful y bases de datos eficientes.
            Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades técnicas.
          </p>
        </div>
        <div className="skills-container">
          <h3>Habilidades Principales</h3>
          <ul className="skills-list">
            <li>☕ Java & Spring Boot</li>
            <li>⚛️ React & Angular</li>
            <li>🚀 JavaScript & TypeScript</li>
            <li>🗄️ MySQL & MongoDB</li>
            <li>🔧 Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
