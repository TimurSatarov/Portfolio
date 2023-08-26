import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-content">
        <h2 className='about-me'>About Me</h2>
        <p>My introduction goes here...</p>
      </div>
    </motion.section>
  );
};

export default About;
