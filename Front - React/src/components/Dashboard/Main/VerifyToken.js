import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VerifyToken } from "../../../controllers/GetControllers/VerifyToken";


export default function VerifyTokenComponent (){
const navigate = useNavigate();

useEffect(() => {
  const verifyTokenAndRedirect = async () => {
    try {
      const token = await VerifyToken();
      if (!token) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Llama a verifyTokenAndRedirect al inicio para la primera verificación
  verifyTokenAndRedirect();

  // Luego, establece un intervalo para verificar periódicamente
  const checkTokenInterval = setInterval(() => {
    verifyTokenAndRedirect();
  }, 6000); // Intervalo de 1 minuto (60000 milisegundos)

  // Limpia el intervalo cuando el componente se desmonta
  return () => clearInterval(checkTokenInterval);
}, [navigate]); // navigate como única dependencia para asegurar una única inicialización

}