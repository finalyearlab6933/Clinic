import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Smile,
  Stethoscope,
  CalendarCheck,
  PlayCircle,
  Award,
  Star,
  Users,
  ShieldCheck,
  Quote,
} from 'lucide-react';

import Button from '../components/common/Button';
import Card from '../components/common/Card';
import SectionTitle from '../components/common/SectionTitle';
import Stat from '../components/common/Stat';
import IconCircle from '../components/common/IconCircle';
import LottieAnimation from '../components/common/LottieAnimation';
import AnimatedSection from '../components/common/AnimatedSection';
import { heartbeat, trustPulse } from '../theme/lottie/animations';
import clinic from '../assets/clinic.webp';

import './Home.css';

const SERVICES = [
  {
    icon: <HeartPulse size={24} strokeWidth={2} />,
    title: 'Cardiology',
    text: 'Complete heart care with advanced technology.',
  },
  {
    icon: <Brain size={24} strokeWidth={2} />,
    title: 'Neurology',
    text: 'Expert care for brain, spine and nervous system.',
  },
  {
    icon: <Bone size={24} strokeWidth={2} />,
    title: 'Orthopedics',
    text: 'Bone, joint and muscle care for active life.',
  },
  {
    icon: <Baby size={24} strokeWidth={2} />,
    title: 'Pediatrics',
    text: 'Comprehensive healthcare for your little ones.',
  },
  {
    icon: <Smile size={24} strokeWidth={2} />,
    title: 'Dental Care',
    text: 'Complete dental care for healthy smiles.',
  },
  {
    icon: <Stethoscope size={24} strokeWidth={2} />,
    title: 'General Medicine',
    text: 'Expert general physicians for everyday care.',
  },
];

