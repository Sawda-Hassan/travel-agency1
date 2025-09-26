// src/components/DestinationCard.js
import React from 'react';
import '../Destinations.css';

const DestinationCard = ({ destination }) => {
  if (!destination) {
    return null; // Prevent rendering if no destination is provided
  }

  return (
    <div className="destination-item">
      <div
        className="destination-image"
        style={{ backgroundImage: `url(${destination.imageUrl})` }}
        role="img"
        aria-label={`${destination.name} landscape`}
      ></div>
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
      <p className="destination-rating">Rating: {destination.rating} ⭐</p>
      <div className="destination-details">
        <p><strong>Local Attractions:</strong> {destination.attractions.join(", ")}</p>
        <p><strong>Cultural Highlights:</strong> {destination.culture}</p>
        <p><strong>Travel Tips:</strong> {destination.travelTips}</p>
      </div>
      <h3>User Reviews:</h3>
      <ul className="reviews-list">
        {destination.reviews.map((review, idx) => (
          <li key={idx} className="review-item">
            <strong>{review.user}:</strong> {review.text}
          </li>
        ))}
      </ul>
      <a href={destination.infoLink} className="more-info-link">Learn More</a>
    </div>
  );
};

export default DestinationCard;