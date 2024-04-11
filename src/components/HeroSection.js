import React from 'react';
import heropic from "../assets/heropic.jpg";
import LinkButton from './Button';


const HeroSection = () => {
    return (
        <div id="hero-section">
            <h1 id="hero-title">Little Lemon</h1>
            <h3 id="hero-subtitle">Chicago</h3>
            <p id="hero-desc">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <LinkButton to="/reservations" description="Reserve a Table" />
            <img src={heropic} alt="Tray with food" width="300" />
        </div>
    );
}
 export default HeroSection;