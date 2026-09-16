import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [copiedItem, setCopiedItem] = useState('')
  const [feedback, setFeedback] = useState({ text: '', type: '' })

  const emailAddress = 'nadunsawumya88@gmail.com'
  const phoneNumber = '0764882674'
  const linkedInUrl = 'https://www.linkedin.com/in/lakshan-alahapperuma-9a038a218/'
  const address = '392/1 Gangasirigama, Gonagamuwa, Tissamaharama, Sri Lanka'

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(type)
    setTimeout(() => setCopiedItem(''), 2200)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback({ text: 'Please fill in all required fields.', type: 'error' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setFeedback({ text: 'Please enter a valid email address.', type: 'error' })
      return
    }

    const mailSubject = encodeURIComponent(subject.trim() || `Portfolio Inquiry from ${name}`)
    const mailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:${emailAddress}?subject=${mailSubject}&body=${mailBody}`

    setFeedback({
      text: 'Opening your mail client... Thank you for reaching out!',
      type: 'success'
    })

    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section" aria-label="Contact Information">
      <div className="container">
        <div className="section-header">
          <div className="section-kicker">// 06. GET IN TOUCH</div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Open to software engineering opportunities, enterprise collaborations, or tech discussions. Feel free to reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Panel */}
          <div className="contact-info-panel">
            <div className="contact-status-card">
              <h3>Direct Contact Channels</h3>
              <p>
                Currently serving as Software Engineer Intern at NMA Software. Reach out via email, phone, or connect with me on LinkedIn.
              </p>

              <div className="contact-direct-links">
                {/* Mobile Phone */}
                <div
                  className="contact-channel-item"
                  onClick={() => handleCopy(phoneNumber, 'phone')}
                  style={{ cursor: 'pointer' }}
                  title="Click to copy phone number"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleCopy(phoneNumber, 'phone') }}
                >
                  <div className="contact-channel-left">
                    <div className="contact-channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-channel-name">Mobile Phone</div>
                      <div className="contact-channel-val">{phoneNumber}</div>
                    </div>
                  </div>
                  <span className="copy-badge">
                    {copiedItem === 'phone' ? '✓ Copied!' : 'Copy'}
                  </span>
                </div>

                {/* Email with copy */}
                <div
                  className="contact-channel-item"
                  onClick={() => handleCopy(emailAddress, 'email')}
                  style={{ cursor: 'pointer' }}
                  title="Click to copy email address"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleCopy(emailAddress, 'email') }}
                >
                  <div className="contact-channel-left">
                    <div className="contact-channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-channel-name">Direct Email</div>
                      <div className="contact-channel-val">{emailAddress}</div>
                    </div>
                  </div>
                  <span className="copy-badge">
                    {copiedItem === 'email' ? '✓ Copied!' : 'Copy'}
                  </span>
                </div>

                {/* LinkedIn */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="contact-channel-left">
                    <div className="contact-channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-channel-name">LinkedIn Profile</div>
                      <div className="contact-channel-val">in/lakshan-alahapperuma-9a038a218</div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--accent-cyan)' }}>↗</span>
                </a>

                {/* Address / Location */}
                <div className="contact-channel-item">
                  <div className="contact-channel-left">
                    <div className="contact-channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-channel-name">Residential Location</div>
                      <div className="contact-channel-val" style={{ fontSize: '0.85rem' }}>{address}</div>
                    </div>
                  </div>
                  <span style={{ color: 'var(--accent-emerald)', fontSize: '0.8rem', fontWeight: 600 }}>● Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <p className="form-subtitle">Drop a note and I will get back to you promptly.</p>

            {feedback.text && (
              <div className={`form-feedback ${feedback.type}`} role="alert">
                {feedback.text}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="e.g. jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Job opportunity / Project collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="4"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-buttons-row">
                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
