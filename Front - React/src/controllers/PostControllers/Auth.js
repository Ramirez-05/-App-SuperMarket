import axios from "axios";
import { setCookie } from "./SetCookies"; // Asumiendo que importas correctamente la función setCookie

export const Auth = async (authData) => {
  try {
    const response = await axios.post('http://localhost:8000/auth/login', authData);
    console.log("Respuesta de login:", response);

    // Verificar la estructura de la respuesta del servidor
    console.log("Datos recibidos:", response.data);

    // Obtener el token de acceso
    const token = response.data.access_token;
    console.log("Token recibido:", token);

    // Guardar el token en las cookies
    setCookie("ADT", token, { path: '/' });

    // Obtener el rol del usuario
    const role = await RoleAuth(authData.username);

    // Devolver los datos junto con el rol
    return { ...response.data, role };
  } catch (error) {
    console.error('Error al autenticar:', error);
    throw error;
  }
}

export const RoleAuth = async (username) => {
  try {
    const response = await axios.post('http://localhost:8000/users/get-role-user', { correo: username });
    const role = response.data.id_role;
    return role === 1 ? 'Admin' : 'User';
  } catch (error) {
    console.error('Error al verificar role:', error);
    throw error;
  }
}