import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../Asset/Genocafe-logo.png'

const Navbar = (props) => {
    return (
        // <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{padding: '0'}}>
                <div className="container">
                    <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo" /> Genocafé</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  to="/about">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        // </div>
    );
}

export default Navbar;
