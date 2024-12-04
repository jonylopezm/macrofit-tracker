import React from 'react'
import { useState, useEffect } from 'react';
import { SimpleUser } from '@/dashboard/interfaces/simple-user';

interface Props {
    userInfo: SimpleUser | null;
  }
  
export const CaloricIntake: React.FC<Props> = ({ userInfo }) => {
      // Estado para almacenar los valores requeridos
  const [requiredValues, setRequiredValues] = useState({
    calories: 0,
    fats: 0,
    carbohydrates: 0,
    proteins: 0,
  });

  // Función para calcular los valores requeridos
  const calculateRequiredValues = () => {
    // Realiza los cálculos aquí utilizando los datos del usuario (userInfo)
    // Ejemplo de cálculos ficticios, debes ajustarlos según la fórmula que desees utilizar
    const userWeight = userInfo?.weight || 0;
    const userHeight = userInfo?.height || 0;
    const userAge = userInfo?.age || 0;
    const userGender = userInfo?.gender || 'hombre'; // Asumiendo que el género predeterminado es masculino

    // Realiza el cálculo del requerimiento calórico diario según la fórmula que desees
    let calculatedCalories = 0;
    if (userGender === 'hombre') {
      calculatedCalories = 10 * userWeight + 6.25 * userHeight - 5 * userAge + 5;
    } else {
      calculatedCalories = 10 * userWeight + 6.25 * userHeight - 5 * userAge - 161;
    }

    // Calcula la cantidad requerida de grasas, proteínas y carbohidratos
    const fatsPercentage = 0.25; // Porcentaje de grasas
    const proteinsPercentage = 0.25; // Porcentaje de proteínas
    const carbohydratesPercentage = 0.5; // Porcentaje de carbohidratos

    const fats = calculatedCalories * fatsPercentage / 9; // 1 gramo de grasa tiene aproximadamente 9 calorías
    const proteins = calculatedCalories * proteinsPercentage / 4; // 1 gramo de proteína tiene aproximadamente 4 calorías
    const carbohydrates = calculatedCalories * carbohydratesPercentage / 4; // 1 gramo de carbohidrato tiene aproximadamente 4 calorías

    // Actualiza el estado con los valores calculados
    setRequiredValues({
      calories: calculatedCalories,
      fats,
      proteins,
      carbohydrates,
    });

    const valuesToSave = {
      calories: calculatedCalories,
      fats,
      proteins,
      carbohydrates,
    };

    localStorage.setItem('requiredValues', JSON.stringify(valuesToSave));
  };

  
  useEffect(() => {
    // Llama a la función para calcular los valores requeridos al montar el componente
    calculateRequiredValues();
  }, [userInfo]); // Ejecuta la función cada vez que cambien los datos del usuario

  return (

    
    <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
    <div className="relative flex flex-col bg-clip-border pb-6 mb-4 rounded-xl bg-slate-50 text-gray-600 shadow-md overflow-hidden xl:col-span-2">
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex p-6 justify-between">
        <div className=' w-3/4 ml-5 my-5'>
          <h2 className='text-2xl text-gray-600 font-bold text-left'>Tu requerimiento calórico Diario</h2>
        </div>
       
      </div>
      <div className='grid gap-y-10 gap-x-6 mx-10 md:grid-cols-2 xl:grid-cols-4'>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md items-center">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-[#f3de2c] to-[#fb6107] text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-32 place-items-center">
            <h3>Grasas</h3>
          </div>
          <div className=" px-10 pt-11 pb-3 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">{requiredValues.fats.toFixed(2)}</h4>
          </div>  
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-end text-base leading-relaxed font-light text-blue-gray-600">
              <strong className="text-slate-500 text-3xl">grs</strong>
            </p>
          </div>       
        </div>

        <div className="relative items-center flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4  rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-32 place-items-center">
            <h3>Carbohidratos</h3>
          </div>
          <div className="px-10 pt-11 pb-3 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">{requiredValues.carbohydrates.toFixed(2)}</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-end text-base leading-relaxed font-light text-blue-gray-600">
              <strong className="text-slate-500 text-3xl">grs</strong>
            </p>
          </div>        
        </div>

        <div className="relative flex items-center flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4  rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-32 place-items-center">
            <h3>Proteínas</h3>
          </div>
          <div className="px-10 pt-11 pb-3 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">{requiredValues.proteins.toFixed(2)}</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-end text-base leading-relaxed font-light text-blue-gray-600">
              <strong className="text-slate-500 text-3xl">grs</strong>
            </p>
          </div>         
        </div>

        <div className="relative flex flex-col items-center bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4  rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-32 place-items-center">
            <h3>Calorías</h3>
          </div>
          <div className="px-10 pt-11 pb-3 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-5xl overflow-hidden font-semibold leading-snug text-blue-gray-900 ">{requiredValues.calories}</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-end text-base leading-relaxed font-light text-blue-gray-600">
              <strong className="text-slate-500 text-3xl">Kcal</strong>
            </p>
          </div>         
        </div>
      </div>
    </div>
  </div>
  )
}
