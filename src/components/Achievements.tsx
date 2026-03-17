const achievements = [
  'Completed Google Data Analytics Professional Certificate (Coursera).',
  'Achieved Top 5 position in a college-level Machine Learning Hackathon (2025–2026).',
  'Published a House Price Prediction project on GitHub.',
  'Solved 200+ problems on LeetCode/HackerRank using Python and SQL.',
]

const languages = ['Hindi', 'English']

const interests = ['Open-source contributions', 'Reading blogs and research papers']

export const Achievements = () => {
  return (
    <div className="section-inner two-column">
      <div>
        <h3>Achievements</h3>
        <ul className="list">
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Languages &amp; Interests</h3>
        <div className="pill-group">
          <h4>Languages</h4>
          <div className="pills">
            {languages.map((lang) => (
              <span key={lang} className="pill">
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="pill-group">
          <h4>Interests</h4>
          <div className="pills">
            {interests.map((interest) => (
              <span key={interest} className="pill">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

