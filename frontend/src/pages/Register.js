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
          name:'Buscar',
          url:'/Buscar'
         
        },
        {
          name:'Fallas',
         url:'/Fallas'
        },
        {
          name:'Informate',
          url:'/Informate'
        },
        {
          name:'Sugerencias',
          url:'/Sugerencias'
        
        },
        {
         name:'Notas',
         url:'/Notas'
         
        }
       ]}
  
       infoButton = "Iniciar Sesión" />
       <Login />

      

      </>
    )
};