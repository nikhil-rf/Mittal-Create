import React from 'react';
import BadImg from '../assets/newbadbuisness.jpg'; 

const BadBusinessPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8 font-[Montserrat]">
      <div className="max-w-6xl w-full ">
        
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 ml-13">

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-80 h-96 mt-11 bg-gray-800 border-4 border-[#CE9D4B] rounded-sm overflow-hidden">
              
              <img 
                src={BadImg}
                alt="Team Photo" 
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
          
          {/* Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl text-center font-bold text-[#CE9D4B] mb-8 whitespace-nowrap">
  FROM BADBUSINESS TO BADVERSE
</h1>

            
            <div className="space-y-3 text-lg lg:text-xl leading-relaxed">
              <p className='font-thin'>
                <span className="font-bold">2024</span> changed everything.
              </p>
              
              <p className='font-thin'>
                I launched <span className="font-bold">BadBusiness</span>, a consulting firm - which became a 
                huge success. It transformed into <span className="font-bold">BADVERSE.IN</span> - a <span className="font-bold">global 
                community of creators, leaders, and strategists</span>.
              </p>
              
              <p className='font-thin'>
                With <span className="font-bold">30,000+ followers</span>, it became my <span className="font-bold">legacy</span>.
              </p>
              
              <p className='font-thin'>
                By <span className="font-bold">2025</span>, I officially registered:
              </p>
              
              <div className="pl-6 space-y-2">
                <p><span className="font-bold">➡️ Mittal Alliance Industries Pvt. Ltd. (India)</span></p>
                <p><span className="font-bold">➡️ Mittal Brandtech Inc. (Colorado, USA)</span></p>
              </div>
              
              <p className='font-thin'>
                A <span className="font-bold">branding powerhouse</span> serving <span className="font-bold">2,000+ industrialists and 
                solopreneurs</span>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="w-[98%] h-1.5 bg-gray-500 mt-16"></div>
      </div>
    </div>
  );
};

export default BadBusinessPage;