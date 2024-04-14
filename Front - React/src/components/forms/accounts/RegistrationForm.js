import React from 'react';
import FormInput from './forms/Inputs/FormInput';

export default function RegistrationForm({ 
    dataPerson = {}, 
    dataUser = {}, 
    dataRole = {}, 
    loading = false, 
    handleSubmit, 
    handleChangePerson,       
    handleChangeUser, 
    handleChangeRole 
    }) {
    const { cedula = '', nombres = '', apellidos = '', direccion = '', telefono = '' } = dataPerson;
    const { correo = '', contrasena = '' } = dataUser;
    const { id_role = 1 } = dataRole;

    return (
        <main className="w-auto h-screen bg-black flex justify-center items-center">
        <div className="mx-auto bg-white drop-shadow-2xl rounded-lg p-8">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Registrarte</h2>
            <p className='font-bold text-gray-600'>Es rápido y fácil.</p>
            <form onSubmit={handleSubmit} className="space-y-6" action="" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="grid grid-cols-2 gap-4">
                <FormInput 
                    id="cedula"
                    label="Cedula"
                    type="number"
                    name="cedula"
                    value={cedula}
                    onChange={handleChangePerson}
                    required
                />
                <FormInput 
                    id="nombres"
                    label="Nombres"
                    type="string"
                    name="nombres"
                    value={nombres}
                    onChange={handleChangePerson}
                    required
                />
                <FormInput 
                    id="apellidos"
                    label="Apellidos"
                    type="string"
                    name="apellidos"
                    value={apellidos}
                    onChange={handleChangePerson}
                    required
                />
                <FormInput 
                    id="direccion"
                    label="Dirección"
                    type="string"
                    name="direccion"
                    value={direccion}
                    onChange={handleChangePerson}
                    required
                />
                <FormInput 
                    id="telefono"
                    label="Teléfono"
                    type="string"
                    name="telefono"
                    value={telefono}
                    onChange={handleChangePerson}
                    required
                />
                <FormInput 
                    id="correo"
                    label="Correo electrónico"
                    type="text"
                    name="correo"
                    value={correo}
                    onChange={handleChangeUser}
                    required
                />
                <FormInput 
                    id="contrasena"
                    label="Contraseña"
                    type="text"
                    name="contrasena"
                    value={contrasena}
                    onChange={handleChangeUser}
                    required
                />
                <FormInput 
                    id="id_role"
                    label="id_role"
                    type="hidden"
                    name="id_role"
                    value={id_role}
                    onChange={handleChangeRole}
                    required
                />
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
