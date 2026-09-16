export default function Education() {
  const courses = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Full-Stack Web Architecture',
    'Software Engineering Principles',
    'Computer Systems & Architecture',
    'Operating Systems & Networks'
  ]

  return (
    <section id="education" className="section" aria-label="Academic Education">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">// 05. ACADEMIC EDUCATION</div>
          <h2 className="section-title">Education & Studies</h2>
          <p className="section-subtitle">
            Formal computational foundation and academic curriculum in computer science and software development.
          </p>
        </div>

        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="timeline-entry" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span className="timeline-date-pill">December 2023 — December 2027</span>
                <h3 className="timeline-role" style={{ fontSize: '1.45rem', marginTop: '0.25rem' }}>
                  Bachelor of Science (Hons), Computer Science
                </h3>
                <div className="timeline-organization" style={{ fontSize: '1.05rem' }}>
                  Uva Wellassa University of Sri Lanka
                </div>
              </div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
            </div>

            <p className="timeline-desc" style={{ fontSize: '0.98rem', marginBottom: '1.25rem' }}>
              Pursuing a comprehensive 4-year honours degree program covering software engineering paradigms, distributed architectures, algorithms, modern web frameworks, and enterprise database systems.
            </p>

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#fff', marginBottom: '0.65rem' }}>
                Key Academic Competencies & Coursework:
              </div>
              <div className="education-courses-wrap">
                {courses.map((course) => (
                  <span key={course} className="course-chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
