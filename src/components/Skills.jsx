export default function Skills() {
  const skillsData = [
    { 
      category: 'Frontend', 
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design']
    },
    { 
      category: 'Backend', 
      icon: '⚙️',
      skills: ['PHP', 'Node.js', 'MySQL', 'REST APIs', 'Database Design']
    },
    { 
      category: 'Tools & Platforms', 
      icon: '🛠️',
      skills: ['Git', 'Figma', 'VS Code', 'NetBeans', 'GitHub']
    },
    { 
      category: 'Other Skills', 
      icon: '⭐',
      skills: ['UI/UX Design', 'Teaching', 'Problem Solving', 'Team Collaboration']
    }
  ]

  return (
    <section id="skills" className="section alt">
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p className="section-subtitle">Tools and technologies I work with</p>
        </div>
        <div className="skills-grid">
          {skillsData.map(skill => (
            <div key={skill.category} className="skill">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.category}</h3>
              <div className="skill-items">
                {skill.skills.map(item => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
