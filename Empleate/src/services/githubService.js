// Servicio para obtener repositorios de GitHub
const FALLBACK_PROJECTS = [
  {
    id: 101,
    name: 'Proyecto-empleate',
    html_url: 'https://github.com/Theshy520-spec/Proyecto-empleate',
    description: 'Repositorio de este portafolio personal creado con React.',
    stargazers_count: 1,
    forks_count: 0,
    language: 'JavaScript'
  },
  {
    id: 102,
    name: 'Proyecto-sistema.github.io',
    html_url: 'https://github.com/Theshy520-spec/Proyecto-sistema.github.io',
    description: 'Proyecto final de sistema informático.',
    stargazers_count: 0,
    forks_count: 0,
    language: 'HTML'
  },
  {
    id: 103,
    name: 'actividad2b.github.io',
    html_url: 'https://github.com/Theshy520-spec/actividad2b.github.io',
    description: 'Actividad de desarrollo web.',
    stargazers_count: 0,
    forks_count: 0,
    language: 'HTML'
  }
];

export const githubService = {
  async fetchRepositories(username) {
    try {
      console.log("Intentando obtener repositorios para:", username);
      
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      
      if (!response.ok) {
        console.warn(`Error API GitHub: ${response.status} ${response.statusText}`);
        throw new Error('Fallo en la API');
      }

      const data = await response.json();
      
      if (Array.isArray(data) && data.length > 0) {
        return { projects: data, usingFallback: false };
      } else {
        return { projects: FALLBACK_PROJECTS, usingFallback: true };
      }
      
    } catch (err) {
      console.error("Error capturado, usando backup:", err);
      return { projects: FALLBACK_PROJECTS, usingFallback: true };
    }
  }
};
