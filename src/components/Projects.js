import React, {useState} from 'react';
import { motion } from 'framer-motion';
import '../styles/projects.css';
import Forest from '../images/forest.jpeg';
import Fox_Forest from '../images/fox-forest.jpg';
import Mountain from '../images/mountain.jpg';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const [activeCard, setActiveCard] = useState(null);
  const projects = [
    {
      title: 'Chat-App',
      description: 'The Real-Time Chat Application is a dynamic and interactive mobile app developed using Flutter, Firebase, and Firebase Cloud Messaging. This project demonstrates my expertise in creating engaging and responsive chat interfaces while leveraging the power of real-time data synchronization and push notifications..',
      image: Forest,
      github: 'https://github.com/TimurSatarov/Chat-App.git',
    },
    {
      title: 'ArcaneWorlds',
      description: 'ArcaneWorlds - is an exciting 2D JavaFX game that takes players on a thrilling adventure through an imaginative world filled with challenges and surprises. In this game, players control a dynamic character who must navigate through an ever-changing landscape while avoiding obstacles, collecting rewards, and overcoming obstacles.',
      image: Fox_Forest,
      github: 'https://github.com/TimurSatarov/ArcaneWorlds.git',
    },
  ];

  const handleCardClick = (index) => {
    if(activeCard === index){
        setActiveCard(null);
    }else{
        setActiveCard(index);
    }
  }

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="projects-content">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              className={`project ${activeCard === index ? 'active' : ''}`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <img src={project.image} alt={`Project ${index + 1}`} />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="github-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

