import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import SuccessMatrixPage from './components/SuccessMatrixPage'; 
import SuccessBrands from './components/SuccessBrands';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <About />
      <SuccessMatrixPage />
      <SuccessBrands />
    </div>
  );
};

export default App;
