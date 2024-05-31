import { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import { DatatableUsers } from '../../../../controllers/PostControllers/DatatableUsers';
import VerifyTokenComponent from '../../Main/VerifyToken';


function verifystatus(estado) {
  return estado === true ? 'Activo' : 'Inactivo';
}

function verifyrole(id_role) {
  return id_role === 1 ? 'Admin' : 'Usuario';
}

const useTableLogic = () => {
  VerifyTokenComponent();
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await DatatableUsers();
        // Transforma el estado de cada usuario antes de guardarlo en el estado
        const transformedData = usersData.map(user => ({
          ...user,
          estado: verifystatus(user.estado),
          id_role: verifyrole(user.id_role)
        }));
        setUsers(transformedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0 && tableRef.current) {
      $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        info: true,
        lengthMenu: [5, 10, 25, 50, 100],
        responsive: true,
        autoWidth: false,
      });
    }
  }, [users]);

  const handleUpdate = (userId) => {
    console.log(`Actualizar usuario con ID: ${userId}`);
    setShowModal(true); // Mostrar el modal al hacer clic en "Actualizar"
  };

  const handleDeactivate = (userId) => {
    // Lógica para desactivar usuario con id 'userId'
    console.log(`Desactivar usuario con ID: ${userId}`);
  };

  return {
    users,
    tableRef,
    showModal,
    setShowModal,
    handleUpdate,
    handleDeactivate,
  };
};

export default useTableLogic;
