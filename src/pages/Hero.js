// Hero.js
import React from "react";
import "../styles/Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="top-gradient"></div>
            <div className="hero-content">
                <h1>X-Treme Dreams<br/>N'Tense Determination</h1>
                <p>Where every child can reach for their dreams.</p>
                <button className="learn-more-btn">Learn More</button>
            </div>
            <img src="/images/xtrementensityvector.png" alt="Gym Logo" className="hero-logo" />
            <div className="bottom-gradient"></div>
        </section>
    );
}

export default Hero;
