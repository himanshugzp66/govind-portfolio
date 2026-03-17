export const Navbar = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="navbar">
      <div className="nav-brand" onClick={() => handleScroll('home')}>
        <span className="nav-name">Sudhanshu</span>
        <span className="nav-role">Data Scientist</span>
      </div>
      <nav className="nav-links">
        {['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'].map(
          (section) => (
            <button
              key={section}
              className="nav-link"
              onClick={() => handleScroll(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ),
        )}
      </nav>
    </header>
  )
}

