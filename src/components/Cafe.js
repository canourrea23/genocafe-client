import React from "react";
import { Radar } from "react-chartjs-2";
import { Row, Container, Col } from "react-bootstrap";

const data = {
  labels: [
    "Frangencia/Aroma",
    "Sabor",
    "Sabor Residual",
    "Acidez",
    "Cuerpo",
    "Balance",
    "Puntaje del Catador",
  ],
  datasets: [
    {
      label: "Análisis Sensorial Utilizando la Escala Q-Grader",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [8.5, 8.75, 8.5, 8.5, 8.75, 8.5, 8.5],
    },
  ],
};
//  ticks: { beginAtZero: true },
const options = {
  scale: {
    ticks: {
      min: 6,
      max: 10,
    },
  },
};

const Cafe = () => {
  return (
    <Container>
      <div className="product-name">
        <h3>Especial de Origen. Grano 500 g y 250 g</h3>
      </div>
      <Row>
        <Col xs={5}>
          <img
            className="cafe"
            src="/Asset/black-label-500g.jpg"
            alt="blacklabel"
          ></img>
        </Col>
        <Col className="discription">
          <div>
            <span>
              Café especial de origen Supremo. Molido, Tostion media.
              Presentaciones 500 g y 250 g. Café por encima de 86 puntos en
              escala SCAA. Análisis sensorial balanceado, con fragancia floral,
              gran cuerpo, acidez a limoncillo, notas a jazmín, caramelo,
              durazno y sabor residual a canela. Taza limpia.
            </span>
          </div>
        </Col>
      </Row>
      <div>
        <Radar data={data} options={options} />
      </div>
    </Container>
  );
};

export default Cafe;
