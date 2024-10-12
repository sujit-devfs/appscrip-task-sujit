import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navigation-links">
        <h4>Navigation</h4>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <p className="footer-copyright">&copy; 2024 Your Store</p>
    </footer>
  );
};

export default Footer;
