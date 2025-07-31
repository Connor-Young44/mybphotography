import React, { useState } from "react";
import "../styles/contact.css";

const EMAIL_LIMIT_MINUTES = 15;

function setCookie(name: string, value: string, minutes: number) {
  const expires = new Date(Date.now() + minutes * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "rate-limited">("idle");

  // Check cookie for rate limiting
  React.useEffect(() => {
    const lastSent = getCookie("contact_last_sent");
    if (lastSent) {
      const diff = Date.now() - parseInt(lastSent, 10);
      if (diff < EMAIL_LIMIT_MINUTES * 60 * 1000) {
        setStatus("rate-limited");
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Rate limit check
    const lastSent = getCookie("contact_last_sent");
    if (lastSent) {
      const diff = Date.now() - parseInt(lastSent, 10);
      if (diff < EMAIL_LIMIT_MINUTES * 60 * 1000) {
        setStatus("rate-limited");
        return;
      }
    }

    // Simulate sending email (replace with actual API/email logic)
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setCookie("contact_last_sent", Date.now().toString(), EMAIL_LIMIT_MINUTES);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Contact Me</h2>
        <p>
          Have a question or want to book a session? Fill out the form below and I'll get back to you as soon as possible.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={status === "sending" || status === "rate-limited"}
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={status === "sending" || status === "rate-limited"}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              disabled={status === "sending" || status === "rate-limited"}
            />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              disabled={status === "sending" || status === "rate-limited"}
            />
          </div>
          <button
            type="submit"
            className="contact-btn"
            disabled={status === "sending" || status === "rate-limited"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status === "sent" && (
          <div className="contact-success">
            Thank you! Your message has been sent.
          </div>
        )}
        {status === "error" && (
          <div className="contact-error">
            Something went wrong. Please try again later.
          </div>
        )}
        {status === "rate-limited" && (
          <div className="contact-warning">
            You’ve recently sent a message. Please wait {EMAIL_LIMIT_MINUTES} minutes before sending another.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;