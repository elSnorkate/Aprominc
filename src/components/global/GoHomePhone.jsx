import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Make sure to import Link and Routes

import { Home } from '../home/Home';
import { Almacen } from '../../assets/Almacen';

const Homie2 = () => <Home />;

export const GoHomePhone = () => {
  return (
    <>
      <Link to="/"><button className='homePhone' style={{backgroundColor:'red', border:'none'}}><img src={Almacen.Logo} alt="logo"  /></button></Link>
      <Routes>
        <Route path="/" element={<Homie2 />} />
      </Routes>
    </>
  );
};

export { Homie2 };
