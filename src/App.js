import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WomenPage from './components/WomenPage';
import MenPage from './components/MenPage';
import MenProductDetail from './components/MenProductDetail';
import WomenProductDetail from './components/WomenProductDetail';
import VirtualTryOn from './components/VirtualTryOn';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();

  const handleNavigation = (page) => {
    setCurrentPage(page);
    navigate(`/${page === 'home' ? '' : page}`);
  };

  const HomePage = () => (
    <div>
      <HeroSection />
      <ContactUs />
      <Footer />
    </div>
  );

  const MenPageComponent = () => <MenPage />;

  const VirtualTryOnPage = () => (
    <div>
      <VirtualTryOn />
      <ContactUs />
      <Footer />
    </div>
  );

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigation} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPageComponent />} />
        <Route path="/virtual-tryon" element={<VirtualTryOnPage />} />
        <Route path="/product/men/:id" element={<MenProductDetail />} />
        <Route path="/product/women/:id" element={<WomenProductDetail />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
