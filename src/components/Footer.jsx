import { useState } from 'react'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h4>Lakshan Alahapperuma</h4>
            <p>Software Engineer Intern at NMA Software · Full-Stack Developer · BSc (Hons) CS Undergrad</p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#timeline">Experience</a>
            <a href="#contact">Contact</a>
            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
            <a href="https://github.com/Lakshan-Alahapperuma" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>

          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} Lakshan Alahapperuma. All rights reserved. Designed & coded with passion.
          </p>
          <div className="footer-tech-stack">
            <span>React.js · Three.js · Vite</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
