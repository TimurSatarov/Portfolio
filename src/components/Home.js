import { motion } from 'framer-motion';
import Idle from '../gif/Idle.gif'
import '../styles/home.css';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    > 
      <div className="home">
        <div className="content">
          <h1 className="name">Timur Satarov</h1>
          <p className="role">Full-Stack Developer</p>
        </div>
        <div className="gif-container">
          <img src={Idle} alt="Idle character" className="gif" />
        </div>
      </div>
      <div className="background-blur"></div>
    </motion.section>
  );
};

export default Home;
