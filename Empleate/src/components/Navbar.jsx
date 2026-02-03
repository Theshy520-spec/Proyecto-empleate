import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-brand">Portafolio</div>
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Sobre Mí
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            Proyectos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
