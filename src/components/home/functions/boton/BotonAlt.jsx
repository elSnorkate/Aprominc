import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { Almacen } from '../../../../assets/Almacen';
import { Oportunidad } from '../../../oportunidad/Oportunidad'
import { Contacto } from '../../../contacto/Contacto'
import { Noticias } from '../../../noticias/Noticias'

const CallAA = () => <Oportunidad/>;
const CallBA = () => <Contacto/>;
const CallCA = () => <Noticias/>;

export const BotonAlt = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdownphone'>
      <div className="dropdown-container">
        <button className="btype3" onClick={handleToggle}>
          <img src={Almacen.Bar} alt="bar" style={{ width: '25px' }} />
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <a> <Link to="/oportunidadlaboral"> Oportunidad </Link> </a>
            <a> <Link to="/contactodirecto"> Contacto </Link></a>
            <a> <Link to="/noticiasanuales"> Noticias </Link></a>
          </div>
        )}
      </div>
    </div>
    
  );
};

export { CallAA, CallBA, CallCA}