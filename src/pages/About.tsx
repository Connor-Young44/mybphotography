import React from "react";
import "../styles/about.css";

type AboutProps = {
  profileUrl?: string;
  name?: string;
  bio?: string;
};

const DEFAULT_PROFILE =
  "https://media.licdn.com/dms/image/v2/D5603AQH0HsNZvVFuew/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702655431715?e=1756339200&v=beta&t=caxauQ-JlqsavGla8HSAdpT6C8gHXf4owYjHLRg3WQc";

const skills = [
  "Landscape Photography",
  "Portrait Photography",
  "Event Photography",
  "Photo Editing",
  "Lighting Techniques",
  "Adobe Lightroom & Photoshop",
];

const testimonials = [
  {
    name: "Alex Johnson",
    text: "Maartje captured our wedding beautifully. The photos are stunning and truly tell our story.",
  },
  {
    name: "Sophie Lee",
    text: "Professional, creative, and a joy to work with. Highly recommended for any event!",
  },
];

const experience = [
  {
    role: "Lead Photographer",
    org: "Freelance",
    years: "2018 - Present",
    desc: "Specializing in weddings, events, and portraits for clients across Europe.",
  },
  {
    role: "Photo Editor",
    org: "Creative Studio",
    years: "2016 - 2018",
    desc: "Edited and retouched images for commercial and editorial projects.",
  },
];

const awards = [
  {
    title: "Best Event Photographer",
    org: "Amsterdam Photo Awards",
    year: "2023",
  },
  {
    title: "Top 10 Landscape Photos",
    org: "National Geographic NL",
    year: "2022",
  },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "Based in Amsterdam, available for travel throughout Europe.",
  },
  {
    q: "How far in advance should I book?",
    a: "For weddings and large events, booking 6-12 months ahead is recommended.",
  },
];

const About: React.FC<AboutProps> = ({
  profileUrl = DEFAULT_PROFILE,
  name = "Maartje Young-Braam",
  bio = "I'm a passionate photographer with a love for capturing moments that tell a story. With years of experience in landscape, portrait, and event photography, I strive to create images that inspire and connect.",
}) => {
  return (
    <section className="about-section">
      <div className="about-card">
        <img
          src={profileUrl}
          alt="Profile"
          className="about-profile-img"
        />
        <h2 className="about-name">{name}</h2>
        <p className="about-bio">{bio}</p>
        <a
          href="https://www.linkedin.com/in/maartje-young-braam-04673062/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-linkedin-btn"
        >
          View LinkedIn
        </a>
        <div className="about-skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="about-experience">
          <h3>Experience</h3>
          <ul className="about-experience-list">
            {experience.map((exp) => (
              <li key={exp.role + exp.org}>
                <strong>{exp.role}</strong> at {exp.org}{" "}
                <span>({exp.years})</span>
                <br />
                <span>{exp.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-awards">
          <h3>Awards</h3>
          <ul className="about-awards-list">
            {awards.map((award) => (
              <li key={award.title + award.year}>
                <strong>{award.title}</strong> – {award.org} ({award.year})
              </li>
            ))}
          </ul>
        </div>
        <div className="about-testimonials">
          <h3>Testimonials</h3>
          {testimonials.map((t) => (
            <blockquote key={t.name}>
              <p>"{t.text}"</p>
              <footer>- {t.name}</footer>
            </blockquote>
          ))}
        </div>
        <div className="about-faq">
          <h3>FAQ</h3>
          <ul className="about-faq-list">
            {faqs.map((faq) => (
              <li key={faq.q}>
                <div className="about-faq-question">{faq.q}</div>
                <div className="about-faq-answer">{faq.a}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-contact">
          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:maartje.photography@email.com">
              maartje.photography@email.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;