import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../main/Extras.css';

const More = ['1', '2', '3', '4', '5', '6'];

export const DAP = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < More.length - 1) {
        setCurrentNumber(currentNumber + 1);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [currentNumber]);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={1000}
      classNames="fade"
    >
      <div>{More[currentNumber]}</div>
    </CSSTransition>
  );
};
