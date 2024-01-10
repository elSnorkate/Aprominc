import React from 'react'
import { CallingA } from './functions/CallingA';
import { Almacen } from '../../assets/Almacen'
import { GoHome } from '../global/GoHome';


export const Oportunidad = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
          <GoHome/>
            <h2>Oportunidad Laboral</h2>
            <p>En APROMINC, nos comprometemos activamente a respaldar la contratación y promoción de oportunidades laborales en el sector minero. Nuestra labor se centra en facilitar la conexión entre profesionales altamente calificados y empresas mineras que buscan talento excepcional para fortalecer sus equipos de trabajo.</p>
            <p><strong> <i> En caso cuentes con algun perfil, puedes postular aqui</i></strong></p>
            <div>
              <button className='btype3' style={{marginRight:"1rem"}} > <img style={{height:'30px'}} src={Almacen.Whatsapp} alt="" /></button>
              <button className='btype3' style={{margin:"1rem"}} >      <img style={{height:'30px'}} src={Almacen.Phone}/> </button>
              <button className='btype3' style={{margin:"1rem"}} >      <img style={{height:'30px'}} src={Almacen.Mail}/></button>
            </div>
        </div>
        <div className='rightDiv' >
            <CallingA/>
        </div>
    </div>
    </>
  )
}