import React from 'react';
import GithubProjects from '../components/GithubProjects';
import FeaturedProjects from '../components/FeaturedProjects';

const ProjectsPage = () => {
  const GITHUB_USERNAME = 'Theshy520-spec'; 

  const featuredProjects = [
    {
      name: 'CRMCasaQian',
      repoUrl: 'https://github.com/vicma06/CRMCasaQian',
      description: 'Sistema integral de gestión de clientes (CRM) diseñado para administrar un negocio inmobiliario. Permite un seguimiento detallado de clientes, propiedades y estados de venta.',
      techStack: 'Desarrollado con Angular & TypeScript',
      team: 'Proyecto en Grupo',
      members: ['David Dobeson', 'Victor Martinez', 'Rui Qian'],
      techDetails: 'Se eligió Angular por su robustez estructural y su estricto tipado con TypeScript. La aplicación se conecta mediante una **API RESTful** desarrollada en Node.js/Express para la gestión eficiente de datos en MongoDB. La arquitectura de servicios de Angular permite una comunicación HTTP fluida y modular con el backend, asegurando un flujo de datos robusto y escalable.',
      technologies: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'MongoDB', 'REST API'] 
    },
    {
      name: 'proyectoJava',
      repoUrl: 'https://github.com/D-0BE/proyectoJava',
      description: 'Aplicación backend de alto rendimiento enfocada en la gestión segura y eficiente de datos transaccionales, implementando patrones de diseño avanzados.',
      techStack: 'Construido con Java & Spring Boot',
      team: 'Proyecto en Grupo',
      members: ['David Dobeson', 'Victor Martinez', 'Rui Qian'],
      techDetails: 'Utiliza Spring Boot para favorecer la convención sobre configuración, acelerando el desarrollo. Java proporciona un tipado fuerte y una gestión de memoria eficiente a través de la JVM. La arquitectura multicapa asegura una separación de responsabilidades clara, donde la seguridad de tipos y el ecosistema maduro de Java garantizan una aplicación escalable, mantenible y preparada para entornos de producción exigentes.',
      technologies: ['Java', 'Spring Boot', 'Hibernate / JPA', 'MySQL', 'REST API']
    }
  ];

  return (
    <div className="page-container">
      <FeaturedProjects projects={featuredProjects} />
      <GithubProjects username={GITHUB_USERNAME} />
    </div>
  );
};

export default ProjectsPage;
