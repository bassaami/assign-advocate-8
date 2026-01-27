import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { getBookAppoint } from '../Utilityyy/addToDB';
import IADvocate from '../coMponents/IADvocate';
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

    return (
        <div className='my-20 mx-auto'>
            <h1 className='text-5xl text-center'> Your Appoints: {usrAppointT.length} </h1>
<div className="grid grid-cols-1 gap-4 m-10">
    {
        usrAppointT.map(apbk => <BokedLawyer apbk={apbk} key={apbk.id}  />  )
    }
</div>
        </div>
    );
};

export default AppoIntLisp;