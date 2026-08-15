import "./Contact.css";

function Contact() {

  return (

    <section
      id="contact"
      className="contact-section"
    >

      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-heading">

          <span>
            CONTACT US
          </span>

          <h2>
            We're Here To
            <strong> Help You.</strong>
          </h2>

          <p>
            Have a question or need assistance?
            Contact our clinic team and we'll be
            happy to help.
          </p>

        </div>


        <div className="contact-content">

          {/* CONTACT CARDS */}

          <div className="contact-info">

            <div className="contact-card">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>
                  Visit Our Clinic
                </h3>

                <p>
                  123 Health Street,<br />
                  Chennai, Tamil Nadu<br />
                  India - 600001
                </p>
              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                📞
              </div>

              <div>
                <h3>
                  Call Us
                </h3>

                <p>
                  +91 98765 43210<br />
                  +91 98765 43211
                </p>
              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <h3>
                  Email Us
                </h3>

                <p>
                  careplus@gmail.com<br />
                  support@careplus.com
                </p>
              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                🕐
              </div>

              <div>
                <h3>
                  Working Hours
                </h3>

                <p>
                  Monday - Saturday<br />
                  9:00 AM - 8:00 PM
                </p>
              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <div className="contact-form">

            <h3>
              Send Us A Message
            </h3>

            <form>

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Message →
              </button>

            </form>

          </div>

        </div>


        {/* MAP */}

        <div className="map-box">

          <div>
            📍

            <span>
              Care Plus Clinic Location
            </span>
          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;