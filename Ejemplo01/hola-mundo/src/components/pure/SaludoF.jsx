//  TODO: Componente de tipo de funcion
//  TODO: Cualquier funcion puede devolver un elemento html
//  TODO: Interectua con una clase

//  No tenemos props, ni state, se usa un hock

//  Comando: rfc
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SaludoF = (props) => { //Hace referencia a las props que se le pasaran

  //  Breve introduccion a useState
  //  const [variable, metodo para actualizarlo] =  useState(valor inicial)
  const [edad, setEdad] = useState(29)

  const cumplirAños = () => {
    setEdad(edad + 1)
  }

  return (
    <div>
      <h1>Hola { props.nombre } desde componente funcional </h1>
      <h2>Tu edad es: { edad }</h2>
      <div>
          <button onClick={cumplirAños}>Cumplir Años</button>   
      </div>
    </div>
  );
};


SaludoF.propTypes = {
  nombre: PropTypes.string
};


export default SaludoF;
