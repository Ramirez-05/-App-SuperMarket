import axios from "axios";


 export const ActiveUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8000/users/get-user-active');
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al traer usuarios:', error);
    throw error;
  }
}