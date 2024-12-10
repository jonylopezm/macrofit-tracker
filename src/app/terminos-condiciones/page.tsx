import React from 'react';
import {Navbar, Footer} from '@/components';

const TermsAndConditions = async () => {
  return (
    <div className="bg-white text-gray-800">
    <Navbar/>
    <div className="container mx-auto p-6">        
      <h1 className="text-3xl font-bold text-center mb-6 mt-24">Términos y Condiciones</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
        <p>
          Bienvenido a <strong>Macrofit Tracker</strong>. Al utilizar nuestra aplicación, usted acepta cumplir con estos 
          Términos y Condiciones. Por favor, léalos detenidamente antes de utilizar el servicio.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Propósito del Sistema</h2>
        <p>
          Macrofit Tracker es una aplicación web diseñada para ayudar a los usuarios a controlar y mejorar su dieta mediante el registro 
          de alimentos consumidos y el monitoreo de requerimientos calóricos diarios. Al registrarse, los usuarios podrán aprovechar 
          características que personalizan su experiencia de acuerdo con su peso, altura, edad y sexo.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Registro de Usuarios</h2>
        <p>
          Para acceder a nuestras funcionalidades, los usuarios deben proporcionar información básica al registrarse, como:
        </p>
        <ul className="list-disc pl-5">
          <li>Nombre</li>
          <li>Correo electrónico</li>
          <li>Contraseña</li>
          <li>Peso</li>
          <li>Altura</li>
          <li>Edad</li>
          <li>Sexo</li>
        </ul>
        <p>
          Esta información es esencial para calcular los requerimientos calóricos y ofrecer recomendaciones personalizadas.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Uso de Datos Personales</h2>
        <p>
          La información proporcionada por los usuarios se utiliza exclusivamente para el cálculo de requerimientos calóricos 
          y el seguimiento de su progreso. Macrofit Tracker se compromete a proteger los datos personales conforme a nuestra 
          política de privacidad.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Responsabilidades del Usuario</h2>
        <p>
          Al utilizar Macrofit Tracker, el usuario se compromete a:
        </p>
        <ul className="list-disc pl-5">
          <li>Proporcionar información precisa y actualizada.</li>
          <li>No compartir sus credenciales de inicio de sesión.</li>
          <li>Actualizar su perfil en caso de cambios físicos relevantes, como peso o altura.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Limitaciones de Responsabilidad</h2>
        <p>
          Macrofit Tracker proporciona cálculos y recomendaciones basadas en información ingresada por el usuario. Sin embargo, 
          no sustituye el consejo médico o nutricional profesional. Los usuarios son responsables de consultar a especialistas 
          para validar cualquier decisión relacionada con su salud.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">7. Modificaciones al Servicio</h2>
        <p>
          Macrofit Tracker se reserva el derecho de actualizar o modificar sus características, así como los Términos y 
          Condiciones, en cualquier momento. Las actualizaciones serán notificadas a los usuarios mediante la aplicación.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través del correo electrónico 
          <a href="mailto:soporte@macrofittracker.com" className="text-blue-500"> soporte@macrofittracker.com</a>.
        </p>
      </section>

  
    
    </div>
    <Footer/>
    </div>

  );
};

export default TermsAndConditions;