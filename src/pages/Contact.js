// src/ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css'; // This will contain the new styles

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send this data to a backend server
        console.log({ name, email, message });
        alert('Your message has been sent!'); // Simple feedback
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-page-wrapper">
            {/* Main contact details section with dark background */}
            <section className="contact-details-section">
                {/* Services Column */}
                <div className="contact-column services-column">
                    <h3>Services</h3>
                    <ul>
                        <li>Charter Flights</li>
                        <li>Hajj and Umrah</li>
                        <li>Cargo and Logistics</li>
                        <li>Tours</li>
                        <li>Hotel Booking</li>
                    </ul>
                    {/* LinkedIn icon */}
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-large">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>

                {/* Mogadishu Office Info Column */}
                <div className="contact-column office-info">
                    <h3>Contact Information</h3>
                    <div className="contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>+252 611442828</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>+252 611442929</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <p>info@dalabeyairtravel.com</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <p>Our Office</p>
                            <p>Maka Almukarama</p>
                            <p>Street, Hotel Tayo</p>
                            <p>Building, Wabari</p>
                            <p>District, Mogadishu-Somalia</p>
                        </div>
                    </div>
                </div>

                {/* Nairobi Office Info Column */}
                <div className="contact-column office-info">
                    <h3>Hotline</h3> {/* Title from image */}
                    <div className="contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>+252 612009166</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>+252 611442929</p>
                    </div>
                     <div className="contact-item">
                        <i className="fas fa-phone-alt"></i>
                        <p>+254 769 916939</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <p>nbo@dalabeyairtravel.com</p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <p>Our Office</p>
                            <p>Business Bay Square</p>
                            <p>Pumwani area, Eastleigh</p>
                            <p>Nairobi-Kenya.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Column (will contain the floating form) */}
                <div className="contact-form-column">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h3>Send us a message</h3>
                        <div className="form-group">
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your message (optional)</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>

            {/* Blue bar below the main contact section */}
            <div className="contact-blue-bar"></div>
        </div>
    );
};

export default ContactUs;