import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    if (!name || !email || !message) {
      setStatus('Please fill all fields')
      return
    }
    const subject = `Portfolio contact from ${name}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:nadunsawumya88@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormData({ name: '', email: '', message: '' })
    setStatus('Message sent!')
  }

  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' })
    setStatus('')
  }

  return (
    <section id="contact" className="section alt contact-section" aria-labelledby="contact-heading">
      <div className="container contact-container">
        {/* Header image for contact section */}
        <div className="contact-header">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop" 
            alt="Contact us background"
            loading="lazy"
            className="contact-header-image"
          />
          <div className="contact-header-overlay">
            <h2 id="contact-heading">Get In Touch</h2>
            <p>Let's collaborate and create something amazing together</p>
          </div>
        </div>

        <div className="contact-grid-centered" role="region" aria-labelledby="contact-heading">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p><a href="mailto:nadunsawumya88@gmail.com">nadunsawumya88@gmail.com</a></p>
              <p><a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a></p>
              <p><a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a></p>
            </div>

            <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">Name</label>
              <input 
                id="name" 
                type="text" 
                value={formData.name} 
                onChange={handleChange}
                placeholder="Your name"
                required 
              />

              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange}
                placeholder="your@email.com"
                required 
              />

              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Your message..."
                required
              ></textarea>

              {status && <div className="form-status" role="status" aria-live="polite">{status}</div>}

              <div className="form-row">
                <button type="submit" className="btn btn-primary">Send Message</button>
                <button type="button" className="btn btn-outline" onClick={handleClear}>Clear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
