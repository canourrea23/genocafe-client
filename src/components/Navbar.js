import React from "react";
import { NavLink, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
// import Navbar from "react-bootstrap/Navbar";
import { Switch, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <BootstrapNavbar
      className="navbar"
      bg="dark"
      variant="dark"
      // style={{background: "rgb(255,0,0)",
      // backgroundColor: "linear-gradient(18deg, rgba(255,0,0,.9) 0%, rgba(8,50,78,1) 60%, rgba(246,237,1,1) 100%)"}}
    >
      <BootstrapNavbar.Brand as={Link} to="/">
        <img
          id="logo"
          className="logo"
          src={process.env.PUBLIC_URL + "/Asset/Genocafe-logo.png"}
          alt="logo"
        ></img>
      </BootstrapNavbar.Brand>
      <Nav className="ml-auto sm">
        <Nav.Link
          as={Link}
          to="/Producto"
          style={{ color: "rgba(255,255,0, 1)" }}
        >
          Producto
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/History"
          style={{ color: "rgba(255,255,0, 1)" }}
        >
          Historia
        </Nav.Link>
        {/* <Nav.Link as={Link} to="/Cafe">
          Cafe
        </Nav.Link> */}
        <Nav.Link
          as={Link}
          to="/Locations"
          style={{ color: "rgba(255,255,0, 1)" }}
        >
          Locales
        </Nav.Link>
        <Nav.Link as={Link} to="/About" style={{ color: "rgba(255,255,0, 1)" }}>
          About
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
