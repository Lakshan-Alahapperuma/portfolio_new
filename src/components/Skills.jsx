export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Engineering',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      skills: [
        'React.js',
        'Next.js',
        'JavaScript (ES6+)',
        'Cascading Style Sheets (CSS)',
        'HTML5 Semantic Markup',
        'Responsive UI Design'
      ]
    },
    {
      category: 'Backend & APIs',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: [
        'Java Spring Boot',
        'NestJS',
        'PHP',
        'RESTful API Services',
        'MySQL Relational Databases',
        'Node.js & Backend Integration'
      ]
    },
    {
      category: 'DevOps & Deployment',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      ),
      skills: [
        'Git Version Control',
        'Bitbucket Repositories',
        'Netlify Hosting',
        'DailyRazor Deployment',
        'Postman API Testing',
        'VS Code & CLI Workflows'
      ]
    },
    {
      category: 'Software Engineering Competencies',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
      skills: [
        'Full-Stack Architecture',
        'Bug Diagnosis & Resolution',
        'Feature QA & Testing',
        'Source Code Management',
        'API Contract Integration',
        'Agile Collaboration'
      ]
    }
  ]

  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">// 02. TECHNICAL SKILLS</div>
          <h2 className="section-title">Technical Arsenal & Tooling</h2>
          <p className="section-subtitle">
            Core technologies and development workflows I apply daily in professional enterprise and web environments.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((group) => (
            <div key={group.category} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon" aria-hidden="true">
                  {group.icon}
                </div>
                <h3>{group.category}</h3>
              </div>

              <div className="skills-tags-wrap">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-tag-chip">
                    <span className="skill-dot" aria-hidden="true" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
