// src/pages/Destinations.js

import React from 'react';
import Footer from './Footer.jsx'; // ✅ adjust path if your Footer is elsewhere

import DestinationCard from './DestinationCard'; // Import the DestinationCard component
import { destinations } from '../data/data'; // Import your data array

const Destinations = () => {
    return (
        <div className="destinations-container">
            <h1>Explore Our Amazing Travel Destinations</h1>
            <div className="destinations-list">
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
                        <Footer />

        </div>
    );
};

export default Destinations;