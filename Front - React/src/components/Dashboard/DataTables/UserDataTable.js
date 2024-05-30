import React, { useEffect, useState, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { DatatableUsers } from "../../../controllers/PostControllers/DatatableUsers";
import VerifyTokenComponent from "../Main/VerifyToken";

const SetColor = (estado) => {
  return estado === 'Activo' ? 'bg-green-600' : 'bg-red-500';
}

function verifystatus(estado) {
  return estado === true ? 'Activo' : 'Inactivo';
}

function verifyrole(id_role) {
  return id_role === 1 ? 'Admin' : 'Usuario';
}

const TableComponentUsers = () => {
  VerifyTokenComponent();
  const [users, setUsers] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await DatatableUsers();
        // Transforma el estado de cada usuario antes de guardarlo en el estado
        const transformedData = usersData.map(user => ({
          ...user,
          estado: verifystatus(user.estado),
          id_role: verifyrole(user.id_role)
        }));
        setUsers(transformedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0 && tableRef.current) {
      $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        info: true,
        lengthMenu: [5, 10, 25, 50, 100],
        responsive: true,
        autoWidth: false,
      });
    }
  }, [users]);

  const handleUpdate = (userId) => {
    // Lógica para actualizar usuario con id 'userId'
    console.log(`Actualizar usuario con ID: ${userId}`);
  };

  const handleDeactivate = (userId) => {
    // Lógica para desactivar usuario con id 'userId'
    console.log(`Desactivar usuario con ID: ${userId}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <header className="flex justify-between items-center h-24 bg-clip-padding backdrop-filter backdrop-blur-md px-4">
        <div className="flex-1 flex justify-center">
          <h1 className="text-white text-5xl font-bold tracking-widest">
            Usuarios
          </h1>
        </div>
        <button className="relative inline-flex items-center justify-center px-6 py-2 mb-2 ms-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full bg-gradient-to-br from-blue-500 to-purple-400 hover:from-blue-600 hover:to-purple-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          regresar
        </button>
      </header>

      <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4">
        <div className="w-full max-w-7xl overflow-x-auto">
          <table
            ref={tableRef}
            id="myTable"
            className="display mx-auto min-w-full bg-white rounded-lg shadow overflow-hidden"
          >
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Correo
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Rol
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Nombres
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Apellidos
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Dirección
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Teléfono
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id_usuario}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                    <span className={`inline-flex items-center justify-center px-2 py-1 font-bold leading-none text-white rounded-full ${SetColor(user.estado)}`}>
                      {user.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {user.correo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {user.id_role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {user.person.nombres}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {user.person.apellidos}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {user.person.direccion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {user.person.telefono}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left">
                    <button
                      onClick={() => handleUpdate(user.id_usuario)}
                      className="text-purple-800 hover:text-black font-bold"
                    >
                      Actualizar
                    </button>
                    <button
                      onClick={() => handleDeactivate(user.id_usuario)}
                      className="ml-7 text-red-500 hover:text-black font-bold"
                    >
                      Desactivar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponentUsers;
