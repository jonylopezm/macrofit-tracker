"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const ResetPasswordForm = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleResetPassword = async (event: React.FormEvent) => {
      event.preventDefault();
  
      if(password != confirmPassword){
        alert("Las contraseñas no coinciden")
        return;
    }else{
        const user_id = localStorage.getItem("requser_id")
        if (typeof user_id === "string") {
        try {
            const res = await fetch('api/newpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "X-User-Id": user_id
                },
                body: JSON.stringify({ password })
            });
    
            if (res.ok) {

                Swal.fire({
                    icon: "success",
                    title: "Cambio de Contraseña",
                    text: "Tu contraseña ha sido actualizada",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      router.push("/login");
                    }
                  });

            } else {
                console.error('Failed to send password reset email.');
            }
        } catch (error) {
            console.error('An error occurred while sending password reset email:', error);
        }
        }else{
            throw new Error("Invalid user_id");
        }
    }
  };
    
  return (
  
    <div >
        <div className=" bg-gradient-to-br from-green-900 to-yellow-700 pt-20 pb-16">
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
    <h1 className="text-4xl font-medium text-slate-600">Reestablecer Contraseña</h1>
    <p className="text-slate-500">Ingresa tu nueva contraseña</p>

    <form onSubmit={handleResetPassword} action="" className="my-10">
        <div className="flex flex-col space-y-5">
            <label>
                <p className="font-medium text-slate-700 pb-2">Contraseña nueva</p>
                <input 
                id="password" 
                name="password" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3 border border-slate-200 text-gray-500 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ingresa la contraseña nueva"/>
            </label>

            <label>
                <p className="font-medium text-slate-700 pb-2">Confirmar Contraseña</p>
                <input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full py-3 border border-slate-200 text-gray-500 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Vuelve a ingresar la contraseña"/>
            </label>
           
            <button type='submit'  className="w-full py-3 font-medium bg-[#fbb02d] text-slate-600 transition duration-300 md:w-96 rounded-2xl hover:bg-[#fb6107] hover:shadow inline-flex space-x-2 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                  
                  <span>Reset password</span>
            </button>
            <p className="text-center text-slate-600">Not registered yet? <a href="#" className="text-[#fb6107] font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg></span></a></p>
        </div>
    </form>
</div>
</div>
</div>
  )
}

export default ResetPasswordForm
