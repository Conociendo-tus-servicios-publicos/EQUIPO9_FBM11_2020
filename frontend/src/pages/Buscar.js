import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import buscar from '../styles/buscar.css';
import Logo from '../images/impag.png';
import Luz from '../images/luz.jpg';
import Agua from '../images/aguas.jpg';

function Buscar (){
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
    <img className="Aguas" src={Agua}/>
      
    </section>
    </div>

    );
    
}
export default Buscar;
