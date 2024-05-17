import React from 'react'
import { useEffect, useState } from 'react';

const GetProducts = () => {

const [, setDueDate] = useState([]); //Estado para la fecha de lote mas proximo a vencer

useEffect(() => {
  const getDueDate = async () => {
    try {
      const duedate = await DueDate();
      setDueDate(duedate);
    } catch (error) {
      console.log(error);
    }
  };
  getDueDate(); //Ejecuta la funcion para obtener datos
}, []);
}

export default function ProductosDashboard(GetProducts) {
  GetProducts();

  return (
    <div className='font-bold'>
      <h1 className=''>ProductosDashboard
      </h1>
      </div>
  )
}
