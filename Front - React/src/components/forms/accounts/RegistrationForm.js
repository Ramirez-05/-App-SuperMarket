import React from 'react';

export default function RegistrationForm({ dataPerson, dataUser, dataRole, loading, handleSubmit, handleChangePerson, handleChangeUser, handleChangeRole }) {
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
                            value={dataPerson && dataPerson.cedula} 
                            onChange={handleChangePerson} 
                            required 
                            className="mb-2 appearance-none rounded-md relative block w-full px-4 py-2 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                            placeholder="Cedula" 
                        />
                    </div>
                    <div>
                        <label htmlFor="cedula" className="sr-only">Cedula</label>
                        <input 
                            type="number" 
                            id="cedula" 
                            name="cedula" 
                            value={dataPerson && dataPerson.cedula} 
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
                            value={dataPerson && dataPerson.nombres} 
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
                            value={dataPerson && dataPerson.apellidos} 
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
                            value={dataPerson && dataPerson.direccion} 
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
                            value={dataPerson && dataPerson.telefono} 
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
                            value={dataUser && dataUser.correo}
                            onChange={handleChangeUser} 
                            required 
                            className="mb-2 appearance-none rounded-md relative block w-full px-4 py-3 border border-black placeholder-gray-500 text-lg text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-bold" 
                            placeholder="correo" 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <input  
                            type="text" 
                            id="contrasena"
                            name="contrasena"
                            value={dataUser && dataUser.contrasena}
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
                            value={dataRole && dataRole.id_role}
                            onChange={handleChangeRole} 
                            required 
                            className="mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="id_role" 
                        />
                    </div>

                </div>
                <div>
                    <button type="submit" disabled={loading} className="flex py-2 px-6 font-bold text-xl rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto">
                    {loading ? "Cargando..." : "Crear Cuenta"}
                    </button>
                </div>
                </form>
            </div>
        </main>
    );
}
