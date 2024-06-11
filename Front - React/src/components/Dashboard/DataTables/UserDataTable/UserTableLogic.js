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
  const [dataTableInitialized, setDataTableInitialized] = useState(false); // Estado para controlar la inicialización de DataTables
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
    if (users.length > 0 && tableRef.current && !dataTableInitialized) {
      // Solo inicializa DataTables si no se ha inicializado previamente
      $(tableRef.current).DataTable({
        paging: true,
        searching: true,
        info: true,
        lengthMenu: [5, 10, 25, 50, 100],
        responsive: true,
        autoWidth: false,
        language: {
          // Puedes mantener la configuración del idioma aquí si es necesario
          "sInfo": "Se cambio el estado satisfactoriamente"
        }
      });
      setDataTableInitialized(true); // Marca DataTables como inicializado
    }
  }, [users, dataTableInitialized]);

  const handleUpdate = (userId) => {
    console.log(`Actualizar usuario con ID: ${userId}`);
    setShowModal(true); // Mostrar el modal al hacer clic en "Actualizar"
  };

  const handleDeactivate = async (userId) => {
    try {
      // Aquí deberías implementar la lógica para desactivar el usuario
      // Por ejemplo, una llamada a una API o función de backend
      // Después de desactivar correctamente el usuario, actualiza localmente el estado

      // Suponiendo que aquí actualizas el estado localmente después de desactivar
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          return { ...user, estado: 'Inactivo' }; // Actualiza el estado a 'Inactivo'
        }
        return user;
      });

      setUsers(updatedUsers);

      // Aquí puedes mostrar un mensaje de éxito personalizado
      alert(`Usuario con ID ${userId} desactivado correctamente`);

    } catch (error) {
      console.log(error);
      // Aquí puedes manejar errores si la desactivación falla
      alert('Error al desactivar usuario. Por favor, inténtalo de nuevo.');
    }
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
