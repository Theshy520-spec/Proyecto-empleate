const FeaturedProjects = ({ projects }) => {
  return (
    <div className="featured-projects">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card featured">
            <h3>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>

            {project.team && (
              <div className="team-section">
                <span className="project-team-badge">👥 {project.team}</span>
                {project.members && (
                  <div className="project-members">
                    <strong>Integrantes:</strong> {project.members.join(', ')}
                  </div>
                )}
              </div>
            )}
            
            {project.techStack && (
              <div className="project-stack">
                <strong>Arquitectura:</strong> {project.techStack}
              </div>
            )}
            
            <p>{project.description}</p>
            
            {project.techDetails && (
              <div className="project-tech-details">
                <p><strong>Análisis Técnico:</strong> {project.techDetails}</p>
              </div>
            )}

            <div className="project-tech">
              <h4>Tecnologías:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
