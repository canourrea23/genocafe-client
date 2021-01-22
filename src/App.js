// Imports
import React, { useEffect, useState } from "react";
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
import Home from "./components/Home";
import Producto from "./components/Producto";

function App() {
  // Set state values
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Cafe" component={Cafe} />
            <Route path="/Locations" component={Locations} />
            <Route path="/About" component={About} />
            <Route path="/History" component={History} />
            <Route path="/Producto" component={Producto} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
