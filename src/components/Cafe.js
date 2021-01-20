import React from 'react';
import {Radar} from 'react-chartjs-2';

const data = {
  labels: ['Frangencia/Aroma', 'Sabor', 'Sabor Residual', 'Acidez', 'Cuerpo', 'Balance', 'Puntaje del Catador'],
  datasets: [
    {
      label: 'Análisis Sensorial Utilizando la Escala Q-Grader',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [8.5, 8.75, 8.5, 8.5, 8.75, 8.5, 8.5]
    },
    // {
    //   label: 'My Second dataset',
    //   backgroundColor: 'rgba(255,99,132,0.2)',
    //   borderColor: 'rgba(255,99,132,1)',
    //   pointBackgroundColor: 'rgba(255,99,132,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(255,99,132,1)',
    //   data: [28, 48, 40, 19, 96, 27, 100]
    // }
  ]
};

const Cafe = () => { 
    return (
      <div>
        <h3>Especial de Origen. Grano 500 g;  250 g y 2,500 g</h3>
        <Radar data={data} />
      </div>
    );
  };

export default Cafe;