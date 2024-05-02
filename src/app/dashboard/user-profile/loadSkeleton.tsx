import React from 'react';

const LoadSkeleton = () => {
  return (
    <div className="mb-4 mt-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
      <div className="relative flex flex-col bg-clip-border pb-6 mb-4 rounded-xl bg-slate-50 text-gray-600 shadow-md overflow-hidden xl:col-span-2">
        <div className="animate-pulse relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex p-6 justify-between">
          <div className="w-36 h-36 bg-gray-200 rounded-full"></div>
          <div className="w-3/4 ml-5">
            <div className="h-8 w-2/3 bg-gray-200 rounded-md"></div>
            <div className="h-12 w-full bg-gray-200 rounded-md mt-2"></div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="grid gap-y-10 gap-x-6 mx-10 md:grid-cols-2 xl:grid-cols-4 animate-pulse">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="relative flex flex-col items-center bg-clip-border rounded-xlbg-gray-200  text-white shadow-md">
              <div className=" px-10 pt-11 pb-3">
                <div className="h-8 w-20 bg-gray-200 rounded-md mb-3"></div>
                <div className="h-12 w-20 bg-gray-200 rounded-md"></div>
              </div>
              <div className="border-t border-blue-gray-50 p-4">
                <div className="h-8 w-20 bg-gray-200 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadSkeleton;