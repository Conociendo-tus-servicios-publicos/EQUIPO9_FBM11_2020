import React from 'react';
//import Pricing from '../components/Pricing';
//import Cardpricing from '../components/CardPricing';
import  '../styles/informate.css';
import energiainfo from'../images/energiainfo.jpg';
import Gasinfo from '../images/Gasinfo.jpg';
import luzinfo from'../images/luzinfo.jpg';



function Informate (){
    return (
        <div>
     <section className="informa">
          <h1>Informate</h1>
        </section>
    <section className="parrafo1">
        <p>Desde el horizonte divisaba mi futuro. Mi espacio lleno de nada y todo la vez. Era como un sueño hecho realidad donde todos eran todos y nadie era ninguno. Justo en ese momento me di cuenta de mi vacío, del espacio que debo llenar para poder sentirme completamente pleno junto a mi yo personal. Lleno de muchas opciones y oportunidades mas que la vida, es un momento de sentirme a mi mismo y el entorno que me rodea.
          Aquella noche fue épica; llena de incertidumbre, beneficios, dudas, preguntas y respuestas. Fue una noche llena de frutos, llena de pensamientos y de ideas. Aquella noche quedará como un grato recuerdo de lo que fui y lo que comenzaré a ser de aquí en adelante. Es el momento en el que todo hombre llega y debe decidir entre quedarse donde está o comenzar una nueva vida llena de retos e incertidumbre plena pero satisfactoria.</p>
         <section className="img">
          <img  className="img" src={energiainfo}/>
          </section>
           </section>

           <section className="img">
           <img className="img"   src={Gasinfo}/>   
           <img className="img"  src={luzinfo}/>
           </section>
    </div>
      
    );
    
}
export default Informate;