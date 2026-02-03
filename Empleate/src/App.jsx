import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDeepDive from './pages/ProjectDeepDive';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Mi Portafolio Profesional</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/deep-dive" element={<ProjectDeepDive />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
