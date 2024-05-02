"use client"
import { Footer } from '@/components';
import { SimpleUser } from '@/dashboard/interfaces/simple-user';
import Image from 'next/image'
import { HiOutlinePencil } from "react-icons/hi";
import { useState, useEffect } from 'react';
import { CaloricIntake, Profile, TodayResume } from '@/dashboard';
import { userAgentFromString } from 'next/server';
import { userInfo } from 'os';


const Dashboard = () => {

  // Estado para almacenar la información del usuario
  const [userInfo, setUserInfo] = useState<SimpleUser | null>(null);

  useEffect(() => {
    // Función para obtener la información del usuario
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


    // Llamar a la función para obtener la información del usuario al montar el componente
    getUserInfo();
  }, []);

  return (
      
    <div className="mt-4">

    {/* Perfil */}
    <div className="mt-4">
      <Profile userInfo={userInfo} />
    </div>
  

    {/* Requerimiento calorico diario */}
    <div className="mt-4">
      <CaloricIntake userInfo={userInfo} />
    </div>

    
    {/* Resumen del dia */}
    <div>
      <TodayResume/>
    </div>
    </div>
    
 
    
  )
}

export default Dashboard
