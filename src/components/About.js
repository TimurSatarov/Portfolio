import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import Avatar from '../images/avatar.png';

const About = () => {
  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <div className="avatar-container">
          <img src={Avatar} alt='Avatar' className="avatar" />
        </div>
        <div className="about-content">
          <h2 className='about-me'>About Me</h2>
          <p className='intro'>
            I am a passionate Software Developer dedicated to continuous learning and improving my skillset to deliver efficient and high-quality results.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
