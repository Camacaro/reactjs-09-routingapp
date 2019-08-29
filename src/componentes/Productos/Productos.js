import React, { Component } from 'react';
import Producto from '../Producto/Producto';
import './Productos.css';
import Buscador from '../Buscador/Buscador';

class Productos extends Component {
    /**Este props viene de Router.js 
     * this.props.productos
     * this.props.busquedaProducto
    */
    render() {
        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>

                <Buscador
                    busquedaProducto={this.props.busquedaProducto}
                />

                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map((producto)=>(
                        <Producto
                            key={producto}
                            informacion={this.props.productos[producto]}
                        />
                    ))}
                </ul>   
            </div>
        );
    }
}

export default Productos;