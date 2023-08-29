import React from 'react';
import { motion } from 'framer-motion';
import '../styles/contact.css';

const Contact = () => {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <div className="contact-links">
          <a href="mailto:https://www.gmail.com" className="email-link">
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/timur-satarov-010255244/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/TimurSatarov"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
