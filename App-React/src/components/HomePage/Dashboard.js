import React from "react";
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';


export default function HomePage() {
    return ( 
    <div className="bg-black">
        {/*Navbar login-registrarse*/}
        <div className="flex justify-end mr-20 mt-10 font-bold">
            <Link className="mr-10 font-bold" to='/login'>
            <Fab variant="extended" size="small" color="secondary" >
                Iniciar Sesion
            </Fab>
            </Link> 

            <Link to='/createaccount'>
            <Fab variant="extended" size="small" color="primary">
                Registrarse
            </Fab>
            </Link>
        </div>
        <hr className="shadow-lg mt-9" />


        <div className="flex justify-center mt-14">
        <h1 className="text-5xl font-black text-white">
            SISTEMA DE INVENTARIO
        </h1>
        </div>
    </div>
    );
}
