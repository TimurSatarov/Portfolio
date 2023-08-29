import Idle from '../gif/Idle.gif'
import '../styles/home.css';

const Home = () => {
  return (
    <section> 
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
    </section>
  );
};

export default Home;
