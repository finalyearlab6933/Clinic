import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  HeartHandshake,
  Stethoscope,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react';

import Button from '../components/common/Button';
import Card from '../components/common/Card';
import FeatureRow from '../components/common/FeatureRow';
import Stat from '../components/common/Stat';
import IconCircle from '../components/common/IconCircle';
import AnimatedSection from '../components/common/AnimatedSection';
import clinic from '../assets/clinic.webp';

import './About.css';

function About() {
  return (
    <AnimatedSection
      as="section"
      id="about"
      className="about-section"
      delay={0}
    >
      <div className="about-container">
        {/* LEFT — image area */}
        <div className="about-image-area">
          <div className="about-glow" aria-hidden="true" />
          <div className="about-image-box">
            <img src={clinic} alt="Care Plus Clinic interior" />
          </div>

          <Card
            className="about-overlay about-overlay--experience"
            padding="md"
          >
            <IconCircle
              icon={<Award size={20} />}
              variant="solid"
              size="md"
            />
            <div>
              <strong>12+</strong>
              <span>Years of Experience</span>
            </div>
          </Card>

          <Card
            className="about-overlay about-overlay--patients"
            padding="md"
          >
            <IconCircle
              icon={<Users size={20} />}
              variant="solid"
              size="md"
            />
            <div>
              <strong>5K+</strong>
              <span>Patients Served</span>
            </div>
          </Card>
        </div>

        {/* RIGHT — content */}
        <div className="about-content">
          <span className="about-label">About Our Clinic</span>

          <h2 className="about-title">
            Healthcare With{' '}
            <span className="highlight">Heart &amp; Expertise</span>
          </h2>

          <p className="about-intro">
            At Care Plus Clinic, we believe healthcare is more than
            just treatment. It is about listening, understanding and
            caring for every patient.
          </p>

          <p>
            Our experienced doctors and medical specialists provide
            personalized healthcare using modern medical technology
            and trusted treatment methods.
          </p>

          <div className="about-features">
            <FeatureRow
              variant="check"
              icon={<CheckCircle2 size={18} />}
              title="Experienced Doctors"
              description="Qualified professionals dedicated to your health."
            />
            <FeatureRow
              variant="check"
              icon={<CheckCircle2 size={18} />}
              title="Modern Healthcare"
              description="Advanced facilities and modern treatment methods."
            />
            <FeatureRow
              variant="check"
              icon={<CheckCircle2 size={18} />}
              title="Patient First"
              description="Personalized care for every patient and family."
            />
          </div>

          <div className="about-cta">
            <Button
              as={Link}
              to="/appointment"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight size={16} />}
            >
              Book Your Appointment
            </Button>
            <Button as={Link} to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="about-stats">
        <div className="about-stats__container">
          <Stat
            value="12+"
            label="Years"
            icon={<Award size={18} />}
            variant="outlined"
          />
          <Stat
            value="8+"
            label="Specialists"
            icon={<Stethoscope size={18} />}
            variant="outlined"
          />
          <Stat
            value="5,000+"
            label="Patients"
            icon={<Users size={18} />}
            variant="outlined"
          />
          <Stat
            value="4.8/5"
            label="Rating"
            icon={<HeartHandshake size={18} />}
            variant="outlined"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;