import React from "react";
import { useState, useEffect } from "react";
import { DueDate } from "../../../controllers/GetControllers/DueDate";
import { BsCalendarDate } from "react-icons/bs";

export default function DueDateDashboard() {
    const [dueDate, setDueDate] = useState([]); //Estado para la fecha de lote mas proximo a vencer
    const fecha_vencimiento = dueDate.fecha_vencimiento;
    const lote_vencimiento = dueDate.lote;
  
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
    return (
        <div className="grid w-60 h-48 text-center justify-center shadow border border-gray-200 rounded-3xl p-4 pt-12 font-bold">
        <BsCalendarDate className="w-full h-6" />
        <h1 className="grid">Fecha de vencimiento:
        </h1>
        <span>{fecha_vencimiento}</span>
        <span>{lote_vencimiento}</span>
      </div>
  )
}
