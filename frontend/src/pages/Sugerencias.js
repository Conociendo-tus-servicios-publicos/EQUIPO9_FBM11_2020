import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import sugerencias from '../styles/sugerencias.css';
import Logo from '../images/impag.png';

function Sugerencias (){
    return (
        <div>
<section className="sugerir">
          <img className="logo" src={Logo}/>
          <h1>Sugerencias</h1>
        </section>
    </div>

    );
    
}
export default Sugerencias;