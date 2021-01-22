// fotos y informaccion basica del cafe
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import React from "react";

const Producto = () => {
  return (
    <CardColumns>
      <Card style={{ width: "15.7rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/Asset/black-label-500g.jpg"}
        />
        <Card.Body>
          <Card.Title>Cafe Especial de Origen en Grano 500g</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush"></ListGroup>
        <Card.Body>
          <Card.Link href="/Cafe">Detallés</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "15.7rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/Asset/ecologico.jpg"}
        />
        <Card.Body>
          <Card.Title>Especial de Origen Artesanal 250g</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Link href="/Cafe">Detallés</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "15.7rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/Asset/blanco-tradiccional.png"}
        />
        <Card.Body>
          <Card.Title>Cafe Excelso (Tradicional) 500g</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Link href="/Cafe">Detallés</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "15.7rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/Asset/comingsoon.png"}
        />
        <Card.Body>
          <Card.Title>Especial de Origen 2,500g</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Link href="/Cafe">Detallés</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "15.7rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/Asset/comingsoon.png"}
        />
        <Card.Body>
          <Card.Title>Caja Surtida</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Link href="/Cafe">Detallés</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "15.7rem" }}>
        <Card.Img
          variant="top"
          src={process.env.PUBLIC_URL + "/Asset/comingsoon.png"}
        />
        <Card.Body>
          <Card.Title>Especial de Origen Molido 2,500g</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Link href="/Cafe">Detallés</Card.Link>
        </Card.Body>
      </Card>
    </CardColumns>
  );
};

export default Producto;
