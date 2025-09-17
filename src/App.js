import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import WomenPage from './components/WomenPage';
import MenPage from './components/MenPage';
import KidsPage from './components/KidsPage';
import MenProductDetail from './components/MenProductDetail';
import WomenProductDetail from './components/WomenProductDetail';
import KidsProductDetail from './components/KidsProductDetail';

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

  const MenPageComponent = () => <MenPage />;

  const KidsPageComponent = () => <KidsPage />;

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
        <Route path="/men" element={<MenPageComponent />} />
        <Route path="/kids" element={<KidsPageComponent />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/product/men/:id" element={<MenProductDetail />} />
        <Route path="/product/women/:id" element={<WomenProductDetail />} />
        <Route path="/product/kids/:id" element={<KidsProductDetail />} />
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
