import { useState, useEffect, useRef } from 'react'

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)
  const [activeProject, setActiveProject] = useState(null)
  const closeBtnRef = useRef(null)
  const modalRef = useRef(null)

  const projectsData = [
    {
      id: 1,
      title: 'VetiPlus',
      category: 'Full Stack',
      description: 'A comprehensive veterinary and pet grooming platform with appointment booking, medical records management, and community features.',
      longDesc: 'Built a full-stack platform for veterinarians and pet owners. Features include real-time appointment scheduling, digital medical records, and a community forum for pet care tips.',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop',
      tags: ['React', 'PHP', 'MySQL', 'UI/UX'],
      links: { demo: '#', source: '#' },
      stats: { time: '3 months', team: 'Team of 3' }
    },
    {
      id: 2,
      title: 'Campus Management System',
      category: 'Web Application',
      description: 'Streamlined system for managing campus operations including student records, course scheduling, and administrative tasks.',
      longDesc: 'Developed an admin dashboard for campus management with role-based access control and real-time data updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Backend'],
      links: { demo: '#', source: '#' },
      stats: { time: '2 months', team: 'Solo' }
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Design & Development',
      description: 'Modern, interactive portfolio showcasing my work with smooth animations and Three.js 3D elements.',
      longDesc: 'Created this responsive portfolio with React, Vite, and Three.js featuring interactive 3D elements and smooth scrolling.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['React', 'Three.js', 'Vite', 'CSS3'],
      links: { demo: '#', source: '#' },
      stats: { time: '2 weeks', team: 'Solo' }
    }
  ]

  useEffect(() => {
    // Close modal on Escape
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock scrolling and focus modal close when open
  useEffect(() => {
    if (activeProject) {
      document.body.classList.add('modal-open')
      // Focus the close button for keyboard users
      setTimeout(() => closeBtnRef.current?.focus(), 50)
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => document.body.classList.remove('modal-open')
  }, [activeProject])

  // Focus trap inside modal when open
  useEffect(() => {
    if (!activeProject || !modalRef.current) return
    const root = modalRef.current
    const focusableSelectors = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    const focusables = Array.from(root.querySelectorAll(focusableSelectors)).filter(Boolean)
    if (focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    const onKey = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    root.addEventListener('keydown', onKey)
    return () => root.removeEventListener('keydown', onKey)
  }, [activeProject])

  const openProject = (project) => setActiveProject(project)
  const closeProject = () => setActiveProject(null)

  return (
    <section id="projects" className="section" aria-label="Featured projects">
      <div className="container" aria-hidden={activeProject ? 'true' : undefined}>
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Showcase of my recent work and accomplishments — each project includes details, tech, and links.</p>
        </div>
        
        <div className="projects-grid" role="list">
          {projectsData.map(project => (
            <article 
               key={project.id} 
               className={`project-card ${hoveredId === project.id ? 'active' : ''}`}
               onMouseEnter={() => setHoveredId(project.id)}
               onMouseLeave={() => setHoveredId(null)}
              onKeyDown={(e) => { if (e.key === 'Enter') openProject(project) }}
              role="listitem"
              tabIndex={0}
             >
               <div className="project-image-wrapper" aria-hidden={activeProject ? 'true' : 'false'}>
                <figure>
                  <img 
                   src={project.image} 
                  alt={`${project.title} screenshot`}
                   loading="lazy"
                   className="project-image"
                 />
                  <figcaption className="visually-hidden">{project.title} — {project.description}</figcaption>
                </figure>
                 <div className="project-overlay">
                   <span className="project-category">{project.category}</span>
                 </div>
               </div>
               
               <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                 <div className="project-tags" aria-hidden="false">
                   {project.tags.map(tag => (
                     <span key={tag} className="tag-badge" aria-label={`Technology: ${tag}`}>{tag}</span>
                   ))}
                 </div>
 
                 {/* Footer sticks to bottom so cards keep even height */}
                 <div className="project-footer">
                  <div className="project-meta">
                   <span>⏱️ {project.stats.time}</span>
                   <span>👥 {project.stats.team}</span>
                 </div>
                 
                 <div className="project-links">
                   <a 
                     href={project.links.demo || '#'} 
                     className="small-btn"
                     target={project.links.demo ? '_blank' : undefined}
                     rel={project.links.demo ? 'noopener noreferrer' : undefined}
                     aria-label={`Open live demo of ${project.title}`}
                   >
                     Live Demo
                   </a>
                  <button
                    className="small-btn"
                    onClick={() => openProject(project)}
                    aria-haspopup="dialog"
                    aria-expanded={activeProject?.id === project.id}
                  >
                    Details
                  </button>
                   <a 
                     href={project.links.source || '#'} 
                     className="small-btn"
                     target={project.links.source ? '_blank' : undefined}
                     rel={project.links.source ? 'noopener noreferrer' : undefined}
                     aria-label={`View source code for ${project.title}`}
                   >
                     View Source
                   </a>
                 </div>
                </div>
               </div>
             </article>
           ))}
         </div>

           
         <div className="projects-cta">
           <p>Want to see more?</p>
           <a 
             href="https://github.com" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn btn-outline"
           >
             Visit My GitHub
           </a>
         </div>
       </div>

      {/* Project details modal (simple, accessible) */}
      {activeProject && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`${activeProject.title} details`}
             onClick={(e) => { if (e.target.classList.contains('modal-backdrop')) closeProject() }}>
           <div className="modal" role="document">
            <button ref={closeBtnRef} className="modal-close" onClick={closeProject} aria-label="Close details">×</button>
             <div className="modal-content" ref={modalRef}>
              <img src={activeProject.image} alt={`${activeProject.title} screenshot`} className="modal-image" />
              <div className="modal-body">
                <h3>{activeProject.title}</h3>
                <p className="project-desc">{activeProject.longDesc}</p>
                <div className="project-tags">
                  {activeProject.tags.map(t => <span key={t} className="tag-badge" aria-label={`Tech: ${t}`}>{t}</span>)}
                </div>
                <div className="project-links">
                   <a href={activeProject.links.demo || '#'} className="small-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
                   <a href={activeProject.links.source || '#'} className="small-btn" target="_blank" rel="noopener noreferrer">View Source</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       )}
     </section>
   )
 }
