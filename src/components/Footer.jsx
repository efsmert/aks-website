import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Alpha Kappa Sigma</h3>
                    <p>Building leaders, fostering brotherhood, and serving our community since 1995.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: contact@alphakappasigma.org</p>
                    <p>Address: 123 Fraternity Row, College Town, ST 12345</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="#" className="social-link">Instagram</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Alpha Kappa Sigma. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
