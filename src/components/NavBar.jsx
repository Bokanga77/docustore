import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import logo from '../images/logo.png'

function NavBar() {
  return (
    <nav className="navbar">
     
      <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo" />
      </div>

{/* création  boutton connexion et inscription */}

      <div className="navbar-right">
        <button className="btn-connexion"><Link to='./Login.jsx'>Connexion</Link></button>
        <button className="btn-inscription"><Link to="/">Inscription</Link></button>
      </div>


    </nav>
  );
}

export default NavBar;