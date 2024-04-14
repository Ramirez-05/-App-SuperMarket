// CreateAccount.js
import RegistrationForm from ' ./forms/accounts/RegistrationForm';
import React, { useState } from 'react';

export default function CreateAccount() {
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
      // Lógica para enviar los datos
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
        <RegistrationForm
          dataPerson={dataPerson}
          dataUser={dataUser}
          dataRole={dataRole}
          loading={loading}
          handleSubmit={handleSubmit}
          handleChangePerson={handleChangePerson}
          handleChangeUser={handleChangeUser}
          handleChangeRole={handleChangeRole}
        />
      </div>
    </main>
  );
}
