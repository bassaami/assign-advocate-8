import React, { Suspense, useState } from 'react';
import LawyerCard from '../coMponents/LawyerCard.jsx';
import IADvocate from '../coMponents/IADvocate.jsx';
// import lawyers from  'LawyersData.json'; // Assuming your JSON is saved here
// console.log(lawyers);

const LawyerList = ({data}) => {

let [allAdvocates, setAllAdvocate] = useState([])

// useEffect(() => {
//         fetch("LawyersData.json")
//         .then(resp => resp.json())
//         .then(data => {
//           console.log(data);
//         })
// }, [])
// let advocatePromise = fetch('LawyersData.json').then(resp => resp.json())

// State to track if we are showing all lawyers or just 6
  const [showAll, setShowAll] = useState(false);

  // Logic to determine which lawyers to display
  // If showAll is true, take everything; otherwise, take only the first 6
  const visibleLawyers = showAll ? data : data.slice(0, 6);

  return (
    <div className="p-8 bg-gray-50 min-w-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Our Legal Experts</h1>
  
      { /* Responsive Grid: 1 column on mobile, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <Suspense fallback={<span>........LOADING.......</span>} >
  {
    visibleLawyers.map((iLawyer) => ( <IADvocate key={iLawyer.id} iLawyer={iLawyer} ></IADvocate> ))
  }

  </Suspense>    
        </div>

{data.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
  )}    
      
    </div>
  );
};

export default LawyerList;