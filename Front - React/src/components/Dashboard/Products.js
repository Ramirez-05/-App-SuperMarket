import React, { useEffect, useState, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import { Products } from '../../controllers/GetControllers/Products';

const TableComponent = () => {
  const [products, setProducts] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await Products();
        setProducts(productsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();

  }, []);

  useEffect(() => {
    if (products.length > 0) {
      if (!tableRef.current) {
        // Inicializar DataTable solo si aún no está inicializado
        const table = $('#myTable').DataTable({
          paging: true,
          searching: true,
          info: true,
          lengthMenu: [5, 10, 25, 50, 100],
          responsive: true,
          data: products, // Asignar los datos al inicializar DataTable
          columns: [
            { data: 'nombre' },
            { data: 'precio' },
            { data: 'descripcion' },
            { data: 'id_categoria' }
          ]
        });

        tableRef.current = table;
      }
    }

    return () => {
      // No destruir la tabla DataTable al desmontar el componente
      if (tableRef.current) {
        tableRef.current.destroy(false);
        tableRef.current = null;
      }
    };
  }, [products]);

  return (
    <div>
      <table id="myTable" className="display">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Categoría</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map(product => (
            <tr key={product.id_producto}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.precio}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.descripcion}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.id_categoria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
