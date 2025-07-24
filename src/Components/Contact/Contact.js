import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact">
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our team for inquiries, partnerships, or career opportunities.</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                            
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h3>Address</h3>
                                    <p>1 Rocket Road<br />Hawthorne, CA 90250<br />United States</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>(310) 363-6000</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">✉️</div>
                                <div>
                                    <h3>Email</h3>
                                    <p>info@spacex.com</p>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">🕒</div>
                                <div>
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM PST<br />Saturday - Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h2>Send Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h2>Find Us</h2>
                    <div className="map-placeholder">
                        <p>SpaceX Headquarters - Hawthorne, California</p>
                        <div className="map-info">
                            <p>Interactive map would be integrated here showing our location at 1 Rocket Road, Hawthorne, CA</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact; 