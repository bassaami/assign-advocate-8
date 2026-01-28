import React, { useState } from 'react';
import logo from '../C002-assets/logo.png';
import { NavLink, Link } from 'react-router'; // Use NavLink for "Tab" behavior

const Navbarr = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Helper function to handle active styling
    const activeStyle = ({ isActive }) => 
        isActive 
            ? "block py-2 px-3 text-white bg-green-800 rounded md:bg-transparent md:text-green-700 md:p-0 font-bold" 
            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0";

    return (
        <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} className="w-8 h-8" alt="logo" />    
                    <span className="text-2xl font-bold text-black">Law.BD</span>
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0">
                    <button type="button" className="text-white bg-green-800 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all">
                        Contact Now
                    </button>
                    
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        type="button" 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

                <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white w-full md:w-auto">
                        <li>
                            <NavLink to="/" className={activeStyle} end>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/appoints" className={activeStyle}>Booking</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" className={activeStyle}>Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={activeStyle}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbarr;