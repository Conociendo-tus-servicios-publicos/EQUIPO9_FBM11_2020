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
          <input type="submit"value="Cancelar"/>
          <input type="submit"value="Confirmar"/>
        </section>
          

        
        </div>
        
    );
   

}

export default Bloquear;