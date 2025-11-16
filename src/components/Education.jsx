export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <p className="section-subtitle">Academic background and learning journey</p>
        </div>
        <div className="education-content">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <h3>Uva Wellassa University of Sri Lanka</h3>
            <p className="degree">BSc in Computer Science (Undergraduate)</p>
            <p className="description">Comprehensive curriculum in software development, database management, algorithms, and web technologies.</p>
            <div className="courses">
              <span className="course-tag">Web Development</span>
              <span className="course-tag">Database Design</span>
              <span className="course-tag">Data Structures</span>
              <span className="course-tag">UI/UX Principles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
