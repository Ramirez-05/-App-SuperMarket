import axios from "axios";

export const Auth = async (authData) => {
  console.log("ENTRO A LA FUNCION DE AXIOS");
  console.log("Esto es lo que recibe la funcion de axios", authData);
  console.log("Este es el primer valor de authData", authData.username);
  console.log("Este es el segundo valor de authData", authData.password);
  console.log("Este es el tercer valor de authData", authData.client_id);
  console.log("Este es el cuarto valor de authData", authData.client_secret);
  
  try {
    const response = await axios.post('http://localhost:8000/auth/login', authData);
    console.log("Esto es lo que responde la funcion de axios", response);
    return response.data;
  } catch (error) {
    console.error('Error al autenticar:', error);
    throw error;
  }
}
