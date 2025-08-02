import React, { useState } from 'react';
import './ContactSection.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // You can integrate with a service like Formspree or EmailJS here
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-container">
        <form className="contact-form modern-contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
          <button type="submit" className="cta-btn">Send Message</button>
          {submitted && <p className="form-success">Thank you! I'll get back to you soon.</p>}
        </form>
        <div className="contact-links modern-contact-links">
          <a href="mailto:samar.malla1@gmail.com"><FaEnvelope /> mallasamarj1@gmail.com</a>
          <a href="tel:2063356241"><FaPhone /> 206-335-6241</a>
          <a href="https://www.linkedin.com/in/samarmalla/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          <a href="https://github.com/samarmalla" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
