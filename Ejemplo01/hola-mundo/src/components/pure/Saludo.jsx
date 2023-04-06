//  Componente de clase
//  * Comando: rccp

import React, { Component } from 'react';
import PropTypes from 'prop-types'; // * Sirven para especificar el tipo que estamos pasando, ya que en javascrip no tiene tipado 


class Saludo extends Component {
  //  TODO: Podemos definir un constructor: Tiene clases, funciones, metodos, constructores, metodos propios, propiedades, callbacks
  constructor (props) {
    //props, propiedades que puede recibir, que datos le podemos pasar al componente para que pinte algo
    super (props); 
    this.state = { //Estados que pueden actualizar la informacion, gestionar informacion del componente, es propio de la clase, no es visible en el exterior,  no es modificable, es propio del componente, no es mutable, es estatica
        edad: 29
    }  
  }
  render() {
    return (
      <div>
        <h1>Hola { this.props.nombre } :) </h1>
        <h2>Tu edad es: { this.state.edad }</h2>
        <div>
            <button onClick={this.setEdad}>Cumplir Años</button>   
        </div>
      </div>
    );
  }
  
  setEdad = () => {
    // ! Este setState nos permite actualizar la vista de lo contrario no se actualizara o renderizarla
    this.setState((prevState) => (
        {
            edad: prevState.edad + 1
        }
    ))
  }
}

//  TODO: Define el tipo de dato de prop
Saludo.propTypes = {
    nombre: PropTypes.string
};


export default Saludo;
