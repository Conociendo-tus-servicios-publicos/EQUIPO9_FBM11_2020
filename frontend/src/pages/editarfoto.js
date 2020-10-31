import React from 'react';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';
import  '../styles/editarfoto.css';
import Gasinfo from '../images/Gasinfo.jpg';
import luzinfo from'../images/luzinfo.jpg';



function editarfoto (){
    return (
        <div>
     <section className="informa">
          <h1>Editar o cambiar foto de perfil</h1>
        </section>
    <section className="parrafo1">
        <p>Esta es una plataforma que por medio de un comunicado, permite mantener informados a los 
            ciudadanos de la zona noroccidental de medellin sobre el estado de sus servicios públicos, los usuarios podran informar las 
            dificultades que presentan los servicios públicos en la zona en que te encuentras.</p>
           </section>

           <section className="img">
           <img className="img"   src={Gasinfo}/>   
           <img className="img"  src={luzinfo}/>
           </section>
           <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>
      
    );
    
}
export default editarfoto;