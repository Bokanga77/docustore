import React from 'react';
import './Footer.css'
import logo from'../images/logo.png';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="logo" />
          <p>Adresse :</p>
          <p> 123 Rue du Pied de la Montagne, Ville, Pays</p>
          <p>Contact: </p>
          <p>+243813471799</p>
          <p>info@docustore.com</p>
          <div className="footer-right">
          <ul className="social-icons">
            <li><a href="#b"><i className="fab fa-facebook">fb</i></a></li>
            <li><a href="#ba"><i className="fab fa-twitter">bbb</i></a></li>
            <li><a href="#cc"><i className="fab fa-instagram">bbbb</i></a></li>
            <li><a href="#vb"><i className="fab fa-linkedin"></i></a></li>
          </ul>
        </div>
        </div>
        
      </div>
      <hr className="footer-line" />
      <p>© 2024 Docustore. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
