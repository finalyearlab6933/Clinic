import { Link } from 'react-router-dom';
import {
  Stethoscope,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Camera,
  Hash,
  MessageCircle,
} from 'lucide-react';

import './Footer.css';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Clinic' },
  { to: '/specialists', label: 'Specialists' },
  { to: '/specialists', label: 'Our Doctors' },
  { to: '/appointment', label: 'Appointment' },
  { to: '/contact', label: 'Contact' },
];

const SERVICE_LINKS = [
  { to: '/specialists', label: 'Cardiology' },
  { to: '/specialists', label: 'Neurology' },
  { to: '/specialists', label: 'Orthopedics' },
  { to: '/specialists', label: 'Pediatrics' },
  { to: '/specialists', label: 'Dental Care' },
  { to: '/specialists', label: 'General Medicine' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <Stethoscope size={22} strokeWidth={2.4} />
            </div>
            <div className="footer-logo-text">
              <span>
                CARE <strong>PLUS</strong>
              </span>
              <small>CLINIC</small>
            </div>
          </Link>

          <p className="footer-description">
            Compassionate healthcare with experienced doctors,
            modern facilities, and personalized care for you and
            your family.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <Globe size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <Camera size={16} />
            </a>
            <a href="#" aria-label="Twitter">
              <Hash size={16} />
            </a>
            <a href="#" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          {QUICK_LINKS.map((l, i) => (
            <Link key={`q-${i}`} to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>
          {SERVICE_LINKS.map((l, i) => (
            <Link key={`s-${i}`} to={l.to}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <MapPin size={16} />
            </span>
            <p>
              123 Health Street,<br />
              Chennai, Tamil Nadu<br />
              India — 600001
            </p>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <Phone size={16} />
            </span>
            <p>+91 98765 43210</p>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <Mail size={16} />
            </span>
            <p>careplus@gmail.com</p>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <Clock size={16} />
            </span>
            <p>
              Mon – Sat<br />
              9:00 AM — 8:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Care Plus Clinic. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;