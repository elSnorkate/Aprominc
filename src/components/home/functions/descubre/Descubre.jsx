import React from 'react';
import { Link } from 'react-router-dom';
import {ContactForm}  from '../../../contacto/ContactForm';
import { NSliders } from '../../../noticias/NSliders';
import { CallingA } from '../../../oportunidad/functions/CallingA';

const CallA = () => <CallingA/>;
const CallB = () => <ContactForm/>;
const CallC = () => <NSliders/>;

export const Descubre = () => {
  return (
    <>
      <ul >
        <li>
          <Link to="/oportunidad">Oportunidad Laboral</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/noticias">Noticias</Link>
        </li>
      </ul>

    </>
  );
};

export { CallA, CallB, CallC };