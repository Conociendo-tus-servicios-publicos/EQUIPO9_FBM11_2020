import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Layout from '../components/Layout';
import Registro from '../components/Registro';
import Buscar from '../pages/Buscar';
import Fallas from '../pages/Fallas';
import Informate from '../pages/Informate';
import Sugerencias from '../pages/Sugerencias';
import Notas from '../pages/Notas';
import Administrador from '../pages/Administrador';
import menuadmin from '../pages/menuadmin';
import Daños from '../pages/Daños';
import Bloquear from '../pages/Bloquear';
import elimensajes from '../pages/elimensajes';
import cambiarcontra from '../pages/cambiarcontra';
import cambiarcorreo from '../pages/cambiarcorreo';
import cambiarusuario from '../pages/cambiarusuario';
import editarfoto from '../pages/editarfoto';
import Perfil from '../pages/Perfil';
import confiperfil from '../pages/confiperfil';


const App = () =>{
    return(
      <BrowserRouter>
      
        <Switch>
        <Route exact path="/iniciosesion" component={Register} />
        <Route exact path="/Registro" component={Registro} />
        
        <Layout>
         <Route exact path="/" component={Home} />
         <Route path="/principal" component={Principal} />
         <Route path="/buscar">
          <Buscar/>
        </Route>
        <Route path="/fallas">
          <Fallas/>
        </Route>
        <Route path="/informate">
          <Informate/>
        </Route>
        <Route path="/sugerencias">
          <Sugerencias/>  
        </Route>
        <Route path="/notas">
          <Notas/>  
        </Route>
        
        <Route path="/botonbuscar" component={Buscar} />
        <Route path="/botonSugerencias" component={Sugerencias} />
        <Route path="/botonInformate" component={Informate} />
        <Route path="/botonFallas" component={Fallas} />
        <Route path="/botonnotas" component={Notas} />
        <Route path="/botonAdministrador" component={Administrador} />
        <Route path="/volver" component={elimensajes} />

        <Route path="/Bloquear" component={Bloquear} />
        <Route path="/Daños" component={Daños} />
        <Route path="/elimensajes" component={elimensajes} />
        <Route path="/menuadmin" component={menuadmin} />
        <Route path="/Pefil" component={Perfil} />
        <Route path="/confiperfil" component={confiperfil} />
        
        <Route path="/contra" component={cambiarcontra} />
        <Route path="/usuario" component={cambiarusuario} />
        <Route path="/correo" component={cambiarcorreo} />
        <Route path="/foto" component={editarfoto} />
        
        <Route path="/Perfil">
          <Perfil/>  
        </Route>
        
        
        </Layout>
        

        </Switch>
      </BrowserRouter>
    )
}

export default App;