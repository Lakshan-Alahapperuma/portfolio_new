export default function About() {
  const highlights = [
    { icon: '💻', title: 'Full Stack Development', desc: 'Building responsive web apps with modern frameworks' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Creating intuitive and beautiful user experiences' },
    { icon: '🚀', title: 'Performance Focus', desc: 'Optimizing for speed and efficiency' },
    { icon: '📚', title: 'Continuous Learning', desc: 'Always exploring new technologies and best practices' }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">Passionate developer crafting digital experiences</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science undergraduate with a genuine passion for building accessible, maintainable, and user-focused web interfaces and applications.
            </p>
            <p>
              With experience in both frontend and backend development, I enjoy crafting clean, efficient code and designing practical digital solutions that make technology more accessible for everyone.
            </p>
            <p>
              I'm continuously learning modern frameworks, tools, and best practices to bring innovative ideas to life through reliable, real-world software.
            </p>
          </div>
          
          <div className="highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
