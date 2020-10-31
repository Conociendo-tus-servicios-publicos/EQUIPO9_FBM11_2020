import React from 'react';
import { Link } from 'react-router-dom';

//los compenentes tipo función stateless sin estado

/*return(
    <a key={`item-navBar-${index}`}
    className="p-2 text-dark" 
    href={item.url}>{item.name}</a>
)*/
 
export default function Header (props) {
    return (
        <>
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <Link to="/" className="my-0 mr-md-auto text-decoration-none font-weight-normal text-primary">
            <h5 >{props.companyName}</h5>
            </Link>
            <nav className="my-2 my-md-0 mr-md-3">
            {props.navBar.map((item, index) => {
               
            })}
            </nav>
        <Link to="/iniciosesion" className="btn btn-outline-primary" href="#">{props.infoButton}</Link>
        
        </div>
       
        
        </>
    )
};




