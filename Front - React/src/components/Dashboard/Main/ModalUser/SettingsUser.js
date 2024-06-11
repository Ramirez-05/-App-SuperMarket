import React, { useState } from 'react';
import Navbar from './Navbar';
import UserDataForm from './UserDataForm';
import PasswordResetForm from './PasswordResetForm';

function SettingsUser() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para actualizar los datos del usuario
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Lógica para cambiar la contraseña del usuario
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Configuración de Usuario</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserDataForm
            userData={userData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <PasswordResetForm
            passwordData={passwordData}
            handlePasswordChange={handlePasswordChange}
            handlePasswordSubmit={handlePasswordSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsUser;
