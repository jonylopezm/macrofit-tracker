"use client"
import { RiMentalHealthFill } from 'react-icons/ri';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error, setError]= useState("");

  const router = useRouter();
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
        router.push("/dashboard/home")
        localStorage.setItem('email', email)
      }else{
        alert("Correo o contraseña incorrectos " + res.status)
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return (
    <div className="flex flex-col bg-gradient-to-br from-green-900 to-yellow-700">
      <div className='flex flex-row lg:justify-start my-20 ml-20 sm:justify-center'>
        <a href="#" target="" className="flex">
          <RiMentalHealthFill  className="w-12 h-12 m-1 fill-white" />
          <span className="self-center lg:text-6xl sm:text-2xl text-white font-semibold whitespace-nowrap ">Macrofit Tracker</span>
        </a>
      </div>
      <div className="flex flex-col mx-auto bg-white text-slate-600 rounded-lg pt-6 mt-5 mb-20 px-8 lg:px-1">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center">
              <form onSubmit={handleSubmit} className="flex flex-col w-full h-full pb-4 text-center rounded-3xl">
                
                <h3 className="mb-3 text-4xl font-extrabold  text-slate-600">Sign In</h3>
                <p className="mb-4  text-slate-600">Ingresa tu correo y contraseña</p>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-slate-600/35 grow" />
                </div>
                <label htmlFor="email" className="mb-2 text-sm text-start  text-slate-600">Email*</label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-dark-grey-900 rounded-2xl"
                />
                <label htmlFor="password" className="mb-2 text-sm text-start  text-slate-600">Contraseña*</label>
                <input
                  id="password"
                  type="password"
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu contraseña"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-gray-200 text-dark-grey-900 rounded-2xl"
                />

                
                <div className="flex flex-row justify-between mb-8">
                  <a href="/reset-password" className="mr-4 text-sm font-medium text-[#fbb02d] ">Olvidó su contraseña?</a>
                </div>
                <button
                  type="submit"     
                  className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none  text-slate-600 transition duration-300 md:w-96 rounded-2xl hover:bg-[#fb6107] focus:ring-4 focus:ring-purple-blue-100 bg-[#fbb02d]"
                >
                  <a href="#">Sign In</a>
                </button>
                <p className="text-sm leading-relaxed  text-slate-600">No estas registrado aún? <a href="/register" className="font-bold  text-slate-600">Create an Account</a></p>
                
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

