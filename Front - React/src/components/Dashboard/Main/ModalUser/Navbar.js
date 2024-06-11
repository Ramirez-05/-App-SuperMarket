import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome,  FaSignOutAlt } from 'react-icons/fa';
import { CloseSession } from '../../../../controllers/DeleteControllers/CloseSession';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/admindashboard" className="text-white text-lg font-bold">
          <FaHome className="inline-block mr-2" /> Dashboard
        </Link>
        <button onClick={CloseSession}>
        <div className="flex items-center">
          <Link to="/login" className="text-white">
            <FaSignOutAlt className="inline-block mr-2" /> Cerrar Sesión
          </Link>
        </div>
        </button>
      </div>
    </nav>
  );
}
