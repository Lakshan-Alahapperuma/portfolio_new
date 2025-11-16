import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <p>© {year} Lakshan Alahapperuma — Crafted with ❤️ and lots of coffee</p>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
