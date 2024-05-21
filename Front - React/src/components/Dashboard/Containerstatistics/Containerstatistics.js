
import React from "react";
import DueDateDashboard from "./DueDate";
import ActiveUsersDashboard from "./ActiveUsers";
import InactiveUsersDashboard from "./InactiveUsers";
import OnlineUsersDashboard from "./OnlineUsers";

//Esta funcion hace el llamado de dos componentes.
export default function ContainerStadisticsMain() {
  
//este return solo maneja la maquetacion externa de los componentes del dashboard
  return (
    <div>
      <div className="flex flex-col justify-between items-center border-gray-950">
        {/* Primer fila */}
        <div className="flex space-x-4 w-full ">
        <div className="border-2 border-gray-400 rounded-3xl shadow p-4">
            <ActiveUsersDashboard />
          </div>
          <div className="border-2 border-gray-400 rounded-3xl shadow p-4">
            <DueDateDashboard />
          </div>
          <div className="border-2 border-gray-400 rounded-3xl shadow p-4">
            <InactiveUsersDashboard />
          </div>
          <div className="border-2 border-gray-400 rounded-3xl shadow p-4">
            <OnlineUsersDashboard />
          </div>
        </div>
        {/* Segunda fila */}
        <div className="flex space-x-4 mt-4 w-full"></div>
      </div>
    </div>
  );
}
