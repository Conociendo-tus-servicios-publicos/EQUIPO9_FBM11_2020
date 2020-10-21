import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
        </Layout>
       


        </Switch>
      </BrowserRouter>
    )
}

export default App;