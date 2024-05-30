import axios from "axios";

//Funcion encargada de traer los usuarios para la datatable de el dashboard
 export const DatatableUsers = async () => {
  try {
    const response = await axios.post('http://localhost:8000/person/get-persons');
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al traer productos:', error);
    throw error;
  }
}
