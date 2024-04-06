import React, { useState } from 'react';
import home from '../HomePage/icons/home.svg';
import contact from '../HomePage/icons/contact.svg';
import statistics from '../HomePage/icons/statistics.svg';
import HomePage from './HomePage';

const Navbar = {
    element1: "Menu", 
    element2: "Articulos",
    element3: "Contactos",
    element4: "Estadisticas",
};

export default function Homepage() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <div className="flex">
            <div className="flex h-screen mt-10 fixed shadow-lg w-44">
                <div onClick={handleMenu} className="mt-5 ml-6">
                    <img className="ml-10 w-6 h-6 hover:bg-slate-300 rounded-full hover:transition-transform transform hover:scale-110" src={home} alt="imghome" />
                    <h1 className="mb-7 ml-3 pl-5 text-sm font-semibold text-black">
                        {Navbar.element1}
                    </h1>
                </div>
                {menuOpen && (
                    <nav className="w-44 bg-white fixed h-full mt-24 shadow-lg">
                        <div className="p-6">
                            <h1 className="mb-7 pl-5 text-sm font-semibold text-black">
                                <img className="w-6 h-6 ml-5 hover:bg-slate-300 rounded-full hover:transition-transform transform hover:scale-110" src={contact} alt="imgcontact" />
                                {Navbar.element2}
                            </h1>
                            <h1 className="mb-7 pl-5 text-sm font-semibold text-black">
                                <img className="w-6 h-6 ml-5 hover:bg-slate-300 rounded-full hover:transition-transform transform hover:scale-110" src={contact} alt="imgarticulos" />
                                {Navbar.element3}
                            </h1>
                            <h1 className="mb-7 text-sm pl-5 font-semibold text-black">
                                <img className="w-6 h-6 ml-5 hover:bg-slate-300 rounded-full hover:transition-transform transform hover:scale-110" src={statistics} alt="imgstatics" />
                                {Navbar.element4}
                            </h1>
                            <h1 className="text-sm pl-5 font-semibold text-black">
                                <img className="w-6 h-6 ml-5 hover:bg-slate-300 rounded-full hover:transition-transform transform hover:scale-110" src={statistics} alt="imgstatics" />
                                {Navbar.element4}
                            </h1>
                        </div>
                    </nav>
                )}
            </div>

        </div>           
        <div className="">
                <HomePage/>
        </div>
        </>
        
    );
}
