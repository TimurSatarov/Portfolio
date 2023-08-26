import React, { useEffect, useState  } from 'react';
import { motion } from 'framer-motion';
import MemoryCardGame from './main-page/MemoryCardGame ';
import '../styles/home.css';

const Home = () => {
  return(
    <div>
      <MemoryCardGame/>
    </div>
  );
};

export default Home;
