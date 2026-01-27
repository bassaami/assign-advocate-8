import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addToDBase } from '../Utilityyy/addToDB';

const BookAppoint = () => {

const {id} = useParams()
const sid =parseInt(id)
// console.log(id);

let data= useLoaderData()
// console.log(data);
const singleLawyer = data.find(advoc => advoc.id === sid)
console.log(singleLawyer);


let {availableDays, consultFee, name, image, specialty, experience, licenseNumber} = singleLawyer
//     console.log(iLawyer);

const handleAppoint = id => {
// store with id
// where to store
// array or collection
// if book already exist then push in the array
addToDBase(id)

}




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
          <span className="text-xl font-semibold text-blue-600 uppercase tracking-wide">
            { experience} years Experience
          </span>

          {/* Name below Experience */}
          <h2 className="text-4xl font-bold text-gray-900 my-12">
            { name}
          </h2>

          {/* Specialty below Name */}
          <p className="text-xl text-gray-800 my-8">
           Specialty = { specialty}
          </p>

<div className="flex text-xl  gap-2">
    Available Days: 
    {
        availableDays.map(days => <button className=' p-1 bg-lime-200 text-base border'>{days} </button>)
    }
</div>
<div className='text-base my-6 p-1 bg-pink-200 text-pink-900'> Consult Fee: ${consultFee} </div>
          {/* Dotted Border */}
          <div className="border-t border-dotted border-gray-400 my-5"></div>

          {/* License Number */}
          <p className="text-sm text-gray-500 my-4">
            License: <span className="font-mono">{ licenseNumber}</span>
          </p>
        </div>

        {/* View Details Button */} {/* <Link to='/appoints'></Link> */}
        <Link to='/appoints'>
        <button onClick={() => handleAppoint(id)} className="w-full bg-slate-800 hover:bg-slate-900 text-white text-xl font-medium py-2 px-4 rounded transition-colors">
          Book Appoint
        </button> </Link>
      </div>

      
    </div>
    );
};

export default BookAppoint;