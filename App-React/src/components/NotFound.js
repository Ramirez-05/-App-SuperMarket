import React from 'react';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="text-center p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Página no encontrada</h1>
        <p className="text-lg text-gray-800 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
        <img className="mx-auto mb-4 h-36"src="cat404.svg" alt="cat404"/>
        <p className="text-sm text-gray-600">Pero aquí hay un gatito adorable para alegrarte el día.</p>
      </div>
    </div>
  );
}

