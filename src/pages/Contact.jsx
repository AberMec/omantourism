import React, { useState } from "react";
import "./Contact.css";

const WHATSAPP = "https://api.whatsapp.com/send?phone=96896662171";
const EMAIL = "mailto:omantourismadventures@gmail.com";
const PHONE = "tel:+96896662171";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: connect to backend/email service
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }, 5000);
  };

  return (
    <main className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1600&q=80"
            alt="Contact Oman Tourism Adventures"
            className="page-hero__img"
          />
          <div className="page-hero__overlay"></div>
        </div>
        <div className="page-hero__content container">
          <span className="section-badge" style={{color: "#F4C88A", background: "rgba(212,165,116,0.2)", border: "1px solid rgba(212,165,116,0.35)"}}>
            Get in Touch
          </span>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__sub">We're here to help plan your perfect Oman adventure.</p>
        </div>
      </section>

      {/* Main Contact */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Info + WhatsApp */}
            <div className="contact-info">
              <div className="contact-info__card">
                <h2 className="contact-info__title">Let's Connect</h2>
                <p className="contact-info__desc">
                  Reach out directly on WhatsApp or email — the fastest way to plan your trip or ask any questions.
                </p>

                <div className="contact-channels">
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="contact-channel contact-channel--wa">
                    <div className="contact-channel__icon">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div className="contact-channel__body">
                      <strong>WhatsApp (Fastest)</strong>
                      <span>+968 9666 2171 · Chat now →</span>
                    </div>
                  </a>

                  <a href={EMAIL} className="contact-channel contact-channel--email">
                    <div className="contact-channel__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="contact-channel__body">
                      <strong>Email Us</strong>
                      <span>omantourismadventures@gmail.com</span>
                    </div>
                  </a>

                  <a href={PHONE} className="contact-channel contact-channel--phone">
                    <div className="contact-channel__icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.6 19.79 19.79 0 01.22 4.93 2 2 0 012.22 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.09a16 16 0 006 6l1.27-.54a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0121 18.92z"/>
                      </svg>
                    </div>
                    <div className="contact-channel__body">
                      <strong>Call Us</strong>
                      <span>+968 9666 2171 · Daily 8AM–10PM</span>
                    </div>
                  </a>
                </div>

                <div className="contact-why">
                  <h3>Why Choose Us?</h3>
                  <ul>
                    {[
                      "Expert local Omani guides",
                      "Customized itineraries for every group",
                      "Best price guarantee",
                      "24/7 support during your trip",
                    ].map((item, i) => (
                      <li key={i}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#D4A574" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="contact-location">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Muscat, Sultanate of Oman</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-wrap">
              <div className="contact-form-card">
                <h2 className="contact-form-card__title">Send Us a Message</h2>
                <p className="contact-form-card__sub">
                  Fill in the form and we'll get back to you within a few hours.
                </p>

                {submitted && (
  <div className="error-toast">
    <svg
      viewBox="0 0 24 24"
      className="error-toast__icon"
      width="20"
      height="20"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>

    <div className="error-toast__text">
      Message failed to send. Please try again, or contact us at
      <strong> omantourismadventures@gmail.com</strong>.
    </div>
  </div>
)}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="e.g. Mohammed Al-Said" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="+968 ..." />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} className="form-input" rows={5} placeholder="Tell us about your dream Oman adventure, how many people, dates..." required />
                  </div>
                  <button type="submit" className="btn btn-primary contact-submit">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </button>
                  <p className="contact-form__note">
                    Prefer instant contact?{" "}
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Message us on WhatsApp →</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;