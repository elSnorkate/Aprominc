import React from 'react'
import { Almacen } from '../../assets/Almacen' 
import { DAP } from './functions/DAP'
export const Home = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv'>
                <h1>APROMINC</h1>
                <span className='line'></span>
                <p>Con más de 20 años de experiencia en minería, nuestra empresa se destaca en el sector. Comprometidos a garantizar la ejecución de proyectos según acuerdos de tiempo y presupuesto, manteniendo altos estándares de calidad, seguridad y protección ambiental.</p>
                <button className='btype1'>Descubre mas</button>
        </div>
        <div className='rightDiv'>
                <div className='end'>
                    <DAP/>
                    <button className='btype3'> <img src={Almacen.Bar} alt="bar" style={{width:'25px'}} /></button>
                </div>
                <div className='center'>
                    <div id='circle'>
                        <div id='circle2'>
                            a
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}
