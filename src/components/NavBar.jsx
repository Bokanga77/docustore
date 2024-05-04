import React from 'react';
import logo from '../images/logo.png'
import Login from './Login';
import SignupForm from './SignupForm';
import { NavLink } from 'react-router-dom';



function NavBar() {
  return (
    <nav className="navbar">
     
      <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo" />
      </div>

{/* création  boutton connexion et inscription */}

      <div className="navbar-right">
        
        <button className="btn-connexion"><NavLink to='./Login.jsx' className="btn">Connexion</NavLink></button>
        <button className="btn-inscription"><NavLink to='./SignupForm.jsx' className="btn">Inscription</NavLink></button>
      </div>


    </nav>
  );
}

export default NavBar;