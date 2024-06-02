// src/ListaProductos.js

import React from 'react';

function ListaProductos({ productos, eliminarProducto }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID Producto</th>
          <th>Descripción</th>
          <th>Valor Unitario</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.valorUnitario.toFixed(2)}</td>
            <td>{producto.cantidad}</td>
            <td>{producto.subtotal.toFixed(2)}</td>
            <td>
              <button
                className="eliminar"
                onClick={() => eliminarProducto(producto.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
 /*método toFixed en JavaScript que se utiliza para formatear un número a una cantidad específica de decimales */
export default ListaProductos;
