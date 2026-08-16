import {
  Phone,
  Mail,
  Clock,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import Button from '../components/common/Button';
import Card from '../components/common/Card';
import IconCircle from '../components/common/IconCircle';
import TextField from '../components/common/TextField';
import AnimatedSection from '../components/common/AnimatedSection';

import './Appointment.css';

const SPECIALIST_OPTIONS = [
  'Cardiology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Dental Care',
  'General Medicine',
];

const DOCTOR_OPTIONS = [
  'Dr. Arun Kumar',
  'Dr. Priya Sharma',
  'Dr. Rahul Raj',
  'Dr. Anitha Kumar',
];

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

function Appointment() {
  return (
    <AnimatedSection
      as="section"
      id="appointment"
      className="appointment-section"
      delay={0}
    >
      <div className="appointment-container">
        {/* LEFT — info */}
        <div className="appointment-content">
          <span className="appointment-eyebrow">Book An Appointment</span>

          <h2 className="appointment-title">
            Your Health{' '}
            <span className="highlight">Matters To Us.</span>
          </h2>

          <p className="appointment-lead">
            Schedule an appointment with our experienced doctors.
            Submit your request and our clinic team will contact you
            to confirm your appointment.
          </p>

          <div className="appointment-info">
            <div className="info-row">
              <IconCircle
                icon={<Phone size={18} />}
                variant="light"
                size="md"
              />
              <div>
                <small>Call Us</small>
                <strong>+91 98765 43210</strong>
              </div>
            </div>

            <div className="info-row">
              <IconCircle
                icon={<Mail size={18} />}
                variant="light"
                size="md"
              />
              <div>
                <small>Email</small>
                <strong>careplus@gmail.com</strong>
              </div>
            </div>

            <div className="info-row">
              <IconCircle
                icon={<Clock size={18} />}
                variant="light"
                size="md"
              />
              <div>
                <small>Working Hours</small>
                <strong>Mon – Sat | 9 AM – 8 PM</strong>
              </div>
            </div>
          </div>

          <Card variant="soft" padding="md" className="appointment-trust">
            <IconCircle
              icon={<ShieldCheck size={20} />}
              variant="solid"
              size="md"
            />
            <div>
              <strong>Your Health, Our Priority</strong>
              <small>Safe, trusted &amp; quality care</small>
            </div>
          </Card>
        </div>

        {/* RIGHT — form */}
        <Card variant="elevated" padding="lg" className="appointment-form-box">
          <div className="form-header">
            <IconCircle
              icon={<CalendarCheck size={20} />}
              variant="light"
              size="md"
            />
            <div>
              <h3>Book Your Appointment</h3>
              <p>Fill in your details below</p>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="appointment-form">
            <div className="form-row">
              <TextField
                label="Patient Name"
                placeholder="Enter your name"
                required
              />
              <TextField
                label="Phone Number"
                type="tel"
                placeholder="Enter phone number"
                required
              />
            </div>

            <div className="form-row">
              <TextField
                label="Email"
                type="email"
                placeholder="Enter email"
                required
              />
              <TextField
                label="Age"
                type="number"
                placeholder="Age"
                min="0"
                max="120"
              />
            </div>

            <div className="form-row">
              <TextField
                label="Specialist"
                as="select"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Specialist
                </option>
                {SPECIALIST_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </TextField>

              <TextField
                label="Doctor"
                as="select"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Doctor
                </option>
                {DOCTOR_OPTIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </TextField>
            </div>

            <div className="form-row">
              <TextField label="Appointment Date" type="date" />
              <TextField
                label="Preferred Time"
                as="select"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Time
                </option>
                {TIME_SLOTS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </TextField>
            </div>

            <TextField
              label="Reason for Visit"
              as="textarea"
              rows={4}
              placeholder="Briefly describe your reason for visit"
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              rightIcon={<Sparkles size={16} />}
            >
              Confirm Appointment
            </Button>

            <p className="form-note">
              Your appointment will be confirmed by the clinic after
              review.
            </p>
          </form>
        </Card>
      </div>
    </AnimatedSection>
  );
}

export default Appointment;