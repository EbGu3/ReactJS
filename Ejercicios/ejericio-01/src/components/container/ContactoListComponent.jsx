import React, { useState } from 'react';
import { CONTACTO } from '../../models/Contacto.class';
import { ESTADO } from '../../models/Estado.enum';
import ContactoComponent from '../pure/ContactoComponent';
import '../css/Contacto.css'

const ContactoListComponent = () => {
  const [estado, updateEstado ] = useState(ESTADO.DESCONECTADO)
  const nuevoContacto = new CONTACTO('Juan Alfredo', 'Guerra', 'jalfredo@gmail.com' ,estado)

  const actualizarEstado = () => {
    if (estado === 'No Disponible') {
      updateEstado(ESTADO.CONECTADO)
    } else {
      updateEstado(ESTADO.DESCONECTADO)
    }
  }

  return (
    <div className="Cont-List">
      <ContactoComponent contacto={nuevoContacto}></ContactoComponent>
      <button className='Bt-Update-Estado' onClick={actualizarEstado}>Actualizar</button>
    </div>
  );
};


export default ContactoListComponent;
