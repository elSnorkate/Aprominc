import React, { useState } from 'react';
import { Almacen } from '../../assets/Almacen';

const SliderPage = ({ title, content, imageSrc }) => (
  <>
      <h3 style={{ marginTop: '0%' }}>{title}</h3>
      <img
        src={imageSrc}
        alt={`${title} Image`}
        style={{ width: '250px', height: '250px' }}
        className='nImgs'
      />
      <p>{content}</p>
  </>
);

const Slider = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const goToPreviousPage = () => {
    const prevPage = (currentPage - 1 + pages.length) % pages.length;
    setCurrentPage(prevPage);
  };

  const goToNextPage = () => {
    const nextPage = (currentPage + 1) % pages.length;
    setCurrentPage(nextPage);
  };

  return (
    <div className="shold">
      <SliderPage {...pages[currentPage]} />

      <div className="slider-controls">
        <button className='Ibuttons' onClick={goToPreviousPage}>&larr;</button>
        {pages.map((_, index) => (
          <button key={index} className='Ibuttons' onClick={() => goToPage(index)}>
            {index + 1}
          </button>
        ))}
        <button className='Ibuttons' onClick={goToNextPage}>&rarr;</button>
      </div>
    </div>
  );
};

export const NSliders = () => {
  const pages = [
    {
      title: 'Festividades',
      content:
        'Este año disfrutamos de numerosas festividades llenas de alegría y color. Las celebraciones fueron inolvidables y compartimos momentos especiales con seres queridos.',
      imageSrc: Almacen.Festividades,
    },
    {
      title: 'Homenajes',
      content:
        'Recordamos y rendimos homenaje a aquellos que nos han guiado en nuestros momentos. Sus acciones de fe y valores perduran en nuestra memoria y nos inspiran a seguir adelante.',
      imageSrc: Almacen.Homenajes,
    },
    {
      title: 'Deportes',
      content: 'En el ámbito deportivo, vivimos emocionantes competiciones y logramos victorias significativas. Cada logro fue resultado del buen compañerismo y ambiente de trabajo.',
      imageSrc: Almacen.Deportes,
    },
    {
      title: 'Logros',
      content: 'Miramos hacia atrás con orgullo al reflexionar sobre los logros alcanzados este año. Cada desafío superado nos ha fortalecido y nos impulsa a perseguir metas aún más ambiciosas.',
      imageSrc: Almacen.Logros,
    },
    {
      title: 'Familia',
      content: 'La familia de nuestros trabajadores es nuestra familia. Compartimos risas, lágrimas y momentos inolvidables juntos. El amor y la unión familiar fueron el pilar de nuestras experiencias, dándonos energía para salir adelante.',
      imageSrc: Almacen.Familia,
    },
  ];

  return <Slider pages={pages} />;
};
