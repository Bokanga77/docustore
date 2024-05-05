import React from 'react';
import logo from '../images/logo.png'
import Login from './Login';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <nav className="navbar">
     
      <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo" />
      </div>

{/* création  boutton connexion et inscription */}

      <div className="navbar-right">
        
        <button className="btn-connexion"><Link to='./Login.jsx' className="btn">Connexion</Link></button>
        <button className="btn-inscription"><Link to='./SignupForm.jsx' className="btn">Inscription</Link></button>
      </div>


    </nav>
  );
}

export default NavBar;