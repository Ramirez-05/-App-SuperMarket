import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgcreateaccount from '../assets/imgcreateaccount.svg'
import arrow from '../assets/arrow.svg'
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


{/*LEFT DIV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
return (
<main className="w-auto h-screen bg-black flex justify-center gap-0">
  <section className="-mx-8 min-h-screen flex items-center justify-end px-4 sm:px-6 lg:px-8 ">
    <div className="grid max-w-md w-full mx-auto bg-white  bg-gradient-to-r from-blue-400 to-purple-400 
      rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
      <Link to="/"><img className="w-5 h-5" src={arrow} alt="arrow"/></Link>
      <h1 className="text-xs font-bold text-gray-900 ml-auto">Descubre más acerca de nosotros</h1>
      <button className="w-16 text-xs font-bold py-1 px-2 border border-indigo-600 rounded-md text-indigo-600
    bg-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto">Vamos</button>
      <img className="w-72 h-72 transform hover:scale-105" src={imgcreateaccount} alt="imgcreateaccount"/>
    </div>
    </section>
      
{/*RIGHT DIV//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/ }
      <div className=" h-80 -mx-8 min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8 transition-transform transform hover:scale-110">
          <div className="max-w-md w-full mx-auto bg-white drop-shadow-2xl rounded-lg p-8 ">
            <h2 className="text-center text-4xl font-extrabold text-gray-900">Crear Cuenta</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="cedula" className="sr-only">Cedula</label>
                  <input 
                      type="string" 
                      id="cedula" 
                      name="cedula" // Asigna un nombre al campo
                      value={dataPerson.cedula} // Vincula el valor del campo con el estado del formulario
                      onChange={handleChangePerson} // Agrega un controlador de cambios
                      required 
                      className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                      placeholder="Cedula" 
                  />
                </div>

    {/*FIELDS FORM //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/ }
                <div>
                  <label htmlFor="nombres" className="sr-only">Nombres</label>
                  <input 
                      type="string" 
                      id="nombres" 
                      name="nombres" // Asigna un nombre al campo
                      value={dataPerson.nombres} // Vincula el valor del campo con el estado del formulario
                      onChange={handleChangePerson} // Agrega un controlador de cambios
                      required 
                      className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                      placeholder="Nombres" 
                  />
                </div>

                <div>
                  <label htmlFor="apellidos" className="sr-only">Apellidos</label>
                  <input 
                      type="text" 
                      id="apellidos" 
                      name="apellidos" // Asigna un nombre al campo
                      value={dataPerson.apellidos} // Vincula el valor del campo con el estado del formulario
                      onChange={handleChangePerson} // Agrega un controlador de cambios
                      required 
                      className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                      placeholder="Apellidos" 
                  />
                </div>

                <div>
                    <label htmlFor="direccion" className="sr-only">Dirección</label>
                    <input 
                        type="string" 
                        id="direccion" 
                        name="direccion" // Asigna un nombre al campo
                        value={dataPerson.direccion} // Vincula el valor del campo con el estado del formulario
                        onChange={handleChangePerson} // Agrega un controlador de cambios
                        required 
                        className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Dirección" 
                    />
                </div>

                <div>
                    <label htmlFor="telefono" className="sr-only">Teléfono</label>
                    <input 
                        type="string" 
                        id="telefono" 
                        name="telefono" // Asigna un nombre al campo
                        value={dataPerson.telefono} // Vincula el valor del campo con el estado del formulario
                        onChange={handleChangePerson} // Agrega un controlador de cambios
                        required 
                        className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="Teléfono" 
                    />
                </div>


                <div>
                    <label htmlFor="correo" className="sr-only">Correo electrónico</label>
                    <input 
                        type="text" 
                        id="correo" 
                        name="correo" // Asigna un nombre al campo
                        value={dataUser.correo} // Vincula el valor del campo con el estado del formulario
                        onChange={handleChangeUser} // Agrega un controlador de cambios
                        required 
                        className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                        placeholder="correo" 
                    />
                </div>


                <div>
                    <label  htmlFor="password" className="sr-only">Contraseña</label>
                    <input  
                    type="text" 
                    id="contrasena"
                    name="contrasena"
                    value={dataUser.contrasena}
                    onChange={handleChangeUser} 
                    required 
                    className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contrasena" />
                </div>

                <div>
                    <input  
                    type="hidden" 
                    id="id_role"
                    name="id_role"
                    value={dataRole.id_role}
                    onChange={handleChangeRole} 
                    required 
                    className="mb-4 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="id_role" />
                </div>

              </div>



              <div>
                <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {loading ? "Cargando..." : "Iniciar sesión"}
                </button>
              </div>
          </form>
        </div>
    </div>
</main>
  );
};