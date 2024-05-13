/*DOCUMENTACION GENERAL DEL CODIGO
-Falta convertir todo este codigo en bloques mas entendibles
primeramente el const Items pasarlo a un componente independiente,
-Dejar la logica como un solo componente
-Lo que esta en el return de la funcion Containerstatistics pasarlo a otro componente, 
dividiendo el codigo en 3 partes.*/


import React from 'react';
import { useState, useEffect } from 'react';
import statistics from '../Dashboard/icons/statistics.svg';
import { ActiveUsers } from '../../controllers/GetControllers/ActiveUsers';
import { DueDate } from '../../controllers/GetControllers/DueDate';


const Items = ({ text, className, ...props}) => {
  return (
    <div className={`bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg border border-black ${className}`}>
      <img className="justify-center w-full h-56" src={statistics} alt=''/>
      <span className="grid justify-center items-center">{text}{props.totalusers || props.fecha_vencimiento}</span>
    </div>
  );
}

export default function Containerstatistics() {


  const [activeUsers, setActiveUsers] = useState([]); // Estado para usuarios activos
  const totalusers = activeUsers.length
  // Usar useEffect para llamar a fetchActiveUsers
  useEffect(() => {
    const getActiveUsers = async () => {
      try {
        const users = await ActiveUsers(); // Llamar a la función para obtener usuarios
        setActiveUsers(users); // Almacenar usuarios activos en el estado
      } catch (error) {
        console.log(error); 
      }
    };

    getActiveUsers(); // Ejecuta la función para obtener datos
  }, []); 


  const [dueDate, setDueDate] = useState([]);//Estado para la fecha de lote mas proximo a vencer
  const fecha_vencimiento = dueDate.fecha_vencimiento;
  
  
  useEffect(() => {
    const getDueDate = async () => {
      try {
        const duedate = await DueDate();
        setDueDate(duedate);
      } catch(error){
        console.log(error);
      }
    };
    getDueDate(); //Ejecuta la funcion para obtener datos
  }, []);



  return ( 
    <div>
      <div className="flex flex-col justify-between items-center">
        {/* Primer fila */}
        <div className="flex space-x-4 w-full">
          <Items text="El total de usuarios son:" totalusers={totalusers} />
          <Items text="La fecha mas proxima del lote a vencer es:" fecha_vencimiento={fecha_vencimiento} />
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
