import {Link} from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className='sourceLink'>
          <li>
            <Link to='/' smooth={true} duration={500} title='Home'>Home</Link>
          </li>
          <li>
            <Link to="/about" smooth={true} duration={500} title='About'>About Me</Link>
          </li>
          <li>
            <Link to="/projects" smooth={true} duration={500} title='Projects'>Projects</Link>
          </li>
          <li>
            <Link to="/skill" smooth={true} duration={500} title='My Skills'>My Skills</Link>
          </li>
          <li>
            <Link to="/contact" smooth={true} duration={500} title='Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
