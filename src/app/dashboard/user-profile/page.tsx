"use client"
import React, { use, useEffect, useState } from 'react'
import { Profile } from '@/dashboard';
import { SimpleUser } from '@/dashboard/interfaces/simple-user';
import Image from 'next/image';
import { HiArrowCircleRight } from 'react-icons/hi';
import Swal from 'sweetalert2';
import LoadSkeleton from './loadSkeleton';

const page = () => {

  const [userInfo, setUserInfo] = useState<SimpleUser | null>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const email = localStorage.getItem('email');
        const response = await fetch('/api/userInfo', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email })
        });

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          console.error('Failed to fetch user info');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    getUserInfo();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editedAge, setEditedAge] = useState(userInfo?.age || ''); // Inicializa con la edad actual del usuario
  const [editedHeight, setEditedHeight] = useState(userInfo?.height || ''); // Inicializa con la altura actual del usuario
  const [editedWeight, setEditedWeight] = useState(userInfo?.weight || ''); // Inicializa con el peso actual del usuario


  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();
    const userId = localStorage.getItem("user_id")
    console.log('Nuevos datos editados:', editedAge, editedHeight, editedWeight, userId);
    if (typeof userId === "string") {
      try {
        const res = await fetch('../api/profile', {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "X-User-Id": userId
            },
            body: JSON.stringify({
                age:editedAge, 
                weight:editedWeight, 
                height:editedHeight
            })
            
        });

        if(res.ok){
          Swal.fire({
            title: 'Datos actualizados!',
            icon: 'success',
          });
        }else{
            alert("El pergfil no se actualizo")
        }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo Salio mal, reintenta más tarde",
      });
    }
  } else {
      throw new Error("Invalid user_id");
  }
    
};

const [isLoading, setIsLoading] = useState(true);

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
      <LoadSkeleton />
    ) : (
  <form onSubmit={handleSubmit} className="mb-4 mt-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
  <div className="relative flex flex-col bg-clip-border pb-6 mb-4 rounded-xl bg-slate-50 text-gray-600 shadow-md overflow-hidden xl:col-span-2">
    <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex p-6 justify-between">
    <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            width={150}
            height={150}
            alt=""
            className="ml-4 w-36 h-36 rounded-full"
          />
      <div className="w-3/4 ml-5">
        <h2 className="text-xl font-medium ">Perfil</h2>
        <h2 className="text-5xl text-gray-600 font-bold">
          {userInfo?.first_name} {userInfo?.last_name}
        </h2>
      </div>
      

      {isMenuOpen && (
    <div className="absolute top-14 right-5 z-10 bg-white shadow-md p-2 rounded-md">
      <button className="block w-full text-left">Editar</button>
    </div>
  )}
    </div>
    <div className="grid gap-y-10 gap-x-6 mx-10 md:grid-cols-2 xl:grid-cols-4">
    <div className="relative flex flex-col items-center bg-clip-border rounded-xl bg-gradient-to-tr from-[#5c8001] to-[#7cb518] text-white shadow-md">
      
      <div className=" px-10 pt-11 pb-3">
        <h3 className='text-2xl text-center'>Altura</h3>
        <input
          type="number"
          value={editedHeight}
          onChange={(e) => setEditedHeight(e.target.value)}
          placeholder={`${userInfo?.height}`}
          className="block antialiased tracking-normal placeholder:text-white font-sans text-5xl font-semibold leading-snug text-blue-gray-900 bg-transparent w-full px-2 py-1 mt-2 border border-gray-800/25 rounded-md focus:outline-none focus:border-blue-400"
        />
      </div>  
      <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-end text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-4xl font-light text-white/60 ">Metros</strong>
        </p>
      </div>       
    </div>

    <div className="relative flex flex-col items-center bg-clip-border rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-md">
      
      <div className=" px-10 pt-11 pb-3">
        <h3 className='text-2xl text-center'>Peso</h3>
        <input
          type="number"
          value={editedWeight}
          onChange={(e) => setEditedWeight(e.target.value)}
          placeholder={`${userInfo?.weight}`}
          className="block antialiased tracking-normal placeholder:text-white font-sans text-5xl font-semibold leading-snug text-blue-gray-900 w-full px-2 py-1 mt-2 border bg-transparent border-gray-800/25 rounded-md focus:outline-none focus:border-blue-400"
        />
      </div>  
      <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-end text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-4xl font-light text-white/60 ">Lbs</strong>
        </p>
      </div>       
    </div>

    <div className="relative flex flex-col items-center bg-clip-border rounded-xl bg-gradient-to-tr from-[#5c8001] to-[#7cb518] text-white shadow-md">
      
      <div className=" px-10 pt-11 pb-3">
        <h3 className='text-2xl text-center'>Edad</h3>
        <input
          type="number"
          value={editedAge}
          onChange={(e) => setEditedAge(e.target.value)}
          placeholder={`${userInfo?.age}`}
          className="block antialiased tracking-normal placeholder:text-white font-sans text-5xl font-semibold leading-snug text-blue-gray-900 w-full px-2 py-1 mt-2 border bg-transparent border-gray-800/25 rounded-md focus:outline-none focus:border-blue-400"
        />
      </div>  
      <div className="border-t border-blue-gray-50 p-4">
        <p className="block antialiased font-sans text-end text-base leading-relaxed font-normal text-blue-gray-600">
          <strong className="text-4xl font-light text-white/60 ">Años</strong>
        </p>
      </div>       
    </div>

  
    </div>

    <div className="flex pl-10 mt-10 pt-14">
    <button
      className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide mb-5 font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-[#fb6107] focus:ring-4 focus:ring-purple-blue-100 bg-[#fbb02d]">
    <span>Editar </span>
    <HiArrowCircleRight className="w-5 h-5 rtl:-scale-x-100" />
    </button>
  </div>
  </div>

  
  </form>
   )}
   </div>

  )
}

export default page
