import React from 'react';
import Logo from '../images/impag.png';
import Agua from '../images/agua.jpg';
import Luz from '../images/luz.jpg';
import Gas from '../images/Gas.jpg';
import '../styles/Pricing.css';

const Pricing = () => {

    return (
        <div>
          <section className="principal-uno">
          <section className="principal">
              <img className="logo" src={Logo}/>
              <h1>Conociendo tus servicios públicos </h1>
            </section>

          </section>
            

        <section className="parrafo">
          <h1>¿Qué son los Servicios Públicos?</h1>
        
          <p> los Servicios públicos son el conjunto de actividades y subsidios permitidos, reservados o exigidos a las administraciones públicas por la legislación en cada Estado, y que tienen como finalidad responder a diferentes imperativos del funcionamiento de la sociedad, y, en última instancia, favorecer la realización efectiva del desarrollo personal, económico, la igualdad y el bienestar social. Suelen ser servicios esenciales, ya que los costos corren a cargo de los contribuyentes a través del Estado (gasto público). Tienen una presencia especialmente significativa en los países de economía mixta que siguen modelos político-económicos como el Estado social o Estado del bienestar. A menudo suele ser tratado en los organismos internacionales como un elemento fundamental dentro del welfare state.1​

Genéricamente, un servicio esencial es una actividad desarrollada por una institución pública o privada con el fin de satisfacer una necesidad básica del conjunto de la sociedad, sin malgastar los recursos públicos.

Los consumidores y usuarios de servicios públicos están protegidos por la Ley de defensa del consumidor, que los ampara frente a las empresas prestadoras de servicios, como el gas, la luz o el teléfono y establece que cuando el consumidor hace un reclamo por fallas en el servicio, las empresas tienen la obligación de registrar su reclamo por cualquier medio disponible.</p>
           </section>

           <section className='imagenes'>
              <img className="Luz" src={Luz}/>
              <img className="Agua" src={Agua}/>
              <img className="Gas" src={Gas}/>
           </section>

          
        
      </div>
    )
};

export default Pricing;
