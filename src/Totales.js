// src/Totales.js

import React from 'react';

function Totales({ subtotal, iva, total }) { //recibe tres propiedades (`subtotal`, `iva`, y `total`), que se esperan sean números, los formatea a dos decimales y los muestra en un `div` con clase `totals`.
  return (
    <div className="totals">
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>IVA (16%): ${iva.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Totales;
