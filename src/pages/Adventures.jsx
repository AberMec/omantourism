import React, { useState } from "react";
import AdventureCard from "../components/AdventureCard";
import { ADVENTURES } from "../utils/data";
import "./Adventures.css";

const WHATSAPP = "https://api.whatsapp.com/send?phone=96896662171";

const CATEGORIES = ["All", "Desert", "Mountain", "Wadi", "Coastal", "Cultural", "City"];

function Adventures() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? ADVENTURES
    : ADVENTURES.filter(a => a.category === active);

  return (
    <main className="adventures-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80"
            alt="Oman adventures"   
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="section-badge" style={{color: "#F4C88A", background: "rgba(212,165,116,0.2)", border: "1px solid rgba(212,165,116,0.35)"}}>
            Explore Oman
          </span>
          <h1 className="page-hero__title">Adventure Packages</h1>
          <p className="page-hero__sub">
            Every landscape tells a story. Choose your adventure and let Oman's beauty unfold.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="adv-section">
        <div className="container">
          <div className="adv-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`adv-filter ${active === cat ? "adv-filter--active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="adv-grid">
              {filtered.map(adv => (
                <AdventureCard key={adv.id} adventure={adv} />
              ))}
            </div>
          ) : (
            <div className="adv-empty">
              <p>No adventures in this category yet. <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp!</a></p>
            </div>
          )}

          <div className="adv-cta-strip">
            <div className="adv-cta-strip__text">
              <h3>Don't see what you're looking for?</h3>
              <p>We create custom adventures tailored to your group and interests.</p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Request Custom Trip
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Adventures;