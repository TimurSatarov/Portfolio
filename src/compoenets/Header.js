import React from 'react';
import {Link} from 'react-scroll';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className='sourceLink'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/about" smooth={true} duration={500}>About Me</Link>
          </li>
          <li>
            <Link to="/projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="/skills" smooth={true} duration={500}>My Skills</Link>
          </li>
          <li>
            <Link to="/contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
