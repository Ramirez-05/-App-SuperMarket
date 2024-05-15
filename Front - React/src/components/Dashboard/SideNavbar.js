import React, { useState } from "react";
import home from "../Dashboard/icons/home.svg";
import contact from "../Dashboard/icons/contact.svg";
import statistics from "../Dashboard/icons/statistics.svg";
import UpperNavbar from "./UpperNavbar";
//Funcion que maneja todo el componente del menu desplegable
export default function SideNavbar() {
  //Estado del menu, inicia sin desplegarse
  const [menuOpen, setMenuOpen] = useState(false);
  // Funcion que cambia el estado del menu y lo despliega
  function handleMenu() {
    setMenuOpen(!menuOpen);
  }
  //Componente que permite renderizar copias solo enviandole el prop de icon y text
  const MenuItem = ({ icon, text }) => {
    return (
      <h1 className="mb-3 md:mb-7 pl-3 md:pl-5 text-sm font-semibold text-black">
        <img
          className="w-6 h-6 ml-3 md:ml-5 bg-slate-300 rounded-full hover:transition-transform transform hover:scale-110"
          src={icon}
          alt={`img${text}`}
        />
        <span className="md:inline">{text}</span>
      </h1>
    );
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex">
        <div className="flex h-screen mt-4 fixed shadow-lg w-44">
          <div onClick={handleMenu} className="mt-5 ml-6 absolute">
            <img
              className="ml-10 w-6 h-6 bg-slate-300 rounded-full hover:transition-transform transform hover:scale-110"
              src={home}
              alt="imghome"
            />
            <h1 className="mb-7 ml-3 pl-5 text-sm font-semibold text-black">
              Menu
            </h1>
          </div>
          {menuOpen && (
            <nav className="md:w-44 bg-white fixed h-full mt-24 shadow-xl shadow-black w-32">
              <div className="p-6 mt-5">
                <MenuItem icon={contact} text="Articulos" />
                <MenuItem icon={contact} text="Contactos" />
                <MenuItem icon={statistics} text="Estadísticas" />
              </div>
            </nav>
          )}
        </div>
      </div>
      <div className="">
        <UpperNavbar />
      </div>
    </div>
  );
}
