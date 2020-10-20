import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import informate from '../styles/informate.css';
import Logo from '../images/impag.png';

function Informate (){
    return (
        <div>
     <section className="informa">
          <img className="logo" src={Logo}></img>
          <h1>Informate</h1>
        </section>

    </div>

    );
    
}
export default Informate;