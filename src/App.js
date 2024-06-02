import React, { useState } from 'react';
import FormularioProducto from './FormularioProducto';
import ListaProductos from './ListaProductos';
import Totales from './Totales';
import './styles.css';
// se hace uso de props
function App() {
  const [productos, setProductos] = useState([
    { id: 10, descripcion: 'camisa', valorUnitario: 1000.00, cantidad: 3, subtotal: 3000.00 },
    { id: 20, descripcion: 'pantalon', valorUnitario: 2000.00, cantidad: 4, subtotal: 8000.00 }
  ]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  const subtotal = productos.reduce((total, producto) => total + producto.subtotal, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return (
    <div className="container">
      <h1>Factura</h1>
      <form>
        <div className="form-group">
          <div className="inline-inputs">
            <div className="input-wrapper">
              <label htmlFor="numeroFactura">Número de Factura:</label>
              <input type="text" id="numeroFactura" defaultValue="1" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="nombreCliente">Nombre del Cliente:</label>
              <input type="text" id="nombreCliente" defaultValue="Edgar Morillo" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="inline-inputs">
            <div className="input-wrapper">
              <label htmlFor="cedula">Cédula:</label>
              <input type="text" id="cedula" defaultValue="12345" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="telefono">Teléfono:</label>
              <input type="text" id="telefono" defaultValue="3445588" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" defaultValue="lucho@dato.com" />
        </div>
      </form>
      <FormularioProducto agregarProducto={agregarProducto} />
      <ListaProductos productos={productos} eliminarProducto={eliminarProducto} />
      <Totales subtotal={subtotal} iva={iva} total={total} />
    </div>
  );
}

export default App;
