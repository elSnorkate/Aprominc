import React from 'react'
import ContactForm from './ContactForm'

export const Contacto = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
            <h2>Contacto</h2>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, placeat! Minus, molestiae, quia exercitationem ab suscipit veritatis corrupti doloremque, consequuntur officiis soluta consectetur aspernatur placeat sapiente saepe. Ut, facilis fugiat?</p>
        </div>
        <div className='rightDiv' >
            <ContactForm/> 
        </div>
    </div>
    </>

  )
}
