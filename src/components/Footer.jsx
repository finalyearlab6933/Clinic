import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Clinic Info */}
        <div className="footer-brand">

          <Link to="/" className="footer-logo">

            <div className="footer-logo-icon">
              ✚
            </div>

            <div className="footer-logo-text">
              <span>
                CARE <strong>PLUS</strong>
              </span>

              <small>
                CLINIC
              </small>
            </div>

          </Link>


          <p className="footer-description">
            Compassionate healthcare with experienced
            doctors, modern facilities and personalized
            care for you and your family.
          </p>


          {/* Social Media */}
          <div className="footer-social">

            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Twitter">
              𝕏
            </a>

            <a href="#" aria-label="WhatsApp">
              ☎
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About Clinic
          </Link>

          <Link to="/specialists">
            Specialists
          </Link>

          <Link to="/doctors">
            Our Doctors
          </Link>

          <Link to="/appointment">
            Appointment
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* Services */}
        <div className="footer-column">

          <h3>
            Our Services
          </h3>

          <Link to="/specialists">
            Cardiology
          </Link>

          <Link to="/specialists">
            Neurology
          </Link>

          <Link to="/specialists">
            Orthopedics
          </Link>

          <Link to="/specialists">
            Pediatrics
          </Link>

          <Link to="/specialists">
            Dental Care
          </Link>

          <Link to="/specialists">
            General Medicine
          </Link>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>
            Contact Us
          </h3>


          <div className="footer-contact-item">

            <span className="footer-contact-icon">
              📍
            </span>

            <p>
              123 Health Street,<br />
              Chennai, Tamil Nadu<br />
              India - 600001
            </p>

          </div>


          <div className="footer-contact-item">

            <span className="footer-contact-icon">
              ☎
            </span>

            <p>
              +91 98765 43210
            </p>

          </div>


          <div className="footer-contact-item">

            <span className="footer-contact-icon">
              ✉
            </span>

            <p>
              careplus@gmail.com
            </p>

          </div>


          <div className="footer-contact-item">

            <span className="footer-contact-icon">
              🕐
            </span>

            <p>
              Mon - Sat<br />
              9:00 AM - 8:00 PM
            </p>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © 2026 Care Plus Clinic.
            All Rights Reserved.
          </p>


          <div className="footer-legal">

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;