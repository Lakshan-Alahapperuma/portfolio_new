export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      organization: 'NMA Software',
      location: 'New York, NY, United States (Remote)',
      date: 'November 2025 — Present',
      desc: 'Developing and maintaining robust frontend and backend components for production web applications across the full software lifecycle.',
      achievements: [
        'Develop and maintain responsive frontend and backend components for modern web applications',
        'Build responsive user interfaces and seamlessly integrate them with backend services and REST APIs',
        'Develop core backend functionality and business logic utilizing Java Spring Boot',
        'Systematically test application features, identify root causes, and resolve software bugs',
        'Utilize Git and Bitbucket for team version control, code reviews, and source code management',
        'Deploy and maintain live web applications leveraging Netlify and DailyRazor cloud hosting',
        'Actively participate in the complete development lifecycle from implementation and testing to debugging and deployment'
      ]
    },
    {
      role: 'Full-Stack Web Development Projects',
      organization: 'Academic & Applied Platforms',
      location: 'Sri Lanka',
      date: '2023 — Present',
      desc: 'Architecting full-stack web applications using React.js, Next.js, NestJS, PHP, and MySQL for clinical and academic workflows.',
      achievements: [
        'Architected VetiPlus, an end-to-end veterinary management platform with appointment scheduling and clinical record tracking',
        'Engineered responsive campus management portals with relational schema design and role-based permissions',
        'Integrated secure authentication and optimized RESTful API endpoints for sub-second responses'
      ]
    },
    {
      role: 'Teaching & Mentorship',
      organization: 'Sasnaka Sansada Foundation',
      location: 'Sri Lanka',
      date: '2020 — 2023',
      desc: 'Mentored and tutored high school students in mathematics and problem solving across multiple regional schools.',
      achievements: [
        'Mentored 50+ students in STEM subjects and advanced mathematics problem solving',
        'Authored modular conceptual worksheets and conducted collaborative review sessions',
        'Developed exceptional communication, leadership, and analytical breakdown skills'
      ]
    }
  ]

  return (
    <section id="timeline" className="section" aria-label="Professional Experience">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">// 04. EXPERIENCE & CAREER</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Demonstrated engineering experience developing enterprise software, RESTful services, and modern user interfaces.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="timeline-stream">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-entry">
                <span className="timeline-dot" aria-hidden="true" />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span className="timeline-date-pill">{exp.date}</span>
                  {exp.location && (
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-faint)', fontWeight: 500 }}>
                      📍 {exp.location}
                    </span>
                  )}
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-organization">{exp.organization}</div>
                <p className="timeline-desc">{exp.desc}</p>
                <ul className="timeline-achievements-list">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
