"use client"

import { useState } from "react"

interface HeaderProps {
  onGetStartedClick: () => void
}

export default function Header({ onGetStartedClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {isMenuOpen && <div className="menu-backdrop" onClick={toggleMenu}></div>}
      <header className="header">
        <div className="container">
          <div className="logo">AI MISSION</div>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={isMenuOpen ? "hamburger open" : "hamburger"}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <a href="#services" className="nav-link" onClick={handleNavClick}>
              Services
            </a>
            <a href="#about" className="nav-link" onClick={handleNavClick}>
              About
            </a>
            <a href="#outcomes" className="nav-link" onClick={handleNavClick}>
              Outcomes
            </a>
            <a href="#contact" className="nav-link" onClick={handleNavClick}>
              Contact
            </a>
            <button className="cta-button mobile-cta" onClick={() => { onGetStartedClick(); handleNavClick(); }}>
              Get Started
            </button>
          </nav>
          <button className="cta-button desktop-cta" onClick={onGetStartedClick}>
            Get Started
          </button>
        </div>
      </header>
    </>
  )
}

