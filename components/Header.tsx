"use client"

interface HeaderProps {
  onGetStartedClick: () => void
}

export default function Header({ onGetStartedClick }: HeaderProps) {
  return (
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
        <button className="cta-button" onClick={onGetStartedClick}>
          Get Started
        </button>
      </div>
    </header>
  )
}

