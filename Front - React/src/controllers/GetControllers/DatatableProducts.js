import axios from "axios";


 export const DatatableProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8000/product/get-products');
    return response.data; // Almacenar datos recibidos en el estado
  } catch (error) {
    console.error('Error al traer productos:', error);
    throw error;
  }
}

