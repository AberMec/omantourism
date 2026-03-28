import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const WHATSAPP = "https://api.whatsapp.com/send?phone=96896662171&text=Hello!%20I'd%20like%20to%20book%20an%20adventure%20with%20Oman%20Tourism%20Adventures.";
const EMAIL = "mailto:omantourismadventures@gmail.com";
const PHONE = "tel:+96896662171";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
              <path d="M4 32 L20 8 L36 32" stroke="#D4A574" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 32 L20 16 L30 32" stroke="#F4A261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            </svg>
            <span className="footer__logo-name">Oman Tourism Adventures</span>
          </div>
          <p className="footer__brand-desc">
            From golden deserts to turquoise wadis — unforgettable adventures in Arabia's most spectacular hidden gem.
          </p>
          <div className="footer__social">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="footer__social-btn footer__social-btn--whatsapp" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href={EMAIL} className="footer__social-btn" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/adventures">Adventures</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Tours */}
        <div className="footer__col">
          <h4 className="footer__col-title">Popular Tours</h4>
          <ul className="footer__links">
            <li><Link to="/adventures">Wahiba Sands Desert Camp</Link></li>
            <li><Link to="/adventures">Wadi Shab Trekking</Link></li>
            <li><Link to="/adventures">Jebel Akhdar Hike</Link></li>
            <li><Link to="/adventures">Musandam Dhow Cruise</Link></li>
            <li><Link to="/adventures">Airport Pickup Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Get in Touch</h4>
          <ul className="footer__contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.6 19.79 19.79 0 01.22 4.93 2 2 0 012.22 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.09a16 16 0 006 6l1.27-.54a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0121 18.92z"/></svg>
              <a href={PHONE}>+968 1234 5678</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href={EMAIL}>omantourismadventures@gmail.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Muscat, Sultanate of Oman</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Daily 8:00 AM – 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© 2026 Oman Tourism Adventures. All rights reserved. — Made with ❤️💚🤍 in Oman</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;