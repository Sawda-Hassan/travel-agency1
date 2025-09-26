import "./Services.css"
import Footer from "./Footer"
import airPlaneImg from "../images/a-p.jpg";
 import p from "../images/p.jpg";
import s from "../images/s.jpg";
import h from "../images/h.jpg";
const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Flight Booking",
      description:
        "Book domestic and international flights to all major destinations with competitive prices and flexible options.",
      icon: "fas fa-plane",
      
      image: airPlaneImg,
      imageAlt: "Airplane at airport",
    },
    {
      id: 2,
      title: "Hotel Reservations",
      description: "Find and book the perfect accommodation from budget-friendly to luxury hotels worldwide.",
      icon: "fas fa-bed",
      image: p,
      imageAlt: "Hotel lobby",
    },
   
    {
      id: 4,
      title: "Visa Assistance",
      description: "Get expert help with visa applications and documentation for hassle-free international travel.",
      icon: "fas fa-passport",
      image: s,
      imageAlt: "Passport and visa",
    },
    
  ]

  const specialServices = [
    {
      title: "Business Travel",
      description: "Corporate travel solutions with dedicated support and flexible booking options.",
      icon: "fas fa-briefcase",
    },
    {
      title: "Group Travel",
      description: "Special packages and discounts for group bookings and family vacations.",
      icon: "fas fa-users",
    },
    {
      title: "Honeymoon Packages",
      description: "Romantic getaways and special honeymoon packages for couples.",
      icon: "fas fa-heart",
    },
    {
      title: "Adventure Tours",
      description: "Exciting adventure tours and outdoor activities for thrill seekers.",
      icon: "fas fa-mountain",
    },
  ]

  return (
    <div className="services-page">
      {/* Header Section */}
      <div className="services-header">
        <div className="container">
          <h1 className="services-header-title">Our Services</h1>
          <p className="services-header-breadcrumbs">Home / Our Services</p>
        </div>
      </div>

      {/* Main Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Complete Travel Solutions</h2>
            <p className="section-description">
              We offer comprehensive travel services to make your journey memorable and hassle-free
            </p>
          </div>
          <div className="services-grid">
            {serviceData.map((service) => (
              <div key={service.id} className="service-card-video-style">
                <div className="card-image-wrapper">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.imageAlt}
                    className="card-image-video-style"
                  />
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

      <section className="special-services-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Specialized Services</h2>
            <p className="section-description">Tailored solutions for specific travel needs and preferences</p>
          </div>
          <div className="special-services-grid">
            {specialServices.map((service, index) => (
              <div key={index} className="special-service-card">
                <div className="special-service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="special-service-title">{service.title}</h3>
                <p className="special-service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2 className="section-title">Why Choose Us?</h2>
              <div className="features-list">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>24/7 Customer Support</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Best Price Guarantee</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Experienced Travel Experts</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Secure Online Booking</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Flexible Cancellation</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Personalized Service</span>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img src={h} alt="Happy travelers" />
            </div>
          </div>
        </div>
      </section>
                        <Footer />

     
    </div>
    
  )
}

export default Services
