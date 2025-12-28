import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Always show background on pages other than home if desired, or keep dynamic
    const isHome = location.pathname === '/';
    const navbarClass = `navbar ${scrolled || !isHome ? 'scrolled' : ''}`;

    return (
        <nav className={navbarClass}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Alpha Kappa Sigma
                </Link>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/brothers">Brothers</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
