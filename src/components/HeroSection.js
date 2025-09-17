import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div 
        className="hero-background"
        style={{
          backgroundImage: "url('/images/hero-image1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-text">
            <h1 className="hero-title">SCHIFFLI CAPSULE</h1>
            <button className="shop-now-btn">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
