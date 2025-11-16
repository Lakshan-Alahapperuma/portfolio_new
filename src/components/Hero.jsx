import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 6

    // ===== Create main rotating cube (scaled uniformly) =====
    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2)
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x2c6bd6, 
      emissive: 0x1a3f7a,
      shininess: 100,
      wireframe: false
    })
    const cube = new THREE.Mesh(geometry, material)
    cube.position.set(0, 0, 0)
    scene.add(cube)

    // ===== Create floating sphere (light blue variant) =====
    const sphereGeom = new THREE.SphereGeometry(0.8, 32, 32)
    const sphereMat = new THREE.MeshPhongMaterial({ 
      color: 0x4da6ff, 
      emissive: 0x2c5aa0,
      shininess: 80
    })
    const sphere = new THREE.Mesh(sphereGeom, sphereMat)
    sphere.position.x = 2.5
    scene.add(sphere)

    // ===== Create rotating torus (cyan light blue) =====
    const torusGeom = new THREE.TorusGeometry(1.0, 0.35, 16, 100)
    const torusMat = new THREE.MeshPhongMaterial({ 
      color: 0x00d4ff,
      emissive: 0x0088aa,
      shininess: 100
    })
    const torus = new THREE.Mesh(torusGeom, torusMat)
    torus.position.x = -2.5
    scene.add(torus)

    // ===== Create octahedron (soft light blue) =====
    const octaGeom = new THREE.OctahedronGeometry(0.8)
    const octaMat = new THREE.MeshPhongMaterial({
      color: 0x5eb3f6,
      emissive: 0x2b7fd9,
      shininess: 90
    })
    const octahedron = new THREE.Mesh(octaGeom, octaMat)
    octahedron.position.y = 2.0
    scene.add(octahedron)

    // ===== Create particle system =====
    const particleCount = 80
    const particleGeom = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 12
      particlePositions[i + 1] = (Math.random() - 0.5) * 12
      particlePositions[i + 2] = (Math.random() - 0.5) * 12
    }
    
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    // Particle (circle) color set to dark blue for a more professional look
    const particleMat = new THREE.PointsMaterial({ 
      color: 0x0b2540, // dark blue
      size: 0.08,
      transparent: true,
      opacity: 0.65
    })
    const particles = new THREE.Points(particleGeom, particleMat)
    scene.add(particles)

    // ===== Advanced lighting (updated to light blue tones) =====
    const light1 = new THREE.PointLight(0xffffff, 1.2)
    light1.position.set(5, 5, 5)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x4da6ff, 0.9)
    light2.position.set(-5, -3, 5)
    scene.add(light2)

    const light3 = new THREE.PointLight(0x5eb3f6, 0.7)
    light3.position.set(0, 5, -5)
    scene.add(light3)

    const ambientLight = new THREE.AmbientLight(0x404040, 1.8)
    scene.add(ambientLight)

    // ===== Mouse tracking =====
    const onMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)

    // ===== Animation loop =====
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Rotate cube and follow mouse
      cube.rotation.x += 0.003
      cube.rotation.y += 0.005
      cube.position.x += (mouseRef.current.x * 2 - cube.position.x) * 0.08
      cube.position.y += (mouseRef.current.y * 2 - cube.position.y) * 0.08
      
      // Animate sphere
      sphere.rotation.y -= 0.004
      sphere.position.x = 2.5 + Math.sin(Date.now() * 0.0005) * 0.6
      sphere.position.y = Math.cos(Date.now() * 0.0003) * 0.5 + mouseRef.current.y * 1.5
      
      // Animate torus
      torus.rotation.x += 0.002
      torus.rotation.y += 0.004
      torus.position.z = Math.sin(Date.now() * 0.0004) * 0.8
      torus.position.x = -2.5 + mouseRef.current.x * 1.5
      
      // Animate octahedron
      octahedron.rotation.x += 0.004
      octahedron.rotation.z += 0.003
      octahedron.position.y = 2.0 + Math.sin(Date.now() * 0.0005) * 0.4
      octahedron.position.x += (mouseRef.current.x * 1.5 - octahedron.position.x) * 0.1
      
      // Animate particles
      particles.rotation.x += 0.0002
      particles.rotation.y += 0.0003
      
      renderer.render(scene, camera)
    }
    animate()

    // ===== Handle window resize =====
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    sceneRef.current = { scene, renderer, cube, sphere, torus, octahedron, particles }

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <section id="home" className="hero">
      {/* 3D Canvas Background */}
      <div ref={containerRef} className="hero-3d-bg" />
      
      {/* Hero header image with overlay */}
      <div className="hero-header-image">
        <img 
          src="https://wallpaperaccess.com/full/5651982.jpg" 
          alt="Portfolio hero background"
          loading="lazy"
          className="hero-image"
        />
        <div className="hero-image-overlay"></div>
      </div>

      {/* Hero content */}
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-badge">👋 Welcome to my portfolio</div>
          <h1>Lakshan Alahapperuma</h1>
          <p className="tagline">Computer Science Undergraduate · Web Developer · Designer</p>
          <p className="lead">
            I craft beautiful, functional web experiences and turn ideas into elegant digital solutions. 
            Passionate about clean code, responsive design, and creating impact through technology.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">View My Work</a>
            <a className="btn btn-outline" href="#contact">Get In Touch</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}
