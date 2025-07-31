import React from "react";
import "../styles/services.css";

type Service = {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: string;
};

const services: Service[] = [
  {
    title: "Wedding Photography",
    description:
      "Capture every special moment of your big day with creative, candid, and timeless photos.",
    icon: "💍",
    features: [
      "Full-day coverage",
      "Online gallery",
      "Professional editing",
      "Pre-wedding consultation",
    ],
    price: "From €1200",
  },
  {
    title: "Portrait Sessions",
    description:
      "Personalized portrait sessions for individuals, couples, or families in studio or on location.",
    icon: "📸",
    features: [
      "1-hour session",
      "Multiple locations",
      "High-res downloads",
      "Styling advice",
    ],
    price: "From €250",
  },
  {
    title: "Event Photography",
    description:
      "Professional coverage for corporate events, parties, and conferences.",
    icon: "🎉",
    features: [
      "Flexible packages",
      "Fast delivery",
      "Group & candid shots",
      "Online gallery",
    ],
    price: "From €400",
  },
  {
    title: "Photo Editing",
    description:
      "Expert retouching and editing for your own images, tailored to your style.",
    icon: "🖌️",
    features: [
      "Color correction",
      "Retouching",
      "Creative effects",
      "Quick turnaround",
    ],
    price: "From €50",
  },
];

const Services: React.FC = () => (
  <section className="services-section">
    <div className="services-header">
      <h2>Services</h2>
      <p>
        Discover my photography offerings. Each service is tailored to deliver beautiful, professional results for every occasion.
      </p>
    </div>
    <div className="services-grid">
      {services.map((service) => (
        <div className="service-card" key={service.title}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p className="service-desc">{service.description}</p>
          {service.features && (
            <ul className="service-features">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}
          {service.price && (
            <div className="service-price">{service.price}</div>
          )}
        </div>
      ))}
    </div>
    <div className="services-contact">
      <p>
        Interested in booking or have questions?{" "}
        <a href="mailto:maartje.photography@email.com">Contact me</a> for a custom quote!
      </p>
    </div>
  </section>
);

export default Services;