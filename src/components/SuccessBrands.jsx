import React from 'react';
import bgImage from '../assets/bg-flags.png';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';

const SuccessBrands = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Black Overlay with Low Opacity */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 py-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#D0A151] text-center mb-2 underline underline-offset-8 decoration-[#E6C584]">RESULT OF MY CONSISTENCY & PAIN </h1>
        <p className="text-lg md:text-xl text-white mb-8 px-4 md:px-10 lg:px-24">
          Businesses & Industries Acquired by Mittal Alliance
      </p>




        {/* Logo Section */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[logo1, logo2, logo3, logo4].map((logo, index) => (
          <div key={index} className="bg-[#F4C15E] rounded-[30%] shadow-lg p-4 w-28 h-28 flex items-center justify-center">
            {index === 3 ? (
            <div className="bg-white p-2 w-auto h-auto flex items-center justify-center">
              <img src={logo} alt={`Logo ${index + 1}`} className="max-h-10 object-contain" />
            </div>
            ) : (
        <img src={logo} alt={`Logo ${index + 1}`} className="max-h-12 object-contain" />
          )}
          </div>
          ))}
        </div>


        {/* Tagline */}
        <p className="text-md md:text-lg font-semibold underline underline-offset-4 decoration-[#E6C584] text-center">
          A Multinational “MITTAL” Brand Expanding by 2030
        </p>
      </div>
    </div>
  );
};

export default SuccessBrands;
