import React from 'react';
import Pricing from '../components/Pricing';
import Cardpricing from '../components/CardPricing';
import  '../styles/cambiarcorreo.css';
import { Link } from 'react-router-dom';
import gmail from '../images/gmail.png'



function cambiarcorreo (){
    return (
        <div className="container align-items-center mt-5 text-center">
        <form className="form-signin text-center align-items-center col -1">
        <img className="mb-4" src={gmail} alt="" width="150" height="150"/>
        <h1 className="h1 mb-5 font-weight-normal text-center text-primary">Cambio de Correo Electronico </h1>
        <h5>Digite su correo electronico actual</h5>
        <label for="inputEmail" className="sr-only">Digite su usuario actual</label>
        <input type="password" id="inputname" className="form-control mb-3 " placeholder="xxxxxx" required=""/>
        <h5>Digite su correo electronico nueva</h5>
        <label for="inputPassword" className="sr-only">Digite su usuario nueva</label>
        <input type="password" id="inputlastname" className="form-control mb-3 " placeholder="xxxxxx" required=""/>
        <Link to="/confiperfil" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Confirmar</button>
    </Link>
        
    <Link to="/confiperfil" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Cancelar</button>
    </Link>
        </form>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
      </div>
      
    );
    
}
export default cambiarcorreo;