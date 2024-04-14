"use client"
import { error } from 'console';
import React, { useState } from 'react'
import { HiArrowCircleRight } from "react-icons/hi";
import { RiMentalHealthFill } from 'react-icons/ri';

const Register = () => {
    
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        if(!first_name || !email || !password || !last_name){
            setError("Llena todos los campos");
            return;
        }

        try {
            const res = await fetch('api/register', {
                method: "POST",
                headers:{
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify({
                    first_name, last_name,email, password,
                })
            });

            if(res.ok){
                <form action="" className="reset"></form>
            }else{
                console.log("No se registro");
            }
        } catch (error) {
            
        }
    };
    console.log("Name: ", first_name)


    return (
    <div className="flex flex-col bg-gradient-to-br from-amber-800 to-cyan-900">
       
      <div className='flex flex-row justify-start my-20 ml-20'>
        <a href="#" target="" className="flex">
                <RiMentalHealthFill  className="w-12 h-12 m-1 fill-white" />
				<span className="self-center text-6xl text-white font-semibold whitespace-nowrap ">Macrofit Tracker</span>
		</a>
        </div>
      
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5  bg-[#5c8001]/30 rounded-lg pt-6 mt-5 mb-20">
            <div className="w-full">
            <h3 className="mb-3 text-4xl font-extrabold text-white text-center">Sign Up</h3>

                <p className="text-white m-10 text-center">
                    Completa los siguientes campos para comenzar a usar la aplicacion.
                </p>
                <div className="flex items-center mb-3">
                    <hr className="h-0 border-b border-solid border-white/35 grow" />
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Nombre</label>
                        <input onChange={(e) => setFirst_name(e.target.value)} type="text" placeholder="John" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7  bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Apellido</label>
                        <input onChange={(e) => setLast_name(e.target.value)}type="text" placeholder="Snow" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Sexo</label>
                        <input type="text" placeholder="XXX-XX-XXXX-XXX" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Correo Electronico</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johnsnow@example.com" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Contraseña</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-200">Confirme su contraseña</label>
                        <input type="password" placeholder="Enter your password" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <button
                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide mb-5 font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-[#fb6107] focus:ring-4 focus:ring-purple-blue-100 bg-[#fbb02d]">
                        <span>Sign Up </span>

                        <HiArrowCircleRight className="w-5 h-5 rtl:-scale-x-100" />

                    </button>

                </form>
                    {
                        error &&(
                        <div className=' w-56 text-center'>
                            <p className=' bg-red-700 text-white rounded-md'>{error}</p>
                        </div> 
                        )
                    }
            </div>
        </div>
    </div>
  )
}

export default Register