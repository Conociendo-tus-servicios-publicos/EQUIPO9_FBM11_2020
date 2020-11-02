import React from 'react';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';
import  '../styles/informate.css';
import Gasinfo from '../images/Gasinfo.jpg';
import luzinfo from'../images/luzinfo.jpg';



function Informate (){
    return (
        <div>
     <section className="informa">
          <h1>Informate</h1>
        </section>
    <section className="parraf">
        <p>Esta es una plataforma que por medio de un comunicado, permite mantener informados a los 
            ciudadanos de la zona noroccidental de medellin sobre el estado de sus servicios públicos, los usuarios podran informar las 
            dificultades que presentan los servicios públicos en la zona en que te encuentras.</p>
           </section>

           <section className="imagen">
           <img className="img"   src={Gasinfo}/>   
           <img className="img"  src={luzinfo}/>
           </section>
           <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>
      
    );
    
}
export default Informate;