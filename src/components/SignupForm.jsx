import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Nouveau state pour le mot de passe
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation de l'enregistrement de l'utilisateur (remplacer par votre propre logique)
    if (firstName && lastName && title && department && email && password) {
      // Enregistrement réussi
      console.log('Enregistrement réussi');
      setErrorMessage('');
    } else {
      // Enregistrement échoué
      console.log('Veuillez remplir tous les champs');
      setErrorMessage('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Inscription Professionnelle</h2>
        <input
          type="text"
          placeholder="Nom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Postnom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Département"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password" // Champ pour le mot de passe
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignupForm;
