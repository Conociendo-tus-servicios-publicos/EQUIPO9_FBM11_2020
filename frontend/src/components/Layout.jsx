import React from 'react';
import Header from './Header';
import Footer from  './Footer';


/*{
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
 
}*/

const Layout = (props) => {
    return(
        <>
        <Header 
          companyName="Conociendo tus servicios públicos"
          navBar={[
          
          ]}
     
          infoButton = "Iniciar Sesión"
        />


        {props.children}

        <Footer />
        </>
    )
}


export default Layout;