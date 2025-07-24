import React from 'react';
import './Footer.css';
import SpaceXLogo from '../../Assets/Icons/Spacexlogo.svg';
import TwitterIcon from '../../Assets/Icons/TwitterIcon.png';
import RedditIcon from '../../Assets/Icons/Reddit.png';
import WikipediaIcon from '../../Assets/Icons/Wikipedia.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={SpaceXLogo} alt="SpaceX Logo" />
                        <h3>SpaceX</h3>
                    </div>
                    <p>Making life multiplanetary through innovative space technology and exploration.</p>
                </div>
                
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/company-info">Company Info</a></li>
                        <li><a href="/history">History</a></li>
                        <li><a href="/missions">Missions</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#press">Press</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://twitter.com/spacex" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterIcon} alt="Twitter" />
                        </a>
                        <a href="https://reddit.com/r/spacex" target="_blank" rel="noopener noreferrer">
                            <img src={RedditIcon} alt="Reddit" />
                        </a>
                        <a href="https://en.wikipedia.org/wiki/SpaceX" target="_blank" rel="noopener noreferrer">
                            <img src={WikipediaIcon} alt="Wikipedia" />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; 2024 SpaceX. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 