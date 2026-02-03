import React from 'react';
import ImageCarousel from '../components/ImageCarousel';

const ProjectDeepDive = () => {
  const crmImages = [
    '/CRM.png',
    '/CRM1.png',
    '/CRM2.png',
    '/CRM3.png',
    '/CRM4.png'
  ];

  return (
    <div className="page-container deep-dive-page">
      <div className="deep-dive-header">
        <h2>Proyecto en Profundidad: CRM Casa Qian</h2>
        <p className="deep-dive-subtitle">Un análisis técnico detallado del sistema de gestión inmobiliaria</p>
      </div>

      <ImageCarousel images={crmImages} />

      {/* Visión General */}
      <section className="deep-dive-section">
        <h3>📋 Visión General</h3>
        <p>
          CRM Casa Qian es un sistema integral de gestión de clientes especializado en bienes raíces. 
          Permite a los agentes inmobiliarios organizar prospectos, propiedades, seguimiento de venta y reportes analíticos 
          en una interfaz única y fluida.
        </p>
        <div className="metrics">
          <div className="metric-card">
            <span className="metric-label">Propósito</span>
            <span className="metric-value">CRM Inmobiliario</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Equipo</span>
            <span className="metric-value">3 desarrolladores</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Duración</span>
            <span className="metric-value">8 semanas</span>
          </div>
          <div className="metric-card">
            <span className="metric-label">Estado</span>
            <span className="metric-value">Completo</span>
          </div>
        </div>
      </section>

      {/* Arquitectura */}
      <section className="deep-dive-section">
        <h3>🏗️ Arquitectura del Proyecto</h3>
        <div className="architecture">
          <div className="arch-box frontend">
            <h4>Frontend (Angular)</h4>
            <ul>
              <li>Componentes reutilizables</li>
              <li>Two-Way Data Binding</li>
              <li>Services con RxJS</li>
              <li>Reactive Forms</li>
              <li>Angular Material UI</li>
            </ul>
          </div>
          <div className="arch-connector">↔️</div>
          <div className="arch-box api">
            <h4>API REST (Node.js/Express)</h4>
            <ul>
              <li>Endpoints RESTful</li>
              <li>Autenticación JWT</li>
              <li>Validación de datos</li>
              <li>Control de errores</li>
              <li>CORS configurado</li>
            </ul>
          </div>
          <div className="arch-connector">↔️</div>
          <div className="arch-box database">
            <h4>Base de Datos (MongoDB)</h4>
            <ul>
              <li>Colecciones normalizadas</li>
              <li>Índices optimizados</li>
              <li>Queries agregadas</li>
              <li>Backups automáticos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stack Técnico */}
      <section className="deep-dive-section">
        <h3>⚙️ Stack Técnico Detallado</h3>
        <div className="tech-stack">
          <div className="tech-category">
            <h4>Frontend</h4>
            <div className="tech-items">
              <span className="tech-item">Angular 15</span>
              <span className="tech-item">TypeScript 4.9</span>
              <span className="tech-item">RxJS 7</span>
              <span className="tech-item">Angular Material</span>
              <span className="tech-item">SCSS</span>
            </div>
          </div>
          <div className="tech-category">
            <h4>Backend</h4>
            <div className="tech-items">
              <span className="tech-item">Node.js 18</span>
              <span className="tech-item">Express 4</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">Mongoose</span>
              <span className="tech-item">JWT Auth</span>
            </div>
          </div>
          <div className="tech-category">
            <h4>DevOps & Herramientas</h4>
            <div className="tech-items">
              <span className="tech-item">Git & GitHub</span>
              <span className="tech-item">Docker</span>
              <span className="tech-item">Jest (testing)</span>
              <span className="tech-item">Postman (API)</span>
              <span className="tech-item">Vercel Deploy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Desafíos & Soluciones */}
      <section className="deep-dive-section">
        <h3>🎯 Desafíos Técnicos & Soluciones</h3>
        <div className="challenges">
          <div className="challenge-item">
            <h4>Desafío 1: Sincronización de datos en tiempo real</h4>
            <p className="challenge-problem">
              <strong>Problema:</strong> Múltiples usuarios editando clientes simultáneamente causa conflictos de datos.
            </p>
            <p className="challenge-solution">
              <strong>Solución:</strong> Implementé WebSockets en el backend y RxJS Subjects en el frontend para actualizar datos en tiempo real sin recargar la página.
            </p>
          </div>

          <div className="challenge-item">
            <h4>Desafío 2: Performance con grandes datasets</h4>
            <p className="challenge-problem">
              <strong>Problema:</strong> Cargar 10K+ registros ralentiza la interfaz.
            </p>
            <p className="challenge-solution">
              <strong>Solución:</strong> Implementé paginación en backend, virtual scrolling en Angular y lazy loading de imágenes.
            </p>
          </div>

          <div className="challenge-item">
            <h4>Desafío 3: Gestión de permisos complejos</h4>
            <p className="challenge-problem">
              <strong>Problema:</strong> Diferentes usuarios tienen acceso a diferentes datos según su rol.
            </p>
            <p className="challenge-solution">
              <strong>Solución:</strong> Creé un sistema de role-based access control (RBAC) con guards en Angular y middleware en Express.
            </p>
          </div>
        </div>
      </section>

      {/* Lo que aprendí */}
      <section className="deep-dive-section">
        <h3>📚 Lo que Aprendí en Este Proyecto</h3>
        <div className="learnings">
          <div className="learning-item">
            <h4>🔄 Gestión de Estado Compleja</h4>
            <p>Trabajé con RxJS Observables y Subjects para sincronizar estado entre múltiples componentes sin prop drilling.</p>
          </div>

          <div className="learning-item">
            <h4>Seguridad y Autenticación</h4>
            <p>Implementé JWT tokens, refresh tokens, y protección contra ataques comunes (CSRF, XSS).</p>
          </div>

          <div className="learning-item">
            <h4>Optimización de Performance</h4>
            <p>Aprendí sobre change detection strategies, OnPush detection, y lazy loading de módulos en Angular.</p>
          </div>

          <div className="learning-item">
            <h4> Testing y Calidad de Código</h4>
            <p>Escribí unit tests con Jest y e2e tests con Cypress, manteniendo 80% cobertura.</p>
          </div>

          <div className="learning-item">
            <h4>Arquitectura Escalable</h4>
            <p>Diseñé una estructura de carpetas y módulos que permite crecer sin romper funcionalidad existente.</p>
          </div>

          <div className="learning-item">
            <h4>Análisis de Datos</h4>
            <p>Implementé dashboards con gráficos (Chart.js) y agregaciones complejas de MongoDB.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="deep-dive-section cta-section">
        <h3>🔍 Quiero ver el código</h3>
        <p>
          Este proyecto demuestra mis capacidades en arquitectura frontend, integración de APIs, 
          y resolución de problemas reales. Si deseas revisar el repositorio completo:
        </p>
        <a href="https://github.com/vicma06/CRMCasaQian" target="_blank" rel="noopener noreferrer" className="btn-view-code">
          Ver en GitHub →
        </a>
      </section>
    </div>
  );
};

export default ProjectDeepDive;
