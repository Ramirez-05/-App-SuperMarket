import React from "react";
import { useState, useEffect } from "react";
import { ActiveUsers } from "../../../controllers/GetControllers/ActiveUsers";
import { FaPeopleGroup } from "react-icons/fa6";

export default function ActiveUsersDashboard() {
  const [activeUsers, setActiveUsers] = useState([]); // Estado para usuarios activos
  const totalusers = activeUsers.length;
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

  return (
    <div className="grid w-48 h-48 text-center justify-center shadow border border-gray-200 rounded-3xl p-4 pt-12 font-bold">
      <FaPeopleGroup className="w-full h-6" />
      <span className="grid">Usuarios activos:</span>
      <span className="font-extrabold text-2xl">{totalusers}</span>
    </div>
  );
}
