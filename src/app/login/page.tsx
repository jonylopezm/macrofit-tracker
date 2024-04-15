"use client"
import { RiMentalHealthFill } from 'react-icons/ri';
import React, { useState } from 'react';

const Login = () => {
  
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error, setError]= useState("");

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault()

    if(!email || !password ){
      setError("Debes llenar todos los campos");
      return;
    }

    try {
      const res = await fetch('api/login',{
        method: "POST",
        headers:{
          "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      if(res.ok){
        alert("Inicio de Sesion correcto");
      }else{
        alert("No se inicio sesion")
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <div className="flex flex-col bg-gradient-to-br from-green-900 to-yellow-700">
      <div className='flex flex-row justify-start my-20 ml-20'>
        <a href="#" target="" className="flex">
          <RiMentalHealthFill  className="w-12 h-12 m-1 fill-white" />
          <span className="self-center text-6xl text-white font-semibold whitespace-nowrap ">Macrofit Tracker</span>
        </a>
      </div>
      <div className="flex flex-col mx-auto bg-[#5c8001]/30 backdrop-blur-md rounded-lg pt-6 mt-5 mb-20">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center">
              <form onSubmit={handleSubmit} className="flex flex-col w-full h-full pb-4 text-center rounded-3xl">
                
                <h3 className="mb-3 text-4xl font-extrabold text-white">Sign In</h3>
                <p className="mb-4 text-white">Ingresa tu correo y contraseña</p>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-white/35 grow" />
                </div>
                <label htmlFor="email" className="mb-2 text-sm text-start text-white">Email*</label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-dark-grey-900 rounded-2xl"
                />
                <label htmlFor="password" className="mb-2 text-sm text-start text-white">Contraseña*</label>
                <input
                  id="password"
                  type="password"
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-gray-200 text-dark-grey-900 rounded-2xl"
                />
                <div className="flex flex-row justify-between mb-8">
                  <a href="javascript:void(0)" className="mr-4 text-sm font-medium text-[#fbb02d] ">Forget password?</a>
                  {error &&(
                    <a className=' text-red-600'>{error}</a>
                  )}
                </div>
                <button
                  type="submit"     
                  className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-[#fb6107] focus:ring-4 focus:ring-purple-blue-100 bg-[#fbb02d]"
                >
                  <a href="/dashboard">Sign In</a>
                </button>
                <p className="text-sm leading-relaxed text-white">Not registered yet? <a href="/register" className="font-bold text-white">Create an Account</a></p>
                
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

