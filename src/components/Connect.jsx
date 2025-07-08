import React from 'react'; 
import googleLogo from '../assets/google.png';
import spotifyIcon from '../assets/newspotify.png'; 
import youtubeIcon from '../assets/youtube.png'; 
import linkedinLogo from '../assets/linkedin.png';
import xingLogo from '../assets/xing.png';
import twitterLogo from '../assets/x.png'; 
import instagramLogo from '../assets/instagram.png';

const Connect = () => {
  const logos = [
    { src: googleLogo, alt: 'Google Podcasts' },
    { src: spotifyIcon, alt: 'Spotify' },
    { src: youtubeIcon, alt: 'YouTube' },
    { src: linkedinLogo, alt: 'LinkedIn' },
    { src: xingLogo, alt: 'Xing' },
    { src: twitterLogo, alt: 'Twitter/X' },
    { src: instagramLogo, alt: 'Instagram' },
  ];

  return (
    <div className="h-full bg-white px-4 pt-0 pb-20 relative">
      
      {/* Chevron at the top */}
      <div className="w-0 h-0 border-x-[80px] border-x-transparent border-t-[40px] border-t-black absolute top-0 left-1/2 transform -translate-x-1/2" />

      {/* Spacer to push content below chevron */}
      <div className="h-[140px]" />

      {/* Main content */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#D0A151] text-center mb-1">
          CONNECT WITH ME
        </h2>
        <div className="h-1.5 w-[38%] bg-[#D0A151] mb-10"></div>

        <div className="border border-[#CDA349] rounded-xl px-6 py-8 bg-white shadow-md">
          <p className="text-center text-black text-lg font-medium mb-5">
            Connect with Sarthak
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="border border-[#CDA349] rounded-lg p-4 w-30 h-30 flex items-center justify-center bg-white hover:scale-105 transition-transform"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
