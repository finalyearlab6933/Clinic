import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image-area">

          <div className="about-glow"></div>

          <div className="about-image-box">
            <img
              src="/assets/clinic.jpg"
              alt="Care Plus Clinic"
            />
          </div>

          <div className="about-experience">
            <strong>12+</strong>
            <span>Years of Experience</span>
          </div>

          <div className="about-patients">
            <strong>5K+</strong>
            <span>Patients Served</span>
          </div>

        </div>


        {/* RIGHT CONTENT */}
        <div className="about-content">

          <span className="about-label">
            ABOUT OUR CLINIC
          </span>

          <h2>
            Healthcare With
            <span> Heart & Expertise</span>
          </h2>

          <p className="about-intro">
            At Care Plus Clinic, we believe healthcare is
            more than just treatment. It is about listening,
            understanding and caring for every patient.
          </p>

          <p>
            Our experienced doctors and medical specialists
            provide personalized healthcare using modern
            medical technology and trusted treatment methods.
          </p>


          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h3>Experienced Doctors</h3>

                <p>
                  Qualified professionals dedicated
                  to your health.
                </p>
              </div>
            </div>


            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h3>Modern Healthcare</h3>

                <p>
                  Advanced facilities and modern
                  treatment methods.
                </p>
              </div>
            </div>


            <div className="about-feature">
              <div className="feature-icon">✓</div>

              <div>
                <h3>Patient First</h3>

                <p>
                  Personalized care for every
                  patient and family.
                </p>
              </div>
            </div>

          </div>


          <a
            href="#appointment"
            className="about-button"
          >
            Book Your Appointment →
          </a>

        </div>

      </div>

    </section>
  );
}

export default About;