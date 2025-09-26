import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css"; // assuming footer styles are in Home.css
import "./Home.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-col">
          <h4>About JJJUs</h4>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/travel-blog">Travel Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> 123 Somali St, Mogadishu</li>
            <li><i className="fas fa-phone"></i> +252 (xx) xxx-xxxx</li>
            <li><i className="fas fa-envelope"></i> info@somalitravelagency.com</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Somali Travel Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
