import React from 'react';
import Eliminar from '../styles/elimensajes.css';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';


function elimensajes () {
    return(
        <div>
      <section className="Eliminar">
      
            <h1>Eliminar Mensajes</h1>
            <div className="col-sm-12">
            <div className="table-responsive">
            
            <table className="table table-hover table-condensed table-bordered">
              <thead className="table table-primary">
              <tr >
              <th>Mensajes Obscenos</th>
              
              <th></th>
              </tr>
              
              </thead>
              <tbody>
            <tr>
                <td>Tú no sabes esa información ****** de ******.</td>

                
              <td>
              <button className="btn btn-danger glyphicon glyphicon-remove" >Eliminar</button>
              </td>
              </tr>
              <tr>
                <td>Primero aprende a escribir *******, luego de eso opinas al respecto, ok?</td>

                
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

export default elimensajes;