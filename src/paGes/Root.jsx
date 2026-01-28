import React from 'react';
import Navbarr from '../coMponents/Navbarr'
import { Outlet } from 'react-router';
import Footerr from '../coMponents/Footerr'
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
    <Navbarr></Navbarr>     
    <Outlet></Outlet>
    <Footerr></Footerr>
        </div>
    );
};

export default Root;