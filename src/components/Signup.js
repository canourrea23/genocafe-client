import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const getSignUpUser = async () => {
    try {
      const res = await axios.post("/api/user/", user);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={() => getSignUpUser()}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            value={user.first_name}
            name="first_name"
            onChange={handleFirstName}
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            value={user.last_name}
            onChange={handleLastName}
            type="name"
            placeholder="Enter last name"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>User</Form.Label>
          <Form.Control
            value={user.username}
            onChange={handleUsername}
            type="name"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={user.email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={user.password}
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Subscrevir
      </Button>
    </Form>
  );
};
export default Signup;
