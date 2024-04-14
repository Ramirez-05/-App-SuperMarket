import React from 'react';
import statistics from '../Dashboard/icons/statistics.svg';

const Items = ({ text, className }) => {
  return (
    <div className={`bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg border border-white ${className}`}>
      <img className="justify-center w-full h-56" src={statistics} alt=''/>
      <span className="grid justify-center items-center">{text}</span>
    </div>
  );
}

export default function Containerstatistics() {
  return ( 
    <div>
      <div className="flex flex-col justify-between items-center">
        {/* Primer fila */}
        <div className="flex space-x-4 w-full">
          <Items text="Element1" />
          <Items text="Element2" />
          <Items text="Element3" />
          <Items text="Element4" />

        </div>

        {/* Segunda fila */}
        <div className="flex space-x-4 mt-4 w-full">
          <Items text="Element5" className="w-full"/>
          <Items text="Element6" className="w-3/4"/> 
        </div>
      </div>
      <div className="mt-96">
        OTRO COMPONENTE TIPO TABLA PARA VER LA GENTE QUE ESTA EN LA WEB
      </div>
    </div>
  );
}
