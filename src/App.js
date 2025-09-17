import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';
import WomenPage from './components/WomenPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'women':
        return <WomenPage />;
      case 'men':
        return (
          <div>
            <CategorySection category="Men" />
          </div>
        );
      case 'kids':
        return (
          <div>
            <CategorySection category="Kids" />
          </div>
        );
      case 'sale':
        return (
          <div>
            <CategorySection category="Sale" />
          </div>
        );
      default:
        return (
          <div>
            <HeroSection />
            <CategorySection category="Men" />
            <CategorySection category="Women" />
            <CategorySection category="Kids" />
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigation} />
      {renderPage()}
    </div>
  );
}

export default App;
