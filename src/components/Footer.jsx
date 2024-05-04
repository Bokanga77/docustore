import React from 'react';
import './Footer.css'
import logo from'../images/logo.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/Instagram.png';
import X from '../images/X.png';
import Linkedin from '../images/LinkedIn.png';
import Youtube from '../images/Youtube.png';

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
            <li><a href="#"><img src={Facebook} alt=""  /></a></li>
            <li><a href="#ba"><img src={Instagram} alt=""  /></a></li>
            <li><a href="#cc"><img src={X} alt="" srcset="" /></a></li>
            <li><a href="#vb"><img src={Linkedin} alt=""  /></a></li>
            <li><a href="#vb"><img src={Youtube} alt=""  /></a></li>
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