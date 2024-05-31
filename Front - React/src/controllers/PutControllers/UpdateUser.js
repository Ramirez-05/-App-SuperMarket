import axios from "axios";

//Funcion encargada de traer los usuarios para la datatable de el dashboard
export const UpdateUser = async (UserData) => {
  try {
    const { correo, id_usuario, id_role } = UserData;
    console.log("correo, id_usuario, id_role")
    console.log(correo, id_usuario, id_role)
    const response = await axios.post('http://localhost:8000/users/update-user', {UserData
    });
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al enviar datos de usuario:', error);
    throw error;
  }
}


//Funcion encargada de traer los usuarios para la datatable de el dashboard
export const UpdatePerson = async (PersonData) => {
  try {
    const { cedula, nombres, apellidos, direccion, telefono } = PersonData;
    const response = await axios.post('http://localhost:8000/person/update-persona', {
      cedula,
      nombres,
      apellidos,
      direccion,
      telefono
    });
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al enviar datos persona:', error);
    throw error;
  }
}
