import React from "react";
import { Link } from "react-router-dom";
import Containerstatistics from "./Containerstatistics";

export default function HomePage() {
    return (
        <div className="bg-white w-full">
            {/* Navbar login-registrarse */}
            <div className="flex justify-end mt-10 font-bold mr-20">
                
                <Link className="mr-3 md:mr-10 font-bold" to='/login'>
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
                 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Iniciar Sesion</button>
                </Link>

                <Link to='/createaccount'>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none
                 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Registrarse</button>
                </Link>
            </div>
            <hr className="shadow-lg mt-9 relative"/>
            <div className="ml-44 md:ml-20 grid md:justify-center justify-center mt-14 w-full">
                <div>
                    <h1 className="ml-24 text-2xl md:text-5xl font-black text-black">
                        SISTEMA DE INVENTARIO
                    </h1>
                </div>

                <div className="mt-20 bg-white h-auto w-full">
                    <Containerstatistics/>
                </div>
            </div>
        </div>
    );
}
