import { Radar } from "react-chartjs-2";
import { Row, Container, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

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

const Cafe = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
  });
  const getProduct = async () => {
    const { id } = props.match.params;
    try {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <div className="product-name">
        <h3>{product.name}</h3>
      </div>
      <Row>
        <Col xs={6}>
          <img className="cafe" src={product.image} alt="blacklabel"></img>
        </Col>
        <Col className="discription">
          <div>
            <span>{product.description}</span>
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
