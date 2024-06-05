import axios from "axios";

// Función encargada de actualizar el usuario
export const UpdateUser = async (correo, userId, rol, token) => {
  try {
    console.log("correo:", correo, "id_usuario:", userId, "role:", rol);
    const response = await axios.put('http://localhost:8000/users/update-user', 
    {
      correo: correo, 
      id_usuario: userId, 
      id_role: rol
    }, 
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al enviar datos de usuario:', error);
    throw error;
  }
}

// Función encargada de actualizar la persona
export const UpdatePerson = async (cedula, nombres, apellidos, direccion, telefono, token) => {
  try {
    const response = await axios.put('http://localhost:8000/person/update-persona', {
      cedula: cedula,
      nombres: nombres,
      apellidos: apellidos,
      direccion: direccion,
      telefono: telefono
    },
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al enviar datos persona:', error);
    throw error;
  }
}
