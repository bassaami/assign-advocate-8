import React from 'react';
import { Facebook, Linkedin, Youtube } from 'lucide-react'; // Using Lucide-React for icons
import logo from '../C002-assets/logo-footer.png'; // Import the image here

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Brand Name */}
        <a href="#" className="flex items-center mb-7 space-x-0">
            <img src={logo} className='w-8 h-8' alt="logo" />  

              <span className=" text-2xl font-bold text-white">Law.BD</span>
            </a>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mb-8 text-gray-400 text-sm md:text-base">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/bookings" className="hover:text-white transition-colors">Bookings</a>
          <a href="/blogs" className="hover:text-white transition-colors">Blogs</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Gray Border */}
        <div className="w-full border-t border-gray-700 mb-6"></div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
        </div>

        {/* Copyright (Optional) */}
        <p className="mt-6 text-xs text-gray-600">
          © { new Date().getFullYear()} Law.BD. All rights reserved.
        </p>
        {/* <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c" alt="" /> */}
      </div>
    </footer>
  );
};

export default Footer;