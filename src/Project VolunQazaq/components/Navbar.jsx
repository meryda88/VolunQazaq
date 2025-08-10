import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>VolunQazaq</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {!isOpen ? (
          <>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </>
        ) : (
          <span className="close-icon">&times;</span>
        )}
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Главная</Link></li>
        <li><Link to="/about" onClick={closeMenu}>О нас</Link></li>
        <li><Link to="/events" onClick={closeMenu}>События</Link></li>
        <li><Link to="/contacts" onClick={closeMenu}>Контакты</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Войти</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
