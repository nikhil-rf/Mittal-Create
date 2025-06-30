import React from 'react';
import fullImage from '../assets/image.png'; // your image
const FullImagePage = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-black">
      <img
        src={fullImage}
        alt="Full Image"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default FullImagePage;