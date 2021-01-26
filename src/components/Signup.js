import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Signup = () => {
  const [signup, setSignup] = useState([]);
  const getSignup = async () => {
    try {
      const res = await axios.put("/api/blog/");
      setSignup(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSignup();
  }, []);

  return (
    <Form>
      {/* <Form.Group>
        <Form.File id="exampleFormControlFile1" label="Example file input" />
      </Form.Group> */}

      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Comfirm Password" />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Subscrevir
      </Button>
    </Form>
  );
};
export default Signup;
