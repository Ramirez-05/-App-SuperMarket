import React from "react";
import { useState, useEffect } from "react";
import { InactiveUsers } from "../../../controllers/GetControllers/InactiveUsers";
import { FaUserSlash } from "react-icons/fa6";

export default function InactiveUsersDashboard() {
  const [activeUsers, setActiveUsers] = useState([]); // Estado para usuarios activos
  const totalusers = activeUsers.length;
  // Usar useEffect para llamar a fetchActiveUsers
  useEffect(() => {
    const getInactiveUsers = async () => {
      try {
        const users = await InactiveUsers(); // Llamar a la función para obtener usuarios
        setActiveUsers(users); // Almacenar usuarios activos en el estado
      } catch (error) {
        console.log(error);
      }
    };

    getInactiveUsers(); // Ejecuta la función para obtener datos
  }, []);

  return (
    <div className="grid w-48 h-48 text-center justify-center shadow border border-gray-200 rounded-3xl p-4 pt-12 font-bold">
      <FaUserSlash className="w-full h-6" />
      <span className="grid">Usuarios Inactivos:</span>
      <span className="font-extrabold text-2xl">{totalusers}</span>
    </div>
  );
}
