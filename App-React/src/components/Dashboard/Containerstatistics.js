import React from 'react'
 
/*Importante, esta funcion es la que recibe los datos para enviar a la tabla de datos, esto es nada mas que maquetacion */
const Items = ({ text }) => {
  return (
      <div className="bg-blue-700 w-full h-56">
          <img className="" alt=''/>
          <span className="">{text}</span>
      </div>
  );
}


export default function Containerstatistics() {
  return (
    <div className="flex flex-col justify-between items-center">
      {/* Primer fila */}
      <div className="flex space-x-4 w-full">
        <Items text="Element1" />
        <Items text="Element2" />
        <Items text="Element3" />
      </div>

      {/* Segunda fila */}
      <div className="flex space-x-4 mt-4 w-full"> {/* mt-4 para añadir margen top */}
        <Items text="Element4" />
        <Items text="Element5" />
        <Items text="Element6" />
      </div>
    </div>
  );
}
