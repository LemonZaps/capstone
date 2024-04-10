import React from 'react';
import heropic from "../assets/heropic.jpg";




const HeroSection = () => {
    return (

    <div id="hero-section">
        <h1 id="hero-title">Little Lemon</h1>
        <h3 id="hero-subtitle">Chicago</h3>
        <p id="hero-desc">We are a family owned Mediterranean restaurant, focused on tradition recipes served with a modern twist </p>
        <button>Reserve a Table</button>
        <img src={heropic} alt="Tray with food" width="300px"></img>
    </div>
)
}

export default HeroSection;