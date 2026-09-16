import { useState, useEffect, useRef } from 'react'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const closeBtnRef = useRef(null)
  const modalRef = useRef(null)

  const projectsData = [
    {
      id: 1,
      title: 'NMA Freight',
      category: 'Full Stack',
      shortDesc: 'Production-level freight web application developed using React.js for the frontend and Java Spring Boot for the backend. Handled full-stack development, REST APIs, testing, and deployment.',
      longDesc: 'Production-level freight web application developed using React.js for the frontend and Java Spring Boot for the backend. Worked on full-stack development, REST API integration, testing, debugging, and production deployment for seamless logistics workflows.',
      features: [
        'Production freight application live and operating at nmafreight.com',
        'Frontend built with React.js providing intuitive logistics tracking and booking',
        'Backend powered by Java Spring Boot RESTful services and business logic',
        'Rigorous testing, debugging, and deployment ensuring high system reliability'
      ],
      tags: ['React.js', 'Java Spring Boot', 'REST APIs', 'Full-Stack', 'Testing & QA'],
      bannerClass: 'project-banner-grad-1',
      watermark: 'NMA',
      stats: { time: 'Production', team: 'NMA Software' },
      isLive: true,
      links: {
        demo: 'https://nmafreight.com',
        source: 'https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218/'
      }
    },
    {
      id: 2,
      title: 'NMA Software Company Website',
      category: 'Web Applications',
      shortDesc: 'Official company website for NMA Software developed using HTML and CSS for the responsive frontend with Java Spring Boot for backend functionality, deployed on Netlify.',
      longDesc: 'Developed the official company website for NMA Software (Custom Software & AI Automation) using clean, accessible HTML and CSS for the frontend, paired with Java Spring Boot for backend functionality and services. Deployed live with Netlify.',
      features: [
        'Official company website live at nmasoftware.netlify.app',
        'Engineered with modern HTML5, responsive CSS3, and modern layouts',
        'Backend service handling and inquiry processing via Java Spring Boot',
        'Automated continuous deployment and hosting on Netlify'
      ],
      tags: ['HTML5', 'CSS3', 'Java Spring Boot', 'Netlify', 'Responsive UI'],
      bannerClass: 'project-banner-grad-2',
      watermark: 'CORP',
      stats: { time: 'Production', team: 'NMA Software' },
      isLive: true,
      links: {
        demo: 'https://nmasoftware.netlify.app',
        source: 'https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218/'
      }
    },
    {
      id: 3,
      title: 'TileVista — 3D Tile & Bathware Showroom',
      category: 'Design & 3D',
      shortDesc: 'Web-based showroom platform featuring an interactive 3D Bathroom Designer. Configure room dimensions, apply tiles, and position accessories in real time.',
      longDesc: 'Developing a web-based tile and bathware showroom platform featuring an interactive 3D Bathroom Designer. Users can configure bathroom dimensions, apply tiles, and position bathware and accessories in a 3D environment. Implemented product and package visualization features to support the design workflow.',
      features: [
        'Interactive 3D Bathroom Designer built with Three.js WebGL and React',
        'Dynamic tile texture application and 3D accessory placement system',
        'Product catalog and package visualization workflows built with Next.js and NestJS',
        'Relational data persistence with MySQL and Node.js backend services'
      ],
      tags: ['Next.js', 'React.js', 'Three.js', 'NestJS', 'Node.js', 'MySQL'],
      bannerClass: 'project-banner-grad-3',
      watermark: '3D',
      stats: { time: 'Active Project', team: 'Collaborative Team' },
      isLive: false,
      links: {
        demo: 'https://github.com/supunGN/TileVista-',
        source: 'https://github.com/supunGN/TileVista-'
      }
    },
    {
      id: 4,
      title: 'VetiPlus — Veterinary Management Platform',
      category: 'Full Stack',
      shortDesc: 'Full-stack veterinary platform built with object-oriented PHP and MySQL, covering pet profiles, vet and grooming bookings, medical records, and payments.',
      longDesc: 'Developed a full-stack veterinary management platform using object-oriented PHP and MySQL. Features include appointment booking, online payments, pet profiles, medical records, certificate management, events, community discussions, notifications, and role-based dashboards.',
      features: [
        'Pet profiles, digital health history, medical certificates, and vaccination logs',
        'Real-time appointment booking system for veterinary care and pet grooming',
        'Secure online payments integration and automated alert notifications',
        'Interactive community discussion forum and role-based administrative dashboards'
      ],
      tags: ['PHP (OOP)', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
      bannerClass: 'project-banner-grad-1',
      watermark: 'VET',
      stats: { time: 'Completed', team: 'Full-Stack Team' },
      isLive: false,
      links: {
        demo: 'https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218/',
        source: 'https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218/'
      }
    }
  ]

  const categories = ['All', 'Full Stack', 'Web Applications', 'Design & 3D']

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter)

  // Keyboard escape handler for modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll and focus close button on modal open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeBtnRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeProject])

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">// 03. FEATURED WORK</div>
          <h2 className="section-title">Projects & Production Applications</h2>
          <p className="section-subtitle">
            Enterprise platforms, live production deployments, and full-stack software systems engineered with modern technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="projects-filter-bar" role="tablist" aria-label="Project filter categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
              role="tab"
              aria-selected={selectedFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Stylized Modern Mockup Header */}
              <div className={`project-banner-mockup ${project.bannerClass}`}>
                <div className="project-mockup-browser">
                  <span className="mockup-dot" />
                  <span className="mockup-dot" />
                  <span className="mockup-dot" />
                </div>
                <div className="project-banner-body">
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span className="project-category-badge">{project.category}</span>
                    {project.isLive && (
                      <span className="project-category-badge" style={{ background: 'rgba(16, 185, 129, 0.25)', borderColor: 'rgba(16, 185, 129, 0.5)', color: '#34d399' }}>
                        ● Live
                      </span>
                    )}
                  </div>
                </div>
                <div className="project-mockup-watermark">{project.watermark}</div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDesc}</p>

                {/* Tags */}
                <div className="project-tags-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Footer & Actions */}
                <div className="project-card-footer">
                  <div className="project-meta-info">
                    <span className="project-meta-pill">⏱️ {project.stats.time}</span>
                    <span className="project-meta-pill">👥 {project.stats.team}</span>
                  </div>

                  <div className="project-card-actions">
                    <button
                      className="btn-card-action btn-card-primary"
                      onClick={() => setActiveProject(project)}
                      aria-haspopup="dialog"
                    >
                      Details
                    </button>
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card-action"
                        aria-label={`Open demo for ${project.title}`}
                        title="Live Site / Repository"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Project Details Modal */}
      {activeProject && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={(e) => {
            if (e.target.classList.contains('modal-backdrop')) setActiveProject(null)
          }}
        >
          <div className="modal-dialog" ref={modalRef}>
            <button
              ref={closeBtnRef}
              className="modal-close-btn"
              onClick={() => setActiveProject(null)}
              aria-label="Close project modal"
            >
              ✕
            </button>

            <div className="modal-body">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <div className="modal-category">{activeProject.category} // Overview</div>
                {activeProject.isLive && (
                  <span style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 600, background: 'rgba(16, 185, 129, 0.15)', padding: '0.15rem 0.5rem', borderRadius: '999px' }}>
                    ● In Production
                  </span>
                )}
              </div>
              <h3 id="modal-project-title" className="modal-title">{activeProject.title}</h3>
              <p className="modal-long-desc">{activeProject.longDesc}</p>

              <h4 className="modal-features-title">Core Implementation Highlights</h4>
              <ul className="modal-features-list">
                {activeProject.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="modal-check-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="project-tags-list" style={{ marginBottom: '1.5rem' }}>
                {activeProject.tags.map((tag) => (
                  <span key={tag} className="project-tech-tag">{tag}</span>
                ))}
              </div>

              <div className="modal-actions">
                {activeProject.links.demo && (
                  <a
                    href={activeProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>{activeProject.isLive ? 'Visit Live Website' : 'View Project'}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}

                <a
                  href={activeProject.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <span>{activeProject.links.source.includes('github') ? 'GitHub Repository' : 'LinkedIn Project Details'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
