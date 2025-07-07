// // import React from "react";
// // import rebellionImg from "../assets/rebellion.png"; // <-- update path as needed

// // const Rebellion = () => {
// //   return (
// //     <div className="bg-black text-white py-12 px-4 md:px-16">
// //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
// //         {/* Image */}
// //         <div className="border-3 border-[#D8A24C]  rounded-sm">
// //           <img
// //             src={rebellionImg}
// //             alt="Rebellion Phase"
// //             className="w-[250px] md:w-[280px] object-cover"
// //           />
// //         </div>

// //         {/* Content */}
// //         <div className="flex-1">
// //           <h2 className="text-[#D8A24C] text-2xl md:text-3xl font-bold mb-6 tracking-wide">
// //             THE REBELLION YEARS
// //           </h2>

// //           <div className="space-y-6 text-justify text-sm md:text-base leading-relaxed">
// //             <p>
// //               Like many Indian kids, I was pushed into the IIT race.
// //               <br />
// //               I enrolled in a <span className="font-semibold text-gray-300">dummy school</span> and{" "}
// //               <span className="font-semibold text-gray-300">FIITJEE coaching</span>, but
// //               deep down, I knew I was meant for something else.
// //             </p>

// //             <p>
// //               I started with <span className="font-semibold text-gray-300">YouTube</span>, then{" "}
// //               <span className="font-semibold text-gray-300">e-commerce</span>, selling my{" "}
// //               <span className="font-semibold text-gray-300">mother’s handmade crafts</span>.{" "}
// //               <span className="font-semibold text-white">I failed. Learned. Grew.</span>
// //             </p>

// //             <p>
// //               When <span className="font-bold text-white">COVID-19</span> struck, it hit us hard.
// //               My <span className="font-semibold">mother</span>, <span className="font-semibold">grandfather</span>,
// //               and I – all ill at once. I cooked. Cleaned. Studied. Survived. Finished{" "}
// //               <span className="font-semibold">12th grade with 74%</span>, but I knew my real exam
// //               was <span className="font-semibold text-white">life itself</span>.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Rebellion;


// import React from "react";
// import rebellionImg from "../assets/rebellion.png"; // Make sure this path is correct

// const Rebellion = () => {
//   return (
//     <div className="bg-black text-white py-12 px-6 md:px-16 font-sans">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-60 items-start">
        
//         {/* Image */}
//         <div className="border-[2.5px] border-[#D8A24C] ">
//           <img
//             src={rebellionImg}
//             alt="Rebellion Years"
//             className="w-[260px] md:w-[280px] object-cover"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="flex-1 text-left space-y-6 text-[15px] md:text-base leading-relaxed tracking-wide">
//           <h2 className="text-[#D8A24C] font-bold text-2xl text-center md:text-3xl mb-2">
//             THE REBELLION YEARS
//           </h2>

//           <p>
//             Like many Indian kids, I was pushed into the IIT race. <br />
//             I enrolled in a <span className="font-bold">dummy school</span> and <span className="font-bold">FIITJEE coaching</span>, but <br />
//             deep down, I knew I was meant for something else.
//           </p>

//           <p>
//             I started with <span className="font-bold">YouTube</span>, then <span className="font-bold">e-commerce</span>, selling my <br />
//             <span className="font-bold">mother’s handmade crafts</span>. <span className="font-bold">I failed. Learned. Grew.</span>
//           </p>

//           <p>
//             When <span className="font-bold">COVID-19</span> struck, it hit us hard. My <span className="font-bold">mother</span>, <br />
//             <span className="font-bold">grandfather</span>, and I – all ill at once. I cooked. Cleaned. <br />
//             Studied. Survived. Finished <span className="font-bold">12th grade with 74%</span>, but I <br />
//             knew my real exam was <span className="font-bold">life itself</span>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rebellion;

import React from 'react';
import rebellionImg from '../assets/rebellion.png'; 

const RebellionPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-20">
      <div className="max-w-6xl w-full">
        <div className="w-[108%] h-1.5 bg-gray-500 -ml-12 mb-25"></div>
        

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mt-25">
          {/* Profile Image */}
          <div className="flex-shrink-0 mt-15">
            <div className="w-80 h-75 bg-gray-800 border-4 border-[#CE9D4B] rounded-sm overflow-hidden">
              <img 
                src={rebellionImg}
                alt="Profile" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
            </div>
          </div>
          
          
          <div className="flex-1 max-w-2xl">
            <h1 className="text-2xl lg:text-4xl font-bold text-center text-[#CE9D4B] mb-8 tracking-wide">
              THE REBELLION YEARS
            </h1>
            
            <div className="space-y-6 text-lg lg:text-xl mx-auto leading-relaxed">
              <p className='font-thin'>
                Like many Indian kids, I was pushed into the IIT race. 
                I enrolled in a <span className="font-bold">dummy school</span> and <span className="font-bold">FIITJEE coaching</span>, but 
                deep down, I knew I was meant for something else.
              </p>
              
              <p className='font-thin'>
                I started with <span className="font-bold">YouTube</span>, then <span className="font-bold">e-commerce</span>, selling my   
                <span className="font-bold"> mother's handmade crafts</span>. I <span className="font-bold">failed. Learned. Grew.</span>
              </p>
              
              <p className='font-thin'>
                When <span className="font-bold">COVID-19</span> struck, it hit us hard. My <span className="font-bold">mother</span>, 
                <span className="font-bold"> grandfather</span>, and I - all ill at once. I cooked. Cleaned. 
                Studied. Survived. Finished <span className="font-bold">12th grade with 74%</span>, but I 
                knew my real exam was <span className="font-bold">life itself</span>.
              </p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default RebellionPage;