import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          onClick={closeMenu}
        >

          <div className="logo-icon">
            ✚
          </div>

          <div className="logo-text">

            <span className="logo-main">
              CARE <strong>PLUS</strong>
            </span>

            <span className="logo-sub">
              CLINIC
            </span>

          </div>

        </Link>


        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? "mobile-open" : ""}`}>

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/specialists" onClick={closeMenu}>
            Specialists
          </Link>

          <Link to="/appointment" onClick={closeMenu}>
            Appointment
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

        </nav>


        {/* Right Side */}
        <div className="header-right">

          {/* Phone */}
          <div className="phone">

            <div className="phone-icon">
              ☎
            </div>

            <div>

              <strong>
                +91 98765 43210
              </strong>

              <small>
                Mon - Sat (9:00AM - 8:00PM)
              </small>

            </div>

          </div>


          {/* Book Appointment */}
          <Link
            to="/appointment"
            className="header-appointment"
            onClick={closeMenu}
          >
            <span>▣</span>
            Book Appointment
          </Link>


          {/* Mobile Menu */}
          <button
            className="menu-btn"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;