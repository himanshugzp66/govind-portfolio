import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import './style.css'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="achievements" className="section">
          <Achievements />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App

