import "./Appointment.css";

function Appointment() {

  return (

    <section
      id="appointment"
      className="appointment-section"
    >

      <div className="appointment-container">

        {/* LEFT */}

        <div className="appointment-content">

          <span>
            BOOK AN APPOINTMENT
          </span>

          <h2>
            Your Health
            <strong> Matters To Us.</strong>
          </h2>

          <p>
            Schedule an appointment with our experienced
            doctors. Submit your request and our clinic
            team will contact you to confirm your appointment.
          </p>


          <div className="appointment-info">

            <div>
              <span>📞</span>

              <div>
                <small>Call Us</small>
                <strong>+91 98765 43210</strong>
              </div>
            </div>


            <div>
              <span>✉</span>

              <div>
                <small>Email</small>
                <strong>careplus@gmail.com</strong>
              </div>
            </div>


            <div>
              <span>🕐</span>

              <div>
                <small>Working Hours</small>
                <strong>Mon - Sat | 9 AM - 8 PM</strong>
              </div>
            </div>

          </div>

        </div>


        {/* FORM */}

        <div className="appointment-form-box">

          <h3>
            Book Your Appointment
          </h3>

          <p>
            Fill in your details below
          </p>


          <form>

            <div className="form-row">

              <div className="form-group">

                <label>
                  Patient Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                />

              </div>


              <div className="form-group">

                <label>
                  Age
                </label>

                <input
                  type="number"
                  placeholder="Age"
                />

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>
                  Specialist
                </label>

                <select>

                  <option>
                    Select Specialist
                  </option>

                  <option>
                    Cardiology
                  </option>

                  <option>
                    Neurology
                  </option>

                  <option>
                    Orthopedics
                  </option>

                  <option>
                    Pediatrics
                  </option>

                  <option>
                    Dental Care
                  </option>

                  <option>
                    General Medicine
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label>
                  Doctor
                </label>

                <select>

                  <option>
                    Select Doctor
                  </option>

                  <option>
                    Dr. Arun Kumar
                  </option>

                  <option>
                    Dr. Priya Sharma
                  </option>

                  <option>
                    Dr. Rahul Raj
                  </option>

                  <option>
                    Dr. Anitha Kumar
                  </option>

                </select>

              </div>

            </div>


            <div className="form-row">

              <div className="form-group">

                <label>
                  Appointment Date
                </label>

                <input type="date" />

              </div>


              <div className="form-group">

                <label>
                  Preferred Time
                </label>

                <select>

                  <option>
                    Select Time
                  </option>

                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>02:00 PM</option>
                  <option>03:00 PM</option>
                  <option>04:00 PM</option>
                  <option>05:00 PM</option>

                </select>

              </div>

            </div>


            <div className="form-group">

              <label>
                Reason for Visit
              </label>

              <textarea
                rows="4"
                placeholder="Briefly describe your reason for visit"
              ></textarea>

            </div>


            <button
              type="submit"
              className="submit-appointment"
            >
              Confirm Appointment →
            </button>


            <small className="form-note">
              Your appointment will be confirmed by
              the clinic after review.
            </small>

          </form>

        </div>

      </div>

    </section>

  );
}

export default Appointment;