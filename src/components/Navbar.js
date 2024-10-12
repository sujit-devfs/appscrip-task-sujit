import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="title">Your Store</div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>Shop</li>
        <li>Skills</li>
        <li>Stories</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>

      <div className="icons">
        <i className="fa fa-search"></i>
        <i className="fa fa-user"></i>
        <i className="fa fa-heart"></i>
        <i className="fa fa-shopping-cart"></i>
        <select className="language-dropdown">
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
