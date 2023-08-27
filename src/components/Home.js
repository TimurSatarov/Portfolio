import React, { useEffect, useState  } from 'react';
import { motion } from 'framer-motion';
import MemoryCardGame from './main-page/MemoryCardGame ';
import '../styles/home.css';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    > 
      <div className="home">
        <div className="background-blur"></div>
        <div className="content">
          <h1 className="name">Timur Satarov</h1>
          <p className="role">Full-Stack Developer</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
