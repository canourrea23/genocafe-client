import React from "react";
// import vision from "./Asset/certificaciones";
import { Row, Container, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <div>
        <h1>Sobre Nosotros...</h1>
      </div>
      <h2>Mision</h2>
      <Row>
        <Col xs={6}>
          <img
            src={process.env.PUBLIC_URL + "/Asset/vision9523.png"}
            alt="logo"
          ></img>
        </Col>
        <Col className="mision">
          <span>
            Ofrecer un producto con exquisito aroma y sabor que aporte una
            variada gama de sensaciones que reconforten el estado físico y
            espiritual de sus consumidores.
          </span>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Vision</h2>
          <img
            src={process.env.PUBLIC_URL + "/Asset/mision12268.png"}
            alt="coffee beans"
          />
        </Col>
        <Col className="vision">
          En el 2015 GENOCAFE, café especial de origen, tendrá un grupo de
          consumidores satisfechos por su compromiso de ofrecer un café de alta
          calidad, logrando mejorar los ingresos del caficultor y su familia.
        </Col>
      </Row>
    </Container>
  );
};

export default About;
