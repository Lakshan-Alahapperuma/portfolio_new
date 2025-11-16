import { useState } from 'react'

export default function Header({ navOpen, toggleNav, scrolled }) {
  const navLinks = ['About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact']

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container header-inner">
        <a className="brand" href="#home">Lakshan Alahapperuma</a>

        <nav className={`nav ${navOpen ? 'show' : ''}`} id="nav" role="navigation" aria-label="Main navigation">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => toggleNav(false)}
              aria-label={`Go to ${link}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="resume-btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <button
            id="nav-toggle"
            aria-label="Toggle navigation"
            aria-controls="nav"
            aria-expanded={navOpen}
            onClick={() => toggleNav()}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
