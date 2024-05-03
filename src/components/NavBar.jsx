import React from 'react';
import logo from '../images/logo.png'

function NavBar() {
  return (
    <nav className="navbar">
     
      <div className="navbar-left">
      <img src={logo} alt="Logo" className="logo" />
      </div>

{/* création  boutton connexion et inscription */}

      <div className="navbar-right">
        <button className="btn-connexion"><a href='#' className="btn">Connexion</a></button>
        <button className="btn-inscription"><a href='#' className="btn">Inscription</a></button>
      </div>


    </nav>
  );
}

export default NavBar;