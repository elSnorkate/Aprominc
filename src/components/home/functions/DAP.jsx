import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../main/Extras.css'; // Assuming you have some CSS styles defined here
import { Almacen } from '../../../assets/Almacen';

const More = [
  '¿Estás buscando trabajo?',
  '¿No encuentras lo que buscas?',
  'APROMINC a diario',
  'Necesitamos personal',
  'Respuestas a tus dudas',
  'Último acontecimiento', // Fixed typo: "Ultimo" to "Último"
];

export const DAP = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < More.length - 1) {
        setCurrentNumber(currentNumber + 1);
      } else {
        setCurrentNumber(0); // Reset to 0 when it reaches the last index
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [currentNumber]);

  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div>
        <span>
          <small style={{color:'white'}} >{More[currentNumber]}</small> 
          <small style={{color:'white'}}>&nbsp;&nbsp;&rarr;</small>
        </span>
        
      </div>
    </CSSTransition>
  );
};
