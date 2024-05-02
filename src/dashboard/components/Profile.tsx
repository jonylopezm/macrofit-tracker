import Image from 'next/image';
import { SimpleUser } from '@/dashboard/interfaces/simple-user';
import { useState } from 'react';

interface Props {
  userInfo: SimpleUser | null;
}

export const Profile: React.FC<Props> = ({ userInfo }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  if (typeof window !== 'undefined') {
    localStorage.setItem("user_id", `${userInfo?.user_id}`);
  }
 
  return (
    <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
      <div className="relative flex flex-col bg-clip-border pb-6 mb-4 rounded-xl bg-slate-50 text-gray-600 shadow-md overflow-hidden xl:col-span-2">
        <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex p-6 justify-between">
          <Image
            src="https://mighty.tools/mockmind-api/content/human/65.jpg"
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
          <button
            aria-expanded="false"
            aria-haspopup="menu"
            id=":r5:"
            className="relative middle none justify-end font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
             <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24" strokeWidth="3" stroke="currentcolor" aria-hidden="true" className="h-6 w-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path>
               </svg>
             </span>
          </button>

          {isMenuOpen && (
        <div className="absolute top-14 right-5 z-10 bg-white shadow-md p-2 rounded-md">
          <button onClick={() => console.log('Editar')} className="block w-full text-left">Editar</button>
        </div>
      )}
        </div>
        <div className="grid gap-y-10 gap-x-6 mx-10 md:grid-cols-2 xl:grid-cols-4">
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
            <h4 className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-snug text-blue-gray-900 capitalize">{userInfo?.gender}</h4>
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
  );
};

