import React from 'react';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';
import bloquear from '../styles/Bloquear.css';
import usuarios from '../images/usuarios.png';



function Bloquear () {

    return(
        <div>
         <section className="Bloquear">
          <h1>Eliminar usuarios</h1>
          <img className="img"   src={usuarios}/> 
        </section>
        <section className="cont2">
          <h1>Bloquear usuarios</h1>
          <img className="img"   src={usuarios}/> 
          <button type="button" className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" >Cancelar</button>
          <button type="button" className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2">Confirmar</button>
       
        </section>
          
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2 " type="submit" href="javascript:history.back()">Volver</a>
        
        </div>
        
    );
   

}

export default Bloquear;