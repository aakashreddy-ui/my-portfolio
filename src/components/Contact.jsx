import React from 'react';
import Icon from './Icon';
import { services, whatsappUrl } from '../data/portfolioData';

export default function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-panel">
        <div>
          <p className="section-label">Contact</p>
          <h2>Have a website or app idea? Send the details.</h2>
          <p>
            Best for portfolio websites, landing pages, responsive fixes, WordPress updates, and small full-stack
            builds.
          </p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
        <div className="contact-actions">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Message on WhatsApp <Icon name="phone" />
          </a>
          <a className="button secondary" href="mailto:aakashreddy025@gmail.com">
            aakashreddy025@gmail.com <Icon name="mail" />
          </a>
        </div>
      </div>
      <aside className="contact-details" aria-label="Contact details">
        <div>
          <Icon name="phone" />
          <span>WhatsApp</span>
          <strong>+91 6301612731</strong>
        </div>
        <div>
          <Icon name="mail" />
          <span>Email</span>
          <strong>aakashreddy025@gmail.com</strong>
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
