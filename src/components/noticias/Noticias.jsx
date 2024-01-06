import React from 'react'
import { NSliders } from './NSliders'

export const Noticias = () => {
  return (
    <>
    <div className='mwrapper'>
        <div className='leftDiv ' >
            <h2>Noticias</h2>
            <p>En APROMINC nos mantenemos concientes del ambiente, la sociedad y la importancia del individuo. Por ello siempre nos mantenos consientes y constantes con actividades para la sociedad y cada uno de nuestros trabajadores</p>
        </div>
        <div className='rightDiv' >
                    <NSliders/>
        </div>
    </div>
    </>
  )
}
