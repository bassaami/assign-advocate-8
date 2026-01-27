import React from 'react';
import Navbarr from '../coMponents/Navbarr';
import errImg from '../C002-assets/lawyer.png'
import { Link } from 'react-router';
const ErrPage = () => {
    return (
        <div>
            <Navbarr></Navbarr>
        <div className="my-20 mx-auto flex flex-col text-center ">
            <img className='mx-auto shadow-2xl  w-[20%] ' src={errImg} alt="" />
            <h1 className="text-pink-600 font-bold my-6 text-2xl">404 PAGE NOT FOUND</h1>
    <Link to='/'><button  className="text-white bg-green-800 hover:bg-lime-600 focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 ">
        Go Back Home
    </button></Link>
        </div>
        </div>
    );
};

export default ErrPage;