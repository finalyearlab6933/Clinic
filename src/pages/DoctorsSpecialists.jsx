import "./DoctorsSpecialists.css";

const specialists = [
  {
    icon: "♥",
    name: "Cardiology",
    description: "Expert care for heart and cardiovascular health."
  },
  {
    icon: "🧠",
    name: "Neurology",
    description: "Specialized care for brain and nervous system."
  },
  {
    icon: "🦴",
    name: "Orthopedics",
    description: "Bone, joint and muscle treatment."
  },
  {
    icon: "👶",
    name: "Pediatrics",
    description: "Complete healthcare for children."
  },
  {
    icon: "🦷",
    name: "Dental Care",
    description: "Modern dental care for healthy smiles."
  },
  {
    icon: "+",
    name: "General Medicine",
    description: "Everyday healthcare for you and your family."
  }
];


const doctors = [
  {
    name: "Dr. Arun Kumar",
    specialty: "Cardiologist",
    experience: "12 Years Experience",
    image: "/assets/doctor1.jpg"
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Neurologist",
    experience: "10 Years Experience",
    image: "/assets/doctor2.jpg"
  },
  {
    name: "Dr. Rahul Raj",
    specialty: "Orthopedic Specialist",
    experience: "8 Years Experience",
    image: "/assets/doctor3.jpg"
  },
  {
    name: "Dr. Anitha Kumar",
    specialty: "Pediatrician",
    experience: "9 Years Experience",
    image: "/assets/doctor4.jpg"
  }
];


function DoctorsSpecialists() {

  return (

    <section
      id="specialists"
      className="doctors-section"
    >

      <div className="doctors-container">

        {/* SPECIALISTS */}

        <div className="specialists-heading">

          <span>
            OUR SPECIALISTS
          </span>

          <h2>
            Expert Care Across
            <strong> Every Specialty</strong>
          </h2>

          <p>
            Our experienced medical specialists are
            committed to providing personalized care
            using modern treatment approaches.
          </p>

        </div>


        <div className="specialists-grid">

          {specialists.map((specialist, index) => (

            <div
              className="specialist-card"
              key={index}
            >

              <div className="specialist-icon">
                {specialist.icon}
              </div>

              <h3>
                {specialist.name}
              </h3>

              <p>
                {specialist.description}
              </p>

              <button>
                →
              </button>

            </div>

          ))}

        </div>


        {/* DOCTORS */}

        <div
          id="doctors"
          className="doctors-heading"
        >

          <span>
            OUR DOCTORS
          </span>

          <h2>
            Meet Our
            <strong> Experienced Doctors</strong>
          </h2>

          <p>
            Skilled professionals who combine medical
            expertise with compassionate patient care.
          </p>

        </div>


        <div className="doctors-grid">

          {doctors.map((doctor, index) => (

            <div
              className="doctor-card"
              key={index}
            >

              <div className="doctor-photo">

                <img
                  src={doctor.image}
                  alt={doctor.name}
                />

                <div className="doctor-experience">
                  {doctor.experience}
                </div>

              </div>


              <div className="doctor-info">

                <h3>
                  {doctor.name}
                </h3>

                <p>
                  {doctor.specialty}
                </p>

                <a href="#appointment">
                  Book Appointment →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default DoctorsSpecialists;