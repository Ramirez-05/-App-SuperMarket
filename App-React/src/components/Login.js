import RegistrationForm from './forms/accounts/RegistrationForm'; 
import React, { useState } from 'react';
import Auth from './auth/Auth';
import imglogin from '../assets/imglogin.svg';


export default function Login({ 
  dataPerson,
  dataUser,
  dataRole,
  loading,
  handleSubmit,
  handleChangePerson,
  handleChangeUser,
  handleChangeRole
}) {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  return (
    <div className="w-auto h-screen bg-black flex justify-center gap-0">
      <div>
        {showCreateAccount ? (
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
        ) : (
          <Auth onShowCreateAccount={handleCreateAccountClick} />
        )}
      </div>
      <div>
        <section className="-mx-8 min-h-screen flex items-center justify-end px-4 sm:px-6 lg:px-8 ">
          <div className="grid max-w-md w-full mx-auto bg-white bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8">
            <h1 className="font-bold text-gray-900 ml-auto">Descubre más acerca de nosotros</h1>
            <button className="w-16 font-bold py-1 px-2 border border-indigo-600 rounded-md text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto">Vamos</button>
            {/* La imagen de inicio de sesión que ya tienes */}
            <img className="w-100 h-100 transform hover:scale-105" src={imglogin} alt="Imagen de inicio de sesión" />
          </div>
        </section>
      </div>
    </div>
  );
}
