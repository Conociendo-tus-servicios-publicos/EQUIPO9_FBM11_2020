import React from 'react';
import Header from './Header';
import Footer from  './Footer';


const Layout = (props) => {
    return(
        <>
        <Header 
          companyName="Conociendo tus servicios públicos"
          navBar={[
           {
             name:'Buscar',
             url:'/buscar'
            
           },
           {
             name:'Fallas',
            url:'/fallas'
           },
           {
             name:'Informate',
             url:'/informate'
           },
           {
             name:'Sugerencias',
             url:'/sugerencias'
           
           },
           {
            name:'Notas',
            url:'/notas'
            
           }
          ]}
     
          infoButton = "Iniciar Sesión"
        />

        {props.children}

        <Footer />
        </>
    )
}


export default Layout;