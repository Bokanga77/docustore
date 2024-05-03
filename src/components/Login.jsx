// import React, { useState } from 'react';
// import './Login.css'; // Importation du fichier de styles CSS


// const Login = () => {
//   // Déclaration des états pour les champs du formulaire
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Fonction pour gérer la soumission du formulaire
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Ici, vous pouvez ajouter la logique de connexion
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
    
//     <div className="login-container">
//       <h2>Connectez-vous</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Mot de passe</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import './Login.css';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Ajoutez ici la logique pour traiter la soumission du formulaire
//     console.log('Username:', username);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Connexion</h2>
//         <input
//           type="text"
//           placeholder="Nom d'utilisateur"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Mot de passe"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter la soumission du formulaire
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
