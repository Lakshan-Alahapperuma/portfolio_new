export default function About() {
  const capabilities = [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'Developing and maintaining responsive frontend and backend components using React.js, Next.js, JavaScript, and modern CSS.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: 'Enterprise Backend & REST APIs',
      desc: 'Developing robust backend services and RESTful APIs using Java Spring Boot, NestJS, PHP, and relational databases like MySQL.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      )
    },
    {
      title: 'Testing & Bug Resolution',
      desc: 'Conducting thorough feature testing, diagnosing root causes, and resolving complex software bugs to ensure rock-solid stability.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      )
    },
    {
      title: 'Version Control & Cloud Deployments',
      desc: 'Managing team source control with Git & Bitbucket; deploying and maintaining live web applications via Netlify and DailyRazor.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    }
  ]

  const highlights = [
    'Software Engineer Intern @ NMA Software',
    'BSc (Hons) Computer Science @ UWU',
    'Java Spring Boot & NestJS',
    'React.js & Next.js',
    'Thissamaharama, Sri Lanka'
  ]

  return (
    <section id="about" className="section" aria-label="About Lakshan Alahapperuma">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">// 01. ABOUT ME</div>
          <h2 className="section-title">Driven by Engineering Excellence</h2>
          <p className="section-subtitle">
            Full-Stack Software Engineer Intern passionate about building dependable, scalable, and responsive digital products.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio Story Card */}
          <div className="about-bio-card">
            <h3>Bridging resilient backend systems with modern frontend experiences.</h3>
            <p>
              I am a <strong>Software Engineer Intern at NMA Software</strong> (New York, NY) and an undergraduate pursuing my <strong>Bachelor of Science (Hons) in Computer Science</strong> at <strong>Uva Wellassa University of Sri Lanka</strong> (December 2023 – December 2027).
            </p>
            <p>
              Based in Thissamaharama, Southern Province, Sri Lanka, I specialize in developing and maintaining end-to-end web applications. My experience ranges from crafting responsive interfaces using <strong>React.js</strong> and <strong>Next.js</strong> to architecting enterprise backend functionalities with <strong>Java Spring Boot</strong> and <strong>NestJS</strong>.
            </p>
            <p>
              I participate across the full software development lifecycle—from design and API integration to testing, debugging, and continuous deployment using <strong>Git, Bitbucket, Netlify, and DailyRazor</strong>.
            </p>

            <div className="about-highlights-list">
              {highlights.map((item) => (
                <span key={item} className="about-pill">
                  <span style={{ color: 'var(--accent-cyan)' }}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities Bento Grid */}
          <div className="capabilities-grid">
            {capabilities.map((cap) => (
              <div key={cap.title} className="capability-card">
                <div className="capability-icon-wrap" aria-hidden="true">
                  {cap.icon}
                </div>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
