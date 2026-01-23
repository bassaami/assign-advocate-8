import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../paGes/Root';
import ErrPage from '../paGes/ErrPage'
import Homee from '../paGes/Homee';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrPage></ErrPage>,
children: [
    {
        index: true,
        loader: () => fetch('LawyersData.json'),
        path: "/",
Component: Homee
    }
]  
},

]);