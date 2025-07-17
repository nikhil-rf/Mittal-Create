// import React from 'react';
// import laptop from '../assets/laptop.png';
// import laptopImage from '../assets/laptopImg.png';

// const MittalBrandPage = () => {
//   return (
//     <div className="min-h-screen bg-black text-white py-20">
//       {/* Header Section */}
//       <div className="text-center pt-24 pb-8 ">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#D0A151] mb-4">
//           LET'S BUILD SOMETHING GREAT TOGETHER
//         </h1>
//         <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//           Ready to transform your business? Get in touch with our team of experts.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-start">

//           {/* Left Side - WHY MITTAL Breakdown */}
//           <div>
//             {/* Header Title */}
//             <div className="mb-12 ml-6">
//               <h2 className="text-6xl md:text-7xl font-bold">
//                 <span className="text-[#D0A151]">W</span>
//                 <span className="text-white text-4xl">HY</span>
//               </h2>
//               <h2 className="text-6xl md:text-7xl font-bold -mt-4">
//                 <span className="text-[#D0A151]">M</span>
//                 <span className="text-white text-4xl">ITTAL</span>
//               </h2>
//               <div className="mt-4">
//                 <p className="text-white text-lg">Creating World-Class Brands</p>
//                 <div className="w-120 h-1 bg-[#D0A151] mt-2"></div>
//               </div>
//             </div>

//             {/* MITTAL Breakdown Vertical */}
// <div className="ml-6 mt-12 space-y-16">

