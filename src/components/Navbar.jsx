import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { flushSync } from "react-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    flushSync(() => {
      setMenuOpen(false);
    });
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 32 L20 8 L36 32" stroke="#D4A574" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 32 L20 16 L30 32" stroke="#F4A261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
              <path d="M2 32 Q20 26 38 32" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">Oman</span>
            <span className="navbar__logo-sub">Tourism Adventures</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="navbar__links hide-mobile">
          <Link to="/" className={`navbar__link ${isActive("/") ? "navbar__link--active" : ""}`}>Home</Link>
          <Link to="/adventures" className={`navbar__link ${isActive("/adventures") ? "navbar__link--active" : ""}`}>Adventures</Link>
          <Link to="/about" className={`navbar__link ${isActive("/about") ? "navbar__link--active" : ""}`}>About</Link>
          <Link to="/contact" className={`navbar__link ${isActive("/contact") ? "navbar__link--active" : ""}`}>Contact</Link>
        </div>

        {/* CTA */}
        <div className="navbar__actions hide-mobile">
          <a
            href="https://api.whatsapp.com/send?phone=96896662171&text=Hello!%20I'd%20like%20to%20book%20an%20adventure%20with%20Oman%20Tourism%20Adventures."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar__cta"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="navbar__hamburger hide-desktop"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? "hamburger-line--open" : ""}`}></span>
          <span className={`hamburger-line ${menuOpen ? "hamburger-line--open" : ""}`}></span>
          <span className={`hamburger-line ${menuOpen ? "hamburger-line--open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}>
        <Link to="/" className={`navbar__mobile-link ${isActive("/") ? "active" : ""}`}>Home</Link>
        <Link to="/adventures" className={`navbar__mobile-link ${isActive("/adventures") ? "active" : ""}`}>Adventures</Link>
        <Link to="/about" className={`navbar__mobile-link ${isActive("/about") ? "active" : ""}`}>About</Link>
        <Link to="/contact" className={`navbar__mobile-link ${isActive("/contact") ? "active" : ""}`}>Contact</Link>
        <a
          href="https://api.whatsapp.com/send?phone=96896662171&text=Hello!%20I'd%20like%20to%20book%20an%20adventure."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__mobile-cta"
        >
          Book Now via WhatsApp
        </a>
      </div>
    </nav>
  );
}

export default Navbar;