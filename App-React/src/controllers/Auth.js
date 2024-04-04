
import  axios  from "axios";

export const Auth = async(authData) => {
    try {
        const response = await axios.post('http://localhost:8000/docs#/auth/login', authData);
        return response.data;
      } catch (error) {
        console.error('Error al autenticar:', error);
        throw error;
      }
} 