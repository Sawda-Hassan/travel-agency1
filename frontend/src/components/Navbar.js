import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../components/Navbar.css'; // Import CSS for Navbar
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-brand">Wadani Travel</Link> {/* Link to Home */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/">Home</Link></li> {/* Link to Home */}
                    <li><Link to="/destinations">Destinations</Link></li> {/* Link to Destinations */}
                    <li><Link to="/services">Services</Link></li> {/* Updated link to Services */}
                    <li><Link to="/about">About Us</Link></li> {/* Link to About Us */}
                    <li><Link to="/contact">Contact</Link></li> {/* Link to Contact */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;