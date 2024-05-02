import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="w-full">
      <div className="mb-4 mt-4 grid grid-cols-1 gap-6 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">

        <div className="animate-pulse w-full relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-600 shadow-none m-0 flex items-center justify-between p-6">
          <div className="w-3/4 ml-5 my-5">
            <div className="h-8 w-2/3 bg-gray-200 rounded-md"></div>
          </div>
          <button className="bg-gray-200 p-1 border rounded-md shadow-md  text-white">
            <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
          </button>
        </div>

        <div className="relative flex flex-col bg-clip-border pb-6 rounded-xl m-9 bg-white text-gray-900 shadow-md overflow-hidden xl:col-span-2">
          <div className="animate-pulse bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-600 shadow-none m-0 flex-col items-center justify-between p-6">
            <div className="h-8 w-2/3 bg-gray-200 rounded-md"></div>
            <div className="h-8 w-2/3 bg-gray-200 rounded-md"></div>
            <div className="h-8 w-2/3 bg-gray-200 rounded-md"></div>
            <div className="h-8 w-2/3 bg-gray-200 rounded-md"></div>
          </div>

          <h2 className="animate-pulse text-3xl bg-gray-200 font-bold text-start my-4 mx-6"></h2>

          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <div className="h-8 bg-gray-200 rounded-md"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((index) => (
                  <tr key={index}>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
