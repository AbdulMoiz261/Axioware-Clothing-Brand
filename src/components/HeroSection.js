import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">Virtual Try On & 3D Solutions for Fashion</span>
            </h1>
            <div className="hero-buttons">
              <button className="demo-btn">
                <svg className="demo-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                  <path d="M2 12L12 17L22 12"/>
                </svg>
                Try Web Demo
              </button>
              <button className="contact-btn">
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="hero-cards">
            <div className="card card-portrait card-top">
              <div className="card-image" style={{backgroundImage: "url('/images/1.webp')"}}>
              </div>
            </div>
            
            <div className="card card-portrait card-left">
              <div className="card-image" style={{backgroundImage: "url('/images/m4.webp')"}}>
              </div>
            </div>
            
            <div className="card card-portrait card-right">
              <div className="card-image" style={{backgroundImage: "url('/images/3.webp')"}}>
              </div>
            </div>
            
          <div className="card card-portrait card-bottom">
            <div className="card-image" style={{backgroundImage: "url('/images/16.webp')"}}>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="video" className="video-section">
        <div className="video-container">
          <video 
            className="main-video"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => {
              console.error('Video error:', e);
              console.error('Video source:', e.target.src);
            }}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onLoadedData={() => console.log('Video data loaded')}
          >
            <source src="/video/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
