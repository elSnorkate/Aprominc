import React from 'react';
import { Almacen } from '../../../assets/Almacen';

export const ButtonsO = () => {
  const phoneNumber = '963917548';
  const whatsappNumber1 = '963541414'; // Reemplaza con el primer número de WhatsApp
  const whatsappNumber2 = '979975129'; // Reemplaza con el segundo número de WhatsApp
  const email = 'administracion@aprominc.com'; // Reemplaza con la dirección de correo electrónico

  const handlePhoneButtonClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };

  const handleWhatsappButtonClick1 = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber1}`;
    window.open(whatsappLink, '_blank');
  };

  const handleWhatsappButtonClick2 = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber2}`;
    window.open(whatsappLink, '_blank');
  };

  const handleEmailButtonClick = () => {
    const subject = encodeURIComponent('Aplicacion para Trabajo');
    const body = encodeURIComponent(`
Buen día equipo de Aprominc,
Mi nombre es {nombre} y me gustaría ser considerado para tomar la posición de {indicar el trabajo de interés}. Estoy listo para seguir los procesos que corresponden en caso de ser considerado y dejo a continuación mi información de contacto: {rellena con tu número de teléfono activo}.
Espero una pronta respuesta, buen día
`);
    const emailLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = emailLink;
  };

  return (
    <>
      <button className='btype3' style={{ marginRight: '1rem' }} onClick={handlePhoneButtonClick}>
        <img style={{ height: '30px' }} src={Almacen.Phone} alt="" />
      </button>
      <button className='btype3' style={{ margin: '1rem' }} onClick={handleWhatsappButtonClick1}>
        <img style={{ height: '30px' }} src={Almacen.Whatsapp} alt="" />
      </button>
      <button className='btype3' style={{ margin: '1rem' }} onClick={handleWhatsappButtonClick2}>
        <img style={{ height: '30px' }} src={Almacen.Whatsapp} alt="" />
      </button>
      <button className='btype3' style={{ margin: '1rem' }} onClick={handleEmailButtonClick}>
        <img style={{ height: '30px' }} src={Almacen.Mail} alt="" />
      </button>
    </>
  );
};
