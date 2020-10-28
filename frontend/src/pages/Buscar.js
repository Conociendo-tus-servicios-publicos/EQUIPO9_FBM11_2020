import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import Buscar from '../styles/Buscar.css';
import Logo from '../images/impag.png';
import Luz from '../images/luz.jpg';
import aguas from '../images/aguas.jpg';



function buscar (){
    return (
        <div>
             <section className="buscar">
          <h1>Buscar </h1>
          
        </section>
        
  <form className="form-control1" >
      <input type="Buscar" id="inputbuscar" className="form-control1 m-2" placeholder="Buscar" autofocus=""/>
      <button className="btn btn-outline-primary my 2 my-sm-0" type="submit">Buscar</button>
    </form>
    <section className="buscar">
        
    <h3>En este campo de texto puedes buscar la zona donde estas ubicado.</h3>
    </section>

    <section className="parrafo img">
    <img className="Aguas" src={aguas}/>
      
    </section>
    </div>

    );
    
}
export default buscar;
