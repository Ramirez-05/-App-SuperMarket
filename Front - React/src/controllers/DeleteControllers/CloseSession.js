import axios from "axios";

//Funcion encargada de eliminar el token en la db para cerrar la sesion
 export const CloseSession = async () => {
  try {
    const response = await axios.post('http://localhost:8000/auth/log-out');
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al cerrar sesion:', error);
    throw error;
  }
}

