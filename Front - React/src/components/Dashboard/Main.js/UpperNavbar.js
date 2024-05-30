import { Link } from "react-router-dom";
import ContainerstatisticsMain from "../Containerstatistics/Containerstatistics";
import VerifyTokenComponent from "../../VerifyToken";

export default function UpperNavbar() {
   VerifyTokenComponent();

  return (
    <div className="bg-white w-full">
      {/* Navbar login-registrarse */}
      <div className="flex justify-end mt-10 font-bold mr-20">
        <Link to="/tableusersdashboard">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
           text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 
           group-hover:to-orange-400 hover:text-white dark:text-black+ focus:ring-4 focus:outline-none focus:ring-pink-200
            dark:focus:ring-pink-800 mr-12">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
              Usuarios
              </span>
          </button>
        </Link>

        <Link to="/tableproductsdashboard">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium
           text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 
           group-hover:to-orange-400 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-pink-200
            dark:focus:ring-pink-800 mr-12">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
              Productos
              </span>
          </button>
        </Link>
    
        <div className="mr-3 md:mr-10 font-bold">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cerrar Sesion
          </button>
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
