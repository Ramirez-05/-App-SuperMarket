import React from 'react';
import { Link } from 'react-router-dom';
import { CloseSession } from "../../../controllers/DeleteControllers/CloseSession";
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

export function UserMenu({ handleMenuToggle }) {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
      <div className="py-2">
        <Link to="/profile" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
          <FaUser className="mr-3" />
          <span>Perfil</span>
        </Link>
        <Link to="/settingsuser" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
          <FaCog className="mr-3" />
          <span>Configuraciones</span>
        </Link>

        <Link to="/login">
        <button onClick={() => CloseSession()} className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
          <FaSignOutAlt className="mr-3" />
          <span>Cerrar Sesión</span>
        </button>
        </Link>
      </div>
    </div>
  );
}
