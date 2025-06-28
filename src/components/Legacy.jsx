import React from 'react';
import legacyImg from '../assets/legacy.png';

const LegacyPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${legacyImg})` }}
      />

      {/* Black Overlay with Low Opacity */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Title */}
          <h1 className="text-5xl lg:text-4xl font-bold text-[#CE9D4B] mb-16 tracking-wide">
            FROM LEGACY TO LEADERSHIP
          </h1>

          {/* Text Content */}
          <div className="space-y-8 text-xl lg:text-1xl text-left ml-18 leading-relaxed">
            <p className='font-thin'>
              I was <span className="font-bold">born in the ruins of a broken empire</span>. But I chose to <span className="font-bold">rebuild the Mittal name</span> — not <br />
              on <span className="font-bold">inheritance</span>, but <span className="font-bold">insight</span>. Not on <span className="font-bold">privilege</span>, but <span className="font-bold">purpose</span>.
            </p>

            <p className='font-thin'>
              This is <span className="font-bold">just the beginning</span>. And I'm here to help <span className="font-bold">others write their own story of <br />
              reinvention — no matter where they start</span>.
            </p>
          </div>

          {/* Button */}
          <div className="mt-16">
            <button className="px-5 py-2 border-2 border-[#CE9D4B] text-[#CE9D4B] bg-transparent hover:bg-[#CE9D4B] hover:text-black transition-all duration-300 rounded-full  font-medium tracking-wide">
              View Entire Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyPage;
