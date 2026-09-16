import { useState, useEffect } from 'react'

export default function Header({ navOpen, toggleNav, scrolled }) {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'timeline', 'contact']
      const scrollY = window.scrollY + 180

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        {/* Brand */}
        <a className="brand" href="#home" aria-label="Lakshan Alahapperuma home">
          <div className="brand-badge">LA</div>
          <div className="brand-name">
            <span className="brand-title">Lakshan Alahapperuma</span>
            <span className="brand-subtitle">&lt;Software Engineer /&gt;</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navItems.map(item => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          <a
            href="https://github.com/Lakshan-Alahapperuma"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a
            className="resume-btn"
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="View & Download Resume PDF"
          >
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            aria-label={navOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={navOpen}
            onClick={() => toggleNav()}
          >
            {navOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-overlay ${navOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={() => toggleNav(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => toggleNav(false)}
            >
              📄 View Resume PDF
            </a>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => toggleNav(false)}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
