import React from 'react';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';
import  '../styles/perfil.css';
import usuarioperfil from'../images/usuarioperfil.png';



function Perfil (){
    return (
        <div>
     <section className="informa">
     <img className="img"  src={usuarioperfil}/>
          <h1>foto de  perfil</h1>
        </section>
        <section className="lista">
            <h2>Nombre(s):</h2>
            <h6>Juan Diego</h6>
            <h2>Apellidos(s):</h2>
            <h6>Valencia Osorno</h6>
            <h2>Correo Electronico</h2>
            <h6>jdvosorno@gmail.com</h6>
        </section>
           <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>
      
    );
    
}
export default Perfil;