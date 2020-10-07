import React from 'react';

import Header from '../components/Header';
import Login from '../components/Login';

//Pages son componentes padres nos ayudan a indentificar las diferentes rutas

export default function Register (){
    return (
      <>
       <Header
       companyName="Conociendo tus servicios públicos"
       navBar={[
        {
          name:'Facebook',
          url:'http://facebook.com'
        },
        {
          name:'Twitter',
          url:'http://twitter.com'
        },
        {
          name:'Instagram',
          url:'http://instagram.com'
        },
        {
          name:'Linkedin',
          url:'http://linkedin.com'
        }
       ]}
  
       infoButton = "Iniciar Sesión" />
       <Login />
     
      </>
    )
};