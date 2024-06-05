import axios from 'axios';

// Función encargada de actualizar el estado del usuario
export const ChangeStatus = async (userId, newStatus) => {
  try {
    const response = await axios.put('http://localhost:8000/users/update-status', 
    {
      id_usuario: userId, 
      estado: newStatus
    });
    return response.data;
  } catch (error) {
    console.error('Error al enviar datos de usuario:', error);
    throw error;
  }
}
