import React from 'react'
import { ContactForm } from './ContactForm'
import { GoHome } from '../global/GoHome'
import { GoHomePhone } from '../global/GoHomePhone'


export const Contacto = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
          <GoHome/>
            <h2>Contacto</h2>
            <p>Hemos creado este formulario para que este disponible las 24 horas dia atendido por un personal completamente capacitado para poder ayudarte a resolver tus inconvenientes o brindarte mas informacion sobre algo en especifico.</p>
            <p><strong>Para tener una respuesta pronta y satisfactoria, recuerda que:</strong></p>
            <ul>
              <li>Escribe tu nombre correctamente</li>
              <li>En caso seas un trabajador especifica en que papel te desenvuelves <br /> Y en caso no lo seas puedes dejar en blanco ese espacio</li>
              <li>Escribe bien tu direccion  de correo electronico pues este sera usado para responder a la inquietud</li>
              <li>Se claro con el motivo por el cual necesitas soporte directo</li>
              <li>Elige el area al que creas que esta mas aferrada tu solicitud</li>
            </ul>
        </div>
        <div className='rightDiv' >
        <GoHomePhone/>
            <ContactForm/> 
        </div>
    </div>
    </>

  )
}
