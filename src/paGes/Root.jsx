import React from 'react';
import Navbarr from '../coMponents/Navbarr'
import { Outlet } from 'react-router';
import Footerr from '../coMponents/Footerr'

const Root = () => {
    return (
        <div>
    <Navbarr></Navbarr>     
    <Outlet></Outlet>
    <Footerr></Footerr>
        </div>
    );
};

export default Root;