import React from "react";
import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";
import { packages, testimonials } from "../data/data";
import "../pages/Home.css";
import heroBg from "../images/travel-bg.jpg"; // ✅ make sure file exists

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1 className="hero-title">Welcome to Our Somali Travel Agency</h1>
        <p className="hero-subtitle">Discover the beauty of Somalia!</p>
        <a href="#featured-packages" className="cta-button">Explore Packages</a>
      </header>

      {/* Search Bar Section */}
      <section className="search-bar-section">
        <div className="container">
          <h2 className="section-title">Find Your Next Adventure in Somalia</h2>
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search destinations, packages..."
              className="search-input"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="featured-packages" className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Packages</h2>
          <div className="card-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <i className="fas fa-globe icon"></i>
              <h3>Diverse Regions</h3>
             
            </div>
            <div className="feature-item">
              <i className="fas fa-headset icon"></i>
              <h3>24/7 Support</h3>
              
            </div>
            <div className="feature-item">
              <i className="fas fa-hand-holding-usd icon"></i>
              <h3>Best Price Guarantee</h3>
             
            </div>
            <div className="feature-item">
              <i className="fas fa-star icon"></i>
              <h3>Expert Guidance</h3>
              
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <p>"{testimonial.quote}"</p>
                <p className="author">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-col">
            <h4>About Us</h4>
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
    </>
  );
};

export default Home;
