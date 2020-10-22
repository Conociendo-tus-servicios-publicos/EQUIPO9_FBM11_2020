import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import sugerencias from '../styles/sugerencias.css';


function Sugerencias (){
    return (
        <div>
<section className="sugerir">
          
<section >
          <section className="principal">
              
              <h1>Sugerencias </h1>
            </section>

          </section>
          <h3>Ingresa tus sugerencias</h3>

          <from className="comentario">
              <input type="text" placeholder="" />
              <input type="submit"value="Enviar"/>
          </from>
        </section>
    </div>

    );
    
}
export default Sugerencias;