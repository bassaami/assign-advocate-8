import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BookAppoint = () => {

const {id} = useParams()
const sid =parseInt(id)
// console.log(id);

let data= useLoaderData()
// console.log(data);
const singleLawyer = data.find(advoc => advoc.id === sid)
console.log(singleLawyer);


let {availableDays,  name, image, specialty, experience , licenseNumber} = singleLawyer
//     console.log(iLawyer);

    return (
<div className="flex gap-6 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden max-w-[70%] mb-9 mt-30 mx-auto hover:shadow-lg transition-shadow">
    
    
      {/* Left: Image Section */}
      <div className="w-1/3">
        <img src={ image} alt={ name}  className="h-full w-full object-cover"  />
      </div>

      {/* Right: Content Section */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          {/* Experience on Top */}
          <span className="text-1xl font-semibold text-blue-600 uppercase tracking-wide">
            { experience} years Experience
          </span>

          {/* Name below Experience */}
          <h2 className="text-4xl font-bold text-gray-900 my-15">
            { name}
          </h2>

          {/* Specialty below Name */}
          <p className="text-xl text-gray-800 my-8">
           Specialty = { specialty}
          </p>

<div className="flex text-xl gap-3">
    Available Days = 
    {
        availableDays.map(days => <button className='btn-xs'>{days} </button>)
    }
</div>
          {/* Dotted Border */}
          <div className="border-t border-dotted border-gray-400 my-5"></div>

          {/* License Number */}
          <p className="text-sm text-gray-500 my-4">
            License: <span className="font-mono">{ licenseNumber}</span>
          </p>
        </div>

        {/* View Details Button */}
        <Link to={`/lawyer/${id}`}><button className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
          Book Appoint
        </button></Link>
      </div>

      
    </div>
    );
};

export default BookAppoint;