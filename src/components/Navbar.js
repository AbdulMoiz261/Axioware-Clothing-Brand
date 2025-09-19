import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page) => {
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    if (onNavigate) {
      onNavigate(page);
    } else {
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('home')}
          >
            HOME
          </button>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('men')}
          >
            MEN
          </button>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('women')}
          >
            WOMEN
          </button>
          <button 
            className="nav-link" 
            onClick={() => handleNavigation('virtual-tryon')}
          >
            VIRTUAL TRY-ON
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <div className="navbar-center">
          <div className="logo">
            <img 
              src="/images/axiowarelogo.png" 
              alt="Axioware Logo" 
              className="logo-image"
            />
            <span className="logo-text">AXIOWARE</span>
          </div>
        </div>
        
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation('home')}
          >
            HOME
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation('men')}
          >
            MEN
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation('women')}
          >
            WOMEN
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => handleNavigation('virtual-tryon')}
          >
            VIRTUAL TRY-ON
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
