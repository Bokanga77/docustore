import React from 'react';
import NavBar from './NavBar';
import LoadingPage from './LoadingPage.jsx';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <LoadingPage/>
      <Footer/>
    </div>
  );
};

export default Home;
