import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const containerRef = useRef(null)
  const [roleIndex, setRoleIndex] = useState(0)

  const roles = [
    'Software Engineer Intern @ NMA Software',
    'Full-Stack Developer',
    'React.js & Next.js Developer',
    'Java Spring Boot & NestJS Engineer',
    'BSc (Hons) Computer Science Undergrad'
  ]

  // Role cycling interval
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [roles.length])

  // Three.js Interactive Starfield & Constellation
  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 28

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Particle System (Cyber Constellation)
    const particleCount = 220
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)
    const velocities = []

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 55
      positions[i3 + 1] = (Math.random() - 0.5) * 35
      positions[i3 + 2] = (Math.random() - 0.5) * 30

      scales[i] = Math.random() * 0.8 + 0.4
      velocities.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.01
      })
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Soft glowing cyan/blue particle material
    const material = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.28,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    })

    const pointCloud = new THREE.Points(geometry, material)
    scene.add(pointCloud)

    // Dynamic geometric ring in the background for depth
    const ringGeom = new THREE.TorusGeometry(12, 0.08, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    })
    const ringMesh = new THREE.Mesh(ringGeom, ringMat)
    ringMesh.position.set(10, -2, -10)
    ringMesh.rotation.x = Math.PI / 3
    scene.add(ringMesh)

    // Mouse Parallax
    let targetMouseX = 0
    let targetMouseY = 0
    let currentMouseX = 0
    let currentMouseY = 0

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const handleTouchMove = (event) => {
      if (event.touches && event.touches[0]) {
        targetMouseX = (event.touches[0].clientX / window.innerWidth - 0.5) * 2
        targetMouseY = (event.touches[0].clientY / window.innerHeight - 0.5) * 2
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth mouse lerping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05
      currentMouseY += (targetMouseY - currentMouseY) * 0.05

      // Orbit particles gently
      pointCloud.rotation.y += 0.0006 + currentMouseX * 0.002
      pointCloud.rotation.x += 0.0003 + currentMouseY * 0.002

      ringMesh.rotation.z += 0.001
      ringMesh.rotation.y += 0.0008

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      ringGeom.dispose()
      ringMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="hero">
      {/* 3D Canvas Layer */}
      <div ref={containerRef} className="hero-canvas-container" aria-hidden="true" />

      {/* Ambient Radial Sphere */}
      <div className="hero-glow-sphere" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-status-pill">
            <span className="status-dot-pulse" aria-hidden="true" />
            <span>Software Engineer Intern at NMA Software</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Engineering Full-Stack & <br />
            <span className="hero-title-highlight">Enterprise Solutions</span>
          </h1>

          {/* Dynamic Role */}
          <div className="hero-role-wrapper">
            <span className="hero-role-prefix">Specialized in</span>
            <span className="hero-role-badge" key={roleIndex}>
              {roles[roleIndex]}
            </span>
          </div>

          {/* Bio Lead */}
          <p className="hero-lead">
            Hi, I'm <strong>Lakshan Alahapperuma</strong>, a Software Engineer Intern at <strong>NMA Software</strong> (New York, NY) and Computer Science undergraduate at <strong>Uva Wellassa University of Sri Lanka</strong> (Dec 2023 – Dec 2027). I build high-performance web applications with React.js, Next.js, Java Spring Boot, and NestJS.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Featured Projects</span>
              <svg className="btn-icon btn-icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a href="./resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline" title="Open and Download Resume PDF">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn btn-outline">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="hero-stats-grid">
            <div className="hero-stat-item">
              <span className="stat-number">NMA Software</span>
              <span className="stat-label">Software Engineer Intern</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number">BSc (Hons) CS</span>
              <span className="stat-label">Uva Wellassa Univ ('23–'27)</span>
            </div>
            <div className="hero-stat-item">
              <span className="stat-number">Full-Stack</span>
              <span className="stat-label">Spring Boot · React · Next · Nest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
