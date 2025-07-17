import React from 'react';
import legacyImg from '../assets/legacy.png';

const LegacyPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden font-[Montserrat]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${legacyImg})` }}
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white px-10 py-32">
        <div className="max-w-6xl w-full text-center">
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-[#CE9D4B] mb-20 tracking-wider leading-tight">
            FROM LEGACY TO LEADERSHIP
          </h1>

          {/* Text Content */}
          <div className="space-y-10 text-lg sm:text-xl lg:text-2xl text-left leading-loose sm:px-10 lg:px-20">
            <p className="font-thin">
              I was <span className="font-bold">born in the ruins of a broken empire</span>. But I chose to <span className="font-bold">rebuild the Mittal name</span> — not on <span className="font-bold">inheritance</span>, but <span className="font-bold">insight</span>. Not on <span className="font-bold">privilege</span>, but <span className="font-bold">purpose</span>.
            </p>

            <p className="font-thin">
              This is <span className="font-bold">just the beginning</span>. And I'm here to help <span className="font-bold">others write their own story of reinvention — no matter where they start</span>.
            </p>
          </div>

          {/* Button */}
          <div className="mt-20">
            <button className="px-6 py-3 border-2 border-[#CE9D4B] text-[#CE9D4B] cursor-pointer bg-transparent hover:text-white transition-all duration-300 rounded-full text-lg sm:text-xl font-medium tracking-wider">
              View Entire Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyPage;
