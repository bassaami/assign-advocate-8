import React from 'react';
import { useLoaderData } from 'react-router';

const BlogQues = () => {

const query = useLoaderData()
console.log(query);

    return (
        <div>
<div className="max-w-3xl mt-18 mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">React Interview Guide</h1>
        <p className="text-gray-600">Quick answers to common React concepts</p>
      </header>
      

<div className="space-y-6">
        {query.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                {item.id}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h2>
                <div className=" border-dashed  mb-2 border-1 "></div>
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>




        </div>


    </div>
    );
};

export default BlogQues;