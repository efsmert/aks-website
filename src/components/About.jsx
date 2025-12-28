import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section id="about" className="about" ref={sectionRef}>
            <div className={`about-container ${isVisible ? 'animate' : ''}`}>
                <h2 className="section-title">Our Legacy</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Founded in Tradition</h3>
                        <p>
                            Since our inception, Alpha Kappa Sigma has been dedicated to fostering a brotherhood built on the pillars of Honor, Integrity, and Excellence. We strive to create leaders who make a lasting impact on their communities and the world.
                        </p>
                        <p>
                            Our history is rich with stories of brothers who have gone on to achieve greatness in various fields, always carrying the values of our fraternity with them.
                        </p>
                    </div>
                    <div className="about-values">
                        <div className="value-card">
                            <h4>Brotherhood</h4>
                            <p>A bond that transcends time and distance.</p>
                        </div>
                        <div className="value-card">
                            <h4>Honor</h4>
                            <p>Living with integrity and respect for all.</p>
                        </div>
                        <div className="value-card">
                            <h4>Excellence</h4>
                            <p>Striving for the highest standards in all endeavors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
