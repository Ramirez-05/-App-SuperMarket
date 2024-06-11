import { useContext } from "react";
import { Activity, Bell, User } from "lucide-react";
import { SidebarContext } from "./Sidebar"; // Asegúrate de importar correctamente SidebarContext
import SidebarItem from "./SidebarItem"; 
//Este componente se encarga de enviar los items al (SidebarItem) que contiene la estructura.
const SidebarItems = () => {
  const { expanded } = useContext(SidebarContext);

  return (
    <>
      {/* Ejemplo 1 */}
      <SidebarItem
        icon={<Activity />} // Icono de Lucide React
        text="Actividades"
        active={false}
        alert={false}
        expanded={expanded}
      />

      {/* Ejemplo 2 */}
      <SidebarItem
        icon={<Bell />} // Icono de Lucide React
        text="Notificaciones"
        active={true}
        alert={true}
        expanded={expanded}
      />

      {/* Ejemplo 3 */}
      <SidebarItem
        icon={<User />} // Icono de Lucide React
        text="Perfil"
        active={false}
        alert={false}
        expanded={expanded}
      />
    </>
  );
};

export default SidebarItems;
