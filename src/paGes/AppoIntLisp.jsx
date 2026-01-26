import React from 'react';
import { useEffect } from 'react';
// import { useLoaderData } from 'react-router';
import { getBookAppoint } from '../Utilityyy/addToDB';

const AppoIntLisp = () => {

// const data = useLoaderData()
// console.log(data);
useEffect(() => {
    const appointDATA = getBookAppoint()
    // console.log(appointDATA);
    const ConvertAppo = appointDATA.map(id => parseInt(id))
    // console.log(ConvertAppo);
    
},[])

    return (
        <div className='text-9xl'>
            ufhdiouihfyuefdoia <br /> chdsbvofhreuifhe
        </div>
    );
};

export default AppoIntLisp;