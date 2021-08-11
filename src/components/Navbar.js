import React from "react";
import { NavLink, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <BootstrapNavbar className="navbar" bg="dark" variant="dark">
      <BootstrapNavbar.Brand as={Link} to="/">
        <img
          id="logo"
          className="logo"
          src={process.env.PUBLIC_URL + "/Asset/Genocafe-logo.png"}
          alt="logo"
        ></img>
      </BootstrapNavbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/Producto">
          Producto
        </Nav.Link>
        <Nav.Link as={Link} to="/History">
          Historia
        </Nav.Link>
        {/* <Nav.Link as={Link} to="/Cafe">
          Cafe
        </Nav.Link> */}
        <Nav.Link as={Link} to="/Locations">
          Locales
        </Nav.Link>
        <Nav.Link as={Link} to="/About">
          About
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
