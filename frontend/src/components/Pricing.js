import React from 'react';
import Logo from '../images/impag.png';
import Agua from '../images/agua.jpg';
import Luz from '../images/luz.jpg';
import Gas from '../images/Gas.jpg';
import '../styles/Pricing.css';


const Pricing = () => {

    return ( <> 
     
        <div>
          <section className="principal-uno">
          <section className="principal">
              <img className="logo" src={Logo}/>
              <h1>Conociendo tus servicios públicos </h1>
            </section>

          </section>
            

        <section className="parrafo">
          <h1>¿Qué son los Servicios Públicos?</h1>
        
          <p>Los servicios públicos son el conjunto de actividades y subsidios permitidos, 
            reservados o exigidos a las administraciones públicas por la legislación en cada Estado, 
            y que tienen como finalidad responder a diferentes imperativos del funcionamiento de la 
            sociedad, y, en última instancia, favorecer la realización efectiva del desarrollo personal,
             económico, la igualdad y el bienestar social</p>
           </section>

           <section className='imagenes'>
              <img className="Luz" src={Luz}/>
              <img className="Agua" src={Agua}/>
              <img className="Gas" src={Gas}/>
           </section>
           
          
        
      </div>
      </>
    );
}

export default Pricing;
