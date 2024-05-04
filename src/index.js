import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './App.css'
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './components/Login';
import SignupForm from './components/SignupForm';




const route =createBrowserRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/SignupForm",
    element: <SignupForm />
  }
]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App/>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

