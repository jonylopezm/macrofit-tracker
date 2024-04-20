"use client"
import { Footer } from '@/components';
import { User } from '@/dashboard';
import { SimpleUser } from '@/dashboard/interfaces/simple-user';
import Image from 'next/image'
import { HiOutlinePencil } from "react-icons/hi";
import { useState, useEffect } from 'react';

const getUserInfo = async (): Promise<SimpleUser> =>{
  const email = "brayangmzrest@example.com"
  const data: User = await fetch('api/userInfo',{
    method: "POST",
    headers:{
      "Content-Type": "aplication/json"
    },
    body: JSON.stringify({
      email
    })
  }).then(res => res.json());

  console.log(data.last_name, email);
  return data;
}

const Dashboard = () => {
  // Estado para almacenar la información del usuario
  const [userInfo, setUserInfo] = useState<SimpleUser | null>(null);

  useEffect(() => {
    // Función para obtener la información del usuario
    const getUserInfo = async () => {
      try {
        const email = "brayangmzrest@example.com";
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

    // Llamar a la función para obtener la información del usuario al montar el componente
    getUserInfo();
  }, []);

  return (
    
    <div>
    <div className="min-h-screen flex justify-center bg-slate-200">
        <aside className="bg-gradient-to-br bg-white text-gray-700 -translate-x-80 z-50 my-8 ml-4 min-h-max w-0 rounded-xl transition-transform duration-300 xl:translate-x-0 xl:w-72">
    <div className="relative border-b border-white/20">
      <a className="flex items-center gap-4 py-6 px-8" href="#/">
        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-700">Material Tailwind Dashboard</h6>
      </a>
      <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-700 hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-700">
            <path stroke-linecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </span>
      </button>
    </div>
    <div className="m-4">
      <ul className="mb-4 flex flex-col gap-1">
        <li>
          <a aria-current="page" className="active" href="#">
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
              </svg>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">dashboard</p>
            </button>
          </a>
        </li>
        <li>
          <a className="" href="#">
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"></path>
              </svg>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">profile</p>
            </button>
          </a>
        </li>
        <li>
          <a className="" href="#">
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd"></path>
              </svg>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">tables</p>
            </button>
          </a>
        </li>
        <li>
          <a className="" href="#">
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd"></path>
              </svg>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">notifactions</p>
            </button>
          </a>
        </li>
      </ul>
      <ul className="mb-4 flex flex-col gap-1">
        <li className="mx-3.5 mt-4 mb-2">
          <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-black uppercase opacity-75">auth pages</p>
        </li>
        <li>
          <a className="" href="#">
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd"></path>
              </svg>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign in</p>
            </button>
          </a>
        </li>
        <li>
          <a className="" href="#">
            <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign up</p>
            </button>
          </a>
        </li>
      </ul>
    </div>
        </aside>
  <div className="xl:ml-6 ml-0 mr-4">
      <div className="pt-4">
   
   {/* Contenedor principal */}
    <div className="mt-4">

    {/* Perfil */}
    <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
        <div className="relative flex flex-col bg-clip-border pb-6 mb-4 rounded-xl bg-slate-50 text-gray-600 shadow-md overflow-hidden xl:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex p-6 justify-between">
            <Image src="https://mighty.tools/mockmind-api/content/human/65.jpg" width={150} height={150} alt="" className="ml-4 w-36 h-36 rounded-full"></Image>
            <div className=' w-3/4 ml-5'>
                <h2 className='text-xl font-medium '>Perfil</h2>
                <h2 className='text-5xl text-gray-600 font-bold'>{userInfo?.first_name} {userInfo?.last_name}</h2>

            </div>

            
            <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none justify-end font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  rounded-full">
              <HiOutlinePencil className='h-12 w-12 stroke-gary-700 bg-transparent rounded-full p-2 hover:bg-white hover:stroke-slate-600'/>
              </span>
            </button>
          </div>
        <div className='grid gap-y-10 gap-x-6 mx-10 md:grid-cols-2 xl:grid-cols-4'>
        <div className="relative flex flex-col items-center bg-clip-border rounded-xl bg-gradient-to-tr from-[#5c8001] to-[#7cb518] text-white shadow-md">
          
          <div className=" px-10 pt-11 pb-3">
            <h3 className='text-2xl text-center'>Altura</h3>
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">{userInfo?.height}</h4>
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
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">{userInfo?.weight}</h4>
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
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">{userInfo?.age}</h4>
          </div>  
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-end text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-4xl font-light text-white/60 ">Años</strong>
            </p>
          </div>       
        </div>

        <div className="relative flex flex-col items-center bg-clip-border rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md">
          
          <div className=" px-10 pt-11 pb-3">
            <h3 className='text-2xl text-center'>Sexo</h3>
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">Hombre</h4>
          </div>  
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-end text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-4xl font-light text-white/60 ">Sexo</strong>
            </p>
          </div>       
        </div>    

        </div>     
        </div>
    </div>


    {/* Requerimiento calorico diario */}
    <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
        <div className="relative flex flex-col bg-clip-border pb-6 mb-4 rounded-xl bg-slate-50 text-gray-600 shadow-md overflow-hidden xl:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex p-6 justify-between">
            <div className=' w-3/4 ml-5 my-5'>
                <h2 className='text-5xl text-gray-600 font-bold text-center'>Tu requerimiento calorico Diario</h2>

            </div>

            
            <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle none justify-end font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" stroke-width="3" stroke="currentcolor" aria-hidden="true" className="h-6 w-6">
                  <path stroke-linecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                </svg>
              </span>
            </button>
          </div>
        <div className='grid gap-y-10 gap-x-6 mx-10 md:grid-cols-2 xl:grid-cols-4'>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md items-center">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-[#f3de2c] to-[#fb6107] text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-32 place-items-center">
            <h3>Grasas</h3>
          </div>
          <div className=" px-10 pt-11 pb-3 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">125</h4>
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
         
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">145</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          <p className="block antialiased font-sans text-end text-base leading-relaxed font-light text-blue-gray-600">
            <strong className="text-slate-500 text-3xl">grs</strong>
            </p>
          </div>        
        </div>

        <div className="relative flex items-center flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4  rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-32 place-items-center">
            <h3>Proteinas</h3>
          </div>
          <div className="px-10 pt-11 pb-3 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900">136</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
          <p className="block antialiased font-sans text-end text-base leading-relaxed font-light text-blue-gray-600">
            <strong className="text-slate-500 text-3xl">grs</strong>
            </p>
          </div>         
        </div>

        <div className="relative flex flex-col items-center bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4  rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-32 place-items-center">
            <h3>Calorias</h3>
          </div>
          <div className="px-10 pt-11 pb-3 text-right">
            <h4 className="block antialiased tracking-normal font-sans text-5xl overflow-hidden font-semibold leading-snug text-blue-gray-900 ">1776</h4>
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

    
    {/* Resumen del dia */}
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1 bg-gradient-to-t rounded-xl bg-slate-50 text-gray-600">
      
      <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-600 shadow-none m-0 flex items-center justify-between p-6">
          <div className=' w-3/4 ml-5 my-5'>
                <h2 className='text-5xl text-gray-600 font-bold text-start'>Resumen de Hoy</h2>
            </div>
            <button aria-expanded="false" aria-haspopup="menu" id=":r5:" className="relative middle fill-gray-600 none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30" type="button">
              <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="3" stroke="currentcolor" aria-hidden="true" className="h-6 w-6 fill-gray-600 stroke-gray-600">
                  <path stroke-linecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
                </svg>
              </span>
            </button>
          </div>
        <div className="relative flex flex-col bg-clip-border pb-6 rounded-xl m-9 bg-white text-gray-900 shadow-md overflow-hidden xl:col-span-2">
         
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
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Porcion</p>
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                    <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">Grasas</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Leche entera</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">250 ml</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>
                
                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Ojuelas de maiz</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">22 grs</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>

                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Cafe</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">1 taza</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>

                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">Bananos</p>
                    </div>
                  </td>
                  
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">154</p>
                  </td>


                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">7.8</p>
                  </td>

                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">8.3</p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">2 u</p>
                  </td>

                  {/* <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="w-10/12">
                      <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">60%</p>
                      <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                        <div className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white w-4/6"></div>
                      </div>
                    </div>
                  </td> */}
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Dashboard
