import React from 'react';
import { Link } from 'react-router';
// import { removeFromDB } from '../Utilityyy/addToDB';
// import toast from 'react-hot-toast'; // 1. Import toast

const BokedLawyer = ({onRemove, apbk}) => {

let {consultFee, name, image, specialty, experience, licenseNumber, id} = apbk || {}

// const handleRemoveInstant = id => {  removeFromDB(id)  }


    return (
<div className="flex bg-gray-300 w-full mx-auto  rounded-lg shadow-md border border-gray-200 overflow-hidden max-w-lg mb-6 hover:shadow-lg transition-shadow">
      {/* Left: Image Section */}
      <div className="w-1/3">
        <img src={ image} alt={ name}  className="h-full w-full object-cover"  />
      </div>

      {/* Right: Content Section */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          {/* Experience on Top */}
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            { experience} Experience
          </span>

          {/* Name below Experience */}
          <h2 className="text-xl font-bold text-gray-900 mt-1">
            { name}
          </h2>

          {/* Specialty below Name */}
          <p className="text-sm text-gray-800 mb-3">
            { specialty}
          </p>
          <p className="text-sm text-gray-800 mb-3">
            Fee: { consultFee}
          </p>

          {/* Dotted Border */}
          <div className="border-t border-dotted border-gray-400 my-3"></div>

          {/* License Number */}
          <p className="text-xs text-gray-500 mb-4">
            License: <span className="font-mono">{ licenseNumber}</span>
          </p>
        </div>

        {/* View Details Button */}
        <button onClick={() => onRemove(id)} className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
          Cancel Appoint
        </button>
      </div>


    </div>
    );
};

export default BokedLawyer;