import React from 'react'
import { ContactForm } from './ContactForm'


export const Contacto = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
            <h2>Contacto</h2>
            <p>Hemos creado este formulario, en caso desees tener un contacto directo con la empresa y personal que te pueda ayudar a resolver tus inconvenientes.</p>
            <p><strong>Para tener una respuesta pronta y satisfactoria, recuerda que:</strong></p>
            <ul>
              <li>Escribe tu nombre correctamente</li>
              <li>En caso seas un trabajador especifica en que papel te desenvuelves <br /> En caso no lo seas puedes dejar en blanco ese espacio</li>
              <li>Escribe bien tu correo electronico pues este sera usado para responder a la inquietud</li>
              <li>Se claro con el motivo por el cual necesitas soporte directo</li>
            </ul>
        </div>
        <div className='rightDiv' >
            <ContactForm/> 
        </div>
    </div>
    </>

  )
}