function Home() {
  return (
    <>
      {/* =========================
          HERO
      ========================= */}
      <AnimatedSection as="section" id="home" className="hero" delay={0}>
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-container">
          {/* LEFT */}
          <div className="hero-content">
            <span className="welcome-badge">
              <span className="welcome-badge__dot" />
              Welcome to Care Plus Clinic
            </span>

            <h1 className="hero-title">
              Compassionate Care,
              <br />
              <span className="hero-title__accent">Better Health</span>
            </h1>

            <p className="hero-description">
              Expert doctors, advanced technology, and personalized
              care for you and your family.
            </p>

            <div className="hero-buttons">
              <Button
                as={Link}
                to="/appointment"
                variant="primary"
                size="lg"
                leftIcon={<CalendarCheck size={18} />}
              >
                Book Appointment
              </Button>

              <Button
                variant="ghost"
                size="lg"
                leftIcon={
                  <span className="play-icon-circle">
                    <PlayCircle size={36} strokeWidth={1.6} />
                  </span>
                }
              >
                Watch Video
              </Button>
            </div>

            <div className="hero-trust">
              <div className="hero-trust__item">
                <div className="hero-trust__avatars">
                  <span>A</span>
                  <span>P</span>
                  <span>R</span>
                  <span>S</span>
                </div>
                <div>
                  <strong>5,000+</strong>
                  <small>Happy Patients</small>
                </div>
              </div>

              <div className="hero-trust__divider" />

              <div className="hero-trust__item">
                <div className="hero-trust__rating">
                  <Star size={16} fill="currentColor" />
                  <strong>4.8/5</strong>
                </div>
                <small>Patient Rating</small>
              </div>
            </div>
          </div>

          {/* RIGHT — clinic image with stat cards (reference layout) */}
          <div className="hero-image-area">
            <div className="hero-glow" aria-hidden="true" />
            <img
              src={clinic}
              alt="Care Plus Clinic interior"
              className="clinic-image"
            />

            {/* Vertically stacked stat cards on the right */}
            <div className="stat-stack">
              <Card className="floating-stat" padding="md">
                <IconCircle
                  icon={<Award size={20} />}
                  variant="solid"
                  size="md"
                />
                <div className="floating-stat__body">
                  <strong>12+</strong>
                  <span>Years Experience</span>
                </div>
              </Card>

              <Card className="floating-stat" padding="md">
                <IconCircle
                  icon={<Star size={20} />}
                  variant="solid"
                  size="md"
                />
                <div className="floating-stat__body">
                  <strong>8+</strong>
                  <span>Specialists</span>
                </div>
              </Card>

              <Card className="floating-stat" padding="md">
                <IconCircle
                  icon={<Users size={20} />}
                  variant="solid"
                  size="md"
                />
                <div className="floating-stat__body">
                  <strong>5000+</strong>
                  <span>Happy Patients</span>
                </div>
              </Card>
            </div>

            {/* Trust card at bottom-left */}
            <Card variant="default" padding="md" className="hero-trust-card">
              <div className="hero-trust-card__icon">
                <LottieAnimation
                  animationData={trustPulse}
                  size={32}
                  ariaLabel="Health shield pulse"
                />
              </div>
              <div className="hero-trust-card__body">
                <strong>Your Health, Our Priority</strong>
                <small>Safe, trusted, and quality care</small>
                <small>for a better tomorrow.</small>
              </div>
              <div className="hero-trust-card__ecg" aria-hidden="true">
                <LottieAnimation
                  animationData={heartbeat}
                  size={70}
                  ariaLabel="Heartbeat line"
                />
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* =========================
          TRUST STRIP
      ========================= */}
      <AnimatedSection as="section" className="trust-strip" delay={80}>
        <div className="trust-strip__container">
          <div className="trust-strip__item">
            <ShieldCheck size={20} />
            <div>
              <strong>Safe, trusted & quality care</strong>
              <small>For a better tomorrow</small>
            </div>
          </div>
          <div className="trust-strip__divider" />
          <div className="trust-strip__item">
            <Award size={20} />
            <span>Expert Doctors</span>
          </div>
          <div className="trust-strip__item">
            <Stethoscope size={20} />
            <span>Advanced Care</span>
          </div>
          <div className="trust-strip__item">
            <HeartPulse size={20} />
            <span>Patient Focused</span>
          </div>
          <div className="trust-strip__item">
            <Clock size={20} />
            <span>24/7 Support</span>
          </div>
        </div>
      </AnimatedSection>

      {/* =========================
          SERVICES PREVIEW
      ========================= */}
      <AnimatedSection as="section" className="services-preview" delay={120}>
        <div className="services-container">
          <SectionTitle
            eyebrow="Our Services"
            title={
              <>
                Comprehensive Care For Your{' '}
                <span className="highlight">Better Health</span>
              </>
            }
            subtitle="We offer a wide range of medical services to ensure your good health and well-being."
            action={
              <Button as={Link} to="/specialists" variant="outline" size="md">
                View All Services →
              </Button>
            }
          />

          <div className="service-cards">
            {SERVICES.map((s) => (
              <Card
                key={s.title}
                variant="default"
                padding="lg"
                interactive
                className="service-card"
              >
                <IconCircle
                  icon={s.icon}
                  variant="light"
                  size="lg"
                  className="service-icon"
                />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <button className="service-arrow" aria-label={`Learn more about ${s.title}`}>
                  →
                </button>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* =========================
          TESTIMONIAL / STATS
      ========================= */}
      <AnimatedSection as="section" className="stats-section" delay={160}>
        <div className="stats-container">
          <SectionTitle
            align="center"
            eyebrow="Why Choose Us"
            title={
              <>
                Healthcare that puts{' '}
                <span className="highlight">patients first</span>
              </>
            }
          />

          <div className="stats-grid">
            <Stat
              value="12+"
              label="Years Experience"
              icon={<Award size={18} />}
              variant="soft"
            />
            <Stat
              value="8+"
              label="Specialists"
              icon={<Stethoscope size={18} />}
              variant="soft"
            />
            <Stat
              value="5,000+"
              label="Happy Patients"
              icon={<Users size={18} />}
              variant="soft"
            />
            <Stat
              value="4.8/5"
              label="Patient Rating"
              icon={<Star size={18} />}
              variant="soft"
            />
          </div>

          <Card variant="elevated" padding="lg" className="quote-card">
            <Quote size={32} className="quote-card__icon" />
            <p className="quote-card__text">
              “Care Plus Clinic gave my family the kind of attention
              and professionalism we had never experienced before.
              Every visit feels personal, every doctor feels like they
              genuinely care.”
            </p>
            <div className="quote-card__author">
              <div className="quote-card__avatar">A</div>
              <div>
                <strong>Anitha R.</strong>
                <small>Patient since 2021</small>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>
    </>
  );
}

/* small icon helper for the trust strip clock */
function Clock(props) {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default Home;