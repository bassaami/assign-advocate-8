import React, { useState, useEffect } from 'react';

// Mocking the DB utilities since they are external in your snippet
const mockDB = {
  getBookAppoint: () => JSON.parse(localStorage.getItem('appointments') || '[]'),
  removeFromDB: (id) => {
    const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
    const filtered = existing.filter(itemId => parseInt(itemId) !== id);
    localStorage.setItem('appointments', JSON.stringify(filtered));
  }
};

const BokedLawyer = ({ apbk, onRemove }) => {
  const { name, image, specialty, experience, licenseNumber, id } = apbk || {};

  return (
    <div className="flex bg-gray-100 w-full mx-auto rounded-lg shadow-md border border-gray-200 overflow-hidden max-w-lg mb-6 hover:shadow-lg transition-shadow">
      {/* Left: Image Section */}
      <div className="w-1/3">
        <img 
          src={image || "https://via.placeholder.com/150"} 
          alt={name} 
          className="h-full w-full object-cover" 
        />
      </div>

      {/* Right: Content Section */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {experience} Experience
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">{name}</h2>
          <p className="text-sm text-gray-800 mb-3">{specialty}</p>
          <div className="border-t border-dotted border-gray-400 my-3"></div>
          <p className="text-xs text-gray-500 mb-4">
            License: <span className="font-mono">{licenseNumber}</span>
          </p>
        </div>

        {/* The fix: This triggers the state update in the parent */}
        <button 
          onClick={() => onRemove(id)} 
          className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors"
        >
          Cancel Appointment
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [usrAppointT, setAppointt] = useState([]);
  
  // Mocking the data that usually comes from useLoaderData()
  const mockAllLawyers = [
    { id: 1, name: "Dr. Sarah Smith", specialty: "Family Law", experience: "10 years", licenseNumber: "L-9920", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" },
    { id: 2, name: "James Wilson", specialty: "Criminal Defense", experience: "8 years", licenseNumber: "L-1123", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
  ];

  useEffect(() => {
    // Initial Load logic
    const appointIDs = mockDB.getBookAppoint();
    const convertAppo = appointIDs.map(id => parseInt(id));
    const myAppoint = mockAllLawyers.filter(appo => convertAppo.includes(appo.id));
    setAppointt(myAppoint);
  }, []);

  // NEW: The handler to update UI instantly
  const handleRemoveInstant = (id) => {
    // 1. Remove from database/localStorage
    mockDB.removeFromDB(id);
    
    // 2. Update the local UI state instantly by filtering out the deleted item
    const remaining = usrAppointT.filter(lawyer => lawyer.id !== id);
    setAppointt(remaining);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-slate-800 mb-10">
          Your Appointments: <span className="text-blue-600">{usrAppointT.length}</span>
        </h1>
        
        {usrAppointT.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usrAppointT.map(apbk => (
              <BokedLawyer 
                apbk={apbk} 
                key={apbk.id} 
                onRemove={handleRemoveInstant} // Passing the function here
              />
            ))}
          </div>
        ) : (
          <div className="text-center p-10 bg-white rounded-lg shadow">
            <p className="text-gray-500 italic">No appointments booked yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;