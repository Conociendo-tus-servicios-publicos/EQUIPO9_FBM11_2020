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
     
          infoButton = "Iniciar Sesión"
        />


        {props.children}

        <Footer />
        </>
    )
}


export default Layout;