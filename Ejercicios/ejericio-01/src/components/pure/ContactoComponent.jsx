import React from 'react';
import PropTypes from 'prop-types';
import { CONTACTO } from '../../models/Contacto.class';
import '../css/Contacto.css'

const ContactoComponent = ({ contacto }) => {
  return (
    <section>

      <div className='Cont'>
        <label className='Cont-Label'>Nombre:</label>
        <p className='Cont-Value'>{ contacto.nombre }</p>
      </div>

      <div className='Cont'>
        <label className='Cont-Label'>Apellido:</label>
        <p className='Cont-Value'>{ contacto.apellido }</p>
      </div>

      <div className='Cont'>
        <label className='Cont-Label'>Email:</label>
        <p className='Cont-Value'>{ contacto.email }</p>
      </div>

      <div className='Cont'>
        <label className='Cont-Label'>Conectado:</label>
        <p className={ contacto.conectado === 'No Disponible' ? 'Estado-D && Cont-Value' : 'Estado-C && Cont-Value' }>{ contacto.conectado }</p>
      </div>

    </section>
  );
};


ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(CONTACTO)
};


export default ContactoComponent;
