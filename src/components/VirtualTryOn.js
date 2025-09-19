import React, { useState } from 'react';
import './VirtualTryOn.css';

const VirtualTryOn = () => {
  const [personImage, setPersonImage] = useState(null);
  const [garmentImage, setGarmentImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  const handlePersonImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPersonImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGarmentImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGarmentImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = () => {
    if (!personImage || !garmentImage) {
      alert('Please upload both person and garment images');
      return;
    }

    setIsProcessing(true);
    setProcessingStep(1);

    // Simulate processing steps
    setTimeout(() => setProcessingStep(2), 1000);
    setTimeout(() => setProcessingStep(3), 2000);
    setTimeout(() => setProcessingStep(4), 3000);
    
    // Simulate completion after 4 seconds
    setTimeout(() => {
      setGeneratedImage('/images/generated-image.webp');
      setIsProcessing(false);
      setProcessingStep(0);
    }, 4000);
  };

  const resetAll = () => {
    setPersonImage(null);
    setGarmentImage(null);
    setGeneratedImage(null);
    setIsProcessing(false);
    setProcessingStep(0);
  };

  return (
    <div className="virtual-tryon-page">
      {/* Header Section */}
      <section className="virtual-tryon-header">
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
        
        <div className="header-container">
          <h1 className="page-title">Virtual Try-On</h1>
          <p className="page-subtitle">
            Upload your photo and a garment image to see how it looks on you virtually
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="upload-section">
        <div className="upload-container">
          <div className="upload-grid">
            {/* Person Image Upload */}
            <div className="upload-box">
              <div className="upload-header">
                <h3>Upload Your Photo</h3>
                <p>Upload a clear photo of yourself</p>
              </div>
              <div className="upload-area">
                {personImage ? (
                  <div className="image-preview">
                    <img src={personImage} alt="Person" />
                    <button 
                      className="remove-btn" 
                      onClick={() => setPersonImage(null)}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label className="upload-label">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePersonImageUpload}
                      className="file-input"
                    />
                    <div className="upload-content">
                      <svg className="upload-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      <span>Click to upload</span>
                    </div>
                  </label>
                )}
              </div>
            </div>

            {/* Garment Image Upload */}
            <div className="upload-box">
              <div className="upload-header">
                <h3>Upload Garment</h3>
                <p>Upload an image of the clothing item</p>
              </div>
              <div className="upload-area">
                {garmentImage ? (
                  <div className="image-preview">
                    <img src={garmentImage} alt="Garment" />
                    <button 
                      className="remove-btn" 
                      onClick={() => setGarmentImage(null)}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <label className="upload-label">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleGarmentImageUpload}
                      className="file-input"
                    />
                    <div className="upload-content">
                      <svg className="upload-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      <span>Click to upload</span>
                    </div>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <div className="generate-section">
            <button 
              className="generate-btn" 
              onClick={handleGenerate}
              disabled={!personImage || !garmentImage || isProcessing}
            >
              {isProcessing ? (
                <>
                  <div className="spinner"></div>
                  Processing...
                </>
              ) : (
                <>
                  <svg className="generate-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Generate Virtual Try-On
                </>
              )}
            </button>
          </div>

          {/* Processing Steps */}
          {isProcessing && (
            <div className="processing-section">
              <div className="processing-steps">
                <div className={`step ${processingStep >= 1 ? 'active' : ''}`}>
                  <div className="step-number">1</div>
                  <div className="step-text">Analyzing images...</div>
                </div>
                <div className={`step ${processingStep >= 2 ? 'active' : ''}`}>
                  <div className="step-number">2</div>
                  <div className="step-text">Processing body measurements...</div>
                </div>
                <div className={`step ${processingStep >= 3 ? 'active' : ''}`}>
                  <div className="step-number">3</div>
                  <div className="step-text">Applying garment...</div>
                </div>
                <div className={`step ${processingStep >= 4 ? 'active' : ''}`}>
                  <div className="step-number">4</div>
                  <div className="step-text">Finalizing result...</div>
                </div>
              </div>
            </div>
          )}

          {/* Generated Image */}
          {generatedImage && (
            <div className="result-section">
              <div className="result-header">
                <h3>Generated Result</h3>
                <button className="reset-btn" onClick={resetAll}>
                  Try Another
                </button>
              </div>
              <div className="result-image">
                <img src={generatedImage} alt="Generated Virtual Try-On" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default VirtualTryOn;
