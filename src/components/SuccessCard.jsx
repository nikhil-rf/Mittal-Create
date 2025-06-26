// import React from 'react';
// import dummyImage from '../assets/about.png'; // Placeholder image

// const SuccessMatrix = () => {
//   const cards = Array(9).fill({
//     title: '15,000,000+ PEOPLE REACHED',
//     description:
//       'OVER 1.5 CRORE CUMULATIVE DIGITAL IMPRESSIONS ACROSS PLATFORMS THROUGH BRANDING, EDUCATION, AND MARKETING CAMPAIGNS.',
//   });

//   return (
//     <div className="min-h-screen bg-black py-16 px-4 text-white flex flex-col items-center">
//       {/* Title */}
//       <div className="text-left w-full max-w-7xl mb-10">
//         <h2 className="text-5xl font-extrabold text-yellow-400 tracking-tight">SUCCESS MATRIX</h2>
//         <div className="w-48 h-2 bg-yellow-400 mt-2 rounded-sm" />
//       </div>

//       {/* Cards Grid */}
//       <div className="w-full max-w-7xl flex flex-col items-center">
//         {/* Top Row: 4 cards */}
//         <div className="flex flex-row justify-center gap-6 mb-[-40px] z-20">
//           {cards.slice(0, 4).map((card, idx) => (
//             <div
//               key={idx}
//               className="relative w-44 h-[270px] flex flex-col items-center bg-black border-4 border-yellow-400 rounded-t-xl overflow-visible shadow-xl"
//             >
//               {/* Card Image */}
//               <div className="w-full h-28 overflow-hidden rounded-t-xl">
//                 <img src={dummyImage} alt="Profile" className="w-full h-full object-cover" />
//               </div>
//               {/* Card Content */}
//               <div className="flex-1 w-full bg-black flex flex-col items-center px-2 pt-2 pb-6">
//                 <h3 className="font-bold text-xs text-yellow-400 mb-1 text-center tracking-wide">{card.title}</h3>
//                 <p className="text-[10px] text-white text-center leading-snug tracking-wide">{card.description}</p>
//               </div>
//               {/* Perfect Triangle Bottom */}
//               <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-44 h-6 overflow-visible z-10">
//                 <svg viewBox="0 0 176 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                   <polygon points="88,24 0,0 176,0" fill="#000" stroke="#FFD700" strokeWidth="4" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//         {/* Bottom Row: 5 cards */}
//         <div className="flex flex-row justify-center gap-6 mt-0 z-10">
//           {cards.slice(4).map((card, idx) => (
//             <div
//               key={idx}
//               className="relative w-44 h-[270px] flex flex-col items-center bg-black border-4 border-yellow-400 rounded-t-xl overflow-visible shadow-xl"
//             >
//               {/* Card Image */}
//               <div className="w-full h-28 overflow-hidden rounded-t-xl">
//                 <img src={dummyImage} alt="Profile" className="w-full h-full object-cover" />
//               </div>
//               {/* Card Content */}
//               <div className="flex-1 w-full bg-black flex flex-col items-center px-2 pt-2 pb-6">
//                 <h3 className="font-bold text-xs text-yellow-400 mb-1 text-center tracking-wide">{card.title}</h3>
//                 <p className="text-[10px] text-white text-center leading-snug tracking-wide">{card.description}</p>
//               </div>
//               {/* Chevron Bottom */}
//               <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-12 h-5 overflow-visible z-10">
//                 <svg viewBox="0 0 48 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//                   <polygon points="0,0 24,10 48,0" fill="#000" stroke="#FFD700" strokeWidth="3" />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessMatrix;









// // components/SuccessCard.jsx
// import React from "react";
// import sampleImage from "../assets/about.png"; // Replace with your image

// const SuccessCard = () => {
//   return (
//     <div className="w-72">
//       <svg
//         viewBox="0 0 100 120"
//         className="w-full h-auto"
//         preserveAspectRatio="xMidYMin slice"
//       >
//         {/* Polygon Shape */}
//         <polygon
//           points="0,0 100,0 100,100 50,120 0,100"
//           className="fill-black stroke-yellow-500"
//           strokeWidth="2"
//         />

//         {/* Embedded foreignObject for actual HTML content */}
//         <foreignObject x="0" y="0" width="100" height="100">
//           <div className="w-full h-full flex flex-col items-center justify-start px-2 py-4 text-white text-center">
//             <img
//               src={sampleImage}
//               alt="Sarthak Mittal"
//               className="w-full h-32 object-cover rounded"
//             />
//             <h3 className="text-sm font-bold mt-1 text-[#CE9D4B]">
//               15,000,000+ PEOPLE REACHED
//             </h3>
//             <p className="text-xs mt-1 px-1 leading-snug">
//               Over 1.5 crore cumulative digital impressions across platforms
//               through branding, education, and marketing campaigns.
//             </p>
//           </div>
//         </foreignObject>
//       </svg>
//     </div>
//   );
// };

// export default SuccessCard;

import React from "react";
import sampleImage from "../assets/about.png"; // Replace with your image


// const SuccessCard = () => {
//   return (
//     <div className="h-auto w-auto">
//       <div className="h-[260px] w-[180px]"> {/* Taller than wide */}
//         <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="none">

//           {/* Polygon Shape */}
//           <polygon
//             points="0,0 100,0 100,100 50,120 0,100"
//             className="fill-black stroke-yellow-500"
//             strokeWidth="2"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };
const SuccessCard = () => {
  return (
    <div className="h-[350px] w-[200px] mr-4">
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <polygon
          points="0,0 100,0 100,100 50,120 0,100"
          className="fill-black stroke-yellow-500"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

const SuccessCardDown = () => {
   return (
    <div className="h-[350px] w-[200px] mr-3.5">
      <svg
        viewBox="0 0 100 120"
        className="w-full h-full rotate-180"
        preserveAspectRatio="none"
      >
        {/* Flipped Polygon */}
        <polygon
          points="0,0 100,0 100,100 50,120 0,100"
          className="fill-black stroke-yellow-500"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};




export {SuccessCard,SuccessCardDown } ;

