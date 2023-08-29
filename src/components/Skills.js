import React from 'react';
import { motion } from 'framer-motion';
import '../styles/skills.css';

const Skills = () => {
  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>My Skills</h2>
      <div className="skills-list">
      <div className="skill">
          <h3>Programming Languages</h3>
          <p>Java, JavaScript, Dart</p>
        </div>
        <div className="skill">
          <h3>Frontend Development</h3>
          <p>HTML, CSS, JavaScript, React.js, Vite.js</p>
        </div>
        <div className="skill">
          <h3>Backend Development</h3>
          <p>Node.js, Spring Boot</p>
        </div>
        <div className="skill">
          <h3>Mobile App Development</h3>
          <p>Flutter, Dart</p>
        </div>
        <div className="skill">
          <h3>Database</h3>
          <p>Oracle</p>
        </div>
        <div className="skill">
          <h3>Cloud Services</h3>
          <p>Firebase</p>
        </div>
        {/* Add more skills here */}
      </div>
    </motion.section>
  );
};

export default Skills;
