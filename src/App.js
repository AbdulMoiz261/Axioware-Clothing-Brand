import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CategorySection category="Men" />
      <CategorySection category="Women" />
      <CategorySection category="Kids" />
    </div>
  );
}

export default App;
