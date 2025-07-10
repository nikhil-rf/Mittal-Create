// import React from "react";

// const Framework = () => {
//   return (
//     <div className="bg-white min-h-screen text-center px-4 py-12">
//       <h1 className="text-2xl md:text-4xl font-semibold text-[#D0A151] mb-2">
//         I USE “BAD” FRAMEWORK TO SOLVE PROBLEMS
//       </h1>
//       <div className="h-1 bg-[#D0A151] w-2/3 mx-auto mb-8" />

//       <div className="border border-[#b68c3d] p-6 max-w-6xl mx-auto rounded-md">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
//           <div className="flex flex-col items-center">
//             <div className="border-4 border-[#b68c3d] rounded-xl px-6 py-4 mb-4">
//               <span className="text-3xl font-bold text-[#b68c3d]">B</span>
//             </div>
//             <div className="bg-black text-white p-4 rounded-md h-60 w-auto">
//               <p className="text-[#b68c3d] text-xs mb-1 border-1">"B" STANDS FOR</p>
//               <h2 className="text-lg font-semibold mb-1">Breakdown</h2>
//               <p className="text-sm">
//                 Through plans, you break down a process into small and identify the things you accomplish..
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="border-4 border-[#b68c3d] rounded-xl px-6 py-4 mb-4">
//               <span className="text-3xl font-bold text-[#b68c3d]">Λ</span>
//             </div>
//             <div className="bg-black text-white p-4 rounded-md w-full">
//               <p className="text-[#b68c3d] text-xs mb-1 h-33 w-auto">"A" STANDS FOR</p>
//               <h2 className="text-lg font-semibold mb-1">Analysis</h2>
//               <p className="text-sm">
//                 Through Breakdown, Analyze your each problem your business is facing and find possible solution
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="border-4 border-[#b68c3d] rounded-xl px-6 py-4 mb-4">
//               <span className="text-3xl font-bold text-[#b68c3d]">D</span>
//             </div>
//             <div className="bg-black text-white p-4 rounded-md w-full">
//               <p className="text-[#b68c3d] text-xs mb-1">"D" STANDS FOR</p>
//               <h2 className="text-lg font-semibold mb-1">Decision</h2>
//               <p className="text-sm">
//                 Through Analysis, Launch your Initiative
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="mt-10 bg-[#b68c3d] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#a27c35] transition">
//         Learn More About Our Framework
//       </button>
//     </div>
//   );
// };

// export default Framework;

// import React from "react";
// import icon from "../assets/vector(2).png";
// import icon2 from "../assets/vector(1).png";
// import icon3 from "../assets/vector.png";

// const Framework = () => {
//   return (
//     <div className="relative bg-white min-h-screen text-center px-4 py-12 pt-30">
//       {/* Chevron pointing down */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
//         <div className="w-0 h-0 border-x-[80px] border-x-transparent border-t-[40px] border-t-black"></div>
//       </div>
//       <h1 className="text-2xl md:text-4xl font-bold text-[#D0A151] mb-2">
//         I USE “BAD” FRAMEWORK TO SOLVE PROBLEMS
//       </h1>
//       <div className="h-1 bg-[#C0944B] w-[850px] mx-auto mb-8" />

//       <div className="border border-[#C0944B] p-6 max-w-6xl mx-auto rounded-md">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
//           {/* B Card */}
//           <div className="flex flex-col items-center space-y-4">
//             <div className="relative w-32 h-32">
//               <div className="absolute inset-0 bg-[#b68c3d] clip-hexagon" />
//               <div className="absolute inset-[4px] bg-white clip-hexagon flex items-center justify-center">
//                 <span className="text-5xl font-semibold text-[#b68c3d] z-10">
//                   B
//                 </span>
//               </div>
//             </div>

//             <div className="bg-black text-white p-6 rounded-md w-full h-69 flex flex-col justify-start">
//               <div className="mb-2 mt-5">
//                 <img
//                   src={icon}
//                   alt="Breakdown Icon"
//                   className="mx-auto h-13 w-13 mb-7"
//                 />

//                 <div className="flex justify-center">
//                   <p className="text-[#CE9D4B] text-xs mb-1 bg-[#313131] rounded-2xl w-[150px] p-2 text-center">
//                     "B" STANDS FOR
//                   </p>
//                 </div>

//                 <h2 className="text-lg font-semibold mb-2">Breakdown</h2>
//                 <p className="text-sm text-center font-thin text-gray-300">
//                   Through plans, you break down a <br /> process into small and
//                   identify the <br /> things you accomplish..
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* A Card */}
//           <div className="flex flex-col items-center space-y-4">
//             <div className="relative w-32 h-32">
//               <div className="absolute inset-0 bg-[#b68c3d] clip-hexagon" />
//               <div className="absolute inset-[4px] bg-white clip-hexagon flex items-center justify-center">
//                 <span className="text-5xl font-bold text-[#b68c3d] z-10">
//                   Λ
//                 </span>
//               </div>
//             </div>

//             <div className="bg-black text-white p-6 rounded-md w-full h-69 flex flex-col justify-start">
//               <div className="mb-2 mt-5">
//                 <img
//                   src={icon2}
//                   alt="Analysis Icon"
//                   className="mx-auto h-13 w-13 mb-7"
//                 />

//                 <div className="flex justify-center">
//                   <p className="text-[#CE9D4B] text-xs mb-1 bg-[#313131] rounded-2xl w-[150px] p-2 text-center">
//                     "A" STANDS FOR
//                   </p>
//                 </div>