//   {/* M - MEANING */}
//   <div className="flex gap-6 items-start">
//     <div className="text-[130px] font-bold w-28 bg-gradient-to-b from-[#fff8e1] via-[#d4af37] to-[#a87d2a] text-transparent bg-clip-text leading-none">
//       M
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-[#D0A151] mb-2">MEANING</h3>
//       <p className="text-gray-400 italic text-sm mb-1">"We're in the business of not just making what happens, but directions."</p>
//       <p className="text-gray-500 text-xs mb-2">— Sanjit + GenOps</p>
//       <p className="text-[#D0A151] text-sm">
//         Discover the soul of the brand - its deeper purpose, vision, and mission. Meaning drives impact.
//       </p>
//     </div>
//   </div>

//   {/* I - INTEGRITY */}
//   <div className="flex gap-6 items-start">
//     <div className="text-[130px] font-bold w-28 bg-gradient-to-b from-[#fff8e1] via-[#d4af37] to-[#a87d2a] text-transparent bg-clip-text leading-none">
//       I
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-[#D0A151] mb-2">INTEGRITY</h3>
//       <p className="text-gray-400 italic text-sm mb-1">"Integrity is doing the right thing, even when no one is watching."</p>
//       <p className="text-gray-500 text-xs mb-2">— C.S. Lewis</p>
//       <p className="text-[#D0A151] text-sm">
//         Audit the alignment between your message and your actions — across online, offline, and internal culture.
//       </p>
//     </div>
//   </div>

//   {/* T - TRUST */}
//   <div className="flex gap-6 items-start">
//     <div className="text-[130px] font-bold w-28 bg-gradient-to-b from-[#fff8e1] via-[#d4af37] to-[#a87d2a] text-transparent bg-clip-text leading-none">
//       T
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-[#D0A151] mb-2">TRUST</h3>
//       <p className="text-gray-400 italic text-sm mb-1">"Trust is built with consistency."</p>
//       <p className="text-gray-500 text-xs mb-2">— Lincoln Chafee</p>
//       <p className="text-[#D0A151] text-sm">
//         Build and measure reputation, reviews, and credibility — how others speak about you matters more than what you say.
//       </p>
//     </div>
//   </div>

//   {/* T - TRANSPARENCY */}
//   <div className="flex gap-6 items-start">
//     <div className="text-[130px] font-bold w-28 bg-gradient-to-b from-[#fff8e1] via-[#d4af37] to-[#a87d2a] text-transparent bg-clip-text leading-none">
//       T
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-[#D0A151] mb-2">TRANSPARENCY</h3>
//       <p className="text-gray-400 italic text-sm mb-1">"Honesty and transparency make you vulnerable. Be honest and transparent anyway."</p>
//       <p className="text-gray-500 text-xs mb-2">— Mother Teresa</p>
//       <p className="text-[#D0A151] text-sm">
//         Showcase authentic communication, open processes, and ethical storytelling. Vulnerability builds connection.
//       </p>
//     </div>
//   </div>

//   {/* A - AUTHORITY */}
//   <div className="flex gap-6 items-start">
//     <div className="text-[130px] font-bold w-28 bg-gradient-to-b from-[#fff8e1] via-[#d4af37] to-[#a87d2a] text-transparent bg-clip-text leading-none">
//       A
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-[#D0A151] mb-2">AUTHORITY</h3>
//       <p className="text-gray-400 italic text-sm mb-1">"Become the expert it's the authority by the team — and crafts will follow."</p>
//       <p className="text-gray-500 text-xs mb-2">— Don Kennedy</p>
//       <p className="text-[#D0A151] text-sm">
//         Develop your thought leadership, recognition, and influence in the market or community you serve.
//       </p>
//     </div>
//   </div>

//   {/* L - LEGACY */}
//   <div className="flex gap-6 items-start">
//     <div className="text-[130px] font-bold w-28 bg-gradient-to-b from-[#fff8e1] via-[#d4af37] to-[#a87d2a] text-transparent bg-clip-text leading-none">
//       L
//     </div>
//     <div>
//       <h3 className="text-xl font-bold text-[#D0A151] mb-2">LEGACY</h3>
//       <p className="text-gray-400 italic text-sm mb-1">"Carve your name on hearts, not tombstones."</p>
//       <p className="text-gray-500 text-xs mb-2">— Shannon Alder</p>
//       <p className="text-[#D0A151] text-sm">
//         Architect a future-ready brand that leaves a meaningful mark, scales sustainably, and transcends trends.
//       </p>
//     </div>
//   </div>

// </div>

//           </div>

//           {/* Vertical Divider */}
// <div className="hidden lg:block w-px bg-[#D0A151] h-[210vh] mx-auto mt-59"></div>

//           {/* Right Side - Laptop with Screen */}
//           <div className="flex flex-col items-center justify-center">
//             <div className="relative mt-60 shadow-[#D0A151]">
//               {/* Laptop Base */}

//                 <img
//                 src={laptop}
//                 alt="Laptop"
//                 className="w-90 max-w-lg "
//               />

//               {/* Screen Content Overlay */}
//               <div className="absolute top-[9%] left-[11%] right-[11%] bottom-[45%] z-20">
//                 <img
//                 src={laptopImage}
//                 alt="Laptop screen"
//                 className="w-full max-w-[270px] h-auto object-cover mt-11 ml-1.5"
//                 />
//               </div>

//             </div>

//             {/* Text Content */}
//             <div className="text-center mb-25">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 BEHIND THE BADASS BRANDS
//               </h3>
//               <p className="text-white text-lg font-semibold mb-8">
//                 INNOVATIVE INSIGHTS FROM 100+ ICONIC<br />
//                 INTERNET INFLUENCERS
//               </p>

//               {/* CTA Button */}
//               <button className="bg-gradient-to-r from-[#D0A151] to-[#D0A151] hover:from-[#D0A151] hover:to-[#D0A151] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
//                 SCHEDULE A MEETING
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default MittalBrandPage;

// import React from "react";
// import laptop from "../assets/laptop.png";
// import laptopImage from "../assets/laptopImg.png";

// const MittalBrandPage = () => {
//   return (
//     <div className="min-h-screen bg-black text-white py-20">
//       {/* Header Section */}
//       <div className="text-center pt-24 pb-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#D0A151] mb-4">
//           LET'S BUILD SOMETHING GREAT TOGETHER
//         </h1>
//         <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//           Ready to transform your business? Get in touch with our team of
//           experts.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-start">
//           {/* Left Side - WHY MITTAL Breakdown */}
//           <div>
//             <div className="mb-12 ml-6">
//               <h2 className="text-6xl md:text-7xl font-bold">
//                 <span className="text-[#D0A151]">W</span>
//                 <span className="text-white text-4xl">HY</span>
//               </h2>
//               <div className="flex items-baseline -mt-4">
//                 <span className="text-[#D0A151] text-[80px] md:text-[100px] font-bold leading-none">
//                   M
//                 </span>
//                 <span className="text-white text-[40px] md:text-[48px] font-bold ml-2 leading-none">
//                   ITTAL
//                 </span>
//               </div>

//               <div className="mt-4">
//                 <p className="text-white text-lg">
//                   Creating World-Class Brands
//                 </p>
//                 <div className="w-32 h-1 bg-[#D0A151] mt-2"></div>
//               </div>
//             </div>

//             {/* MITTAL Breakdown Vertical */}
//             <div className="ml-6 mt-12 space-y-16">
//               {[
//                 {
//                   letter: "M",
//                   title: "MEANING",
//                   quote: `"We're in the business of not just making what happens, but directions."`,
//                   author: "Sanjit + GenOps",
//                   text: "Discover the soul of the brand - its deeper purpose, vision, and mission. Meaning drives impact.",
//                 },
//                 {
//                   letter: "I",
//                   title: "INTEGRITY",
//                   quote: `"Integrity is doing the right thing, even when no one is watching."`,
//                   author: "C.S. Lewis",
//                   text: "Audit the alignment between your message and your actions — across online, offline, and internal culture.",
//                 },
//                 {
//                   letter: "T",
//                   title: "TRUST",
//                   quote: `"Trust is built with consistency."`,
//                   author: "Lincoln Chafee",
//                   text: "Build and measure reputation, reviews, and credibility — how others speak about you matters more than what you say.",
//                 },
//                 {
//                   letter: "T",
//                   title: "TRANSPARENCY",
//                   quote: `"Honesty and transparency make you vulnerable. Be honest and transparent anyway."`,
//                   author: "Mother Teresa",
//                   text: "Showcase authentic communication, open processes, and ethical storytelling. Vulnerability builds connection.",
//                 },
//                 {
//                   letter: "A",
//                   title: "AUTHORITY",
//                   quote: `"Become the expert it's the authority by the team — and crafts will follow."`,
//                   author: "Don Kennedy",
//                   text: "Develop your thought leadership, recognition, and influence in the market or community you serve.",
//                 },
//                 {
//                   letter: "L",
//                   title: "LEGACY",
//                   quote: `"Carve your name on hearts, not tombstones."`,
//                   author: "Shannon Alder",
//                   text: "Architect a future-ready brand that leaves a meaningful mark, scales sustainably, and transcends trends.",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="grid grid-cols-[auto_1fr] gap-6 items-start"
//                 >
//                   {/* Letter */}
//                   <div className="w-28 min-w-[100px]">
//                     <div
//                       className="text-[130px] font-bold text-transparent bg-clip-text leading-none"
//                       style={{
//                         backgroundImage:
//                           "radial-gradient(circle, #fff8e1 15%, #D0A151 40%, #D0A151 100%)",
//                       }}
//                     >
//                       {item.letter}
//                     </div>
//                   </div>

//                   {/* Text */}
//                   <div className="pt-4">
//                     <h3 className="text-xl font-bold text-[#D0A151] mb-2">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-400 italic text-sm mb-1">
//                       {item.quote}
//                     </p>
//                     <p className="text-gray-500 text-xs mb-2">
//                       — {item.author}
//                     </p>
//                     <p className="text-[#D0A151] text-sm">{item.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Vertical Divider */}
//           <div className="hidden lg:flex justify-center">
//             <div className="w-px bg-[#D0A151] self-stretch mx-auto" />
//           </div>

//           {/* Right Side - Laptop with Screen */}
//           <div className="flex flex-col items-center justify-center">
//             <div className="relative mt-55 shadow-[#D0A151]">
//               {/* Laptop Base */}
//               <img src={laptop} alt="Laptop" className="w-90 max-w-lg" />

//               {/* Screen Content Overlay */}
//               <div className="absolute top-[9%] left-[11%] right-[11%] bottom-[45%] z-20">
//                 <img
//                   src={laptopImage}
//                   alt="Laptop screen"
//                   className="w-full max-w-[270px] h-auto object-cover mt-11 ml-1.5"
//                 />
//               </div>
//             </div>

//             {/* Text Content */}
//             <div className="text-center mt-1">
//               <h3
//                 className="text-2xl font-bold text-transparent mb-2 bg-clip-text"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(to bottom, #D0A151 0%, #D0A151 40%, #ffffff 55%, #D0A151 70%, #D0A151 100%)",
//                 }}
//               >
//                 BEHIND THE BADASS BRANDS
//               </h3>

//               <p className="text-white text-lg font-semibold mb-8">
//                 INNOVATIVE INSIGHTS FROM 100+ ICONIC
//                 <br />
//                 INTERNET INFLUENCERS
//               </p>

//               {/* CTA Button */}
//               <button className="bg-gradient-to-r from-[#D0A151] to-[#D0A151] hover:from-[#D0A151] hover:to-[#D0A151] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
//                 SCHEDULE A MEETING
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MittalBrandPage;

import React from "react";
import laptop from "../assets/laptop.png";
import laptopImage from "../assets/laptopImg.png";
import triangleImg from "../assets/whitesvg.png";

const MittalLandingPage = () => {
  const letterData = [
    {
      letter: "M",
      title: "MEANING",
      quote:
        '“Efforts and courage are not enough without purpose and direction.” ',
      author: "-John F. Kennedy",
      description:
        "Discover the soul of the brand - its deeper purpose, vision, and mission.  Meaning drives impact.",
    },
    {
      letter: "I",
      title: "INTEGRITY",
      quote:
        '“Integrity is doing the right thing, even when no one is watching.” ',
      author: "C.S. Lewis",
      description:
        "Audit the alignment between your message and your actions — across  online, offline, and internal culture."
    },
    {
      letter: "T",
      title: "TRUST",
      quote: '“Trust is built with consistency.”',
      author: "Lincoln Chafee",
      description:
        "Build and measure reputation, reviews, and credibility — how others speak  about you matters more than what you say.",
    },
    {
      letter: "T",
      title: "TRANSPARENCY",
      quote:
        '“Honesty and transparency make you vulnerable. Be honest and transparent anyway.”',
      author: "Mother Teresa",
      description:
        "Showcase authentic communication, open processes, and ethical  storytelling. Vulnerability builds connection.",
    },
    {
      letter: "A",
      title: "AUTHORITY",
      quote:
        '“Become the expert, the authority, the leader — and profits will follow.”',
      author: "Dan Kennedy",
      description:
        "Develop your thought leadership, recognition, and influence in the market or  community you serve.",
    },
    {
      letter: "L",
      title: "LEGACY",
      quote: '“Carve your name on hearts, not tombstones.”',
      author: "Shannon L. Alder",
      description:
        "Architect a future-ready brand that leaves a meaningful mark, scales  sustainably, and transcends trends.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-8 font-[Montserrat]">

      {/* White Chevron Down */}
        <img
          src={triangleImg}
          alt="Triangle Divider"
          className="mx-auto -mt-16 w-full h-auto"
        />

      {/* Header Section */}
      <div className="relative pt-8 pb-15 px-6">
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="whitespace-nowrap text-4xl md:text-5xl lg:text-6xl font-bold text-[#D0A151] mb-4">
            LET'S BUILD SOMETHING GREAT TOGETHER
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to transform your business? Get in touch with our team of
            experts.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 gap-12 ml-8">
        {/* Left Side - Brand and Letters */}
        <div className="lg:w-1/2 space-y-8 pl-4">
          {/* Brand Title */}
          <div className="mb-12 ml-1">
            <h2 className="text-6xl md:text-7xl font-bold">
              <span className="text-[#D0A151]">W</span>
              <span className="text-white text-4xl">HY</span>
            </h2>
            <div className="flex items-baseline -mt-4">
              <span className="text-[#D0A151] text-[80px] md:text-[100px] font-bold leading-none">
                M
              </span>
              <span className="text-white text-[40px] md:text-[48px] font-bold ml-2 leading-none">
                ITTAL
              </span>
            </div>

            <div className="mt-4">
              <p className="text-white text-lg">Creating World-Class Brands</p>
              <div className="w-[500px] h-1 bg-[#D0A151] mt-2"></div>
            </div>
          </div>

          {/* Letter Components */}
          <div className="space-y-8">
            {letterData.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                {/* Letter */}
                <div className="w-28 min-w-[100px]">
                  <div
                    className="text-[130px] font-bold text-transparent bg-clip-text leading-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff8e1 15%, #D0A151 40%, #D0A151 100%)",
                    }}
                  >
                    {item.letter}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-[#CE9D4B] text-lg font-thin mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <blockquote className="text-gray-300 text-sm italic mb-1 leading-relaxed">
                    {item.quote}
                  </blockquote>
                  <p className="text-gray-400 text-xs mb-3">-{item.author}</p>
                  <p className="text-[#CE9D4B] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Laptop and CTA */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center ">
          <div className="relative">
            {/* Base laptop image */}
            <img src={laptop} alt="Laptop" className="w-full max-w-md h-auto" />

            {/* Screen content overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <img
                src={laptopImage}
                alt="Laptop screen content"
                className="w-[402px] h-[264px] object-contain transform -translate-y-[12%] translate-x-[1px]"
                style={{
                  clipPath: "polygon(8% 12%, 92% 12%, 92% 85%, 8% 85%)",
                }}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-4 -mt-16">
            <h3
              className="text-2xl font-bold text-transparent mb-2 bg-clip-text "
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #D0A151 0%, #D0A151 40%, #ffffff 55%, #D0A151 70%, #D0A151 100%)",
              }}
            >
              BEHIND THE BADASS BRANDS
            </h3>

            <p className="text-white text-lg font-thin max-w-sm mx-auto leading-relaxed">
              INNOVATIVE INSIGHTS FROM 100+ ICONIC INTERNET INFLUENCERS
            </p>

            <button className="bg-[#D0A151] text-black px-8 py-3 mt-19 rounded-full font-semibold text-lg hover:bg-[#D0A151] transition-colors duration-300 transform hover:scale-105">
              SCHEDULE A MEETING
            </button>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-16"></div>
    </div>
  );
};

export default MittalLandingPage;
