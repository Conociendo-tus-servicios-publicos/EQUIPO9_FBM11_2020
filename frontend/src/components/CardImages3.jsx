import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bloquear_usuarios from '../images/bloquear_usuarios.png';
import eliminar_mensajes from '../images/eliminar_mensajes.png';
import daños_reportados from '../images/daños_reportados.png';


class CardImages3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<>
<volver/>
 <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={bloquear_usuarios} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group">
                <Link to='/foto'> <button  type="button" className="btn btn-sm btn-outline-primary">Cambiar o editar foto de perfil</button></Link>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={eliminar_mensajes} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/contra'><button type="button" className="btn btn-sm btn-outline-primary">Cambiar contraseña</button></Link>
                  
                </div>  
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={daños_reportados} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/usuario'><button type="button" className="btn btn-sm btn-outline-primary">Cambiar usuario</button></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={daños_reportados} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/correo'><button type="button" className="btn btn-sm btn-outline-primary">Cambiar correo electrónico</button></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
  </div>
  
         </>);
    }
}
 
export default CardImages3;