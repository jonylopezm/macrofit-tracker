import Image from "next/image";
import {Navbar, Footer} from '@/components';

const StartPage = async () => {

  return (
    <div>
      <Navbar/>
    <div className="flex flex-col">
      <div className="flex flex-row h-1/2 pt-60 bg-[url('https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div className="flex-1 pb-36 bg-gradient-to-t from-[#fbb02d] via-[#5c8001]/40 ">
          <div className="text-white mt-36 ml-10 max-w-xl ">
          <span className="text text-5xl font-extralight">Lleva un control de tu alimentacion con</span>
          <h1 className="text text-8xl font-semibold text-[#f3de2c]">Macrofit <br/>  Tracker</h1>

          <div className="mt-10">
            <a href="/register" className="bg-[#fb6107] rounded-3xl py-3 px-8 font-medium text-lg inline-block mr-4 hover:bg-transparent hover:border-[#fb6107] border border-transparent hover:text-white transition duration-300">Get Started</a>
            <a href="/login" className="bg-transparent rounded-3xl py-3 px-8 font-medium text-lg inline-block mr-4 hover:border-transparent hover:bg-white border hover:text-slate-950 transition duration-300">Login</a>
          </div>
          </div>
        </div>       
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#7cb518]">
        <div className="grid text-white text-4xl py-10 font-extralight items-center text-center mx-10">
            <p>Los alimentos impactan profundamente en nuestro cuerpo, afectando peso, ánimo y mente. Proteínas, carbohidratos y calorías, más que cifras, son clave para la salud y el bienestar. 
              En equilibrio, nos llevan hacia nuestros objetivos de vida saludable.</p>    
        </div>
        <div className="grid justify-center md:justify-end sm:justify-center">
        <Image src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         width="550"
         height="550"
         alt=""
        className="w-auto h-auto object-fill"></Image> 
        </div>
      </div>

      <div className="flex flex-col w-full bg-white items-center pt-36">
        <div className="text-slate-600 text-6xl font-extralight text-center mb-10">
            <p>Registra tu consumo de:</p>    
        </div>
      </div>

<div className="flex justify-center lg:justify-center xl:justify-center items-center bg-white pt-10 pb-36 gap-6 flex-wrap">
    <div className="inline-grid ml-10 text-[#5c8001] text-7xl font-bold hover:text-slate-800 transition-color duration-300 justify-items-center">
        <p>Carbohidratos</p>
    </div>
    <div className="inline-grid text-[#00a5cf] text-7xl font-bold hover:text-slate-800 transition-color duration-300 justify-items-center">
        <p>Proteinas</p>
    </div>
    <div className="inline-grid text-[#fbb02d] text-7xl font-bold hover:text-slate-800 transition-color duration-300 justify-items-center">    
        <p>Grasas</p>    
    </div>
    <div className="inline-grid mr-10 text-[#fb6107] text-7xl font-bold hover:text-slate-800 transition-color duration-300 justify-items-center">
        <p>Calorias</p>
    </div>
</div>


      <div className="flex w-full bg-[#00a5cf]  items-center">
        <div className="flex flex-row w-full">
        <Image src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         width="450"
         height="450"
         alt=""
        className="flex w-auto"></Image> 
        </div>
        <div className="flex flex-row w-full py-10 text-white text-4xl font-extralight mx-10 items-center text-center">
            <p>Al entender y controlar lo que comes, puedes mejorar no solo tu figura, sino tu salud y calidad de vida en general.</p>    
        </div>
      </div>

    </div>

    <Footer/>
    </div>
  
  );
};

export default StartPage;