import React from 'react';

import pc from '../images/pc.png'
function LoadingPage() {
  return (
    <div className="loading-page">
      <div className="text-block">
        <h1 className="text">Bienvenue sur Votre plateforme d'archivage et consultation de documents numériques</h1>
        
      </div>
      <div className="image-block">
        <div className="image-container">
          
          <img src={pc} alt="Loading" className="image" />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;