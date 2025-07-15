
import React from 'react';
import rebellionImg from '../assets/rebellion.png'; 

const RebellionPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-20">
      <div className="max-w-6xl w-full">
        <div className="w-[108%] h-1.5 bg-gray-500 -ml-12 mb-25"></div>
        

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mt-25">
          {/* Profile Image */}
          <div className="flex-shrink-0 mt-10">
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
            <h1 className="text-2xl lg:text-5xl font-bold text-center text-[#CE9D4B] mb-8 tracking-wide">
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