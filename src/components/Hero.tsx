export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="hero-kicker">Portfolio of</p>
        <h1>
          Sudhanshu <span>Pandey</span>
        </h1>
        <h2>Detail-oriented Data Scientist</h2>
        <p className="hero-subtitle">
          I design data-driven solutions using Python, SQL, and machine learning to help
          businesses make smarter decisions.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn ghost">
            Contact Me
          </a>
        </div>
        <div className="hero-links">
          <a href="tel:+917678106465">+91-7678106465</a>
          <a href="mailto:pandeygovind001@gmail.com">pandeygovind001@gmail.com</a>
          <a
            href="https://linkedin.com/in/sudhanshu-pandey-1979b82b1"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Sudhanshu-Pandey001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="hero-badge">
        <div className="hero-pill">Open to Data Science / Analytics roles</div>
        <div className="hero-meta">
          <span>Machine Learning</span>
          <span>SQL &amp; Python</span>
          <span>Dashboards &amp; Storytelling</span>
        </div>
      </div>
    </div>
  )
}

