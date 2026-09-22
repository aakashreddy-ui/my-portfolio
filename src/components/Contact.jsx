import React from 'react';
import Icon from './Icon';
import { email, emailUrl, services, whatsappUrl } from '../data/portfolioData';

const phoneUrl = 'tel:+916301612731';

export default function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-panel">
        <div>
          <p className="section-label">Contact</p>
          <h2>Have a project or role in mind?</h2>
          <p>
            I am open to full-time full-stack roles and selected web projects. Send me a message and tell me what you are working on.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <div className="contact-actions">
          <a className="button primary" href={emailUrl}>
            Email Aakash <Icon name="mail" />
          </a>
          <a className="button secondary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Send a WhatsApp <Icon name="phone" />
          </a>
        </div>
      </div>
      <aside className="contact-details" aria-label="Contact details">
        <div>
          <Icon name="phone" />
          <span>WhatsApp</span>
          <a href={phoneUrl}><strong>+91 6301612731</strong></a>
        </div>
        <div>
          <Icon name="mail" />
          <span>Email</span>
          <a href={emailUrl}><strong>{email}</strong></a>
        </div>
        <div>
          <Icon name="location" />
          <span>Location</span>
          <strong>Hyderabad, Telangana</strong>
        </div>
      </aside>
    </section>
  );
}
