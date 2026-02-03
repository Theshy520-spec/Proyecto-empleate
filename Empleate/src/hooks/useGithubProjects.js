import { useState, useEffect } from 'react';
import { githubService } from '../services/githubService';

/**
 * @param {string} Theshy520-spec
 * @returns {object} 
 */
export const useGithubProjects = (username) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    if (!username) {
      setLoading(false);
      return;
    }

    const loadProjects = async () => {
      setLoading(true);
      const { projects: data, usingFallback: fallback } = await githubService.fetchRepositories(username);
      setProjects(data);
      setUsingFallback(fallback);
      setLoading(false);
    };

    loadProjects();
  }, [username]);

  return { projects, loading, usingFallback };
};
