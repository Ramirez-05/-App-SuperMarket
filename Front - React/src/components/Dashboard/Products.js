import React, { useEffect, useState, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import { Products } from "../../controllers/GetControllers/Products";

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
        const table = $("#myTable").DataTable({
          paging: true,
          searching: true,
          info: true,
          lengthMenu: [5, 10, 25, 50, 100],
          responsive: true,
          data: products,
          columns: [
            { data: "nombre" },
            { data: "precio" },
            { data: "descripcion" },
            { data: "id_categoria" },
          ],
        });

        tableRef.current = table;
      }
    }

    return () => {
      if (tableRef.current) {
        tableRef.current.destroy(false);
        tableRef.current = null;
      }
    };
  }, [products]);

  return (
    <div className="bg-black">
      <header className="flex justify-between items-center h-24 bg-clip-padding backdrop-filter backdrop-blur-md px-4">
        <div className="flex-1 flex justify-center">
          <h1 className="text-white text-5xl font-bold tracking-widest">
            Productos
          </h1>
        </div>
        <button className="relative inline-flex items-center justify-center px-6 py-2 mb-2 ms-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full bg-gradient-to-br from-blue-500 to-purple-400 hover:from-blue-600 hover:to-purple-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          regresar
        </button>
      </header>

      <div className="flex justify-center items-start min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="w-full max-w-7xl">
          <table
            id="myTable"
            className="display mx-auto min-w-full bg-white rounded-lg shadow overflow-hidden"
          >
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  Descripción
                </th>
                <th className="px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  ID Categoría
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              {products.map((product) => (
                <tr key={product.id_producto}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-left text-gray-900">
                    {product.nombre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {product.precio}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {product.descripcion}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500">
                    {product.id_categoria}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
