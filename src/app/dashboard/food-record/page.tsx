"use client"
import React, { useEffect, useState } from 'react';
import { FoodRecord } from '@/dashboard/interfaces/food_record';
import { Food } from '@/dashboard/interfaces/food';
import SkeletonLoader from './skeletonLoader';


export const TodayResume: React.FC = () => {
  const [foodRecords, setFoodRecords] = useState<FoodRecord[]>([]);

  const [requiredValues, setRequiredValues] = useState({
    calories: 0,
    fats: 0,
    carbohydrates: 0,
    proteins: 0,
  });

  useEffect(() => {
    const fetchFoodRecordData = async () => {
      try {
        const user_id = localStorage.getItem("user_id");
        console.log(user_id);
    
        const foodRecordsResponse = await fetch('/api/foodrecord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({user_id})
        });
    
        if (!foodRecordsResponse.ok) {
          throw new Error('Failed to fetch food records');
        }
    
        const foodRecordsData = await foodRecordsResponse.json();
    
        // Obtener detalles para cada registro de comida
        const promises = foodRecordsData.map(async (record: Food) => {
          const foodDetailsResponse = await fetch('/api/foodDetail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ food_id: record.food_id })
          });
    
          if (!foodDetailsResponse.ok) {
            throw new Error('Failed to fetch food details');
          }
    
          const foodDetailsData = await foodDetailsResponse.json();
          console.log(foodDetailsData)
          return { ...record, details: foodDetailsData };
          
        });
    
        const foodRecordsWithDetails = await Promise.all(promises);
        setFoodRecords(foodRecordsWithDetails);
      } catch (error) {
        console.error('Error fetching food records:', error);
      }
    };

    const fetchRequiredValues = () => {
      const requiredValuesFromLocalStorage = localStorage.getItem('requiredValues');
      if (requiredValuesFromLocalStorage) {
        const parsedRequiredValues = JSON.parse(requiredValuesFromLocalStorage);
        setRequiredValues(parsedRequiredValues);
      }
    };

    fetchFoodRecordData();
    fetchRequiredValues();

  }, []);

  // Función para calcular la suma de calorías, proteínas, grasas y carbohidratos
  const calculateTotalValues = () => {
    let totalCalories = 0;
    let totalFats = 0;
    let totalProteins = 0;
    let totalCarbohydrates = 0;

    foodRecords.forEach((record) => {
      totalCalories += record.details.calories;
      totalFats += record.details.fats;
      totalProteins += record.details.proteins;
      totalCarbohydrates += record.details.carbohydrates;
    });

    return {
      totalCalories,
      totalFats,
      totalProteins,
      totalCarbohydrates,
    };
  };

  // Calcular la suma de los valores totales
  const {
    totalCalories,
    totalFats,
    totalProteins,
    totalCarbohydrates,
  } = calculateTotalValues();

  const [isLoading, setIsLoading] = useState(true);

  // Simula un tiempo de carga
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
    {isLoading ? (
      // Muestra el SkeletonLoader si la página está cargando
      <SkeletonLoader />
    ) : (
      // Muestra el contenido real cuando la página haya cargado
      <div className='w-full'>
      <div className="mb-4 mt-4 grid grid-cols-1 gap-6 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">
    

        <div className=" w-full relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-600 shadow-none m-0 flex items-center justify-between p-6">
          <div className="w-3/4 ml-5 my-5">
            <h2 className="text-5xl text-gray-600 font-bold text-start">Resumen de Hoy</h2>
          </div>
          <button className="bg-gray-200 p-1 border rounded-md shadow-md bg-gradient-to-tr from-blue-600 to-blue-400 text-white">
            <a href="/dashboard/register-food">Registrar comida</a>
          </button>
        </div>
        <div className="relative flex flex-col bg-clip-border pb-6 rounded-xl m-9 bg-white text-gray-900 shadow-md overflow-hidden xl:col-span-2">
        
         {/*Barras de progreso */}
         
        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-600 shadow-none m-0 flex-col items-center justify-between p-6">
        <h2 className="text-3xl text-gray-600 font-bold text-start">Progreso del Dia</h2>
          <div>
            <h3>Calorías</h3>
            <div className="bg-gray-200 h-4 rounded-full">
              <div className=" bg-gradient-to-r from from-blue-300 to-blue-500 h-4 rounded-full" style={{ width: `${(totalCalories / requiredValues.calories) * 100}%` }}></div>
            </div>
          </div>
          <div>
            <h3>Grasas</h3>
            <div className="bg-gray-200 h-4 rounded-full">
              <div className="bg-gradient-to-r from from-yellow-300 to-yellow-500 rounded-full h-4" style={{ width: `${(totalFats / requiredValues.fats) * 100}%` }}></div>
            </div>
          </div>
          <div>
            <h3>Proteínas</h3>
            <div className="bg-gray-200 h-4 rounded-full">
              <div className="bg-gradient-to-r from from-green-300 to-green-500 rounded-full h-4" style={{ width: `${(totalProteins / requiredValues.proteins) * 100}%` }}></div>
            </div>
          </div>
          <div>
            <h3>Carbohidratos</h3>
            <div className="bg-gray-200 rounded-full h-4">
              <div className="bg-gradient-to-r from from-red-300 to-red-500 rounded-full h-4" style={{ width: `${(totalCarbohydrates / requiredValues.carbohydrates) * 100}%` }}></div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl text-gray-600 font-bold text-start my-4 mx-6 ">Tabla de comidas</h2>

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
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Grasas</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Carbohidratos</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Porcion</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {foodRecords.map((record) => {
                  return (
                    <tr key={record.food_id}>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <div className="flex items-center gap-4">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{record.details.name}</p>
                        </div>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{record.details.calories}</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{record.details.proteins}</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{record.details.fats}</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{record.details.carbohydrates}</p>
                      </td>
                      <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">{record.details.serving_size} {record.details.serving_size_units}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )}
  </div>

  
  );
};

export default TodayResume;
