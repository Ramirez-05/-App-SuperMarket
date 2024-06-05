import React, { useState } from 'react';
import { UpdatePerson, UpdateUser } from '../../../../controllers/PutControllers/UpdateUser';

export default function ModalUpdateUser({ cedula, userId, onClose }) {
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('ADT'); // Obtener el token de autenticación

    try {
      await UpdateUser(correo, userId, rol, token); // Pasar el token como parámetro
      await UpdatePerson(cedula, nombres, apellidos, direccion, telefono, token); // Pasar el token como parámetro

      console.log('Datos actualizados correctamente');
      onClose(); // Cierra el modal después de enviar el formulario
    } catch (error) {
      console.error('Error al actualizar datos:', error);
      // Aquí puedes manejar el error de acuerdo a tus necesidades
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-xl z-50">
        <h2 className="text-2xl font-bold mb-4">Actualizar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rol" className="block text-sm font-medium text-gray-700">Rol</label>
            <select
              id="rol"
              name="rol"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecciona un rol</option>
              <option value="1">Admin</option>
              <option value="2">Usuario</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">Nombres</label>
            <input
              type="text"
              id="nombres"
              name="nombres"
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Actualizar
            </button>
            <button type="button" className="px-4 py-2 ml-4 bg-gray-300 text-gray-700 rounded hover:bg-gray-400" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
