import React from "react";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import ContainerstatisticsMain from "../Containerstatistics/Containerstatistics";
import VerifyTokenComponent from "./VerifyToken";
import { CloseSession } from "../../../controllers/DeleteControllers/CloseSession";

export default function UpperNavbar() {
  VerifyTokenComponent();

  return (
    <div className="bg-white w-full">
      {/* Navbar login-registrarse */}
      <div className="flex justify-end mt-10 font-bold mr-20">
        <Link to="/tableusersdashboard">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-12">
              Usuarios
          </button>
        </Link>

        <Link to="/tableproductsdashboard">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-12">
              Productos
          </button>
        </Link>

        <div className="mr-3 md:mr-10 font-bold">
          <Link to="/login">
            <button
              onClick={() => CloseSession()}
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Cerrar Sesión
            </button>
          </Link>
        </div>

        
        <div className="flex items-center justify-center bg-black mr-3 md:mr-10 font-bold p-1 rounded-full me-2 mb-2">
        <CircleUser size={24} color="#f0f0f0f0" strokeWidth={2} absoluteStrokeWidth /> 
        <div className="ml-4">
        <h1 className="text-white text-xs font-bold">JP</h1>
        </div>
        </div>
      </div>
      <hr className="shadow-lg mt-9 relative" />
      <div className="ml-44 md:ml-20 grid md:justify-center justify-center mt-14 w-full">
        <div>
          <h1 className="ml-24 text-2xl md:text-5xl font-black text-black">
            SISTEMA DE INVENTARIO
          </h1>
        </div>

        <div className="mt-20 bg-white h-auto w-full">
          <ContainerstatisticsMain />
        </div>
      </div>
    </div>
  );
}
