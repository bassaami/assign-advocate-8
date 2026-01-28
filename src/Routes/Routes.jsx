import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../paGes/Root';
import ErrPage from '../paGes/ErrPage'
import Homee from '../paGes/Homee';
import BookAppoint from '../paGes/BookAppoint';
import AppoIntLisp from '../paGes/AppoIntLisp';
import BlogQues from '../paGes/BlogQues';

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
    },
    {
        path: '/lawyer/:id',
        loader: () => fetch('LawyersData.json'),
        Component: BookAppoint
    },
    {
        path: '/blogs',
        loader: () => fetch('Queryblog.json'),
        Component: BlogQues
    },
    {
        path: '/appoints',
        loader: () => fetch('LawyersData.json'),
        Component: AppoIntLisp

    }

]  
},

]);