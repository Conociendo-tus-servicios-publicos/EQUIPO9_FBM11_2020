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
     
          infoButton = "Iniciar Sesión"
        />

        {props.children}

        <Footer />
        </>
    )
}


export default Layout;