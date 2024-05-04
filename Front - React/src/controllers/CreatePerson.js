import axios from "axios";

 export const CreatePerson = async (persona,user,role) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/person/create-persona',
      { persona: persona, user: user, role: role }
    );
    console.log("Esto es lo que responde la funcion de axios", response);
    return response.data;
  } 
  catch (error) {
    console.error('Error al autenticar:', error);
    throw error;
  }
}