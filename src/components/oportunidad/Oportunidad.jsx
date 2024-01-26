import React from 'react'
import { CallingA } from './functions/CallingA';
import { GoHome } from '../global/GoHome';
import { GoHomePhone } from '../global/GoHomePhone';
import { ButtonsO } from './functions/ButtonsO';


export const Oportunidad = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
          <GoHome/>
            <h2>Oportunidad Laboral</h2>
            <p>En APROMINC, nos comprometemos activamente a respaldar la contratación y promoción de oportunidades laborales en el sector minero. Nuestra labor se centra en facilitar la conexión entre profesionales altamente calificados y empresas mineras que buscan talento excepcional para fortalecer sus equipos de trabajo.</p>
            <p><strong>Importante:</strong></p>
            <p><i>Aunque estas son todas las oportunidades laborales actuales que presentamos, la publicación no garantiza la disponibilidad de trabajo para cada posición. Por esta razón, te instamos a revisar nuestro tablero de oportunidades. Si encuentras un perfil que coincida con el tuyo, estaremos encantados de ponernos en contacto contigo para discutir la disponibilidad actual.</i></p>
            <p><strong> <i> En caso cuentes con algun perfil, puedes postular aqui</i></strong></p>
            <div>
                <ButtonsO/>
            </div>
        </div>
        <div className='rightDiv' >
        <GoHomePhone/>
            <CallingA/>
        </div>
    </div>
    </>
  )
}