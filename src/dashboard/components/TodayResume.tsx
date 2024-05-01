import React from 'react'

export const TodayResume = () => {
  return (
    <div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">
      
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-600 shadow-none m-0 flex items-center justify-between p-6">
          <div className=' w-3/4 ml-5 my-5'>
                <h2 className='text-5xl text-gray-600 font-bold text-start'>Resumen de Hoy</h2>
            </div>
            

            <button className=' bg-gray-200 p-1 border rounded-md shadow-md bg-gradient-to-tr from-blue-600 to-blue-400 text-white'>
                <a href="">Registrar comida</a>
            </button>
          </div>
        <div className="relative flex flex-col bg-clip-border pb-6 rounded-xl m-9 bg-white text-gray-900 shadow-md overflow-hidden xl:col-span-2">
         
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Alimento</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Calorias</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Proteinas</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Porcion</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Grasas</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Leche entera</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">250 ml</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>
                
                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Ojuelas de maiz</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">22 grs</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>

                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Cafe</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">1 taza</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>

                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Bananos</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">2 u</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodayResume
