import React from 'react';
import riseImg from '../assets/newrise.jpg';

const RisePage = () => {

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Top border line */}
        <div className="w-full h-1.5 bg-gray-500 mb-25"></div>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 max-w-2xl mx-auto order-2 lg:order-1">
            <h1 className="text-4xl lg:text-4xl text-center font-bold text-[#CE9D4B] mb-8 tracking-wide">
              THE RISE OF AN ENTREPRENEUR
            </h1>
            
            <div className="space-y-6 ml-9 text-lg lg:text-xl leading-relaxed">
              <p className='font-thin'>
                In <span className="font-bold">2022</span>, I joined <span className="font-bold">NMIMS Indore</span> for a <span className="font-bold">B.Tech + MBA</span>. But my soul 
                belonged to <span className="font-bold">entrepreneurship</span>.
              </p>
              
              <p className='font-thin'>
                I founded <span className="font-bold">Mittal Alliance Industries</span> (2020) to help <span className="font-bold">MSMEs</span> with 
                <span className="font-bold"> AI and digital transformation</span>.
              </p>
              
              <p className='font-thin'>
                Then came <span className="font-bold">BAD Youth Media</span>, <span className="font-bold">BadTalks</span>, and a <span className="font-bold">C++ WhatsApp 
                community</span> that grew to <span className="font-bold">1,000+ members</span>.
              </p>
              
              <p className='font-thin'>
                I built <span className="font-bold">MentorMenti</span>, my first <span className="font-bold">tech startup</span>. It eventually shut 
                down — but gave me <span className="font-bold">leadership</span>, <span className="font-bold">clarity</span>, and the gift of <span className="font-bold">real-
                world learning</span>.
              </p>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 order-1  lg:order-2">
            <div className="w-80 h-110 bg-gray-800 border-4 mr-15 border-[#CE9D4B] rounded-sm overflow-hidden">
              {/* Replace this div with your actual image */}
              <img 
                src={riseImg} 
                alt="Team Group Photo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400 hidden">
                <span>Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="w-full h-1.5 bg-gray-500 mt-28"></div>
      </div>
    </div>
  );
};

export default RisePage;