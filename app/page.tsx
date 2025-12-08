"use client"

import { useEffect, useRef } from "react"

export default function HomePage() {
  // Refs for intersection observer
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactClick = () => {
    scrollToSection("contact")
  }

  const handleGetStartedClick = () => {
    scrollToSection("services")
  }

  const handleViewCaseStudies = () => {
    scrollToSection("outcomes")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:contact@aimission.in"
  }

  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in")
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(section)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <div className="main-wrapper">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">AI MISSION</div>
          <nav className="nav">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#outcomes" className="nav-link">
              Outcomes
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <button className="cta-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="/professional-ai-technology-neural-network-visualiz.jpg" alt="" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg className="badge-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Practical AI for Indian Institutions
            </div>
            <h1 className="hero-title">
              AI that teachers can use.
              <br />
              AI that businesses profit from.
            </h1>
            <p className="hero-subtitle">
              AI Mission designs practical AI training and systems for Indian schools, colleges, and businesses. No
              jargon. No theatrics. Clear use-cases, working workflows, and measurable results.
            </p>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-number">5x</div>
                <div className="hero-stat-label">Sales Increase</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">10x</div>
                <div className="hero-stat-label">Cost Reduction</div>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">100+</div>
                <div className="hero-stat-label">Institutions</div>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="primary-button large" onClick={handleGetStartedClick}>
                Start Your AI Journey
              </button>
              <button className="secondary-button large" onClick={handleViewCaseStudies}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - WITH ANIMATION */}
      <section
        className="what-we-do-section scroll-section"
        ref={(el) => {
          sectionsRef.current[0] = el
        }}
      >
        <div className="container">
          <div className="what-content">
            <div className="what-animation">
              <svg className="animated-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" className="gradient-start" />
                    <stop offset="100%" className="gradient-end" />
                  </linearGradient>
                </defs>

                {/* Brain/Mind center */}
                <circle className="pulse-node" cx="200" cy="200" r="25" fill="url(#gradient1)" />
                <circle
                  className="pulse-node-outer"
                  cx="200"
                  cy="200"
                  r="35"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  opacity="0.5"
                />

                {/* Connected nodes representing different systems */}
                <g className="node-group node-1">
                  <circle cx="200" cy="80" r="18" fill="#4f46e5" opacity="0.9" />
                  <text x="200" y="50" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="600">
                    Training
                  </text>
                </g>

                <g className="node-group node-2">
                  <circle cx="320" cy="160" r="18" fill="#6366f1" opacity="0.9" />
                  <text x="350" y="165" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="600">
                    Process
                  </text>
                </g>

                <g className="node-group node-3">
                  <circle cx="320" cy="240" r="18" fill="#4f46e5" opacity="0.9" />
                  <text x="360" y="245" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="600">
                    Automation
                  </text>
                </g>

                <g className="node-group node-4">
                  <circle cx="200" cy="320" r="18" fill="#6366f1" opacity="0.9" />
                  <text x="200" y="350" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="600">
                    Results
                  </text>
                </g>

                <g className="node-group node-5">
                  <circle cx="80" cy="240" r="18" fill="#4f46e5" opacity="0.9" />
                  <text x="40" y="245" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="600">
                    Analytics
                  </text>
                </g>

                <g className="node-group node-6">
                  <circle cx="80" cy="160" r="18" fill="#6366f1" opacity="0.9" />
                  <text x="40" y="165" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="600">
                    Strategy
                  </text>
                </g>

                {/* Connection lines with data flow */}
                <line
                  className="connection-line"
                  x1="200"
                  y1="200"
                  x2="200"
                  y2="80"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />
                <line
                  className="connection-line"
                  x1="200"
                  y1="200"
                  x2="320"
                  y2="160"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />
                <line
                  className="connection-line"
                  x1="200"
                  y1="200"
                  x2="320"
                  y2="240"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />
                <line
                  className="connection-line"
                  x1="200"
                  y1="200"
                  x2="200"
                  y2="320"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />
                <line
                  className="connection-line"
                  x1="200"
                  y1="200"
                  x2="80"
                  y2="240"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />
                <line
                  className="connection-line"
                  x1="200"
                  y1="200"
                  x2="80"
                  y2="160"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                />

                {/* Data particles flowing */}
                <circle className="data-particle particle-1" r="4" fill="#a5b4fc">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <mpath href="#path1" />
                  </animateMotion>
                </circle>

                <path id="path1" d="M 200 200 L 200 80" fill="none" stroke="none" />
              </svg>
            </div>
            <div className="what-text">
              <h2 className="section-title">What AI Mission Does</h2>
              <p className="section-description">
                AI Mission is a focused AI enablement practice. We work at three layers:
              </p>
              <div className="layers-list">
                <div className="layer-item">
                  <div className="layer-number">01</div>
                  <div className="layer-content">
                    <h3 className="layer-title">People</h3>
                    <p className="layer-description">Teachers, staff, founders, managers, frontline teams</p>
                  </div>
                </div>
                <div className="layer-item">
                  <div className="layer-number">02</div>
                  <div className="layer-content">
                    <h3 className="layer-title">Processes</h3>
                    <p className="layer-description">Admissions, operations, sales, service, finance, HR</p>
                  </div>
                </div>
                <div className="layer-item">
                  <div className="layer-number">03</div>
                  <div className="layer-content">
                    <h3 className="layer-title">Products & Systems</h3>
                    <p className="layer-description">Tools, prompts, workflows, and automations that run every day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="services-section scroll-section"
        ref={(el) => {
          sectionsRef.current[1] = el
        }}
      >
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid-three">
            <div className="service-card">
              <div className="service-image">
                <img src="/teachers-using-ai-technology-in-classroom-with-tab.jpg" alt="AI in Education" />
              </div>
              <div className="service-content">
                <h3 className="service-title">AI Bootcamps for Educational Institutions</h3>
                <p className="service-description">
                  Schools, colleges, universities, and coaching institutes get their teachers and operations teams using
                  AI daily.
                </p>
                <ul className="service-list">
                  <li>Faculty AI Bootcamp - Lesson plans, assessments, personalized learning</li>
                  <li>School/College Operations - Admissions, marketing, fee follow-ups</li>
                  <li>Leadership Tracks - Decision frameworks, metrics, vendor selection</li>
                </ul>
                <div className="service-format">
                  <strong>Format:</strong> 1-day primers, 2-4 week sprints, custom cohorts
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/business-professionals-using-ai-analytics-dashboar.jpg" alt="AI Consulting" />
              </div>
              <div className="service-content">
                <h3 className="service-title">AI Consulting for Digital Transformation</h3>
                <p className="service-description">
                  Indian SMEs and mid-market companies use AI to reduce manual work, tighten margins, and improve
                  customer experience.
                </p>
                <ul className="service-list">
                  <li>Diagnostic & Roadmap - Map processes, identify high-leverage use-cases</li>
                  <li>Design & Implementation - Build practical workflows with existing tools</li>
                  <li>Training & Change Management - Hands-on training with clear manuals</li>
                </ul>
                <div className="service-format">
                  <strong>Outcome:</strong> Fewer manual loops, faster decisions, cleaner dashboards
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src="/ai-automation-workflow-with-connected-systems-and-.jpg" alt="AI Systems" />
              </div>
              <div className="service-content">
                <h3 className="service-title">Custom AI Systems & Automation Assets</h3>
                <p className="service-description">
                  Beyond bootcamps and consulting, we build and hand over concrete AI assets.
                </p>
                <ul className="service-list">
                  <li>Custom AI Workspaces - Taskade, Notion, templates for specific workflows</li>
                  <li>WhatsApp Automations - Lead capture, FAQ handling, daily digests</li>
                  <li>Prompt Libraries - Role-specific and industry-specific playbooks</li>
                </ul>
                <div className="service-format">
                  <strong>Deliverable:</strong> Reusable assets with documentation for sustainability
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="about-section scroll-section"
        ref={(el) => {
          sectionsRef.current[2] = el
        }}
      >
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "60px" }}>
            Meet the Practitioners
          </h2>

          <div className="practitioners-grid">
            <div className="practitioner-card">
              <div className="practitioner-image">
                <img src="/images/image.png" alt="Rishabh Sir" />
              </div>
              <div className="practitioner-info">
                <h3 className="practitioner-name">Rishabh Sir</h3>
                <p className="practitioner-title">Co-Founder & AI Strategist</p>
                <p className="practitioner-bio">
                  Deep expertise in schools management and technology-focused mindset. Specializes in helping
                  organizations leverage AI for transformative business results.
                </p>
              </div>
            </div>

            <div className="practitioner-card">
              <div className="practitioner-image">
                <img src="/images/image.png" alt="Ma'am" />
              </div>
              <div className="practitioner-info">
                <h3 className="practitioner-name">Ma'am</h3>
                <p className="practitioner-title">Co-Founder & Education Expert</p>
                <p className="practitioner-bio">
                  Extensive experience in educational institutions and business operations with a practical approach to
                  AI implementation that delivers real-world results.
                </p>
              </div>
            </div>
          </div>

          <div className="shared-achievements">
            <p className="achievement-intro">Together, they have helped SMEs use AI to:</p>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">5x</div>
                <div className="stat-label">Sales Increase</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10x</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Institutions Trained</div>
              </div>
            </div>
            <p
              className="about-text"
              style={{
                textAlign: "center",
                marginTop: "40px",
                maxWidth: "900px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              With their combined expertise in educational institutions and business operations, they understand the
              unique challenges faced by Indian organizations and design solutions that actually work in real-world
              constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section
        id="outcomes"
        className="outcomes-section scroll-section"
        ref={(el) => {
          sectionsRef.current[3] = el
        }}
      >
        <div className="container">
          <h2 className="section-title">Measurable Outcomes</h2>
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-metric">20-40%</div>
              <div className="outcome-description">Reduction in time spent on repetitive tasks</div>
            </div>
            <div className="outcome-card">
              <div className="outcome-metric">Fewer</div>
              <div className="outcome-description">Manual errors with better tracking</div>
            </div>
            <div className="outcome-card">
              <div className="outcome-metric">Faster</div>
              <div className="outcome-description">Decision cycles with clearer insights</div>
            </div>
            <div className="outcome-card">
              <div className="outcome-metric">Daily</div>
              <div className="outcome-description">AI adoption as a companion tool</div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section
        className="process-section scroll-section"
        ref={(el) => {
          sectionsRef.current[4] = el
        }}
      >
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Discovery</h3>
              <p className="step-description">
                Short but focused diagnostic on your current workflows, tools, constraints, and priorities.
                Identification of 3-7 use-cases that can be implemented quickly.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Design & Pilot</h3>
              <p className="step-description">
                Design of workflows, prompts, and automations. Build and run pilots with a small group of committed
                users. Iterate based on real usage.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Deploy & Train</h3>
              <p className="step-description">
                Scale successful pilots across your organization. Train internal champions with simple documentation.
                Handover for sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Companies Marquee */}
      <section className="marquee-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "60px" }}>
            Trusted By Leading Organizations
          </h2>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* First set of logos */}
            <div className="marquee-item">
              <div className="company-logo">
                <img src="https://www.soulfreeze.com/wp-content/uploads/2021/09/SF-Logo-white.png" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <div className="logo-text">Draw Design</div>
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <img
                  src="https://uicaviotech.com/wp-content/uploads/2011/11/cropped-cropped-logo-1.png"
                  alt="UIC Aviotech"
                />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <img
                  src="https://jar.tsrs.org/wp-content/themes/tsrsakj/images/logo-light.svg"
                  alt="The Shri Ram School"
                />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <div className="logo-text">DPS RK Puram</div>
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="marquee-item">
              <div className="company-logo">
                <img src="https://www.soulfreeze.com/wp-content/uploads/2021/09/SF-Logo-white.png" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <div className="logo-text">Draw Design</div>
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <img
                  src="https://uicaviotech.com/wp-content/uploads/2011/11/cropped-cropped-logo-1.png"
                  alt="UIC Aviotech"
                />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <img
                  src="https://jar.tsrs.org/wp-content/themes/tsrsakj/images/logo-light.svg"
                  alt="The Shri Ram School"
                />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <div className="logo-text">DPS RK Puram</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="cta-section scroll-section"
        ref={(el) => {
          sectionsRef.current[5] = el
        }}
      >
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Organization?</h2>
            <p className="cta-description">
              For institution or business engagements, reach out to start your AI journey.
            </p>
            <div className="cta-buttons">
              <button className="primary-button large" onClick={handleEmailContact}>
                Contact Us
              </button>
              <div className="contact-info">
                <a href="mailto:contact@aimission.in" className="contact-link">
                  contact@aimission.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-logo">AI MISSION</div>
              <p className="footer-tagline">
                Empowering schools and businesses across India with practical AI solutions that drive measurable
                results.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.85.38-1.75.64-2.7.76a4.7 4.7 0 0 0 2.07-2.6 9.4 9.4 0 0 1-2.98 1.14 4.7 4.7 0 0 0-8 4.28A13.32 13.32 0 0 1 1.64 4.16a4.7 4.7 0 0 0 3.77 4.6 4.73 4.73 0 0 1-2.13-.59v.06a4.7 4.7 0 0 0 3.77 4.6 4.73 4.73 0 0 1-2.12.08 4.7 4.7 0 0 0 4.39 3.26A9.43 9.43 0 0 1 .96 19.74a13.3 13.3 0 0 0 7.2 2.11c8.64 0 13.37-7.16 13.37-13.37 0-.2 0-.4-.02-.6A9.55 9.55 0 0 0 24 5.55a9.4 9.4 0 0 1-2.54.7z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Email">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-list">
                <li>
                  <a href="#services" className="footer-link">
                    AI Training for Schools
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-link">
                    Business AI Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-link">
                    Workshops & Bootcamps
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-link">
                    AI Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-list">
                <li>
                  <a href="#about" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#about" className="footer-link">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#outcomes" className="footer-link">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#process" className="footer-link">
                    Our Process
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-list">
                <li className="footer-contact-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>New Delhi, India</span>
                </li>
                <li className="footer-contact-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>contact@aimission.in</span>
                </li>
                <li className="footer-contact-item">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                  <span>+91 XXX XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 AI Mission. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">
                Privacy Policy
              </a>
              <span className="footer-separator">•</span>
              <a href="#" className="footer-legal-link">
                Terms of Service
              </a>
              <span className="footer-separator">•</span>
              <a href="#" className="footer-legal-link">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
