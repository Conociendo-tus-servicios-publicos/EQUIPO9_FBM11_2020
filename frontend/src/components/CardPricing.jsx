import React from 'react';
import { Link } from 'react-router-dom';

//Tipo clase stateful, tiene estado

class CardPricing extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {}
  };

    render() { 

      const { datos } = this.props;

        return ( 
        <div className="container">
            <div className="card-deck mb-3 text-center">
            {datos.map((pricing, index) => {
              return(

                <div key={`pricing ${index}`} className="card mb-4 shadow-sm">
                <div className="card-header">
                <h4 className="my-0 font-weight-normal">{pricing.tipoPago}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">{pricing.cost} <small className="text-muted">/ mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{pricing.users}</li>
                    <li>{pricing.storage}</li>
                    <li>{pricing.support}</li>
                    <li>{pricing.help}</li>
                  </ul>
                  <Link to="/iniciosesion" className="text-decoration-none">
                  <button type="button"  className="btn btn-lg btn-block btn-outline-primary" >{pricing.buttonInfo}</button></Link>
                </div>
              </div>
              )
            })}  
            </div>
          </div>

         );
    }
}
 
export default CardPricing;