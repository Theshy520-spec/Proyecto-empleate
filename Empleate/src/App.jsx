import { useState } from 'react'
import './App.css'
import GithubProjects from './components/GithubProjects'
import FeaturedProjects from './components/FeaturedProjects'

function App() {
  // CAMBIA ESTO POR TU NOMBRE DE USUARIO DE GITHUB (para la lista general)
  const GITHUB_USERNAME = 'vicma06'; 

  const featuredProjects = [
    {
      name: 'CRMCasaQian',
      repoUrl: 'https://github.com/vicma06/CRMCasaQian',
      description: 'Sistema integral de gestión de clientes (CRM) diseñado para optimizar procesos comerciales. Incluye módulos de administración de contactos, seguimiento de ventas y reportes analíticos.',
      technologies: ['JavaScript', 'HTML/CSS', 'Gestión de Datos', 'Frontend'] 
    },
    {
      name: 'proyectoJava',
      repoUrl: 'https://github.com/D-0BE/proyectoJava',
      description: 'Aplicación robusta desarrollada en Java que demuestra sólidos principios de Programación Orientada a Objetos. Enfocada en la escalabilidad y el rendimiento eficiente.',
      technologies: ['Java', 'POO', 'Estructuras de Datos', 'Backend']
    }
  ];

  return (
    <div className="App">
      <header>
        <h1>Mi Portafolio Profesional</h1>
      </header>
      <main>
        <FeaturedProjects projects={featuredProjects} />
        <GithubProjects username={GITHUB_USERNAME} />
      </main>
    </div>
  )
}

export default App
