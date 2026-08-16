import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Smile,
  Stethoscope,
  CalendarCheck,
} from 'lucide-react';

import Button from '../components/common/Button';
import Card from '../components/common/Card';
import SectionTitle from '../components/common/SectionTitle';
import IconCircle from '../components/common/IconCircle';
import Badge from '../components/common/Badge';
import AnimatedSection from '../components/common/AnimatedSection';

import './DoctorsSpecialists.css';

const SPECIALISTS = [
  {
    icon: <HeartPulse size={26} strokeWidth={1.8} />,
    name: 'Cardiology',
    description:
      'Expert care for heart and cardiovascular health.',
  },
  {
    icon: <Brain size={26} strokeWidth={1.8} />,
    name: 'Neurology',
    description:
      'Specialized care for brain and nervous system.',
  },
  {
    icon: <Bone size={26} strokeWidth={1.8} />,
    name: 'Orthopedics',
    description:
      'Bone, joint and muscle treatment.',
  },
  {
    icon: <Baby size={26} strokeWidth={1.8} />,
    name: 'Pediatrics',
    description: 'Complete healthcare for children.',
  },
  {
    icon: <Smile size={26} strokeWidth={1.8} />,
    name: 'Dental Care',
    description: 'Modern dental care for healthy smiles.',
  },
  {
    icon: <Stethoscope size={26} strokeWidth={1.8} />,
    name: 'General Medicine',
    description:
      'Everyday healthcare for you and your family.',
  },
];

const DOCTORS = [
  {
    name: 'Dr. Arun Kumar',
    specialty: 'Cardiologist',
    experience: '12 Years Experience',
    initials: 'AK',
  },
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Neurologist',
    experience: '10 Years Experience',
    initials: 'PS',
  },
  {
    name: 'Dr. Rahul Raj',
    specialty: 'Orthopedic Specialist',
    experience: '8 Years Experience',
    initials: 'RR',
  },
  {
    name: 'Dr. Anitha Kumar',
    specialty: 'Pediatrician',
    experience: '9 Years Experience',
    initials: 'AK',
  },
];

function DoctorsSpecialists() {
  return (
    <AnimatedSection
      as="section"
      id="specialists"
      className="doctors-section"
      delay={0}
    >
      <div className="doctors-container">
        {/* SPECIALISTS */}
        <SectionTitle
          align="center"
          eyebrow="Our Specialists"
          title={
            <>
              Expert Care Across{' '}
              <span className="highlight">Every Specialty</span>
            </>
          }
          subtitle="Our experienced medical specialists are committed to providing personalized care using modern treatment approaches."
        />

        <div className="specialists-grid">
          {SPECIALISTS.map((s, idx) => (
            <Card
              key={s.name}
              variant="default"
              padding="lg"
              interactive
              className="specialist-card"
              style={{ '--anim-delay': `${idx * 60}ms` }}
            >
              <IconCircle
                icon={s.icon}
                variant="solid"
                size="lg"
                className="specialist-icon"
              />
              <h3>{s.name}</h3>
              <p>{s.description}</p>
              <button className="specialist-arrow" aria-label={`Learn more about ${s.name}`}>
                →
              </button>
            </Card>
          ))}
        </div>

        {/* DOCTORS */}
        <div className="doctors-heading-wrap">
          <SectionTitle
            align="center"
            eyebrow="Our Doctors"
            title={
              <>
                Meet Our{' '}
                <span className="highlight">Experienced Doctors</span>
              </>
            }
            subtitle="Skilled professionals who combine medical expertise with compassionate patient care."
          />
        </div>

        <div className="doctors-grid">
          {DOCTORS.map((d) => (
            <Card
              key={d.name}
              variant="default"
              padding="none"
              interactive
              className="doctor-card"
            >
              <div className="doctor-photo">
                <div className="doctor-avatar">
                  <span>{d.initials}</span>
                </div>
                <Badge
                  variant="primary"
                  size="sm"
                  className="doctor-experience"
                >
                  {d.experience}
                </Badge>
              </div>

              <div className="doctor-info">
                <h3>{d.name}</h3>
                <Badge variant="primary" size="sm" className="doctor-specialty">
                  {d.specialty}
                </Badge>

                <div className="doctor-actions">
                  <Button
                    as={Link}
                    to="/appointment"
                    variant="primary"
                    size="sm"
                    leftIcon={<CalendarCheck size={14} />}
                  >
                    Book
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default DoctorsSpecialists;