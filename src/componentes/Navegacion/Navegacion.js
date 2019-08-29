import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navegacion.css'
/**
 * Se va a reemplazar Link por NavLink, para saber cual link es el que esta activo
 * 
 * Antes
 * <nav className="navegacion">
        <Link to={'/nosotros'} >Nosotros</Link>
        <Link to={'/productos'} >Productos</Link>
        <Link to={'/contacto'} >Contacto</Link>
    </nav>
 */

const Navegacion = () => {
    
    /**
     * Los link los tienes que usar dentro de BrowserRouter
     */
    return (
        <nav className="navegacion">
            <NavLink to={'/nosotros'} activeClassName="activo" >Nosotros</NavLink>
            <NavLink to={'/productos'} activeClassName="activo" >Productos</NavLink>
            <NavLink to={'/contacto'} activeClassName="activo" >Contacto</NavLink>
        </nav>
    );
};

export default Navegacion;