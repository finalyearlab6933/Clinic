import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo">

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
        <nav className="navbar">

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/specialists">
            Specialists
          </Link>

          <Link to="/appointment">
            Appointment
          </Link>

          <Link to="/contact">
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


          {/* Book Appointment Button */}
          <Link
            to="/appointment"
            className="header-appointment"
          >
            <span>▣</span>
            Book Appointment
          </Link>


          {/* Mobile Menu */}
          <button
            className="menu-btn"
            type="button"
          >
            ☰
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;