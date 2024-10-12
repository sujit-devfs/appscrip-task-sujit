import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="email-subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="contact-details">
        <p>Contact us: +123456789</p>
        <p>Currency: USD</p>
      </div>
    </div>
  );
};

export default Contact;
