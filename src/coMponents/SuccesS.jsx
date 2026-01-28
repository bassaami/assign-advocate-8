import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
// import succ from '../C002-assets/success-doctor.png';

const SuccesS = () => {
    // This hook detects when the section is visible on the screen
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation only happens once
        threshold: 0.2,    // Triggers when 20% of the element is visible
    });

    const stats = [
        { id: 1, img: "success-doctor.png", target: 199, label: "Total Lawyers" },
        { id: 2, img: "success-review.png", target: 799, label: "Total Reviews" },
        { id: 3, img: "success-patients.png", target: 1909, label: "Total Cases" },
        { id: 4, img: "success-staffs.png", target: 299, label: "Total Staff" },
    ];

    return (
        <div ref={ref} className='mx-auto max-w-7xl px-4 py-10'>
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">We Provide Best Law Services</h1>
                <p className="text-slate-500 max-w-2xl mx-auto">
                    Our platform connects you with verified, experienced lawyers across 
                    various specialties — all at your convenience.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.id} className="bg-slate-100 p-6 rounded-lg flex flex-col items-center text-center">
                        <img src={stat.img} alt={stat.label} className="w-12 h-12 mb-4" />
                        <p className="text-3xl font-bold">
                            {inView ? <CountUp end={stat.target} duration={2.5} /> : 0}+
                        </p>
                        <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccesS;