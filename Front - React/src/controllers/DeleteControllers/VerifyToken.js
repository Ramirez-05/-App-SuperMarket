import axios from "axios";

export const VerifyToken = async () => {
  try {
    const response = await axios.get("http://localhost:8000/auth/verify-token", {
      withCredentials: true  // Habilita el envío de cookies en la solicitud
    });
    return response.data; 
  } catch (error) {
    console.error('Error al verificar token:', error);
    throw error;
  }
}
