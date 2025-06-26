import React from 'react';

// const HeroSection = () => {
//   return (
//     <section className="relative text-white text-center px-4 py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bg-image.jpg)' }}>
//       <div className="absolute inset-0 bg-black"></div>
//       <div className="relative z-10 max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-bold text-[#CE9D4B] mb-2">MITTAL <span className='text-white'> CREATE</span></h1>
//         <h2 className="text-xl text-[#E6C584] md:text-2xl font-semibold mb-6">VISIONARY CEO’S & INDUSTRY-LEADING ENTERPRISES</h2>
//         <p className="text-lg md:text-xl mb-4 font-medium">I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES</p>
//         <p className="text-base md:text-lg mb-8">Blending Soul & Strategy to Shape Legacy, Influence, and Impact</p>

//         <div className="text-yellow-400 font-semibold mb-2">MY WORK HAS REACHED AUDIENCES AT</div>
//         <div className="flex flex-wrap justify-center gap-6 mb-6">
//           {['abc', 'amazon', 'cbs', 'entrepreneur', 'forbes', 'fox business', 'msnbc', 'tedx', 'ypo'].map((brand) => (
//             <span key={brand} className="uppercase text-sm opacity-90">{brand}</span>
//           ))}
//         </div>

//         <div className="text-yellow-400 font-semibold mb-2">TRUSTED BY</div>
//         <div className="flex flex-wrap justify-center gap-4 text-sm">
//           {['Reuters', 'MarketWatch', 'The Wall Street Journal', 'CNN', 'Financial Times', 'Fast Company', 'The New York Times', 'The Economic Times', 'Business Insider', 'BBC', 'Yahoo Finance', 'Fortune', 'Harvard Review', 'Bloomberg'].map((brand) => (
//             <span key={brand} className="opacity-90">{brand}</span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import bgImage from '../assets/bg.png'; // Adjust the path if needed

const HeroSection = () => {
  return (
    <section
      className="relative text-white text-center px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Black overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#CE9D4B] mb-2">
          MITTAL <span className="text-white">CREATE</span>
        </h1>
        <h2 className="text-xl text-[#E6C584] md:text-2xl font-semibold mb-6">
          VISIONARY CEO’S & INDUSTRY-LEADING ENTERPRISES
        </h2>
        <p className="text-lg md:text-xl mb-4 font-medium">
          I BUILD ICONIC PERSONAL BRANDS & REDEFINE CORPORATE IDENTITIES
        </p>
        <p className="text-base md:text-lg mb-8">
          Blending Soul & Strategy to Shape Legacy, Influence, and Impact
        </p>

        <div className="text-yellow-400 font-semibold mb-2">
          TRUSTED BY
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {[
            'abc',
            'amazon',
            'cbs',
            'entrepreneur',
            'forbes',
            'fox business',
            'msnbc',
            'tedx',
            'ypo',
          ].map((brand) => (
            <span key={brand} className="uppercase text-sm opacity-90">
              {brand}
            </span>
          ))}
        </div>

        <div className="text-yellow-400 font-semibold mb-2">MY WORK HAS REACHED AUDIENCES AT</div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            'Reuters',
            'MarketWatch',
            'The Wall Street Journal',
            'CNN',
            'Financial Times',
            'Fast Company',
            'The New York Times',
            'The Economic Times',
            'Business Insider',
            'BBC',
            'Yahoo Finance',
            'Fortune',
            'Harvard Review',
            'Bloomberg',
          ].map((brand) => (
            <span key={brand} className="opacity-90">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
