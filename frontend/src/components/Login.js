import React, { Component } from 'react';
import Logo from '../images/impag.png';
import '../styles/login.css';
import { Link } from 'react-router-dom';


class Login extends Component {
    
    render() { 
        return (
   <div className="container align-items-center mt-5 text-center">
    <form className="form-signin text-center align-items-center col -1">
    <img className="mb-4" src={Logo} alt="" width="150" height="150"/>
    <h1 className="h1 mb-5 font-weight-normal text-center text-primary">Iniciar Sesión</h1>
    <label for="inputEmail" className="sr-only mb-3">Usuario</label>
    <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Usuario" required="@" autofocus=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
    </div>
    <Link to="/principal" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Iniciar Sesión</button>
    </Link>

    <Link to="/Registro" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Registrate</button>
    </Link>
    <p className="mt-5 mb-3 text-muted">© 2020</p>
    </form>
  </div>
          );
    }
}
 
export default Login;