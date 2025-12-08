"use client"

import { useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
      <Header onGetStartedClick={handleGetStartedClick} />

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
            {/* <div className="hero-stats">
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
            </div> */}
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

      
      {/* Trusted By Companies Marquee */}
      <section className="marquee-section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "32px" }}>
            Trusted By Leading Organizations
          </h2>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* First set of logos */}
            <div className="marquee-item">
              <div className="company-logo">
                <img src="images/l1.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l2.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l3.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l4.jpg" alt="Soul Freeze" />
              </div>
            </div>
           
            {/* Duplicate set for seamless loop */}
            <div className="marquee-item">
              <div className="company-logo">
                <img src="images/l1.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l2.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l3.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l4.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
                <img src="images/l1.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l2.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l3.jpg" alt="Soul Freeze" />
              </div>
            </div>
            <div className="marquee-item">
              <div className="company-logo">
              <img src="images/l4.jpg" alt="Soul Freeze" />
              </div>
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
          <div className="services-header">
            <h2 className="section-title">Our Services</h2>
            <div className="services-navigation">
              <div className="swiper-button-prev services-nav-prev"></div>
              <div className="swiper-button-next services-nav-next"></div>
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: ".services-nav-next",
              prevEl: ".services-nav-prev",
            }}
            // pagination={{ clickable: true }}
            className="services-swiper"
          >
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
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
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "32px" }}>
            Meet the Practitioners
          </h2>

          <div className="practitioners-grid">
            <div className="practitioner-card">
              <div className="practitioner-image">
                <img src="/images/rishab.webp" alt="Rishabh Sir" />
              </div>
              <div className="practitioner-info">
                <h3 className="practitioner-name">Rishabh</h3>
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
                <h3 className="practitioner-name">Swati</h3>
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
             
              <div className="contact-info">
                <a href="mailto:contact@aimission.in" className="contact-link">
                  contact@aimission.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
