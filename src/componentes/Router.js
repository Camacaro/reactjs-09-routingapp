import React, { Component } from 'react';
/**Importando Ruoter */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nosotros from './Nosotros/Nosotros';
import Error from './Error/Error';
import infoProductos from '../datos/datos.json';
import Productos from './Productos/Productos';
import Header from './Header/Header';
import SingleProducto from './SingleProducto/SingleProducto';
import Navegacion from './Navegacion/Navegacion';
import Contacto from './Contacto/Contacto';

class Router extends Component {
    
    state = {
        productos:[],
        terminoBusqueda:''
    }

    componentWillMount(){
        this.setState({
            productos:infoProductos
        })
    }

    /**
     * Esta es una funcion que recibira valores desde Buscador.js
     * Productos->Buscador
     */
    busquedaProducto = (busqueda) => {
        if(busqueda.length > 3){
            this.setState({
                terminoBusqueda:busqueda
            });
        }else {
            this.setState({
                terminoBusqueda:''
            });
        }
    }
    
    render() {
        /** 
         * Todo lo que lleve enlance o sea para navegar tiene que ir dentro de estas etiquetas
         * <BrowserRouter>
         * 
         * Esto nos permite tener diferentes rutas en el proyecto, esto es el registro de rutas para ser encontradas cuando 
         * naveguemos
         * <Switch>
         * 
         * Cargamos la ruta
         * <Route path="/" component={Inicio} />
         * 
         * Cargamos la ruta con props
         * <Route exact path="/" render={()=>(
                <Productos
                    productos={this.state.productos}
                />  
            )} />
         *  
            Parametros en la ruta
            <Route exact path="/producto/:idProducto" render=
         * */

         /**
          * Dentro de BrowserRouter, podemos colocar componentes que seran visibles en todas las pestañas, pero
          * no dentro de Switch, ya que cambia la pestaña-su contenido
          */

        /**Obtener copia de los productos */
        let productos = [...this.state.productos];
        
        let busqueda = this.state.terminoBusqueda;

        let resultado;
        
        if( busqueda !== '' ){

            /**Filtramos productos por la que haya escrito el usuario */
            resultado = productos.filter( producto => {
                /**
                 * Transformamos el nombre a miniscula 
                 * con el indexOf comparamos por su indice y si coincide lo devuelve
                 * que sea diferente de menos -1, ya que si no encuentra nada devolvera -1, osea si no hay nada devolvera -1
                 * */
                return producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !== -1
            })

        }else{
            resultado = productos;
        }

        
        return (
            <BrowserRouter>

                <Header/>

                <Navegacion/>

                <Switch>

                    <Route exact path="/" render={()=>(
                        <Productos
                            productos={resultado}
                            busquedaProducto = {this.busquedaProducto}
                        />
                    )} />

                    <Route exact path="/nosotros" component={Nosotros} />

                    <Route exact path="/productos" render={()=>(
                        <Productos
                            productos={resultado}
                            busquedaProducto = {this.busquedaProducto}
                        />
                    )} />

                    <Route exact path="/producto/:productoId" render={ (props) => {
                        
                        let productoId = props.location.pathname.replace('/producto/', '');

                        return (
                            <SingleProducto
                                producto = {this.state.productos[productoId]}
                            />
                        );
                    }} />

                    <Route exact path="/contacto" component={Contacto} />

                    <Route component={Error} />

                </Switch>
                
            </BrowserRouter>
        );
    }
}

export default Router;