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
import NotFound from './Pages/NotFound';




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
  },
  {/* Route par défaut pour gérer les erreurs 404 */},
  {
    path: "*",
    element: <NotFound />
  }
]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={route} />

  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

