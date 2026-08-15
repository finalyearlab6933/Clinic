import "./Home.css";

function Home() {

  return (

    <>

      {/* =========================
          HERO
      ========================= */}

      <section id="home" className="hero">

        <div className="hero-container">

          {/* LEFT CONTENT */}

          <div className="hero-content">

            <div className="welcome-badge">
              ❤️ Welcome to Care Plus Clinic
            </div>


            <h1>
              Compassionate Care,
              <br />

              <span>
                Better Health.
              </span>
            </h1>


            <p className="hero-description">
              Expert doctors, advanced technology,
              and personalized care for you and
              your family.
            </p>


            <div className="hero-buttons">

              <a
                href="#appointment"
                className="primary-btn"
              >
                <span>▣</span>

                Book Appointment
              </a>


              <button className="video-btn">

                <span className="play-icon">
                  ▶
                </span>

                Watch Video

              </button>

            </div>


            {/* STATS */}

            <div className="hero-stats">

              <div className="patients">

                <div className="patient-images">

                  <div>👨</div>
                  <div>👩</div>
                  <div>👨</div>
                  <div>👩</div>

                </div>

                <div>

                  <strong>
                    5,000+
                  </strong>

                  <small>
                    Happy Patients
                  </small>

                </div>

              </div>


              <div className="rating">

                <strong>
                  ★ 4.8/5
                </strong>

                <small>
                  Patient Rating
                </small>

              </div>

            </div>

          </div>


          {/* RIGHT DOCTOR */}

          <div className="hero-image-area">

            <div className="orange-circle"></div>


            {/* Doctor image */}

            <img
              src="../public/doctor.png"
              alt="Doctor"
              className="doctor-image"
            />


            {/* EXPERIENCE CARD */}

            <div className="floating-card experience">

              <div className="card-icon">
                ♙
              </div>

              <div>

                <strong>
                  12+
                </strong>

                <span>
                  Years Experience
                </span>

              </div>

            </div>


            {/* SPECIALIST CARD */}

            <div className="floating-card specialist">

              <div className="card-icon">
                ★
              </div>

              <div>

                <strong>
                  8+
                </strong>

                <span>
                  Specialists
                </span>

              </div>

            </div>


            {/* PATIENT CARD */}

            <div className="floating-card patients-card">

              <div className="card-icon">
                👥
              </div>

              <div>

                <strong>
                  5,000+
                </strong>

                <span>
                  Patients Served
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES PREVIEW
      ========================= */}

      <section className="services-preview">

        <div className="services-container">

          <div className="services-heading">

            <div>

              <span className="section-label">
                OUR SERVICES
              </span>

              <h2>
                Comprehensive Care For Your{" "}
                <span>
                  Better Health
                </span>
              </h2>

            </div>


            <div className="services-right">

              <p>
                We offer a wide range of medical
                services to ensure your good health
                and well-being.
              </p>

              <a href="#specialists">
                View All Services →
              </a>

            </div>

          </div>


          <div className="service-cards">

            <Service
              icon="♥"
              title="Cardiology"
              text="Complete heart care with advanced technology."
            />

            <Service
              icon="🧠"
              title="Neurology"
              text="Expert care for brain, spine and nervous system."
            />

            <Service
              icon="🦴"
              title="Orthopedics"
              text="Bone, joint and muscle care for active life."
            />

            <Service
              icon="👶"
              title="Pediatrics"
              text="Comprehensive healthcare for your little ones."
            />

            <Service
              icon="🦷"
              title="Dental Care"
              text="Complete dental care for healthy smiles."
            />

            <Service
              icon="+"
              title="General Medicine"
              text="Expert general physicians for everyday care."
            />

          </div>

        </div>

      </section>

    </>

  );

}


/* Service Card Component */

function Service({
  icon,
  title,
  text
}) {

  return (

    <div className="service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <button>
        →
      </button>

    </div>

  );

}


export default Home;