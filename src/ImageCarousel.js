import React from 'react';
import Slider from 'react-slick';

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        'https://images.unsplash.com/photo-1611064245919-5e58de0a79b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1564520985905-8c7f5d1d7e8b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1569460240341-5f1c6e66b5c8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1591002222816-bc0f30b55a3d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1593456904904-dbff37c8c7dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;