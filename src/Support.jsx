import React from 'react';
import './Support.css';
import { motion } from 'framer-motion';

const Support = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="contact-page"
        >
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1 className="hero-title">Contact Us</h1>
                </div>
            </section>

            <div className="contact-container">
                {/* Contact Info Cards */}
                <div className="info-cards-section">
                    <div className="info-card">
                        <div className="info-icon contact-icon-bg">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="info-details">
                            <h3>Contact</h3>
                            <p>Coming Soon</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon email-icon-bg">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-details">
                            <h3>Email</h3>
                            <p>support@buckholding.com</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon address-icon-bg">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-details">
                            <h3>Address</h3>
                            <p>1029 Brighton Beach Ave, New York Brooklyn, United States</p>
                        </div>
                    </div>
                </div>

                {/* Form & Map Section */}
                <section className="main-contact-section">
                    <div className="section-intro">
                        <span className="subtitle-tag">✦ Contact Us</span>
                        <h2 className="section-main-heading">Get in touch with our experts</h2>
                    </div>

                    <div className="contact-grid">
                        {/* Map Component */}
                        <div className="map-view">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12111.411604921966!2d-73.96645855!3d40.5786196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2447472ae6b25%3A0xc3f58e137452d37c!2sBrighton%20Beach%2C%20Brooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1703954000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h3 className="form-title">Have any questions?</h3>
                            <form className="expert-contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" placeholder="Phone No" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message" rows="5"></textarea>
                                </div>
                                <button type="submit" className="submit-message-btn">
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default Support;
