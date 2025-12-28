import React, { useState } from 'react';
import '../styles/Brothers.css';
import brotherPlaceholder from '../assets/brother_placeholder.png';
import { brothers } from '../data/brothers';

const Brothers = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBrothers = brothers.filter(brother =>
        brother.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brother.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="brothers-page">
            <div className="brothers-container">
                <h2 className="section-title">The Brotherhood</h2>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search brothers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="brothers-grid">
                    {filteredBrothers.map((brother) => (
                        <div key={brother.id} className="brother-card">
                            <div className="brother-image-wrapper">
                                <img src={brotherPlaceholder} alt={brother.name} className="brother-image" />
                                <div className="brother-status">{brother.status}</div>
                            </div>
                            <div className="brother-info">
                                <h3>{brother.name}</h3>
                                <p className="brother-role">{brother.role}</p>
                                <div className="brother-details">
                                    <p><strong>Class:</strong> {brother.year}</p>
                                    <p><strong>Major:</strong> {brother.major}</p>
                                    <p><strong>Hometown:</strong> {brother.hometown}</p>
                                    <p><strong>PC:</strong> {brother.pc}</p>
                                    <p><strong>Big:</strong> {brother.big}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brothers;
