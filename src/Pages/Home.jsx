import React from 'react';
import NavBar from '../components/NavBar.jsx'
import LoadingPage from '../components/LoadingPage.jsx';
import Footer from '../components/Footer.jsx';

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
