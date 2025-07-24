import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-title">
                    <h1>SpaceX Dashboard</h1>
                    <p>Exploring the future of space technology</p>
                </div>
                <div className="header-actions">
                    <Link to="/company-info" className="header-btn">Get Started</Link>
                </div>
            </div>
        </header>
    );
};

export default Header; 