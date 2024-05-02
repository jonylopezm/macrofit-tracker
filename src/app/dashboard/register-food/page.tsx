"use client"
import React, { ChangeEvent, ReactElement, ReactEventHandler, ReactHTMLElement, useEffect } from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Food } from '@/dashboard';

const RegisterFood = () => {
  const [filteredFoodData, setFilteredFoodData] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [mealType, setMealType] = useState('desayuno');

  useEffect(() => {
    // Realiza una petición para obtener todos los datos de comida
    fetch('/api/food', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        setFilteredFoodData(data); // Cuando se cargan los datos, inicialmente se muestran todos
      })
      .catch(error => console.error('Error al obtener datos de comida:', error));
  }, []);

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedFoodId = e.target.value;
    const food = filteredFoodData.find(food => food.food_id === selectedFoodId);
    if (food) {
      setSelectedFood(food);
      // Establece la cantidad correspondiente a la comida seleccionada
      setQuantity(food.serving_size);
    } else {
      setSelectedFood(null);
      setQuantity(undefined); // Si no se selecciona ninguna comida, borra la cantidad
    }
  };
 
  const handleMealTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMealType(e.target.value); // Actualiza el estado con el valor seleccionado del tiempo de comida
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Verifica que se haya seleccionado una comida y se haya establecido una cantidad
      if (!selectedFood || quantity === undefined || !startDate) {
        console.error('Food, quantity, or date is missing.');
        return;
      }
  
      const formattedDate = startDate.toISOString().split('T')[0]; // Formatea la fecha en formato yyyy-mm-dd
  
      const res = await fetch('/api/newfood', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: localStorage.getItem("user_id"),
          food_id: selectedFood.food_id,
          date: formattedDate,
          meal_type: mealType,
          quantity: quantity,
        })
      });
  
      if (res.ok) {
        console.log('Food record created.');

      } else {
        console.error('Error creating food record.');
      }
    } catch (error) {
      console.error('An error occurred while creating food record:', error);
 
    }
  };
  

  return (
    
  <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">
  <div className="mx-auto max-w-full w-screen px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 className="text-2xl font-bold mb-8">Registrar alimento</h1>
    <form onSubmit={handleSubmit} >
      {/*Tiempo de comida */}
      <fieldset className="relative z-0 w-full p-px mb-5">
        <legend className="absolute text-gray-500 transform -top-3 origin-0">Tiempo de comida</legend>
        <div className="block pt-3 pb-2 space-x-4">
          <label>
            <input
              type="radio"
              name="radio"
              value="desayuno"
              checked={mealType === 'desayuno'} // Marca como seleccionado si el valor del estado es '1'
              onChange={handleMealTypeChange} // Maneja el cambio de valor
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Desayuno
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="almuerzo"
              checked={mealType === 'almuerzo'} // Marca como seleccionado si el valor del estado es '1'
              onChange={handleMealTypeChange} // Maneja el cambio de valor
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Almuerzo
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="cena"
              checked={mealType === 'cena'} // Marca como seleccionado si el valor del estado es '1'
              onChange={handleMealTypeChange} // Maneja el cambio de valor
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Cena
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="snack"
              checked={mealType === 'snack'} // Marca como seleccionado si el valor del estado es '1'
              onChange={handleMealTypeChange} // Maneja el cambio de valor
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Snack
          </label>
        </div>
        <span className="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
      </fieldset>
      {/* Opciones de comida */}
      <div className="mx-auto max-w-full w-screen pb-4 flex justify-start items-center">
            <div className='relative z-0 w-1/2 mb-5 mt-5'>
              <a>Seleccione la Comida</a>
              <select
                name="foodSelect"
                value={selectedFood ? selectedFood.food_id : ''}
                onChange={handleSelectChange}
                className="pt-3 pb-2 block w-full px-0 mt-0 border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              >
                <option value="" selected disabled hidden></option>
                {filteredFoodData.map(food => (
                  <option key={food.food_id} value={food.food_id}>{food.name}</option>
                ))}
              </select>
            </div>
            {/* Cantidad */}
            <div className='relative z-0 w-20 my-5 mx-4'>
              <a>Cantidad</a>
              <input
                type="number"
                name="cantidad"
                placeholder=" "
                required
                value={quantity || ''}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="pt-3 pb-2 block w-full px-0 text-center mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
            </div>

            {/* Unidades de tamaño de porción */}
            {selectedFood && (
              
                <a className=' font-medium mt-6'>{selectedFood.serving_size_units}</a>
                
            )}
          </div>
          {/* Fecha */}
          <div className="flex flex-row space-x-4">
            <div className="relative z-0 w-full mb-5">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Cambiar la fecha"
                className="pt-3 pb-2 w-full px-0 mt-0 bg-white border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                calendarClassName="absolute block bg-white shadow-md border border-gray-800"
                shouldCloseOnSelect={false}
              />
              <span className="text-sm text-red-600 hidden" id="error">Date is required</span>
            </div>
          </div>
          {/* Botón de registro */}
          <button
            id="button"
            type="submit"
            className="w-1/2 px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gradient-to-tr from-[#5c8001] to-[#7cb518] hover:shadow-lg focus:outline-none"
          >
            Registrar Comida
          </button>
    </form>
  </div>
</div>
   
  )
}

export default RegisterFood
