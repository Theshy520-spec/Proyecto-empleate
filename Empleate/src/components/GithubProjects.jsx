import { useState, useEffect } from 'react';

const GithubProjects = ({ username }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Error al obtener los repositorios');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (username) {
      fetchProjects();
    }
  }, [username]);

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="github-projects">
      <h2>Mis Proyectos de GitHub</h2>
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
