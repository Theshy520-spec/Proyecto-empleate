import { useGithubProjects } from '../hooks/useGithubProjects';

const GithubProjects = ({ username }) => {
  const { projects, loading, usingFallback } = useGithubProjects(username);
  const FALLBACK_PROJECTS = [
      {
          id: 101,
          name: 'Proyecto-empleate',
          html_url: `https://github.com/${username}/Proyecto-empleate`,
          description: 'Repositorio de este portafolio personal creado con React.',
          stargazers_count: 1,
          forks_count: 0,
          language: 'JavaScript'
      },
      {
          id: 102,
          name: 'Proyecto-sistema.github.io',
          html_url: `https://github.com/${username}/Proyecto-sistema.github.io`,
          description: 'Proyecto final de sistema informático.',
          stargazers_count: 0,
          forks_count: 0,
          language: 'HTML'
      },
      {
          id: 103,
          name: 'actividad2b.github.io',
          html_url: `https://github.com/${username}/actividad2b.github.io`,
          description: 'Actividad de desarrollo web.',
          stargazers_count: 0,
          forks_count: 0,
          language: 'HTML'
      }
  ];

  if (loading) return <p className="loading-text">Cargando proyectos de GitHub...</p>;
  
  return (
    <div className="github-projects">
      <h2>Mis Proyectos de GitHub</h2>
      {usingFallback && (
          <p style={{color: '#e67e22', fontSize: '0.9em'}}>
              ⚠️ Mostrando versión guardada (Límite de API de GitHub excedido)
          </p>
      )}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3><a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
            <p>{project.description || "Sin descripción"}</p>
            <div className="project-info">
              <span>⭐ {project.stargazers_count}</span>
              <span>🍴 {project.forks_count}</span>
              {project.language && <span>💻 {project.language}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubProjects;
