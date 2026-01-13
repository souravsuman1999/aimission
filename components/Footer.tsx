export default function Footer() {
  return (
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
  
              {/* <li className="footer-contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                </svg>
                <span>+91 XXX XXX XXXX</span>
              </li> */}
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
  )
}

