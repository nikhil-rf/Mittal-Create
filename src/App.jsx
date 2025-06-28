import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import SuccessMatrixPage from './components/SuccessMatrixPage'; 
import SuccessBrands from './components/SuccessBrands';
import Connect from './components/Connect';
import PainfulBeginning from './components/PainfulBeginning';
import Rebellion from './components/Rebellion';
import RisePage from './components/Rise';
import BadBusiness from './components/Badbuisness';
import Legacy from './components/Legacy';

const App = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <HeroSection />
      <About />
      <SuccessMatrixPage />
      <SuccessBrands />
      <Connect />
      <PainfulBeginning />
      <Rebellion />
      <RisePage />
      <BadBusiness />
      <Legacy />
    </div>
  );
};

export default App;
