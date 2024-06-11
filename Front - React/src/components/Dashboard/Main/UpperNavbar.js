import React, {useState, useRef, useEffect} from "react";
import { CircleUser } from "lucide-react";
import { Link } from "react-router-dom";
import ContainerstatisticsMain from "../Containerstatistics/Containerstatistics";
import VerifyTokenComponent from "./VerifyToken";
import { CloseSession } from "../../../controllers/DeleteControllers/CloseSession";
import { UserMenu } from "./ModalUser"; 

export default function UpperNavbar() {
  VerifyTokenComponent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="flex flex-wrap justify-end mt-10 font-bold px-5 md:px-20">
        <Link to="/tableusersdashboard">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mr-4 md:mr-12">
            Usuarios
          </button>
        </Link>

        <Link to="/tableproductsdashboard">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mr-4 md:mr-12">
            Productos
          </button>
        </Link>

        <Link to="/login">
          <button
            onClick={() => CloseSession()}
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                   focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mr-4 md:mr-12">
            Cerrar Sesión
          </button>
        </Link>

        <div className="relative" ref={menuRef}>
          <button onClick={handleMenuToggle}>
            <div className="flex items-center justify-center bg-gray-800 p-2 rounded-full shadow-lg mb-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700">
              <CircleUser size={24} color="#f0f0f0" strokeWidth={2} absoluteStrokeWidth />
              <div className="ml-4">
                <h1 className="text-white text-sm font-bold">JP</h1>
              </div>
            </div>
          </button>

          {isMenuOpen && (
            <UserMenu handleMenuToggle={handleMenuToggle} />
          )}
        </div>
      </div>
      <hr className="shadow-lg mt-9 relative" />
      <div className="grid justify-center mt-14 w-full px-5 md:px-20">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-black text-black">
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
