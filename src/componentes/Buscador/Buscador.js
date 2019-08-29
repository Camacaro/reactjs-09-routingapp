import React, { Component } from 'react';
import './Buscador.css';

class Buscador extends Component {
    
    buscarRef = React.createRef();

    leerDatos = (e) => {
        /**
         * En vez de utilizar el ref puedo utilizar e.target.value
         */
        const termino = this.buscarRef.current.value;
        
        /**Enviamos por props, hacia productos */
        this.props.busquedaProducto(termino);
    }
    
    render() {
        /**
         * leerDatos: es una funcion que se ejecutara al ajecutar el evento onChange.
         */
        return (
            <form className="buscador">
                <input ref={this.buscarRef} type="text" placeholder="Búsqueda" onChange={this.leerDatos} />
            </form>
        );
    }
}

export default Buscador;