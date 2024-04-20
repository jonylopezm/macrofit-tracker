"use client"
import { error } from 'console';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import { HiArrowCircleRight } from "react-icons/hi";
import { RiMentalHealthFill } from 'react-icons/ri';
import Login from '../login/page';

const Register = () => {
    
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [error, setError] = useState("");
    const [pwdError, setPwdError] = useState("");

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        if(!first_name || !email || !password || !last_name){
            setError("Llena todos los campos");
            return;
        }

        if(password != confirmPwd){
            setPwdError("Las contrasenias no coinciden")
            return;
        }

        try {
            const res = await fetch('api/register', {
                method: "POST",
                headers:{
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify({
                    first_name, last_name,email, password
                })
                
            });

            if(res.ok){
                alert("usuario registrado")
            }else{
                alert("El usuario no se registro")
            }
        } catch (error) {
            console.log(error)
        }
    };
   


    return (
    <div className="flex flex-col bg-gradient-to-br from-amber-800 to-cyan-900">
       
      <div className='flex flex-row justify-start my-20 ml-20'>
        <a href="#" target="" className="flex">
                <RiMentalHealthFill  className="w-12 h-12 m-1 fill-white" />
				<span className="self-center text-6xl text-white font-semibold whitespace-nowrap ">Macrofit Tracker</span>
		</a>
        </div>
      
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 bg-white rounded-lg pt-6 mt-5 mb-20">
            <div className="w-full">
            <h3 className="mb-3 text-4xl font-extrabold text-slate-600 text-center">Sign Up</h3>

                <p className="text-slate-600 m-10 text-center">
                    Completa los siguientes campos para comenzar a usar la aplicacion.
                </p>
                <div className="flex items-center mb-3">
                    <hr className="h-0 border-b border-solid border-slate-600/30 grow" />
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <label className="block mb-2 text-sm text-slate-600">Nombre</label>
                        <input onChange={(e) => setFirst_name(e.target.value)} type="text" placeholder="John" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7  bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-slate-600">Apellido</label>
                        <input onChange={(e) => setLast_name(e.target.value)}type="text" placeholder="Snow" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-slate-600">Correo Electronico</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johnsnow@example.com" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-slate-600">Contraseña</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-slate-600">Confirme su contraseña</label>
                        {pwdError &&( <p className='text-red-500'>{pwdError}</p>   )}
                        <input onChange={(e) => setConfirmPwd(e.target.value)} type="password" placeholder="Enter your password" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-gray-200 text-slate-800 rounded-2xl" />
                    </div>

                    <div className="flex mt-10 pt-14">
                    <button
                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide mb-5 font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-[#fb6107] focus:ring-4 focus:ring-purple-blue-100 bg-[#fbb02d]">
                        <span>Sign Up </span>

                        <HiArrowCircleRight className="w-5 h-5 rtl:-scale-x-100" />

                    </button>
                    </div>
                   

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
