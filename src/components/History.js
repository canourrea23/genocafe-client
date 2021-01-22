import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import React, { useState } from 'react';

// about the coffee

//  Carousels
const History = () => {
  return (
    <div>
      <h4>Nuestra Historia</h4>
      <h6 style={{ paddingTop: "15px", paddingBottom: "20px" }}>
        Nuestra empresa está ubicada en la Finca cafetera “La Sonora”, ubicada
        en el municipio de Génova, Quindío. Una tierra de origen volcánica con
        una altitud de 1,600 metros que cuenta con una luminosidad variada,
        microclimas provenientes de los cañones aledaños del Valle y Tolima y
        una cantidad y distribución de lluvia adecuada a lo largo del año, lo
        cual favorece la cosecha de café. Estas características, junto con
        prácticas culturales especiales, una recolección selectiva constante y
        la transformación del fruto mediante un proceso de lavado y secado
        ecológicamente beneficioso, dan como resultado la producción de un café
        especial, de taza limpia, suave, dulce y con una acidez moderada. Una
        taza con gran cuerpo, aroma pronunciada, fragancia floral a Jazmín, y
        notas de durazno, limoncillo y un sabor residual a canela. Nuestro café
        es exclusivo y de la más alta calidad, cosechado en una gran región con
        características únicas, manteniendo el equilibrio de los recursos
        naturales.
      </h6>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/Asset/cafe-verde.jpg"}
            alt="First slide"
            style={{ height: "400px" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/Asset/flor-cafe.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/Asset/secadoalsol.jpg"}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default History;
// continuation
