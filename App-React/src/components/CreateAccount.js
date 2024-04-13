import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgcreateaccount from '../assets/imgcreateaccount.svg';
import arrow from '../assets/arrow.svg';
import { CreatePerson } from '../controllers/CreatePerson';

export default function CreateAccount(){

  const [dataPerson, setdataPerson] = useState({
    
    cedula  : '',
    nombres : '',
    apellidos : '',
    direccion : '',
    telefono : '',
    });

  const [dataUser,setdataUser] = useState({
      correo : '',
      contrasena :'',
    });

  const [dataRole, setdataRole] = useState({
    id_role : 1,
  });


  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await CreatePerson(dataPerson,dataUser,dataRole);
      console.log(response);
    } catch (error) {
      console.log("Error al enviar datos", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePerson = (event) => {
    setdataPerson({ ...dataPerson, [event.target.name]: event.target.value });
  };

  const handleChangeUser = (event) => {
    setdataUser({ ...dataUser, [event.target.name]: event.target.value });
  };

  const handleChangeRole = (event) => {
    setdataRole({ ...dataRole, [event.target.name]: event.target.value });
  };


return (
  <main className="w-auto h-screen bg-black flex justify-center items-center">
    <div className="mx-auto bg-white drop-shadow-2xl rounded-lg p-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Registrarte</h2>
      <p className='font-bold text-gray-600'>Es rápido y fácil.</p>
      <form onSubmit={handleSubmit} className="space-y-6" action="" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="cedula" className="sr-only">Cedula</label>
              <input 
                type="number" 
                id="cedula" 
                name="cedula" 
                value={dataPerson.cedula} 
                onChange={handleChangePerson} 
                required 
                className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                placeholder="Cedula" 
              />
            </div>
            <div>
              <label htmlFor="nombres" className="sr-only">Nombres</label>
              <input 
                type="string" 
                id="nombres" 
                name="nombres" 
                value={dataPerson.nombres} 
                onChange={handleChangePerson} 
                required 
                className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                placeholder="Nombres" 
              />
            </div>
            <div>
              <label htmlFor="apellidos" className="sr-only">Apellidos</label>
              <input 
                type="text" 
                id="apellidos" 
                name="apellidos" 
                value={dataPerson.apellidos} 
                onChange={handleChangePerson} 
                required 
                className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                placeholder="Apellidos" 
              />
            </div>
            <div>
              <label htmlFor="direccion" className="sr-only">Dirección</label>
              <input 
                type="string" 
                id="direccion" 
                name="direccion" 
                value={dataPerson.direccion} 
                onChange={handleChangePerson} 
                required 
                className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                placeholder="Dirección" 
              />
            </div>
            <div>
              <label htmlFor="telefono" className="sr-only">Teléfono</label>
              <input 
                type="string" 
                id="telefono" 
                name="telefono" 
                value={dataPerson.telefono} 
                onChange={handleChangePerson} 
                required 
                className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                placeholder="Teléfono" 
              />
            </div>
            <div>
              <label htmlFor="correo" className="sr-only">Correo electrónico</label>
              <input 
                type="text" 
                id="correo" 
                name="correo" 
                value={dataUser.correo}
                onChange={handleChangeUser} 
                required 
                className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                placeholder="correo" 
              />
            </div>
          </div>
          <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input  
                type="text" 
                id="contrasena"
                name="contrasena"
                value={dataUser.contrasena}
                onChange={handleChangeUser} 
                required 
                className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" placeholder="Contraseña" 
              />
            </div>
            <div>
              <input  
                type="hidden" 
                id="id_role"
                name="id_role"
                value={dataRole.id_role}
                onChange={handleChangeRole} 
                required 
                className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="id_role" 
              />
            </div>
          <div>
            <button type="submit" disabled={loading} className="flex py-3 px-6 font-bold text-xl rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto">
              {loading ? "Cargando..." : "Crear Cuenta"}
            </button>
          </div>
        </form>
      </div>
  </main>

  );
};