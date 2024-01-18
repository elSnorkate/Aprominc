import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Make sure to import Link and Routes

import { Home } from '../home/Home';
import { Almacen } from '../../assets/Almacen';

const Homie = () => <Home />;

export const GoHome = () => {
  return (
    <>
      <Link to="/"><button className='homePc' style={{backgroundColor:'transparent', border:'none'}}><img src={Almacen.Logo} alt="logo"  /></button></Link>
      <Routes>
        <Route path="/" element={<Homie />} />
      </Routes>
    </>
  );
};

export { Homie };
