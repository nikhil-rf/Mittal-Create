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
import Framework from './components/Framewoek';
import Services from './components/Services';
import Awards from './components/Awards';
import Image from './components/Image';
import Testimonials from './components/Testimonial';
import Podcast from './components/Podcast';
import Struggle from './components/Struggle';
import MasteringSucess from './components/MasteringSucess';
import Blog from './components/Blog';
import Why from './components/Why';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-montserrat">
      {/* <Navbar /> */}
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
      <Framework />
      <Services />
      <Awards />
      <Image />
      <Testimonials />
      <Struggle />
      <Podcast />
      <MasteringSucess />
      <Blog /> 
      <Why />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
