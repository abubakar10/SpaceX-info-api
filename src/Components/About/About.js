import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <div className="container">
                    <h1>About SpaceX</h1>
                    <p>Founded in 2002, SpaceX is a private space exploration company that has revolutionized the aerospace industry with reusable rockets and ambitious missions to Mars.</p>
                </div>
            </section>

            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <h2>Our Mission</h2>
                            <p>SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
                            <p>We believe that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not. Today SpaceX is actively developing the technologies to make this possible, with the ultimate goal of enabling human life on Mars.</p>
                        </div>
                        <div className="mission-stats">
                            <div className="stat">
                                <h3>2002</h3>
                                <p>Founded</p>
                            </div>
                            <div className="stat">
                                <h3>12,000+</h3>
                                <p>Employees</p>
                            </div>
                            <div className="stat">
                                <h3>$100B+</h3>
                                <p>Valuation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🚀</div>
                            <h3>Innovation</h3>
                            <p>We push the boundaries of what's possible, constantly innovating to make space travel more efficient and accessible.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🌍</div>
                            <h3>Sustainability</h3>
                            <p>Our reusable rocket technology reduces costs and environmental impact, making space exploration sustainable.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">⭐</div>
                            <h3>Excellence</h3>
                            <p>We strive for perfection in every mission, ensuring the highest standards of safety and reliability.</p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3>Collaboration</h3>
                            <p>We work together as a team and with partners worldwide to achieve our ambitious goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="timeline-section">
                <div className="container">
                    <h2>Our Journey</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-year">2002</div>
                            <div className="timeline-content">
                                <h3>SpaceX Founded</h3>
                                <p>Elon Musk founded SpaceX with the goal of reducing space transportation costs.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2008</div>
                            <div className="timeline-content">
                                <h3>First Success</h3>
                                <p>Falcon 1 becomes the first privately-funded rocket to reach orbit.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2012</div>
                            <div className="timeline-content">
                                <h3>Dragon to ISS</h3>
                                <p>Dragon becomes the first commercial spacecraft to visit the ISS.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2020</div>
                            <div className="timeline-content">
                                <h3>Crew Dragon</h3>
                                <p>First crewed mission to ISS with astronauts aboard Dragon spacecraft.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About; 