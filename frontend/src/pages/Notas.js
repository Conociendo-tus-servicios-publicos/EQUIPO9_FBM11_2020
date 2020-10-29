import React from 'react';
import Pricing from '../components/Pricing';
import CardPricing from '../components/CardPricing';
import notas from '../styles/notas.css';
import Logo from '../images/impag.png';


function Notas () {
  return (
  <div>
    <section className="notas">
    
          <h1>Notas</h1>
          <div className="col-sm-12">
          <div className="table-responsive">
          
          <table className="table table-hover table-condensed table-bordered">
            <thead className="table table-primary">
            <tr >
            <th>Versión</th>
              <th>Nombre de la actualización</th>
              <th>Tipo de cambios</th>
            </tr>
            </thead>
            <tbody>
          <tr>
              <td>V 1.0.2.</td>
              <td>Inicio paginas</td>
              <td>Paginas en proceso.</td>
            </tr>
            <tr>
              <td>V 1.0.1.</td>
              <td>Complementos</td>
              <td>Se comienza a habilitar la pagina.</td>
            </tr>
          </tbody>
          </table>
         </div>
         </div>
        </section>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
  </div>
  );
}

export default Notas;