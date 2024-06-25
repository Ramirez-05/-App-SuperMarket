import axios from "axios";
import { showSuccessAlert } from '../../tools/Alerts/successAlert'; 


//Funcion encargada de eliminar el token en la db para cerrar la sesion
export const CloseSession = async () => {
  try {
    const response = await axios.delete('http://localhost:8000/auth/log-out', {
      withCredentials: true // Esto asegura que las cookies se envíen con la solicitud
    });
    console.log('Respuesta al cerrar sesión:', response.data);
    return showSuccessAlert(response.data.message, response.data.status);
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    throw error;
  }
};