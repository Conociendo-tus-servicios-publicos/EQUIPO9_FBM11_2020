import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import  '../styles/buscar.css';
import Agua from '../images/agua.jpg';
import Luz from '../images/luz.jpg';
import Gas from '../images/Gas.jpg';




function buscar1 (){
    return (
        <div>
             <section className="Buscar">
          <h1>Buscar </h1>
          
        </section>
        
  <form className="form-control1" >
      <input type="Buscar" id="inputbuscar" className="form-control1 m-2" placeholder="Buscar" autofocus=""/>
      <button className="btn btn-outline-primary my 2 my-sm-0" type="submit">Buscar</button>
    </form>
    <section className="Busc">
        
    <p>En este campo de texto puedes buscar la zona donde estas ubicado.</p>
    </section>
    <section className='imagenes'>
              <img className="Luz" src={Luz}/>
              <img className="Agua" src={Agua}/>
              <img className="Gas" src={Gas}/>
           </section>
    
    <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>

    );
    
}
export default buscar1;
