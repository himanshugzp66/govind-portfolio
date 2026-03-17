import { projects } from '../data/projects'

export const Projects = () => {
  return (
    <div className="section-inner">
      <h3>Projects</h3>
      <div className="cards">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h4>{project.title}</h4>
            <div className="card-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="pill small">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="card-list">
              {project.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {project.metric && <p className="card-metric">{project.metric}</p>}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="card-link">
                View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

