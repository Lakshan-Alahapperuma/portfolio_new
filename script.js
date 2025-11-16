/**
 * Portfolio Interactive Features
 * Handles navigation, form interactions, and dynamic UI elements
 */

(function() {
  'use strict';

  // ============================================
  // Configuration & Constants
  // ============================================
  const CONFIG = {
    animationDuration: 300,
    scrollOffset: 80,
    navToggleBreakpoint: 850
  };

  // ============================================
  // Dynamic Year in Footer
  // ============================================
  const initFooterYear = () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  };

  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  const initMobileNav = () => {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('nav');
    
    if (!navToggle || !nav) return;

    navToggle.addEventListener('click', () => {
      const isExpanded = nav.classList.contains('show');
      nav.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', !isExpanded);
      
      // Smooth fade-in effect
      if (!isExpanded) {
        nav.style.opacity = '0';
        nav.style.transform = 'translateY(-10px)';
        requestAnimationFrame(() => {
          nav.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          nav.style.opacity = '1';
          nav.style.transform = 'translateY(0)';
        });
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close nav on window resize if above breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > CONFIG.navToggleBreakpoint) {
        nav.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  // ============================================
  // Smooth Scroll Navigation
  // ============================================
  const initSmoothScroll = () => {
    const nav = document.getElementById('nav');
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target && targetId !== '#') {
          e.preventDefault();
          
          // Close mobile nav if open
          if (nav) {
            nav.classList.remove('show');
            const navToggle = document.getElementById('nav-toggle');
            if (navToggle) {
              navToggle.setAttribute('aria-expanded', 'false');
            }
          }
          
          // Smooth scroll with offset for fixed header
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, '', targetId);
        }
      });
    });
  };

  // ============================================
  // Active Navigation Highlight
  // ============================================
  const initActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    if (!sections.length || !navLinks.length) return;

    const highlightNav = () => {
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Initial call
  };

  // ============================================
  // Contact Form Handling
  // ============================================
  const initContactForm = () => {
    const form = document.getElementById('contact-form');
    const clearBtn = document.getElementById('clear-btn');
    
    if (!form) return;

    // Form validation
    const validateForm = () => {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      
      let isValid = true;
      const errors = [];

      // Name validation
      if (!name.value.trim()) {
        errors.push('Name is required');
        name.classList.add('error');
        isValid = false;
      } else {
        name.classList.remove('error');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        errors.push('Email is required');
        email.classList.add('error');
        isValid = false;
      } else if (!emailRegex.test(email.value)) {
        errors.push('Please enter a valid email');
        email.classList.add('error');
        isValid = false;
      } else {
        email.classList.remove('error');
      }

      // Message validation
      if (!message.value.trim()) {
        errors.push('Message is required');
        message.classList.add('error');
        isValid = false;
      } else if (message.value.trim().length < 10) {
        errors.push('Message must be at least 10 characters');
        message.classList.add('error');
        isValid = false;
      } else {
        message.classList.remove('error');
      }

      return { isValid, errors };
    };

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const validation = validateForm();
      
      if (!validation.isValid) {
        showNotification(validation.errors.join(', '), 'error');
        return;
      }

      const name = encodeURIComponent(document.getElementById('name').value.trim());
      const email = encodeURIComponent(document.getElementById('email').value.trim());
      const message = encodeURIComponent(document.getElementById('message').value.trim());
      
      const mailtoLink = `mailto:nadunsawumya88@gmail.com?subject=Portfolio Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
      
      window.location.href = mailtoLink;
      
      showNotification('Opening your email client...', 'success');
      
      // Optional: Clear form after submission
      setTimeout(() => form.reset(), 1000);
    });

    // Clear button
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        form.reset();
        // Remove error classes
        form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        showNotification('Form cleared', 'info');
      });
    }

    // Real-time validation feedback
    form.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('blur', () => {
        if (field.value.trim()) {
          field.classList.remove('error');
        }
      });
    });
  };

  // ============================================
  // Notification System
  // ============================================
  const showNotification = (message, type = 'info') => {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      padding: '1rem 1.5rem',
      background: type === 'error' ? '#d32f2f' : type === 'success' ? '#388e3c' : '#1976d2',
      color: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      zIndex: '1000',
      animation: 'slideIn 0.3s ease',
      maxWidth: '300px',
      fontSize: '0.9rem'
    });

    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  // ============================================
  // Scroll Animations for Sections
  // ============================================
  const initScrollAnimations = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section, .project-card, .skill').forEach(el => {
      el.classList.add('fade-in-element');
      observer.observe(el);
    });
  };

  // ============================================
  // Header Background on Scroll
  // ============================================
  const initHeaderScroll = () => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        header.style.background = 'rgba(5, 16, 33, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.background = 'rgba(5, 16, 33, 0.9)';
        header.style.boxShadow = 'none';
      }

      lastScroll = currentScroll;
    });
  };

  // ============================================
  // Initialize All Features
  // ============================================
  const init = () => {
    try {
      initFooterYear();
      initMobileNav();
      initSmoothScroll();
      initActiveNav();
      initContactForm();
      initScrollAnimations();
      initHeaderScroll();

      // Add CSS animations dynamically
      injectAnimationStyles();
      
      console.log('✓ Portfolio initialized successfully');
    } catch (error) {
      console.error('Portfolio initialization error:', error);
    }
  };

  // ============================================
  // Inject Animation Styles
  // ============================================
  const injectAnimationStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
      
      .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .fade-in-element.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .nav a.active {
        color: #fff;
        background: rgba(44, 107, 214, 0.2);
        border-left: 3px solid var(--accent);
      }
      
      .contact-form input.error,
      .contact-form textarea.error {
        border-color: #d32f2f;
        box-shadow: 0 0 0 3px rgba(211, 47, 47, 0.2);
      }
    `;
    document.head.appendChild(style);
  };

  // ============================================
  // Start when DOM is ready
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();