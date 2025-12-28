import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-page">
            <div className="contact-container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p><strong>Email:</strong> contact@alphakappasigma.org</p>
                        <p><strong>Address:</strong>39 Atherton St, Roxbury, MA 02119</p>
                        <div className="social-links-large">
                            <a href="#" className="social-link-large">Instagram</a>
                            <a href="#" className="social-link-large">Twitter</a>
                            <a href="#" className="social-link-large">LinkedIn</a>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
