import React from "react";
import "./About.css";
import SaidCEO from "../assets/images/SaidCEO.png";
import CoFDev from "../assets/images/CoFDev.png";

const WHATSAPP = "https://api.whatsapp.com/send?phone=96896662171";

function About() {
  return (
    <main className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1657523389944-ddb71944bb72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG9tYW5pfGVufDB8fDB8fHww"
            alt="About Oman Tourism Adventures"
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="section-badge" style={{color: "#F4C88A", background: "rgba(212,165,116,0.2)", border: "1px solid rgba(212,165,116,0.35)"}}>
            Our Story
          </span>
          <h1 className="page-hero__title">About Us</h1>
          <p className="page-hero__sub">
            Born from a love of Oman's beauty — we're here to share it with the world.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-story__grid">
            <div className="about-story__image">
              <img
                src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fHww"
                alt="Oman guide with travelers"
              />
              <div className="about-story__badge">
                <span>Est. 2016</span>
                <span>Muscat, Oman</span>
              </div>
            </div>
            <div className="about-story__text">
              <span className="section-badge">Who We Are</span>
              <h2 className="section-title">Passionate About Oman</h2>
              <p>
                Oman Tourism Adventures was founded by a team of passionate Omani guides who wanted to show the world what this breathtaking country truly has to offer — beyond the typical tourist trail.
              </p>
              <p style={{marginTop: 16, color: "var(--gray-600)", fontSize: "0.95rem", lineHeight: 1.75}}>
                We specialize in immersive, small-group adventures that take you deep into the heart of Oman: sleeping under the stars in Wahiba Sands, discovering hidden wadis, hiking ancient mountain trails, and experiencing genuine Omani hospitality.
              </p>
              <div className="about-story__values">
                {[
                  { title: "Authentic", desc: "Real Omani experiences, not staged tourist traps." },
                  { title: "Safe", desc: "Fully insured adventures with certified local guides." },
                  { title: "Sustainable", desc: "We respect the environment and support local communities." },
                ].map((v, i) => (
                  <div key={i} className="about-value">
                    <div className="about-value__dot"></div>
                    <div>
                      <strong>{v.title}</strong>
                      <span>{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <div className="section-header section-header--centered" style={{textAlign: "center"}}>
            <span className="section-badge">The Team</span>
            <h2 className="section-title">Meet Your Guides</h2>
            <p className="section-subtitle" style={{margin: "0 auto"}}>
              Local experts who know every hidden gem, every desert trail, every wadi path.
            </p>
          </div>
          <div className="team-grid">
            {[
              { name: "Said Al-Husaini", role: "Founder & CEO", img: SaidCEO },
              { name: "Aber Al-Balushi", role: "Co-Founder & Developer", img: CoFDev },
              { name: "Khalid Al-Maamari", role: "Lead Tour Guide", img: "https://plus.unsplash.com/premium_photo-1716999413660-cd854b6d6382?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            ].map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card__img-wrap">
                  <img src={member.img} alt={member.name} />
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { num: "500+", label: "Happy Travelers" },
              { num: "15+", label: "Adventure Packages" },
              { num: "8", label: "Years of Experience" },
              { num: "5★", label: "Average Rating" },
            ].map((s, i) => (
              <div key={i} className="stat-box">
                <span className="stat-box__num">{s.num}</span>
                <span className="stat-box__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta__card">
            <h2>Ready to Join Us?</h2>
            <p>Message our team and we'll craft your perfect Oman adventure.</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginTop: 8}}>
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;