import React from 'react';
import logo from '../images/logo.png'
import Login from '../Pages/Login';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';




function NavBar() {
  return (
    <nav className="navbar">
     
      <div className="navbar-left">
    <a href='/'><img src={logo} alt="Logo" className="logo" /></a>
      
      </div>

{/* création  boutton connexion et inscription */}

      <div className="navbar-right">
        <Link to="/Login" className="btn btn-connexion">Connexion</Link>
        <Link to="/SignupForm" className="btn btn-inscription">Inscription</Link>
      </div>


    </nav>
  );
}

export default NavBar;