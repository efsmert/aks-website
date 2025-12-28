import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Alpha Kappa Sigma</h1>
                <p className="hero-motto">Brotherhood. Honor. Excellence.</p>
                <Link to="/about" className="hero-cta">
                    Discover Our Legacy
                </Link>
            </div>
        </section>
    );
};

export default Hero;
