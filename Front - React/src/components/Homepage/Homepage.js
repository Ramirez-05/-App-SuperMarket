import React from "react";
import cat from "../../assets/cat404.svg";

export default function Homepage() {
  return (
    <main>
      <header>
        {/* Ajustamos el padding según el tamaño de la pantalla */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-500 border-black font-thin flex justify-between items-center px-6 sm:px-10 lg:px-40">
          <div className="flex-shrink-0">
            <img className="w-16 h-16 sm:w-20 sm:h-20" src={cat} alt="icono" />
          </div>

          <div className="flex gap-4 sm:gap-6 lg:gap-9 items-center font-semibold text-white">
            <button className="hover:text-black">Adquirir</button>
            <button className="hover:text-black">Descargar</button>
            <button className="hover:text-black">Compartir</button>
            {/* Usamos `hidden` para ocultar el separador en pantallas pequeñas */}
            <hr className="hidden sm:block h-6 border-l border-gray-400" />
            <button className="hover:text-black">Registrarse</button>
            <button className="hover:text-black">Inicia sesión</button>
          </div>
        </div>
      </header>
      <div className="flex flex-col lg:flex-row justify-start items-center w-full min-h-screen bg-white px-6 lg:pl-20">
        {/* Contenido de texto */}
        <div className="text-left mb-8 lg:mb-0">
          {" "}
          {/* Agrega margen inferior para cuando se muestren en columnas */}
          <h1 className="text-black text-3xl sm:text-5xl font-bold">
            SISTEMA DE INVENTARIO
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700">
            ¿Buscas un sistema de inventario para tu empresa?
            <br />
            Estás en el lugar correcto, ingresa a nuestra plataforma
            <br />
            para conocer más.
          </p>
          <button className="mt-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-md shadow-lg transition duration-300 hover:bg-gradient-to-l hover:from-indigo-600 hover:to-purple-500 hover:shadow-2xl hover:-translate-y-1">
            Ingresar
          </button>
        </div>

        <div className="flex-shrink-0 mb-8 lg:ml-40 rounded-xl bg-black w-60 h-60 sm:w-80 sm:h-80">
          <img className="w-full h-full object-cover" src={cat} alt="Gato" />
        </div>
      </div>
    </main>
  );
}
