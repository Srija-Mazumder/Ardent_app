import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome


const Footer = () => {
  return (
    <footer>
      <div className="footer-container d-flex flex-wrap">
        <div className="descrip col-md-6 col-sm-12 mb-3">
          <h5>Edusparks</h5>
          <h6>"Unlock Knowledge. Unleash Potential. Empower Yourself."</h6>
          <p>Edusparks is a dynamic learning platform where students and teachers connect, share, and grow together. 
             Explore a vast library of courses, quizzes, and resources, and unlock a world of learning possibilities.
          </p>
        </div>
        <div className="social-links col-md-3 col-sm-6 mt-5">
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className="contact-info col-md-3 col-sm-6 mb-3">
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Phone: 555-555-5555</p>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
