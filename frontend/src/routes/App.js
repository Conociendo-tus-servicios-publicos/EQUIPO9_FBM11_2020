import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Layout from '../components/Layout';


const App = () =>{
    return(
      <BrowserRouter>
        <Switch>
        <Route exact path="/iniciosesion" component={Register} />
        <Layout>
         <Route exact path="/" component={Home} />
         <Route path="/principal" component={Principal} />
        </Layout>
        </Switch>
      </BrowserRouter>
    )
}

export default App;