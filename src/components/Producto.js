// fotos y informaccion basica del cafe
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";


const Producto = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <CardColumns>
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "15.7rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush"></ListGroup>
            <Card.Body>
              <Card.Link href={`/Cafe/${product.id}`}>Detallés</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </CardColumns>
  );
};
export default Producto;
