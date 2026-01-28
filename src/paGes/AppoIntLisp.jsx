import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getBookAppoint, removeFromDB } from '../Utilityyy/addToDB';
// import IADvocate from '../coMponents/IADvocate';
import BokedLawyer from './BokedLawyer';
// import BookAppoint from './BookAppoint';
import toast from 'react-hot-toast'; // 1. Import toas
// --- IMPORT RECHARTS COMPONENTS ---
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';



const AppoIntLisp = () => {

const [usrAppointT, setAppointt] = useState([])

const data = useLoaderData()
// console.log(data);

useEffect(() => {
    const appointDATA = getBookAppoint()
    // console.log(appointDATA);
    const ConvertAppo = appointDATA.map(id => parseInt(id))
    // console.log(ConvertAppo);
    const myAppoint = data.filter(appo => ConvertAppo.includes(appo.id))
    // console.log(userAppoint);
    setAppointt(myAppoint)
},[])

  // NEW: The handler to update UI instantly
  const handleRemoveInstant = (id) => {
    // 1. Remove from database/localStorage
    removeFromDB(id);
    
    // 2. Update the local UI state instantly by filtering out the deleted item
    const remaining = usrAppointT.filter(lawyer => lawyer.id !== id);
    setAppointt(remaining);

//TOASTER
    toast.error('This Appointment is Canceled', {
        duration: 4000,
    // Add custom styling here
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#FFFFFF',          // White text
      backgroundColor: '#E11D48', // Bright Red (Tailwind rose-600)
      fontWeight: 'bold',        // Bold text
    },
    iconTheme: {
      primary: '#FFFFFF',        // White icon
      secondary: '#E11D48',      // Red background for the icon circle
    },
        
    });
  };

    return (
        <div className='mt-20 mx-auto'>
            <h1 className='text-5xl text-center'> Your Appoints: {usrAppointT.length} </h1>
{usrAppointT.length === 0 && <h1 className='text-2xl my-30 text-center'>SORRY, YOU HAVE NO APPOINT</h1>}

{/* --- CHART SECTION --- */}
      {usrAppointT.length > 0 && (
        <div className="bg-gray-50 p-6 rounded-xl shadow-md mb-10" style={{ width: '100%', height: 400 }}>
          <h2 className="text-2xl font-bold mb-4 text-center">Fee Comparison</h2>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={usrAppointT}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" /> {/* Assuming your lawyer object has a 'name' property */}
              <YAxis />
              <Tooltip />
              <Bar dataKey="consultFee" fill="#4F46E5"> {/* Assuming your lawyer object has a 'fee' property */}
                {usrAppointT.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#4F46E5' : '#818CF8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

<div className="grid grid-cols-1 gap-4 m-5">
    {
        usrAppointT.map(apbk => <BokedLawyer
            onRemove={handleRemoveInstant} // Passing the function here
            apbk={apbk} key={apbk.id} 
             />  )
    }
</div>
        </div>
    );
};

export default AppoIntLisp;