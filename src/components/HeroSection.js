import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showGenerated, setShowGenerated] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  const startAnimation = () => {
    setIsPlaying(true);
    setShowGenerated(false);
    setProcessingStep(0);

    // Show processing steps
    setTimeout(() => setProcessingStep(1), 500);
    setTimeout(() => setProcessingStep(2), 1500);
    setTimeout(() => setProcessingStep(3), 2500);
    
    // Show generated result after 5 seconds
    setTimeout(() => {
      setShowGenerated(true);
      setIsPlaying(false);
      setProcessingStep(0);
    }, 5000);
  };

  const resetAnimation = () => {
    setIsPlaying(false);
    setShowGenerated(false);
    setProcessingStep(0);
  };

  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-background">
          {/* Professional Background Animation */}
          <div className="animation-container">
            <div className="grid-lines"></div>
            <div className="subtle-glow glow-1"></div>
            <div className="subtle-glow glow-2"></div>
            <div className="floating-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
              <div className="particle particle-5"></div>
            </div>
            <div className="geometric-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          
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
              <div className="card-image" style={{backgroundImage: "url('/images/4.webp')"}}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Comparison Section */}
      <section className="comparison-section">
        <div className="comparison-container">
          <h2 className="comparison-title">Virtual Try-On Demo</h2>
          <p className="comparison-subtitle">Watch our AI process your images in real-time</p>
          
          {/* Control Button */}
          <div className="animation-controls">
            {!isPlaying && !showGenerated && (
              <button className="play-button" onClick={startAnimation}>
                <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Start Demo
              </button>
            )}
            {showGenerated && (
              <button className="restart-button" onClick={resetAnimation}>
                <svg className="restart-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>
                Try Again
              </button>
            )}
          </div>
          
          <div className="image-comparison-grid">
            <div className="input-images">
              <div className="input-image-container">
                <div className="image-label">Original Image</div>
                <div className="comparison-image input-image-1" style={{backgroundImage: "url('/images/m3.webp')"}}>
                  {isPlaying && processingStep >= 1 && (
                    <div className="processing-overlay">
                      <div className="processing-spinner"></div>
                      <span className="processing-text">Analyzing...</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="input-image-container">
                <div className="image-label">Garment Selection</div>
                <div className="comparison-image input-image-2" style={{backgroundImage: "url('/images/input-image-2.png')"}}>
                  {isPlaying && processingStep >= 2 && (
                    <div className="processing-overlay">
                      <div className="processing-spinner"></div>
                      <span className="processing-text">Processing...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="generated-image-container">
              <div className="image-label">Generated Result</div>
              <div className="comparison-image generated-image">
                {isPlaying && processingStep >= 3 && !showGenerated && (
                  <div className="generating-overlay">
                    <div className="generating-spinner"></div>
                    <span className="generating-text">Generating...</span>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                  </div>
                )}
                {showGenerated && (
                  <div className="generated-content" style={{backgroundImage: "url('/images/generated-image.webp')"}}>
                  </div>
                )}
                {!isPlaying && !showGenerated && (
                  <div className="placeholder-content">
                    <svg className="placeholder-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    <span>Ready to generate</span>
                  </div>
                )}
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
