import axios from "axios";

export const DueDate = async () => {
    try {
        const response = await axios.get('http://localhost:8000/stock/due-date');
        return response.data; // almacenar datos recibidos en el estado
    } 
    catch (error){
        console.error("Error al traer el lote proximo a vencer",error);
        throw error;
    }
    
}