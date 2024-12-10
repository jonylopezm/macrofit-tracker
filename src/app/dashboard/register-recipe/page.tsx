"use client";
import React, { useEffect, useState, ChangeEvent } from 'react';
import Swal from 'sweetalert2';

const RegisterRecipe = () => {
  const [name, setName] = useState('');
  const [servingSize, setServingSize] = useState<number | number>(0);
  const [servingSizeUnits, setServingSizeUnits] = useState('g');
  const [servingType, setServingType] = useState('');
  const [calories, setCalories] = useState<number | number>(0);
  const [proteins, setProteins] = useState<number |number>(0);
  const [carbohydrates, setCarbohydrates] = useState<number | number>(0);
  const [fats, setFats] = useState<number | number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!name || !servingSize || !servingType || !calories || !proteins || !carbohydrates || !fats) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Llena todos los campos",
        });
        return;
      }

      const res = await fetch('/api/newfoodRecipe', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          serving_size: servingSize,
          serving_size_units: servingSizeUnits,
          serving_type: servingType,
          calories,
          proteins,
          carbohydrates,
          fats,
        }),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Receta registrada",
          text: "Tu receta ha sido registrada exitosamente.",
        });
        // Reinicia los valores del formulario
        setName('');
        setServingSize(0);
        setServingSizeUnits('g');
        setServingType('');
        setCalories(0);
        setProteins(0);
        setCarbohydrates(0);
        setFats(0);
      } else {
        console.error('Error registering recipe.');
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al registrar la receta.",
        });
      }
    } catch (error) {
      console.error('An error occurred while registering the recipe:', error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al procesar tu solicitud.",
      });
    }
  };

  return (
    <div className='w-full'>
    <div className="mb-4 mt-4 flex flex-wrap gap-6 w-11/12 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">
      <div className=" min-w-screen mx-auto px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl m-4">

        <h1 className="text-3xl font-bold mb-8">Agregar Comida/Receta</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-4 gap-12">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="servingSize" className="block text-gray-700 font-bold mb-2">Tamaño de porción:</label>
            <input
              type="number"
              id="servingSize"
              value={servingSize || ''}
              onChange={(e) => setServingSize(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="servingSizeUnits" className="block text-gray-700 font-bold mb-2">Unidades:</label>
            <select
              id="servingSizeUnits"
              value={servingSizeUnits}
              onChange={(e) => setServingSizeUnits(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="g">Gramos (g)</option>
              <option value="ml">Mililitros (ml)</option>
              <option value="taza">taza</option>
            </select>
          </div>
         

          <div className="mb-4">
            <label htmlFor="servingType" className="block text-gray-700 font-bold mb-2">Tipo de porción:</label>
            <input
              type="text"
              id="servingType"
              value={servingType}
              onChange={(e) => setServingType(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="calories" className="block text-gray-700 font-bold mb-2">Calorías:</label>
            <input
              type="number"
              id="calories"
              value={calories || ''}
              onChange={(e) => setCalories(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="proteins" className="block text-gray-700 font-bold mb-2">Proteínas:</label>
            <input
              type="number"
              id="proteins"
              value={proteins || ''}
              onChange={(e) => setProteins(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="carbohydrates" className="block text-gray-700 font-bold mb-2">Carbohidratos:</label>
            <input
              type="number"
              id="carbohydrates"
              value={carbohydrates || ''}
              onChange={(e) => setCarbohydrates(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="fats" className="block text-gray-700 font-bold mb-2">Grasas:</label>
            <input
              type="number"
              id="fats"
              value={fats || ''}
              onChange={(e) => setFats(parseFloat(e.target.value))}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-gradient-to-tr from-[#5c8001] to-[#7cb518] hover:shadow-lg focus:outline-none"
          >
            Registrar Receta
          </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegisterRecipe;
