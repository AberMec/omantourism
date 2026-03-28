import React from "react";
import { Link } from "react-router-dom";
import "./AdventureCard.css";

function AdventureCard({ adventure }) {
  const {
    title,
    description,
    image,
    price,
    duration,
    highlights = [],
  } = adventure;

  return (
    <div className="adventure-card">
      <div className="adventure-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="adventure-card__image"
          loading="lazy"
        />
        <div className="adventure-card__price-badge">From {price}</div>
        <div className="adventure-card__duration-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          {duration}
        </div>
      </div>
      <div className="adventure-card__body">
        <h3 className="adventure-card__title">{title}</h3>
        <p className="adventure-card__desc">{description}</p>
        {highlights.length > 0 && (
          <div className="adventure-card__highlights">
            {highlights.map((h, i) => (
              <span key={i} className="adventure-card__tag">{h}</span>
            ))}
          </div>
        )}
        <a
          href={`https://api.whatsapp.com/send?phone=96896662171&text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(title)}%20package.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-navy adventure-card__cta"
        >
          Book This Adventure
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AdventureCard;