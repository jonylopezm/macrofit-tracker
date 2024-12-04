import { RiMentalHealthFill } from "react-icons/ri";

export const Navbar = () => {

    return(
<div className=" bg-[#5c8001] bg-opacity-75 backdrop-blur-md fixed w-full z-50 h-28">
  <div className="antialiased">
  <div className="w-full text-gray-200">
    <div x-data="{ open: true }" className="pt-5 flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
      <div className="flex flex-row items-center justify-between p-4">
        <RiMentalHealthFill  className="w-6 h-6 m-1" />
        <a href="#" className="text-lg font-semibold tracking-widest text-gray-200 uppercase rounded-lg focus:outline-none focus:shadow-outline">MacroFit Tracker</a>
      </div>
      <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
        <a className="px-4 py-2 mt-2 text-lg font-medium bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/startpage">Inicio</a>
        <a className="px-4 py-2 mt-2 text-lg font-medium bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="/login">Login</a>
        <a className="px-4 py-2 mt-2 text-lg font-medium text-white bg-[#fb6107] rounded-lg md:mt-0 md:ml-4 focus:text-gray-900  focus:outline-none focus:shadow-outline" href="/register">Register</a>
          
         </nav>
        </div>
       </div>
     </div> 
    </div>
    )
};