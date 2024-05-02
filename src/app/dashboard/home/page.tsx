"use client"
import { Footer } from '@/components';
import { SimpleUser } from '@/dashboard/interfaces/simple-user';
import Image from 'next/image'
import { HiOutlinePencil } from "react-icons/hi";
import { useState, useEffect } from 'react';
import { CaloricIntake, Profile, TodayResume } from '@/dashboard';
import SkeletonLoader from './loadSkeleton';



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

  const [isLoading, setIsLoading] = useState(true);

  // Simula un tiempo de carga
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
      <SkeletonLoader />
    ) : (
    <div className="mt-4">

    {/* Perfil */}
    <div className="mt-4">
      <Profile userInfo={userInfo} />
    </div>
  

    {/* Requerimiento calorico diario */}
    <div className="mt-4">
      <CaloricIntake userInfo={userInfo} />
    </div>
    </div> 
     )}
     </div>  
  )
}

export default Dashboard
