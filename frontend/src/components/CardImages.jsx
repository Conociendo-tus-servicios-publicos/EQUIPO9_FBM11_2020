import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buscar from '../images/buscar.png';
import sugerencias from '../images/sugerencias.png';
import fallas from '../images/fallas.png';
import informate from '../images/informate.png';
import notas from '../images/notas.png';
import administrador from '../images/administrador.png';
class CardImages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

 <div className="album py-5 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={buscar} alt="" width="150" height="150"/>
         
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonbuscar'> <button  type="button" className="btn btn-sm btn-outline-primary">Buscar</button></Link>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={sugerencias} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonSugerencias'><button type="button" className="btn btn-sm btn-outline-primary">Sugerencias</button></Link>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={informate} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonInformate'><button type="button" className="btn btn-sm btn-outline-primary">Informate</button></Link>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={fallas} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonFallas'> <button type="button" className="btn btn-sm btn-outline-primary">Fallas</button></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={notas} alt="" width="150" height="150"/>
            
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonnotas'><button type="button" className="btn btn-sm btn-outline-primary">Notas</button></Link>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={administrador} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonAdministrador'><button type="button" className="btn btn-sm btn-outline-primary">Administrador</button></Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={administrador} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/Perfil'><button type="button" className="btn btn-sm btn-outline-primary">Información de tu perfil</button></Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={administrador} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/confiperfil'><button type="button" className="btn btn-sm btn-outline-primary">Configuración de tu perfil</button></Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
  </div>
         );
    }
}
 
export default CardImages;