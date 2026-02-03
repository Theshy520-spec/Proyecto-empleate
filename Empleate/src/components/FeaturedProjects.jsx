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
            <p>{project.description}</p>
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
