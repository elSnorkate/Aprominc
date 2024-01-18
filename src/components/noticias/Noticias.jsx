import React from 'react'
import { NSliders } from './NSliders'
import { GoHome } from '../global/GoHome'
import { Almacen } from '../../assets/Almacen'
import { GoHomePhone } from '../global/GoHomePhone'

export const Noticias = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
          <GoHome/>
            <h2>Noticias</h2>    
            <p><strong>Somos concientes </strong>del ambiente, la sociedad y la importancia del individuo. <br /> Por ello siempre nos mantenos <strong> presentes y constantes </strong>con actividades que refuerzan e impulsan nuestros valores y el de nuestros empleados.</p>
            
            <p><strong><i>Tenemos alta repecursion y constancia en nuestras redes sociales:</i></strong> <br /> <i>Siguenos para mantenerte informado <br /> y estar al tanto de todas nuestras notificaciones</i></p><div>
            
            <button className='btype3' style={{marginRight:"1rem"}} > <img style={{height:'30px'}} src={Almacen.Facebook} alt="" /></button>
            <p> O tambien mira nuestro portal del Linkedin:</p>
            <button className='btype3'>      <img style={{height:'30px'}} src={Almacen.Linkedin}/></button>
            </div>

        </div>
        <div className='rightDiv' >
          <GoHomePhone/>
                    <NSliders/>
        </div>
    </div>
    </>
  )
}
