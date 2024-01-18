import React, { useState, useEffect } from 'react';
import { Almacen } from '../../assets/Almacen';
import { DAP } from './functions/DAP';
import { BotonAlt, CallAA, CallBA, CallCA } from './functions/boton/BotonAlt';
import { Descubre, CallA, CallB, CallC } from './functions/descubre/Descubre';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Footer } from '../home/functions/foot/Footer';

export const Home = () => {
  const [showDescubre, setShowDescubre] = useState(false);


  const Par = () => {
    return (
      <p>
        Con más de 20 años de experiencia en minería, nuestra empresa se destaca
        en el sector. Comprometidos a garantizar la ejecución de proyectos
        según acuerdos de tiempo y presupuesto, manteniendo altos estándares de
        calidad, seguridad y protección ambiental.
      </p>
    );
  };

  const handleDescubreClick = () => {
    setShowDescubre(!showDescubre);
  };

  // Get the navigation function
  const navigate = useNavigate();

  // Get the current location
  const location = useLocation();

  // Check if one of the special routes is being called
  const isSpecialRouteCalled = ['/oportunidadlaboral', '/contactodirecto', '/noticiasanuales'].includes(location.pathname);

  // Check if one of the main routes is being called
  const isMainRouteCalled = ['/oportunidad', '/contacto', '/noticias'].includes(location.pathname);

  return (
    <>
        {isSpecialRouteCalled ? (
          <div>
            <Routes>
              <Route path="/oportunidadlaboral" element={<CallAA />} />
              <Route path="/contactodirecto" element={<CallBA />} />
              <Route path="/noticiasanuales" element={<CallCA />} />
            </Routes>
          </div>
        ) : (
          <div className="mwrapper">
            <div className="leftDiv">
              <h1>APROMINC</h1>
              <span className="line"></span>
              {showDescubre ? <Descubre /> : <Par />}
              {showDescubre ? null : (
                <button className="btype1" onClick={handleDescubreClick}>
                  Explora
                </button>
              )}
            </div>
            <div className="rightDiv">
              {isMainRouteCalled ? null : (
                <>
                  <div className="end">
                    <DAP />
                    <BotonAlt />
                  </div>
                  <div className="center">
                    <div>
                      <img src={Almacen.HomeCirculo} alt="vid" id='img1' />
                    </div>
                  </div>
                </>
              )}

              <Routes>
                <Route path="/oportunidad" element={<CallA />} />
                <Route path="/contacto" element={<CallB />} />
                <Route path="/noticias" element={<CallC />} />
              </Routes>
              <Footer />
            </div>
          </div>
        )}
    </>
  );
};
