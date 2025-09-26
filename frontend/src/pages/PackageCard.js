import React from 'react';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ pkg }) => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate(`/booking/${pkg.id}`);
    };

    return (
        <div className="package-card">
            <img src={pkg.image} alt={pkg.title} className="card-image" />
            <div className="card-content">
                <h5 className="card-title">{pkg.title}</h5>
                <p className="card-description">{pkg.description}</p>
                <button className="card-button" onClick={handleBookNow}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default PackageCard;