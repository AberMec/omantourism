import React from "react";
import { Link } from "react-router-dom";
import AdventureCard from "../components/AdventureCard";
import { ADVENTURES } from "../utils/data";
import "./Home.css";


const WHATSAPP = "https://api.whatsapp.com/send?phone=96896662171";
const EMAIL = "mailto:omantourismadventures@gmail.com";

function Home() {
  return (
    <main className="home">
      {/* ===== HERO ===== */}
      <section className="hero">
        {/* Background */}
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1680180013483-299cf27dbd58?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Oman desert dunes at sunset"   // 
            className="hero__bg-img"
          />
          <div className="hero__overlay"></div>
        </div>

        {/* Geometric shapes */}
        <div className="hero__geo hero__geo--tl"></div>
        <div className="hero__geo hero__geo--br"></div>
        <div className="hero__geo hero__geo--cl"></div>

        {/* Content */}
        <div className="hero__content container">
          <div className="hero__badge animate-fade-up">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M12 2L2 19h20z"/>
            </svg>
            Discover Arabia's Hidden Gem
          </div>

          <h1 className="hero__title animate-fade-up animate-delay-1">
            Adventures<br />
            <span className="hero__title-accent">Await</span> in Oman
          </h1>

          <p className="hero__subtitle animate-fade-up animate-delay-2">
            From golden deserts to turquoise wadis, embark on unforgettable
            journeys through Oman's most spectacular landscapes.
          </p>

          <div className="hero__actions animate-fade-up animate-delay-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary hero__btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Explore Adventures
            </a>
            <Link to="/about" className="btn hero__btn-ghost">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Our Story
            </Link>
          </div>

          {/* Stats */}
          <div className="hero__stats animate-fade-up animate-delay-4">
            <div className="hero__stat">
              <span className="hero__stat-num">500+</span>
              <span className="hero__stat-label">Happy Travelers</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">15+</span>
              <span className="hero__stat-label">Unique Adventures</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">5★</span>
              <span className="hero__stat-label">Rated Service</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </section>

      {/* ===== FEATURED ADVENTURES ===== */}
      <section className="section adventures-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                <path d="M12 2L2 19h20z"/>
              </svg>
              Featured Packages
            </span>
            <h2 className="section-title">Handpicked Adventures</h2>
            <p className="section-subtitle">
              Carefully curated experiences that showcase the very best of Oman's
              breathtaking landscapes and rich culture.
            </p>
          </div>

          <div className="adventures-grid">
            {ADVENTURES.slice(0, 3).map((adv) => (
              <AdventureCard key={adv.id} adventure={adv} />
            ))}
          </div>

          <div className="section-cta">
            <Link to="/adventures" className="btn btn-primary">
              View All Adventures
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== AIRPORT PICKUP — COMING SOON ===== */}
      <section className="section pickup-section">
        <div className="container">
          <div className="pickup-card">
            <div className="pickup-card__left">
              <span className="section-badge section-badge--white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
                  <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                Airport Transfers
              </span>
              <h2 className="pickup-card__title">Stress-Free Airport<br/>Pickup Service</h2>
              <p className="pickup-card__desc">
                Arrive in Oman and be greeted by our professional drivers.
                Comfortable vehicles, punctual service — your adventure starts the moment you land.
              </p>
              <div className="pickup-features">
                {["Professional drivers","24/7 availability","Luxury fleet options","Flight tracking"].map((f,i) => (
                  <div key={i} className="pickup-feature">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
              <div className="pickup-actions">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Book via WhatsApp
                </a>
                <a href={EMAIL} className="btn btn-secondary pickup-email-btn">
                  Send Email Request
                </a>
              </div>
              <div className="pickup-coming-soon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                Online booking portal coming soon — contact us directly to reserve.
              </div>
            </div>
            <div className="pickup-card__right">
              <img
                src="https://images.unsplash.com/photo-1641757454687-9485344e2921?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Airport pickup service"
                className="pickup-card__image"
              />
              <div className="pickup-card__price-tag">
                <span className="pickup-card__price-label">Starting from</span>
                <span className="pickup-card__price-val">OMR 14</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header section-header--centered">
            <span className="section-badge">Why Us</span>
            <h2 className="section-title">The Oman Tourism Difference</h2>
            <p className="section-subtitle" style={{margin: "0 auto"}}>
              We don't just book tours — we craft memories that last a lifetime.
            </p>
          </div>
          <div className="why-grid">
            {[
              { icon: "🏆", title: "Award-Winning Service", desc: "Recognized by top travel platforms for excellence in customer experience across Oman." },
              { icon: "🗺️", title: "Expert Local Guides", desc: "Our guides are born and raised in Oman — they know every hidden wadi and secret dune." },
              { icon: "🛡️", title: "Safe & Insured", desc: "All adventures are fully insured with safety-first protocols and emergency support." },
              { icon: "💬", title: "24/7 WhatsApp Support", desc: "Reach our team any time of day or night — we're always here before, during and after." },
              { icon: "✈️", title: "Seamless Airport Transfers", desc: "Greeted at the gate with a premium vehicle — your Oman experience starts perfectly." },
              { icon: "🎯", title: "Tailored Experiences", desc: "Custom itineraries built around your group, pace, and budget. Your trip, your way." },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-card__icon">{item.icon}</div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA STRIP ===== */}
      <section className="contact-strip">
        <div className="container">
          <div className="contact-strip__inner">
            <div className="contact-strip__text">
              <h2 className="contact-strip__title">Ready to Explore Oman?</h2>
              <p className="contact-strip__sub">Message us on WhatsApp or email — we'll build your perfect adventure.</p>
            </div>
            <div className="contact-strip__actions">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn contact-strip__wa">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us Now
              </a>
              <a href={EMAIL} className="btn contact-strip__email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}

export default Home;