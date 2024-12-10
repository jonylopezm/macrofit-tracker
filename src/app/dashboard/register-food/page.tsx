"use client"
import React, { ChangeEvent, ReactElement, ReactEventHandler, ReactHTMLElement, useEffect } from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Food } from '@/dashboard';
import Swal from 'sweetalert2';

const RegisterFood = () => {
  const [filteredFoodData, setFilteredFoodData] = useState<Food[]>([]);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [mealType, setMealType] = useState('desayuno');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]); 

  useEffect(() => {
    fetch('/api/food', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        setFilteredFoodData(data);
      })
      .catch(error => console.error('Error al obtener datos de comida:', error));
  }, []);



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
      if (!selectedFood || quantity === undefined || !selectedDate) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Llena todos los campos",
        });
        return;
      }
  
      
      const res = await fetch('/api/newfood', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: localStorage.getItem("user_id"),
          food_id: selectedFood.food_id,
          date: selectedDate,
          meal_type: mealType,
          quantity: quantity,
        })
      });
  
      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Registro de comida",
          text: "Comida registrada",
        });

      } else {
        console.error('Error creating food record.');
      }
    } catch (error) {
      console.error('An error occurred while creating food record:', error);
 
    }
  };
  
  return (
    
  <div className="mb-4 mt-4 grid grid-cols-1 gap-6 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">
  <div className="max-w-full px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl m-4">
    <h1 className="text-3xl font-bold mb-8">Registrar alimento</h1>
    <form onSubmit={handleSubmit} >
      {/*Tiempo de comida */}
      <fieldset className="relative z-0 w-full p-px mb-5">
        <legend className="absolute text-gray-500 transform -top-3 origin-0">Tiempo de comida</legend>
        <div className="block pt-3 pb-2 space-x-4 mt-4">
          <label>
            <input
              type="radio"
              name="radio"
              value="desayuno"
              checked={mealType === 'desayuno'}
              onChange={handleMealTypeChange} 
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Desayuno
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="almuerzo"
              checked={mealType === 'almuerzo'}
              onChange={handleMealTypeChange}
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Almuerzo
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="cena"
              checked={mealType === 'cena'}
              onChange={handleMealTypeChange}
              className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
            />
            Cena
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="snack"
              checked={mealType === 'snack'} 
              onChange={handleMealTypeChange} 
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
          <div className="m-2">
            <label htmlFor="date-picker" className="mr-2">
              Selecciona una fecha:
            </label>
            <input
              id="date-picker"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="p-2 border rounded"
            />
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
