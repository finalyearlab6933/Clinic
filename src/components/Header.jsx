import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, CalendarCheck, Menu, X, Stethoscope } from 'lucide-react';

import Button from './common/Button';
import './Header.css';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/specialists', label: 'Specialists' },
  { to: '/appointment', label: 'Appointment' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <Stethoscope size={22} strokeWidth={2.4} />
          </div>
          <div className="logo-text">
            <span className="logo-main">
              CARE <span className="logo-accent">PLUS</span>
            </span>
            <span className="logo-sub">CLINIC</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? 'mobile-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="header-right">
          <div className="phone">
            <div className="phone-icon">
              <Phone size={18} strokeWidth={2.2} />
            </div>
            <div className="phone-text">
              <strong>+91 98765 43210</strong>
              <small>Mon – Sat (9:00 AM – 8:00 PM)</small>
            </div>
          </div>

          <Button
            as={Link}
            to="/appointment"
            variant="primary"
            size="md"
            leftIcon={<CalendarCheck size={16} strokeWidth={2.2} />}
            className="header-cta"
            onClick={closeMenu}
          >
            Book Appointment
          </Button>

          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;