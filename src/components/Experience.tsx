import { experiences } from '../data/experience'

export const Experience = () => {
  return (
    <div className="section-inner">
      <h3>Experience &amp; Academic Work</h3>
      <div className="cards">
        {experiences.map((exp) => (
          <article key={exp.title} className="card">
            <h4>{exp.title}</h4>
            {exp.location && <p className="card-meta">{exp.location}</p>}
            <ul className="card-list">
              {exp.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

