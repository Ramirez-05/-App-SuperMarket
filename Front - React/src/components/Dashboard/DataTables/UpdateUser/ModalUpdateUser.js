import React from 'react';

export default function ModalUpdateUser({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-xl z-50">
        <h2 className="text-2xl font-bold mb-4">Actualizar Usuario</h2>
        <p className="mb-4">Aquí puedes agregar el contenido del formulario de actualización.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
