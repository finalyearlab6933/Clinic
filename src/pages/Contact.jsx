import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Navigation,
} from 'lucide-react';

import Button from '../components/common/Button';
import Card from '../components/common/Card';
import SectionTitle from '../components/common/SectionTitle';
import IconCircle from '../components/common/IconCircle';
import TextField from '../components/common/TextField';
import LottieAnimation from '../components/common/LottieAnimation';
import AnimatedSection from '../components/common/AnimatedSection';
import { successCheck } from '../theme/lottie/animations';

import './Contact.css';

const CONTACT_CARDS = [
  {
    icon: <MapPin size={22} strokeWidth={2} />,
    title: 'Visit Our Clinic',
    text: '123 Health Street,\nChennai, Tamil Nadu\nIndia — 600001',
  },
  {
    icon: <Phone size={22} strokeWidth={2} />,
    title: 'Call Us',
    text: '+91 98765 43210\n+91 98765 43211',
  },
  {
    icon: <Mail size={22} strokeWidth={2} />,
    title: 'Email Us',
    text: 'careplus@gmail.com\nsupport@careplus.com',
  },
  {
    icon: <Clock size={22} strokeWidth={2} />,
    title: 'Working Hours',
    text: 'Monday – Saturday\n9:00 AM – 8:00 PM',
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <AnimatedSection
      as="section"
      id="contact"
      className="contact-section"
      delay={0}
    >
      <div className="contact-container">
        <SectionTitle
          align="center"
          eyebrow="Contact Us"
          title={
            <>
              We're Here To{' '}
              <span className="highlight">Help You.</span>
            </>
          }
          subtitle="Have a question or need assistance? Contact our clinic team and we'll be happy to help."
        />

        <div className="contact-content">
          {/* INFO CARDS */}
          <div className="contact-info">
            {CONTACT_CARDS.map((c) => (
              <Card
                key={c.title}
                variant="default"
                padding="md"
                interactive
                className="contact-card"
              >
                <IconCircle
                  icon={c.icon}
                  variant="solid"
                  size="md"
                />
                <div>
                  <h3>{c.title}</h3>
                  <p>
                    {c.text.split('\n').map((line, i, arr) => (
                      <span key={i}>
                        {line}
                        {i < arr.length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* FORM */}
          <Card variant="elevated" padding="lg" className="contact-form">
            <div className="form-header">
              <IconCircle
                icon={<Send size={20} />}
                variant="light"
                size="md"
              />
              <div>
                <h3>Send Us A Message</h3>
                <p>We typically reply within 24 hours</p>
              </div>
            </div>

            {submitted ? (
              <div className="contact-success">
                <LottieAnimation
                  animationData={successCheck}
                  size={88}
                  loop={false}
                  ariaLabel="Success"
                />
                <h4>Message sent!</h4>
                <p>
                  Thank you for contacting us. Our team will get back
                  to you shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="contact-form-fields"
              >
                <TextField
                  label="Your Name"
                  placeholder="Your Name"
                  required
                />
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <TextField
                  label="Phone"
                  type="tel"
                  placeholder="Phone Number"
                />
                <TextField
                  label="Subject"
                  placeholder="Subject"
                />
                <TextField
                  label="Message"
                  as="textarea"
                  rows={5}
                  placeholder="Your Message"
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  rightIcon={<Send size={16} />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* MAP */}
        <Card variant="default" padding="none" className="map-box">
          <div className="map-box__header">
            <IconCircle
              icon={<MapPin size={22} />}
              variant="solid"
              size="md"
            />
            <div className="map-box__info">
              <strong>Care Plus Clinic Location</strong>
              <small>123 Health Street, Chennai</small>
            </div>
            <Button
              as="a"
              href="https://www.google.com/maps/dir/?api=1&destination=Care+Plus+Clinic+123+Health+Street+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              leftIcon={<Navigation size={14} />}
            >
              Get Directions
            </Button>
          </div>
          <div className="map-box__iframe">
            <iframe
              title="Care Plus Clinic Location"
              src="https://maps.google.com/maps?q=Care+Plus+Clinic+123+Health+Street+Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Card>
      </div>
    </AnimatedSection>
  );
}

export default Contact;