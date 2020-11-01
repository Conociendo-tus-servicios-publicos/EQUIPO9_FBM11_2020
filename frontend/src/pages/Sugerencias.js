import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import  '../styles/sugerencias.css';


function Sugerencias (){
    return (
        <div>
<section className="sugerir">
          
<section >
          <section className="sugerir">
              
              <h1>Sugerencias </h1>
            </section>

          </section>
          <h3>Ingresa tus sugerencias</h3>

          <from className="comentario">
              <input type="text" placeholder="" />
              <input type="submit"value="Enviar"/>
          </from>
        </section>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>

    );
    
}
export default Sugerencias;