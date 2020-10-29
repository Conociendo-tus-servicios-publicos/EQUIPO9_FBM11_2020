import React from 'react';
import Daños from '../styles/Daños.css';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';


function daños () {
    return(

      <div>
      <section className="Daños">
      
            <h1>Daños reportados</h1>
            <div className="col-sm-12">
            <div className="table-responsive">
            
            <table className="table table-hover table-condensed table-bordered">
              <thead className="table table-primary">
              <tr >
              <th>Daños reportados</th>
              <th></th>
              <th></th>
              </tr>
              
              </thead>
              <tbody>
            <tr>
                <td>En la comuna 5 se presentó una falla en la energia.</td>

                <td>
              <button className="btn btn-warning glyphicon glyphicon-pencil" >Editar</button>
              </td>
              <td>
              <button className="btn btn-danger glyphicon glyphicon-remove" >Eliminar</button>
              </td>
              </tr>
              <tr>
                <td>En la comuna 6 se presentó una falla de agua.</td>

                <td>
              <button className="btn btn-warning glyphicon glyphicon-pencil" >Editar</button>
              </td>
              <td>
              <button className="btn btn-danger glyphicon glyphicon-remove" >Eliminar</button>
              </td>
              </tr>
              <tr>
                <td>En la comuna 3 se presentó una fuga de gas.</td>

                <td>
              <button className="btn btn-warning glyphicon glyphicon-pencil" >Editar</button>
              </td>
              <td>
              <button className="btn btn-danger glyphicon glyphicon-remove" >Eliminar</button>
              </td>
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

export default daños;

