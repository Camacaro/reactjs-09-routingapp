import React from 'react';
import './SingleProducto.css';

const SingleProducto = (props) => {

    if(props.producto === undefined){
        return null;
    }

    /**
     * Esto viene de Router
     */
    const {nombre, imagen, precio, descripcion} = props.producto;
    
    return (
        <div className="info-producto">
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre} />
            </div>

            <div className="info">
                <h2> {nombre} </h2>
                <p className="precio">$ {precio} </p>
                <p> {descripcion} </p>
            </div>
        </div>
    );
};

export default SingleProducto;