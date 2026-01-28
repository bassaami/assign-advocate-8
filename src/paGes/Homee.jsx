import React from 'react';
import Hero from '../coMponents/Hero';
import LawyerList from './LawyerList';
import { useLoaderData } from 'react-router';
import SuccesS from '../coMponents/SuccesS';

const Homee = () => {

    let data= useLoaderData()
    console.log(data);
    return (
        <div>
            HOME PAGE FOR ALL
    <Hero></Hero>
    <LawyerList data={data} ></LawyerList>
    <SuccesS></SuccesS>
        </div>
    );
};

export default Homee;