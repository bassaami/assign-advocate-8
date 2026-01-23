import React from 'react';
import herobanner from '../C002-assets/banner-img-1.png'; // Import the image here

const Hero = () => {
    return (
        <div>
<div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <img 
        src={herobanner}
        alt="Law Office"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Transparent Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
        
        {/* Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Our Best Lawyers
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-200">
          Our platform connects you with verified, experienced lawyers across 
          various specialties — all at your convenience. Book appointments in minutes and receive quality care you can trust.
        </p>

      </div>
    </div>           
        </div>
    );
};

export default Hero;