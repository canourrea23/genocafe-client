import React from "react";
import { NavLink, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    // <div className="navbar">
    <BootstrapNavbar bg="dark" variant="dark">
      <BootstrapNavbar.Brand as={Link} to="/">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/Asset/Genocafe-logo.png"}
          alt="logo"
        ></img>
      </BootstrapNavbar.Brand>
      <Nav className="mr-auto">
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
    // <Navbar>
    //         <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
    //         <Navbar.Collapse>
    //           <Nav className="mr-auto">
    //             <NavItem eventkey={1} href="/">
    //               <Nav.Link as={Link} to="/" >Home</Nav.Link>
    //             </NavItem>
    //           </Nav>
    //           <Form inline>
    //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    //             <Button variant="outline-success">Search</Button>
    //           </Form>
    //         </Navbar.Collapse>
    //       </Navbar>
    // <nav
    //   className="navbar navbar-expand-lg navbar-dark bg-dark"
    //   style={{ padding: "0" }}
    // >
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">
    //       <img
    //         className="logo"
    //         src={process.env.PUBLIC_URL + "/Asset/Genocafe-logo.png"}
    //         alt="logo"
    //       />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarsExample07"
    //       aria-controls="#navbarsExample07"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarsExample07">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/producto">
    //             Producto
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/locations">
    //             Lugares
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/about">
    //             About
    //           </NavLink>
    //           <li className="nav-item">
    //             <NavLink className="nav-link" to="/History">
    //               Historia
    //             </NavLink>
    //           </li>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // </div>
  );
};

export default Navbar;
