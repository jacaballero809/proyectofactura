// src/FormularioProducto.js
//la función FormularioProducto  que se pasa como prop desde el componente padre (App.js)
import React, { useState } from 'react';
//renderizar el formulario que permite agregar nuevos productos a la lista
function FormularioProducto({ agregarProducto }) {
  const [idProducto, setIdProducto] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [valorUnitario, setValorUnitario] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Previene el comportamiento predeterminado del formulario de recargar la página. 
    if (!idProducto || !descripcion || !valorUnitario || !cantidad) {
      alert('Por favor complete todos los campos del producto');
      return;
    }

    const nuevoProducto = {
      id: parseInt(idProducto),
      descripcion,
      valorUnitario: parseFloat(valorUnitario),
      cantidad: parseInt(cantidad),
      subtotal: parseFloat(valorUnitario) * parseInt(cantidad)
    };

    agregarProducto(nuevoProducto);

    setIdProducto('');
    setDescripcion('');
    setValorUnitario('');
    setCantidad('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <div class="form-group">
            <div class="inline-inputs">
              <div class="input-wrapper">
              <input type="text" id="idProducto" placeholder="ID Producto" value={idProducto} onChange={(e) => setIdProducto(e.target.value)}/>
              </div>
              <div class="input-wrapper">
              <input type="text" id="descripcion" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
              </div>
              </div>
              </div>
              <div class="form-group">
            <div class="inline-inputs">
              <div class="input-wrapper">
              <input type="text" id="valorUnitario" placeholder="Valor Unitario" value={valorUnitario} onChange={(e) => setValorUnitario(e.target.value)}/>
              </div>
              <div class="input-wrapper">
              <input type="text" id="cantidad" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)}/>
              </div>
              </div>
              </div>
        <button type="submit" className="button">Agregar Producto</button>
      </div>
    </form>
  );
}

export default FormularioProducto;