//                 <h2 className="text-lg font-semibold mb-2">Analysis</h2>
//                 <p className="text-sm text-center font-thin text-gray-300">
//                   Through Breakdown, Analyze your <br /> each problem your
//                   business is <br /> facing and find possible solution
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* D Card */}
//           <div className="flex flex-col items-center space-y-4">
//             <div className="relative w-32 h-32">
//               <div className="absolute inset-0 bg-[#b68c3d] clip-hexagon" />
//               <div className="absolute inset-[4px] bg-white clip-hexagon flex items-center justify-center">
//                 <span className="text-5xl font-bold text-[#b68c3d] z-10">
//                   D
//                 </span>
//               </div>
//             </div>

//             <div className="bg-black text-white p-6 rounded-md w-full h-69 flex flex-col justify-start">
//               <div className="mb-2 mt-5">
//                 <img
//                   src={icon3}
//                   alt="Decision Icon"
//                   className="mx-auto h-13 w-13 mb-7"
//                 />

//                 <div className="flex justify-center">
//                   <p className="text-[#CE9D4B] text-xs mb-1 bg-[#313131] rounded-2xl w-[150px] p-2 text-center">
//                     "D" STANDS FOR
//                   </p>
//                 </div>

//                 <h2 className="text-lg font-semibold mb-2">Decision</h2>
//                 <p className="text-sm text-center font-thin text-gray-300">
//                   Through Analysis, Launch your <br /> Initiative
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="mt-10 bg-[#CE9D4B] text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-[#a27c35] transition">
//         Learn More About Our Framework
//       </button>

//       <style jsx>{`
//         .clip-hexagon {
//           clip-path: polygon(
//             25% 6.7%,
//             75% 6.7%,
//             100% 50%,
//             75% 93.3%,
//             25% 93.3%,
//             0% 50%
//           );
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Framework;
import React from "react";
import icon from "../assets/vector(2).png";
import icon2 from "../assets/vector(1).png";
import icon3 from "../assets/vector.png";
import BImage from "../assets/b.png";
import AImage from "../assets/a.png";
import DImage from "../assets/d.png";

const Framework = () => {
  return (
    <div className="relative bg-white min-h-screen text-center px-4 py-12 pt-30">
      {/* Chevron pointing down */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-0 h-0 border-x-[80px] border-x-transparent border-t-[40px] border-t-black"></div>
      </div>

      <h1 className="text-2xl md:text-5xl font-bold text-[#D0A151] mb-2">
        I USE “BAD” FRAMEWORK TO SOLVE PROBLEMS
      </h1>
      <div className="h-1 bg-[#C0944B] w-[1100px] max-w-[95%] mx-auto mb-8" />

      {/* Card Grid */}
      <div className="border border-[#C0944B] px-10 py-8 max-w-6xl mx-auto rounded-md min-h-[480px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* B Card */}
          <div className="flex flex-col items-center space-y-4">
            <img src={BImage} alt="B" className="w-32 h-32 object-contain" />

            <div className="bg-black text-white p-6 rounded-md w-full h-full flex flex-col justify-start">
              <img
                src={icon}
                alt="Breakdown Icon"
                className="mx-auto h-13 w-13 mb-7"
              />

              <div className="flex justify-center">
                <p className="text-[#CE9D4B] text-xs mb-1 bg-[#313131] rounded-2xl w-[150px] p-2 text-center">
                  "B" STANDS FOR
                </p>
              </div>

              <h2 className="text-lg font-semibold mb-2">Breakdown</h2>
              <p className="text-sm text-center font-thin text-gray-300">
                Through plans, you break down a <br /> process into small and
                identify the <br /> things you accomplish.
              </p>
            </div>
          </div>

          {/* A Card */}
          <div className="flex flex-col items-center space-y-4">
            <img src={AImage} alt="A" className="w-32 h-32 object-contain" />

            <div className="bg-black text-white p-6 rounded-md w-full h-full flex flex-col justify-start">
              <img
                src={icon2}
                alt="Analysis Icon"
                className="mx-auto h-13 w-13 mb-7"
              />

              <div className="flex justify-center">
                <p className="text-[#CE9D4B] text-xs mb-1 bg-[#313131] rounded-2xl w-[150px] p-2 text-center">
                  "A" STANDS FOR
                </p>
              </div>

              <h2 className="text-lg font-semibold mb-2">Analysis</h2>
              <p className="text-sm text-center font-thin text-gray-300">
                Through Breakdown, analyze each <br /> problem your business is
                facing and <br /> find possible solutions.
              </p>
            </div>
          </div>

          {/* D Card */}
          <div className="flex flex-col items-center space-y-4">
            <img src={DImage} alt="D" className="w-32 h-32 object-contain" />

            <div className="bg-black text-white p-6 rounded-md w-full min-h-[260px] flex flex-col justify-start">
              <img
                src={icon3}
                alt="Decision Icon"
                className="mx-auto h-13 w-13 mb-7"
              />

              <div className="flex justify-center">
                <p className="text-[#CE9D4B] text-xs mb-1 bg-[#313131] rounded-2xl w-[150px] p-2 text-center">
                  "D" STANDS FOR
                </p>
              </div>

              <h2 className="text-lg font-semibold mb-2">Decision</h2>
              <p className="text-sm text-center font-thin text-gray-300">
                Through Analysis, launch your <br /> initiative and take action.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="mt-10 bg-[#CE9D4B] text-white px-6 py-2 rounded-full font-semibold cursor-pointer hover:bg-[#a27c35] transition">
        Learn More About Our Framework
      </button>
    </div>
  );
};

export default Framework;
