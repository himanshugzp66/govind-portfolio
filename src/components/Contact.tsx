export const Contact = () => {
  return (
    <div className="section-inner two-column">
      <div>
        <h3>Contact</h3>
        <p>
          I&apos;m actively looking for roles in Data Science, Analytics, and related fields. If
          you think I could be a good fit for your team, feel free to reach out.
        </p>
        <ul className="list contact-list">
          <li>
            <strong>Phone:</strong> <a href="tel:+917678106465">+91-7678106465</a>
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:pandeygovind001@gmail.com">pandeygovind001@gmail.com</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://linkedin.com/in/sudhanshu-pandey-1979b82b1"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/sudhanshu-pandey-1979b82b1
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Sudhanshu-Pandey001"
              target="_blank"
              rel="noreferrer"
            >
              Sudhanshu-Pandey001
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Quick Message</h3>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4} placeholder="Short message" required />
          </div>
          <button type="submit" className="btn primary" disabled>
            Send (demo only)
          </button>
          <p className="form-note">
            This is a front-end demo form only. You can contact me directly via email or
            LinkedIn.
          </p>
        </form>
      </div>
    </div>
  )
}

