import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    /**Header reemplaza a la etiqueta <a href=""></a> */
    /**
     * Los link los tienes que usar dentro de BrowserRouter
     */
    return (
        <header>
            <Link to={'/'} >
                <img src="img/logo.png" alt="imagen"/>        
            </Link>
        </header>
    );
};

export default Header;