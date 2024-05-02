import React, { useEffect, useState } from 'react';
import { FoodRecord } from '../interfaces/food_record';
import { CaloricIntake } from '@/dashboard';
import { SimpleUser } from '../interfaces/simple-user';


export const TodayResume: React.FC = () => {
  const [foodRecords, setFoodRecords] = useState<FoodRecord[]>([]);


  useEffect(() => {
    const fetchFoodRecordData = async () => {
      try {
        const user_id = '8617b1eb-d419-4826-948e-eac9a81b4b3c';
        console.log(user_id);
        const response = await fetch('/api/foodrecord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user_id})
        });

        if (!response.ok) {
          throw new Error('Failed to fetch food records');
        }

        const data = await response.json();
        setFoodRecords(data);
      } catch (error) {
        console.error('Error fetching food records:', error);
      }
    };

    fetchFoodRecordData();
  }, []);

  

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">
        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-600 shadow-none m-0 flex items-center justify-between p-6">
          <div className="w-3/4 ml-5 my-5">
            <h2 className="text-5xl text-gray-600 font-bold text-start">Resumen de Hoy</h2>
          </div>
          <button className="bg-gray-200 p-1 border rounded-md shadow-md bg-gradient-to-tr from-blue-600 to-blue-400 text-white">
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
                {foodRecords.map((record) => (
                  <tr key={record.food_id}>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <div className="flex items-center gap-4">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{record.food_id}</p>
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">Caloria</p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">prote</p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">porcion</p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">grasas</p>
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

export default TodayResume;