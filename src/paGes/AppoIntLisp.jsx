import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getBookAppoint, removeFromDB } from '../Utilityyy/addToDB';
// import IADvocate from '../coMponents/IADvocate';
import BokedLawyer from './BokedLawyer';
// import BookAppoint from './BookAppoint';

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
  };

    return (
        <div className='mt-20 mx-auto'>
            <h1 className='text-5xl text-center'> Your Appoints: {usrAppointT.length} </h1>
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