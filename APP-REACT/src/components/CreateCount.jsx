import React from 'react';

export default function CreateCount(){
  return (
    <div className="w-auto h-screen bg-black flex justify-center gap-0">

    
      {//Primer Div, de la derecha
      }
      <div className=" h-80 -mx-8 min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto bg-white drop-shadow-2xl rounded-lg p-8 ">
          <h2 className="text-center text-5xl font-extrabold text-gray-900">Crear Cuenta</h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">Correo electrónico</label>
                <input id="email-address" name="email" type="email" autoComplete="email" required className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Correo electrónico" />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Contraseña</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Crear Cuenta
              </button>
            </div>
          </form>
          <div>
          </div>
        </div>
      </div>
      <div>
  

      {//Segundo Div, de la derecha
      }

<section className="-mx-8 min-h-screen flex items-center justify-end px-4 sm:px-6 lg:px-8 ">
  <div className="grid max-w-md w-full mx-auto bg-white  bg-gradient-to-r from-blue-400 to-purple-400 
  rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
    <h1 className="text-xs font-bold text-gray-900 ml-auto">Descubre más acerca de nosotros</h1>
    <button className="w-16 text-xs font-bold py-1 px-2 border border-indigo-600 rounded-md text-indigo-600
     bg-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto">Vamos</button>
    <img className="w-72 h-72" src="./public/imglogin.svg"/>
  </div>
</section>

    </div>

  </div>
  );
};

