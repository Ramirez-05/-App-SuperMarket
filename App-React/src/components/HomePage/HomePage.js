import React from "react";
import { Link } from "react-router-dom";


export default function HomePage() {
    return ( 
    <div className="">
        {/*Navbar login-registrarse*/}
        <div className="flex justify-end mr-20 mt-5">
            <Link to='/login'>
            <h1 className="text-base bg-lime-700 text-white font-bold mr-10 p-1 hover:bg-slate-100 hover:text-lime-700">
                INICIAR SESION
            </h1>
            </Link> 

            <Link to='/createaccount'>
            <h1 className="text-base text-white font-bold bg-cyan-600 p-1 hover:bg-slate-100 hover:text-cyan-600">
            REGISTRARSE
            </h1>
            </Link>
        </div>


        <div className="flex justify-center mt-14">
        <h1 className="text-5xl font-black">
            SISTEMA DE INVENTARIO
        </h1>
        </div>
    </div>
    );
}
