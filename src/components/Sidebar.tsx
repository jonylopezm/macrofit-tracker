import React from 'react'
import { MdFoodBank } from "react-icons/md";
import { RiMentalHealthFill } from 'react-icons/ri';


export const Sidebar = () => {
  return (
    <div className="bg-gradient-to-br bg-white text-gray-700 -translate-x-80 z-50 my-8 ml-4 h-5/6 w-0 rounded-xl transition-transform duration-300 xl:translate-x-0 xl:w-72">
<div className="relative border-b border-white/20">
  <a className="flex items-center gap-4 py-6 px-8 border-b-2 border-gray-200 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-t-xl" href="#/">
          <RiMentalHealthFill  className="w-6 h-6 m-1 fill-current" />
					<span className="self-center text-xl font-semibold whitespace-nowrap ">Macrofit Tracker</span>
	</a>
  <button className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-gray-700 hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" type="button">
    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </span>
  </button>
</div>
<div className="m-4">
  <ul className="mb-4 flex flex-col gap-1">
    <li>
      <a aria-current="page" className="active" href="/dashboard/home">
        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg hover:bg-gradient-to-tr from-blue-600 to-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">dashboard</p>
        </button>
      </a>
    </li>
    <li>
      <a className="" href="/dashboard/user-profile">
        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-gradient-to-tr from-blue-600 to-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/40  active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd"></path>
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">profile</p>
        </button>
      </a>
    </li>
    <li>
      <a className="" href="/dashboard/food-record">
        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-gradient-to-tr from-blue-600 to-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/40  active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
            <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd"></path>
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Resumen de Hoy</p>
        </button>
      </a>
    </li>
    <li>
      <a className="" href="/dashboard/register-food">
        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-gradient-to-tr from-blue-600 to-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/40  active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
          <MdFoodBank className='w-5 h-5 text-inherit fill-current'/>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Registrar Comida</p>
        </button>
      </a>
    </li>
    <li>
      <a className="" href="/dashboard/register-recipe">
        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-gradient-to-tr from-blue-600 to-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/40  active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
          <MdFoodBank className='w-5 h-5 text-inherit fill-current'/>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Nueva Comida/Receta</p>
        </button>
      </a>
    </li>
  </ul>
  <ul className="mb-4 flex flex-col gap-1">
    <li className="mx-3.5 mt-4 mb-2">
      <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-black uppercase opacity-75">auth pages</p>
    </li>
    <li>
      <a className="" href="/login">
        <button className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-700 hover:bg-gradient-to-tr from-blue-600 to-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/40  active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
            <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd"></path>
          </svg>
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Cerrar Sesion</p>
        </button>
      </a>
    </li>
  </ul>
</div>
    </div>
  )
}

