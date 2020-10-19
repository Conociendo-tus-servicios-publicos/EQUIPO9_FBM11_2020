import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Layout from '../components/Layout';
import Registro from '../components/Registro';
import Buscar from '../pages/Buscar.js';
import Fallas from '../pages/Fallas.js';
import Informate from '../pages/Informate.js';
import Sugerencias from '../pages/Sugerencias.js';
import Notas from '../pages/Notas.js';








const App = () =>{
    return(
      <BrowserRouter>
        <Switch>
        <Route exact path="/iniciosesion" component={Register} />
        <Route exact path="/Registro" component={Registro} />
        <Layout>
         <Route exact path="/" component={Home} />
         <Route path="/principal" component={Principal} />
        </Layout>
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


        </Switch>
      </BrowserRouter>
    )
}

export default App;