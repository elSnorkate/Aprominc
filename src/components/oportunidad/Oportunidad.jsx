import React from 'react'
import { CallingA } from './functions/CallingA';

export const Oportunidad = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
            <h2>Oportunidad Laboral</h2>
            <p>En APROMINC, nos comprometemos activamente a respaldar la contratación y promoción de oportunidades laborales en el sector minero. Nuestra labor se centra en facilitar la conexión entre profesionales altamente calificados y empresas mineras que buscan talento excepcional para fortalecer sus equipos de trabajo.</p>
            <p><strong> <i> En caso cuentes con algun perfil, puedes postular aqui</i></strong></p>
            <div>
              <button className='btype3' style={{marginRight:"1rem"}} > a</button>
              <button className='btype3' style={{margin:"1rem"}} >b</button>
              <button className='btype3' style={{margin:"1rem"}} >c</button>
            </div>
        </div>
        <div className='rightDiv' >
            <CallingA/>
        </div>
    </div>
    </>
  )
}