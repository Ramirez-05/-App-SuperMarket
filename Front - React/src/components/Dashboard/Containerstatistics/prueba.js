import React, { useState, useEffect } from "react";
import { MdOnlinePrediction } from "react-icons/md";
import { OnlineUsers } from "../../../controllers/GetControllers/OnlineUsers";

export default function Prueba() {
  const [onlineUsers, setOnlineUsers] = useState([]); // Estado para usuarios activos
  const totalUsers = onlineUsers;

  // Usar useEffect para llamar a fetchOnlineUsers
  useEffect(() => {
    const getOnlineUsers = async () => {
      try {
        const users = await OnlineUsers(); // Llamar a la función para obtener usuarios
        setOnlineUsers(users); // Almacenar usuarios activos en el estado
      } catch (error) {
        console.log(error);
      }
    };

    getOnlineUsers(); // Ejecuta la función para obtener datos
  }, []);

  return (
    <div className="grid w-48 h-48 text-center justify-center shadow border border-gray-200 rounded-3xl p-4 pt-12 font-bold">
      <MdOnlinePrediction className="w-full h-6" />
      <span className="grid">Usuarios En Linea:</span>
      <span className="font-extrabold text-2xl">{totalUsers}</span>
    </div>
  );
}
