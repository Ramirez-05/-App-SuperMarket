import axios from "axios";


 export const OnlineUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8000/auth/tokens-counter');
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al traer cantidad de tokens:', error);
    throw error;
  }
}

