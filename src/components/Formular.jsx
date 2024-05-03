// Formular.js
import React from 'react';
import Logo from '../images/logo.png'
import './Formular.css'; // Importation du fichier de styles CSS

const Formular = () => {
  return (
    <div className="formular-container">
      <div className="logo-container">
        <img src={Logo} alt="Logo de votre entreprise" className="logo" />
      </div>
      <hr className="separator" />
      <h2>Créer un compte</h2>
      <form>
        <div className="form-group">
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="password" id="password" placeholder="Mot de passe" required />
        </div>
        <div className="form-group">
          <input type="text" id="prenom" placeholder="Prénom" required />
        </div>
        <div className="form-group">
          <input type="text" id="nom" placeholder="Nom" required />
        </div>
        <div className="form-group">
          <input type="text" id="departement" placeholder="Département" required />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Formular;
