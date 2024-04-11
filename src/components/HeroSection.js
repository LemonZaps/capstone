import React from 'react';
import heropic from "../assets/heropic.jpg";
import LinkButton from './Button';

const HeroSection = () => {
    return (
        <div id="hero-section" className="hero-grid">
            <div className="text-container">
                <h1 id="hero-title">Little Lemon</h1>
                <h3 id="hero-subtitle">Chicago</h3>
                <p id="hero-desc">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <LinkButton to="/reservations" description="Reserve a Table" />
            </div>
            <img src={heropic} alt="Tray with food" className="hero-image" />
        </div>
    );
}

export default HeroSection;
