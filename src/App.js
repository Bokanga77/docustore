
// import './App.css';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Home from '../src/Pages/Home.jsx';
// // import Login from './components/Login';
// import SignupForm from './components/SignupForm';
// // import Formular from './components/Formular';

// function App() {
//   return (
    
//     <div className="App">

//         {/* <Router>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/login" component={Login} />
            
//           </Switch>
//         </Router>
        
//      */}
//      {/* <Home/> */}
//      {/* <Formular/> */}
//      <SignupForm/>
//     </div>
//   );
// }

// export default App;

// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './components/Login';
import SignupForm from './components/SignupForm';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signupForm" element={<SignupForm />} />
    </Routes>
  </Router>
);

export default App;

