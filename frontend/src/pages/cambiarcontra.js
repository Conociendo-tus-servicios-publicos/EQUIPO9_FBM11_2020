import React from 'react';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';
import  '../styles/cambiarcontra.css';
import Gasinfo from '../images/Gasinfo.jpg';
import luzinfo from'../images/luzinfo.jpg';



function cambiarcontra (){
    return (
        <div>
     <section className="informa">
          <h1>Cambiar contraseña</h1>
        </section>
    <section className="parrafo1">
        <p></p>
           </section>

           <section className="img">
           <img className="img"   src={Gasinfo}/>   
           <img className="img"  src={luzinfo}/>
           </section>
           <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>
      
    );
    
}
export default cambiarcontra;