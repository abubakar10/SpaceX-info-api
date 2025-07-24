import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SpaceXStarship from '../../Assets/Icons/Spacexstarship.png';

const Home = () => {
    return (
        <div className="home">
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Welcome to SpaceX</h1>
                        <p>Making life multiplanetary through innovative space technology and exploration. Join us as we push the boundaries of what's possible.</p>
                        <div className="hero-buttons">
                            <Link to="/missions" className="primary-btn">Explore Missions</Link>
                            <Link to="/about" className="secondary-btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={SpaceXStarship} alt="SpaceX Starship" />
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <h2>Our Achievements</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3>200+</h3>
                            <p>Successful Launches</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🛰️</div>
                            <h3>4000+</h3>
                            <p>Satellites Deployed</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">👨‍🚀</div>
                            <h3>50+</h3>
                            <p>Astronauts Transported</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🌍</div>
                            <h3>Mars</h3>
                            <p>Next Destination</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Explore Space?</h2>
                        <p>Discover our latest missions, company history, and future plans for space exploration.</p>
                        <Link to="/company-info" className="cta-btn">Get Started</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 