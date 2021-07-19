// Imports
import React, { useEffect, useState, Component } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

// CSS
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Signup from './components/Signup';
import History from "./components/History";
import About from "./components/About";
import Cafe from "./components/Cafe";
import Locations from "./components/Locations";

import Producto from "./components/Producto";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Signup from "./components/Signup";

function App() {
  // Set state values
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          {/* <div className="container mt-5"> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Cafe/:id" component={Cafe} />
            <Route path="/Locations" component={Locations} />
            <Route path="/About" component={About} />
            <Route path="/History" component={History} />
            <Route path="/Producto" component={Producto} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
