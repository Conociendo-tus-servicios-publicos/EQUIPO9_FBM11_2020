import React from 'react';
import Pricing from '../components/Pricing';
import CardPricing from '../components/CardPricing'; 
import '../styles/fallas.css';

   

const Fallam = ()=>{
    return (
        <div>
          <section className="fallas">
          <h1>Fallas de los servicios públicos  </h1>
          <h3>Ingresa tus dificultades en tus servicios</h3>

          <from className="comentario">
              <input type="text" placeholder="" />
              <input type="submit"value="Enviar"/>
          </from>
        </section>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>

    );
    
}
export default Fallam;