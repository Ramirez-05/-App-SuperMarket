import { ChevronLast, ChevronFirst } from "lucide-react";
import { createContext, useState } from "react";
import UpperNavbar from "./UpperNavbar";
import SidebarItems from "./SidebarItems"; // Asegúrate de importar SidebarItems

//Contexto que envuelve todo el componente de Sidebar
export const SidebarContext = createContext();
//Funcion encargada de tener todo el contexto general y recibir el otro componente como un hijo.
export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex">
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}
              alt=""
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              {children}
              <SidebarItems /> {/* Renderiza SidebarItems dentro del ul */}
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
      <UpperNavbar />
    </div>
  );
}
