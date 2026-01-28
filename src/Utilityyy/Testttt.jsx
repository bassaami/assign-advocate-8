import React, { useState } from 'react';
import { Home, Calendar, BookOpen, Mail, Menu, X } from 'lucide-react';

export default function App() {
  // Local state to track the active tab
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items configuration
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'appoints', label: 'Booking', icon: Calendar },
    { id: 'blogs', label: 'Blogs', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Helper to handle navigation
  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-700">
            MedConnect
          </span>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Nav Links Container */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id} className="relative group">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`block py-2 px-3 transition-colors duration-200 
                        ${isActive 
                          ? 'text-blue-700 md:text-blue-700' 
                          : 'text-gray-900 hover:text-blue-700 md:hover:bg-transparent'
                        } 
                        md:p-0 flex items-center gap-2`}
                    >
                      <item.icon size={18} className="md:hidden" />
                      {item.label}
                      
                      {/* The Underline - visible on desktop, transitions horizontally */}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300 ease-out hidden md:block
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full opacity-50'}
                        `}
                      />
                    </button>
                    
                    {/* Mobile side-border for active state */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-700 md:hidden" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-screen-xl mx-auto p-8">
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {activeTab === 'home' ? 'Welcome Back' : `${activeTab} Page`}
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            You are currently viewing the {activeTab} section. Notice how the navigation menu 
            updates the blue underline and text color based on the selection.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button 
               onClick={() => setActiveTab('appoints')}
               className="bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}