import { certifications, technicalSkills, tools } from '../data/skills'

export const Skills = () => {
  return (
    <div className="section-inner">
      <h3>Skills &amp; Certifications</h3>
      <div className="pill-groups">
        <div>
          <h4>Technical</h4>
          <div className="pills">
            {technicalSkills.map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4>Tools &amp; Platforms</h4>
          <div className="pills">
            {tools.map((tool) => (
              <span key={tool} className="pill">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4>Certifications</h4>
          <div className="pills">
            {certifications.map((cert) => (
              <span key={cert} className="pill highlight">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

