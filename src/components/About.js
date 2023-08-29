import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import Avatar from '../images/avatar.png';
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
        <img src={Avatar} alt="Avatar" className="avatar" />
        <h2 className="about-me">About Me</h2>
        <p className="intro">
          Hello! I'm Timur Satarov, a passionate and innovative Full-Stack Developer
          with a strong foundation in both frontend and backend technologies. With a
          deep curiosity for technology and a problem-solving mindset, I'm dedicated
          to creating robust and user-friendly web applications that deliver seamless
          experiences.
        </p>
        <p className="intro">
          My journey in software development began with a strong desire to bring
          ideas to life through code. Over the years, I've honed my skills in Java, Dart,
          JavaScript, React.js, Flutter, and more, enabling me to build dynamic and
          interactive web applications. I thrive on challenges and am always eager to
          explore new technologies to stay at the forefront of the ever-evolving tech
          landscape.
        </p>
        <p className="intro">
          When I'm not coding, you can find me exploring the latest advancements in
          the tech world, contributing to open-source projects, or experimenting with
          creative coding projects. I'm a firm believer in the power of collaboration
          and continuous learning, and I'm excited to collaborate on innovative
          projects that push the boundaries of what's possible.
        </p>
        <div className="social-icons">
          <a href="https://github.com/TimurSatarov" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/timur-satarov-010255244/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://instagram.com/satarov_t_s1" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;