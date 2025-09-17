import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import WomenPage from './components/WomenPage';
import ProductDetail from './components/ProductDetail';

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
      <CategorySection category="Men" />
      <CategorySection category="Women" />
      <CategorySection category="Kids" />
    </div>
  );

  const MenPage = () => (
    <div>
      <CategorySection category="Men" />
    </div>
  );

  const KidsPage = () => (
    <div>
      <CategorySection category="Kids" />
    </div>
  );

  const SalePage = () => (
    <div>
      <CategorySection category="Sale" />
    </div>
  );

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigation} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
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
