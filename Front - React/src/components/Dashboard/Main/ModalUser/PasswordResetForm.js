import React from 'react';

function PasswordResetForm({ passwordData, handlePasswordChange, handlePasswordSubmit }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Restablecer Contraseña</h2>
      <form onSubmit={handlePasswordSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
            Contraseña Actual
          </label>
          <input
            type="password"
            name="currentPassword"
            id="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            Nueva Contraseña
          </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirmar Nueva Contraseña
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={passwordData.confirmPassword}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-200"
          >
            Restablecer Contraseña
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordResetForm;
