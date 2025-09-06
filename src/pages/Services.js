import React from 'react';
import './Services.css'; // Ensure this path is correct

const Services = () => {
    // Data for the single service: Air Ticketing for local Somali regions
    // IMPORTANT: Replace this placeholder image URL with an actual image of a Somali airport or local travel scene.
    // For example: '/images/mogadishu-airport.jpg' (assuming it's in public/images)
    const serviceData = [
        {
            id: 1,
            title: 'Local Air Ticketing',
            description: 'Your reliable partner for air ticketing within all major Somali regions, including Kismayo, Mogadishu, and Garowe.',
            icon: 'fas fa-plane', // Font Awesome icon for airplane
            image: '/images/local-airport.jpg', // <--- UPDATED: Use your local image path here
            imageAlt: 'Airplane at a local Somali airport',
        },
    ];

    return (
        <div className="services-page">
            {/* Header Section - Mimics the video's top banner */}
            <div className="services-header">
                <div className="container">
                    <h1 className="services-header-title">Our Services</h1>
                    <p className="services-header-breadcrumbs">Home / Our Services</p>
                </div>
            </div>

            {/* Services Grid Section */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {serviceData.map(service => (
                            <div key={service.id} className="service-card-video-style">
                                <div className="card-image-wrapper">
                                    <img src={service.image} alt={service.imageAlt} className="card-image-video-style" />
                                    {/* Blue band and circular icon */}
                                    <div className="card-icon-band">
                                        <div className="card-icon-circle">
                                            <i className={service.icon}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content-video-style">
                                    <h3 className="card-title-video-style">{service.title}</h3>
                                    <p className="card-description-video-style">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;